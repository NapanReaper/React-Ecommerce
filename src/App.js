import { commerce } from './lib/commerce'
import { Products, Navbar, Cart, Checkout } from "./components"
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
  const { cart } = await commerce.cart.add(id, quantity);
  setCart(cart)
 }

 const handleUpdateQty = async (productId, quantity) => {
  const { cart } = await commerce.cart.update(productId, { quantity })
  setCart(cart)
 }

 const handleRemoveFromCart = async (productId) => {
  const { cart } = await commerce.cart.remove(productId)
  setCart(cart)
 }

 const handleEmptyCart = async () => {
  const { cart } = await commerce.cart.empty();
  setCart(cart)
 }

 useEffect(() => {
  fetchProducts()
  fetchCart()
 }, [])
 console.log(cart);

 return (
  <Router>
   <div>
    <Navbar total_items={cart.total_items} />
    <Switch>
     <Route exact path='/'>
      <Products
       products={products}
       handleAddToCart={handleAddToCart}
      />
     </Route>
     <Route exact path='/cart'>
      <Cart
       cart={cart}
       handleEmptyCart={handleEmptyCart}
       handleRemoveFromCart={handleRemoveFromCart}
       handleUpdateQty={handleUpdateQty} />
     </Route>
     <Route exact path='/checkout'>
      <Checkout />
     </Route>
    </Switch>
   </div>
  </Router>
 )
}

export default App
