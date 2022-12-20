import React from 'react'
import { ProductList } from '../../Share/ProductList'
import '../../../assets/css/modules/category/CategoriaBase.min.css'
import SideBar from '../../Share/SideBar'
import Footer from '../../Layout/Footer'

function Auriculares({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) {
    return (

        <div className="categoria__container">
            <SideBar />

            <div className="container__item__container">

                <div className="container__categoria__title">
                    <h1 className='categoria__title'>AURICULARES</h1>
                    <p className='categoria__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eos enim quidem ullam, perspiciatis nulla accusamus ab veritatis dolorum ducimus voluptatibus inventore exercitationem. Omnis.</p>
                </div>

                <ProductList
                    allProducts={allProducts}
                    setAllProducts={setAllProducts}
                    total={total}
                    setTotal={setTotal}
                    countProducts={countProducts}
                    setCountProducts={setCountProducts}
                    category='headphone' />

                <Footer/>
            </div>
        </div>

    )
}

export default Auriculares