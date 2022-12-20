import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from "react-router-dom";
import '../../assets/css/style.min.css'

import MainNavegation from '../Views/MainNavegation';

import Zapatillas from '../Views/ViewStore/Zapatillas';
import Relojes from '../Views/ViewStore/Relojes';
import Auriculares from '../Views/ViewStore/Auriculares';

function Layout({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) {
    return (
        <Router>
            <Routes>
                <Route path="Adidas-Shop" element={<MainNavegation />} />

                <Route path="Adidas-Shop/Zapatillas" element={
                    <Zapatillas allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        total={total}
                        setTotal={setTotal}
                        countProducts={countProducts}
                        setCountProducts={setCountProducts}
                    />
                } />

                <Route path="Adidas-Shop/Relojes" element={
                    <Relojes allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        total={total}
                        setTotal={setTotal}
                        countProducts={countProducts}
                        setCountProducts={setCountProducts}
                    />
                } />

                <Route path="Adidas-Shop/Auriculares" element={
                    <Auriculares allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        total={total}
                        setTotal={setTotal}
                        countProducts={countProducts}
                        setCountProducts={setCountProducts}
                    />
                } />
            </Routes>
        </Router>
    )
}

export default Layout