import { Grid } from '@material-ui/core'
import Product from './Product/Product'

const products = [
 {
  id: 1, name: 'Shoes', image: 'https://s2.r29static.com/bin/entry/ebd/0,675,2000,1050/x,80/1929471/image.jpg',
  price: '$5', description: 'Running Shoes'
 },
 { id: 2, name: 'Macbook', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000', price: '$15', description: 'Apple' },
 { id: 3, name: 'Iphone', image: 'https://media.wired.com/photos/5e9f56f143e5800008514457/1:1/w_1277,h_1277,c_limit/Gear-Feature-Apple_new-iphone-se-white_04152020.jpg', price: '$25', description: 'Apple' }
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
