import React, { useState } from 'react'
import { data } from '../../data'

export function ProductList({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal, category }) {
    const onAddProduct = (product) => {

        if (allProducts.find(item => item.id === product.id)) {

            const products = allProducts.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)

            setTotal(total + product.precio * product.quantity)
            setCountProducts(countProducts + product.quantity)
            return setAllProducts([...products])

        }

        setTotal(total + product.precio * product.quantity)
        setCountProducts(countProducts + product.quantity)
        setAllProducts([...allProducts, product])
    }
    const filtro = data.filter(item => item.categoria === category)


    const [clicked, setClicked] = useState(false)

    const [productoID, setProductoID] = useState("");

    const handleClick = (p) => {
        setClicked(!clicked)
        setProductoID(p)
    }

    // ${product.id === productoID ? 'active bg-black' : ''}
    return (
        <div className="container-items">
            {
                filtro.map(product => (
                    <>

                        <div className={`item__container`} key={product.id} onClick={(e) => handleClick(product.id)}>

                            <figure className='item__thumbnail'>
                                <img className='item__img' src={product.urlImage} alt={product.nameProduct} />
                            </figure>
                            <div className="item__information">
                                <p className='item__price'>${product.precio}</p>
                                <h2 className='item__name'>{product.nameProduct}</h2>
                                <h4 className='item__send' >Envio Gratis</h4>
                            </div>
                        </div>

                        {clicked ? product.id === productoID ? <div className={`container__popUp ${product.id === productoID ? 'active' : ''}`}>
                            <div className="itemPopUp">
                                <svg className='close bi bi-x' onClick={(e) => handleClick(product.id)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16">

                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>

                                <figure className='popUp__thumbnail'>
                                    <img className='popUp__img' src={product.urlImagePreview} alt={product.nameProduct} />
                                </figure>
                                <div className="popUp__information">
                                    <h2 className='popUp__title'>{product.nameProduct}</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi accusantium nulla labore corrupti distinctio reprehenderit iure deserunt eum libero repellendus vero deleniti nesciunt illum praesentium, et ut? Qui nisi aperiam odio dolor? Natus dolorum velit fugiat quia at doloribus voluptas.</p>

                                    <div className="separator-md"></div>
                                   
                                    {<p className='item__price'>$ {product.precio} <span>30% OFF</span></p>}
                                    <div className="button__container">

                                        <button className="popUp__button popUp__button--fav">
                                            <span className="popUp__button__text popUp__button__tex--fav" onClick={() => onAddProduct(product)}>🤍</span>
                                        </button>
                                        <button className="popUp__button">
                                            <span className="popUp__button__text" onClick={() => onAddProduct(product)}>AGREGAR AL CARRITO</span>
                                        </button>
                                    </div>
                                </div>
                            </div></div> : '' : ''}
                    </>
                ))
            }
        </div>
    )
}

