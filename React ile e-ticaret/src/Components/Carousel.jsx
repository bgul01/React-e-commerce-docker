import React, { useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAsync2 } from '../dataCaro';

const Carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,


    centerPadding: '150'
  };
  const dispatch = useDispatch()
  const { Caroitems } = useSelector((state) => state.dataCaro);




  useEffect(() => {

    dispatch(fetchDataAsync2())

  }, [dispatch])






  return (
    <div className='container '>
      <Slider {...settings}>
        {Caroitems.map((pic, index) => (
          <div className='columns ' key={index}>
            <div className='column is-vcentered '>
              <img src={pic.img} alt={`Slide ${index + 1}`} className="image max-height-300 " />
            </div>
          </div>
        ))}
      </Slider>
    </div>

  )
}

export default Carousel