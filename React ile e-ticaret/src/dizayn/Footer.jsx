import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <h2 className="title is-4">Hakkımızda</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ligula eget libero scelerisque, a auctor risus fermentum.</p>
          </div>
          <div className="column is-3">
            <h2 className="title is-4">Kategoriler</h2>
            <ul>
              <li><a href="#">Elektronik</a></li>
              <li><a href="#">Giyim</a></li>
              <li><a href="#">Ev ve Yaşam</a></li>
              {/* Diğer kategoriler buraya eklenebilir */}
            </ul>
          </div>
          <div className="column is-3">
            <h2 className="title is-4">İletişim</h2>
            <p>Adres: 1234 Sokak, Şehir, Ülke</p>
            <p>Email: info@example.com</p>
            <p>Telefon: +90 123 456 7890</p>
          </div>
          <div className="column is-3">
            <h2 className="title is-4">Bizi Takip Edin</h2>
            <div className="social-icons">
              <a href="#" className="icon"><FaFacebook /></a>
              <a href="#" className="icon"><FaXTwitter /></a>
              <a href="#" className="icon"><FaInstagram /></a>
              <a href="#" className="icon"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="content has-text-centered">
        <p>
          <strong>E-Ticaret</strong> © 2023. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  )
}

export default Footer