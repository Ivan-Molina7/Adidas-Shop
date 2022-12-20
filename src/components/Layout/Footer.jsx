import React from 'react'

import '../../assets/css/modules/footer.min.css'
import logotipo from '../../assets/img/Logotipo.png'


function Footer() {
  return (
    <div className="footer__container">
        <div className="footer__thumbnail">
            <img  src={logotipo} alt="" className="footer__img" />
        </div>

        <div className="footer__laws">
            <h3>Centro de Ayuda</h3>
            <h3>Terminos de servicio</h3>
            <h3>Politica de privacidad</h3>
        </div>

        <figure className="footer__ubication">
        {/* <iframe className="ubicacion__img" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409.01911889621476!2d-56.17824047924336!3d-34.90261096795985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81cb5e05b04b%3A0xf8be9f88302ed5d3!2sStadium!5e0!3m2!1ses!2suy!4v1671393816519!5m2!1ses!2suy" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </figure>
    </div>
  )
}

export default Footer