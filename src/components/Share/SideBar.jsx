import React from 'react'
import isotipo from '../../assets/img/logotipo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar__container">
      {/* <div className="sidebar__thumbnail">
        <img src={isotipo} alt="" className="sidebar__img" />
      </div> */}

      <div className="sidebar__products">
        <h1>PRODUCTOS</h1>
        <ul className="sidebar__list">
          <Link to="/Adidas-Shop/" className="sidebar__link">Inicio</Link>
          <Link to="/Adidas-Shop/Auriculares" className="sidebar__link">Auriculares</Link>
          <Link to="/Adidas-Shop/Relojes" className="sidebar__link">Relojes</Link>
          <Link to="/Adidas-Shop/Zapatillas" className="sidebar__link">Zapatillas</Link>
        </ul>
      </div>

      <div className="sidebar__text">
        <p>quid rerum provident magni. Quaerat, voluptates provident earum dignissimos quisquam adipisci nam nesciunt alias nisi doloremque delectus eligendi, repudiandae, aliquam aliquid iure dolorum doloribus nulla ipsam natus. Reiciendis, doloribus quasi! Illo deleniti quia eius suscipit dolorum error pariatur quae commodi sit.</p>
      </div>

      <div className="sidebar__contact">
        <div className="contact__information">
          <h1>Ubicacion: Av.Italia 4332</h1>
          <h1>Telefono: 096 534 345</h1>
          <h1>Redes:</h1>
          <div className="sociales__container">
            <li className="social__item__container">
              <a href="https://www.facebook.com/adidas/" className="social__item" target="_blank">
                <FontAwesomeIcon icon={faFacebook} className="social__item__icon" />
              </a>
            </li>
            <li className="social__item__container">
              <a href="https://twitter.com/adidasoriginals" className="social__item" target="_blank">
                <FontAwesomeIcon icon={faTwitter} className="social__item__icon" />
              </a>
            </li>
            <li className="social__item__container">
              <a href="https://www.instagram.com/_lacancha/?hl=es" className="social__item" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="social__item__icon" />
              </a>
            </li>
          </div>
        </div>

        <div className="sidebar__copyright">
          <p>Derechos reservados Adidas 2022</p>
        </div>
      </div>


    </div>
  )
}

export default SideBar