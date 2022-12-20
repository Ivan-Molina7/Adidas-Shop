import React, { useState } from 'react'
import { Header } from "../src/components/Layout/Header";
import Layout from './components/Layout/Layout';
import '../src/assets/css/style.min.css'


export function App() {

  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)

  return (
    <>
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />



      <Layout
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts} />
    </>
  )
}
