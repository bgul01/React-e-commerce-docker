import React, { useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { } from '../assets/Homecard.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAsync } from '../dataSlice';




const HomeCard = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,


  };
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.data)


  useEffect(() => {

    dispatch(fetchDataAsync())

  }, [dispatch])

  return (

    <Slider {...settings}>

      {items.map((product, index) => (

        <div key={index} className="product-card ">
          <img src={product.img} alt={product.name} />
          <div className="product-info">

            <p className="product-title">{product.name}</p>
            <p className="product-title">{product.price}</p>
          </div>
        </div>


      ))}







    </Slider>

  );

}

export default HomeCard