import { commerce } from './lib/commerce'
import { Products, Navbar } from "./components"
import { useState, useEffect } from 'react'

const App = () => {
 const [products, setProducts] = useState([])
 const fetchProducts = async () => {
  const { data } = await commerce.products.list();

  setProducts(data)
 }
 useEffect(() => {
  fetchProducts()
 }, [])
 // console.log(products);
 return (
  <div>
   <Navbar />
   <Products products={products} />
  </div>
 )
}

export default App
