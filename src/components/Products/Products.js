import { Grid } from '@material-ui/core'
import Product from './Product/Product'

const products = [
 { id: 1, name: 'Shoes', price: '$5', description: 'running', },
 { id: 2, name: 'Macbook', price: '$15', description: 'Apple', },
 { id: 3, name: 'Iphone', price: '$25', description: 'Apple', }
]
const Products = () => {
 return (
  <main>
   <Grid container justify='center' spacing={4}>
    {products.map(product => (
     <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
      <Product product={product} />
     </Grid>
    ))}
   </Grid>
  </main>
 )
}

export default Products
