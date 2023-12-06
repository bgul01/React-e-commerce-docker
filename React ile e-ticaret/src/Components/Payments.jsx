import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { CardItem, CargoPrice } = useSelector((state) => state.CardItem);
  const [totalAmount, setTotalAmount] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    address: '',
  });

  const calculateTotalAmount = () => {
    const totalWithoutCargo = CardItem.reduce((total, item) => {
      return total + parseFloat(item.price) * item.quantity;
    }, 0);
    const total = totalWithoutCargo >= 100 ? totalWithoutCargo : totalWithoutCargo + CargoPrice;

    if (total !== totalAmount) {
      setTotalAmount(total);
    }

    return total;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Kart bilgilerini geçerli bir token'a dönüştür
    const { token, error } = await stripe.createToken(cardElement, {
      name: `${formData.name} ${formData.surname}`,
    });

    if (error) {
      console.error(error);
    } else {
      console.log('Token:', token);

      // Token'ı sunucuya gönder ve ödemeyi sunucu tarafında işle
      // Bu kısmı sunucu tarafında ele almalısınız
    }
  };

  return (
    <div className="section">
      <div className="container ">
        <h2 className="title">Ödeme</h2>
        <div className="columns">
          <div className="column is-two-fifths">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Ad</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Soyad</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Adres</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Kart Bilgileri</label>
                <div className="control">
                  <CardElement />
                </div>
              </div>
              <div className="field">
                <button className="button is-primary" type="submit" disabled={!stripe}>
                  Ödemeyi Tamamla
                </button>
              </div>
            </form>
          </div>
          <div className="column is-half">
            <div className="box">
              <h3 className="subtitle is-5">Sepet Özeti</h3>
              {CardItem.map((item, index) => (
                <div key={index} className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={item.img} alt={item.name} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p>
                      {item.name} - {item.quantity} adet - Toplam: {(item.price * item.quantity).toFixed(2)} TL
                    </p>
                  </div>
                </div>
              ))}
              <hr />
              <p className="subtitle has-text-weight-bold is-6">Toplam Tutar: {calculateTotalAmount().toFixed(2)} TL</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Payment;
