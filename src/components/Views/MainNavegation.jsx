import React from 'react'
import Footer from '../Layout/Footer'
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from "react-router-dom";
import Footer2 from '../Share/Footer2';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Headphone from '../../assets/img/Icons/Headphone.png'
import Shoe from '../../assets/img/Icons/Shoe.png'
import Watch from '../../assets/img/Icons/Watch.png'
import AdidasBanner from '../../assets/img/AdidasBanner.jpg'
import AdidasBanner2 from '../../assets/img/AdidasBanner2.jpg'
import AdidasBanner3 from '../../assets/img/AdidasBanner3.jpg'

function MainNavegation() {
    return (
        <div className="main__container">
            <div className="separator-l"></div>
            <div className="main__slider">
                <img src={AdidasBanner} alt="" className="slider__img" />
            </div>
            <div className="separator-l"></div>
            <div className="main__categories">
                <h1 className="categories__title title">CATEGORIAS</h1>
                <div className="categories__container">

                    <Link to="/Adidas-Shop/Relojes " className="container__main__category">
                        <div div className="main__category" >
                            <figure className="category__thumbnail">
                                <img src={Watch} alt="" className="category__img" />
                            </figure>
                        </div>
                        <h1 className='subTitle'>RELOJES</h1>
                    </Link>

                               
                    <Link to="/Adidas-Shop/Auriculares" className="container__main__category">
                        <div div className="main__category" >
                            <figure className="category__thumbnail">
                                <img src={Headphone} alt="" className="category__img" />
                            </figure>
                        </div>
                        <h1 className='subTitle'>AURICULARES</h1>
                    </Link>

                    <Link to="/Adidas-Shop/Zapatillas" className="container__main__category">
                        <div div className="main__category" >
                            <figure className="category__thumbnail">
                                <img src={Shoe} alt="" className="category__img" />
                            </figure>
                        </div>
                        <h1 className='subTitle'>ZAPATILLAS</h1>
                    </Link>

                    <Link to="/Adidas-Shop/Relojes" className="container__main__category">
                        <div div className="main__category" >
                            <figure className="category__thumbnail">
                                <img src={Watch} alt="" className="category__img" />
                            </figure>
                        </div>
                        <h1 className='subTitle'>RELOJES</h1>
                    </Link>

                               
                    <Link to="/Adidas-Shop/Auriculares" className="container__main__category">
                        <div div className="main__category" >
                            <figure className="category__thumbnail">
                                <img src={Headphone} alt="" className="category__img" />
                            </figure>
                        </div>
                        <h1 className='subTitle'>AURICULARES</h1>
                    </Link>

                    <Link to="/Adidas-Shop/Zapatillas" className="container__main__category">
                        <div div className="main__category" >
                            <figure className="category__thumbnail">
                                <img src={Shoe} alt="" className="category__img" />
                            </figure>
                        </div>
                        <h1 className='subTitle'>ZAPATILLAS</h1>
                    </Link>

                </div>
            </div>

            <div className="separator-l"></div>

            <div className="main__about">
                <h1 className="about__title title">SOBRE NOSOTROS</h1>
                <div className="about__container">
                    <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, neque! Porro a vel dicta doloribus, ex maxime voluptatum ad voluptate! Soluta corporis ipsam qui veniam, quas, harum labore aspernatur repellat placeat inventore dolorum! Nihil consequatur iure nesciunt blanditiis necessitatibus possimus, laborum rerum repellendus commodi exercitationem, molestias quaerat mollitia consectetur hic delectus neque suscipit eius enim ducimus perspiciatis, quia quod dolore voluptatem voluptatum? Quo asperiores corporis veritatis molestiae sequi voluptate, qui commodi harum in officia inventore earum esse et dolor quam tempora nostrum quis enim nemo similique? Quasi quis sit mollitia voluptates debitis, molestiae delectus tempore consequatur consequuntur cupiditate officia, culpa placeat itaque accusamus, id nihil ab magnam labore explicabo recusandae ipsa. Repudiandae nostrum maxime eius, reiciendis vitae numquam ex nobis expedita dicta quos. Praesentium, explicabo. Omnis sit distinctio laudantium eveniet doloremque! Quasi animi id omnis voluptatem ea reprehenderit libero dignissimos dolorem. Quia, perspiciatis? Similique, praesentium a repellat mollitia, debitis veritatis illum fugit reiciendis aliquam velit sapiente quod tenetur laboriosam illo delectus ipsum deleniti sint perferendis officiis laudantium? Ducimus atque dolores illum corrupti molestias corporis deleniti, et quae alias culpa fugiat iusto. Laborum eos maxime ipsa tempora pariatur corrupti iste soluta ex iusto consequuntur fugit at reprehenderit, dolores, quia, quis laboriosam inventore aperiam repudiandae nulla fuga animi eligendi. Qui, molestiae sint deleniti totam dignissimos quas nostrum pariatur exercitationem expedita maxime quo esse autem quibusdam minus quis praesentium? Tempore laudantium aut doloribus.</p>
                </div>
            </div>
            <div className="separator-sm"></div>

            <div className="scrollUP__container">
                <a href="#Header" className="scrollUP"> <FontAwesomeIcon icon={faChevronUp} /></a>
            </div>

            <div className="separator-l"></div>
            <Footer2 />
            <div className="footerSub">
                <p className="footerSub__text">Derechos reservados Adidas 2022</p>
            </div>
        </div>
    )
}

export default MainNavegation
