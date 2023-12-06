import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../DataCard';

import CardDes from '../dizayn/CardDes';

const Card = () => {
  const dispatch = useDispatch();
  const { CardItem, CargoPrice } = useSelector((state) => state.CardItem)
  const [Cargo, setCargo] = useState(true);

  CargoPrice
  const handleIncrement = (index) => {
    dispatch(incrementQuantity(index));
  };

  const handleDecrement = (index) => {
    dispatch(decrementQuantity(index));
  };

  const calculateTotalPrice = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  const calculateTotalAmount = () => {
    const totalWithoutCargo = CardItem.reduce((total, item) => {
      return total + parseFloat(calculateTotalPrice(item));
    }, 0);



    if (totalWithoutCargo >= 100 && Cargo) {
      setCargo(false);
    } else if (totalWithoutCargo < 100 && !Cargo) {
      setCargo(true);
    }

    return totalWithoutCargo >= 100 ? totalWithoutCargo.toFixed(2) : (totalWithoutCargo + CargoPrice).toFixed(2);
  };



  return (
    <CardDes Cargo={Cargo} CargoPrice={CargoPrice} CardItem={CardItem} handleIncrement={handleIncrement} handleDecrement={handleDecrement} calculateTotalPrice={calculateTotalPrice} calculateTotalAmount={calculateTotalAmount} />
  );
};

export default Card;
