const Product = ({ product }) => {
 return (
  <div>
   <h1>{product.name}</h1>
   <p>{product.description}</p>
  </div>
 )
}

export default Product
