import React from 'react'
import { Link } from 'react-router-dom';
const CardDes = ({  Cargo, CargoPrice, CardItem, handleIncrement, handleDecrement, calculateTotalPrice, calculateTotalAmount }) => {
  return (
    <div className="section">
    <div className="container">
  
      <div className="notification is-warning">
          <p className="subtitle is-6">100 TL üzeri ücretsiz kargo</p>
      </div>

      <div className="columns">
        <div className="column is-three-quarters">
          <h2 className="title">Ürün Listesi</h2>
          {CardItem.length === 0 ? (
            <p>Sepetiniz boş.</p>
          ) : (
            <div>
              {CardItem.map((item, index) => (
                <div key={index} className="card">
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img src={item.img} alt={item.name} />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">{item.name}</p>
                        <p className="subtitle is-6">Fiyat: {calculateTotalPrice(item)} TL</p>
                        <div className="quantity-control">
                          <button
                            className="button is-primary"
                            onClick={() => handleDecrement(index)}
                          >
                            -
                          </button>
                          <label className="quantity" type="text">
                            {item.quantity}
                          </label>
                          <button
                            className="button is-primary"
                            onClick={() => handleIncrement(index)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="column">
          <div className="total-box">
            <p> Kargo tutarı: {CardItem.length > 0 && Cargo ? CargoPrice.toFixed(2) : '0.00'} TL </p>
     
            <p>
              Toplam Tutar:{" "}
              {CardItem.length > 0 ? calculateTotalAmount() : "0.00"}
            </p>
            
            <Link className='button is-success' to="/Payment"> Satın Al </Link> 
             
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardDes