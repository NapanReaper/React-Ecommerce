import { commerce } from './lib/commerce'
import { Products, Navbar } from "./components"
import { useState, useEffect } from 'react'

const App = () => {
 const [products, setProducts] = useState([])
 const [cart, setCart] = useState({})

 const fetchProducts = async () => {
  const { data } = await commerce.products.list();

  setProducts(data)
 }

 const fetchCart = async () => {
  setCart(await commerce.cart.retrieve())
 }
 const handleAddToCart = async (id, quantity) => {
  const item = await commerce.cart.add(id, quantity);
  setCart(item.cart)
 }
 useEffect(() => {
  fetchProducts()
  fetchCart()
 }, [])
 console.log(cart);

 return (
  <div>
   <Navbar total_items={cart.total_items} />
   <Products products={products} handleAddToCart={handleAddToCart} />
  </div>
 )
}

export default App
