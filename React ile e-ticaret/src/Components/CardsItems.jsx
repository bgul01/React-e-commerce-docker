import React, { useEffect } from 'react'
import '../assets/urun.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAsync } from '../dataSlice';
import { takeCard } from '../DataCard'


const CardsItems = () => {

  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((state) => state.data)



  useEffect(() => {

    dispatch(fetchDataAsync())

  }, [dispatch])



  if (loading) {
    return (

      <div className="hero is-fullheight is-white">
        <div className="hero-body ">
          <div className="container has-text-centered">
            <h1 className="title">
              Sayfa Yükleniyor
            </h1>
            <h2 className="subtitle">
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
              Yükleniyor...
            </h2>
          </div>
        </div>
      </div>
    )
  }

  if (error) {

    return <p>{error}</p>
  }



  return (
    <section className="section ">
      <div className="container">
        <h2 className="title">Ürün Listesi</h2>
        <div className="columns   ">
          {items.map((product, index) => (
            <div key={index} className="column  is-3 ">
              <div className="box  ">
                <img src={product.img} alt={product.name} />
                <p className="title is-4">{product.name}</p>
                <p className="subtitle is-6">Fiyat: ${product.price}</p>
                <button onClick={() => dispatch(takeCard(product))} className="button is-primary">Sepete Ekle</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardsItems