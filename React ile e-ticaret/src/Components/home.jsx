import Carousel from './Carousel'
import React from 'react'
import HomeCard from './HomeCard'

const home = () => {
  return (
    <div className='' >
      <Carousel />
      <br />
      <h2 className="product-title">Popüler Ürünler</h2>    <br />
      <HomeCard />

    </div>
  )
}

export default home