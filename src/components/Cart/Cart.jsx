import { Container, Typography, Button, Grid } from '@material-ui/core';
import CardItem from './CardItem/CardItem';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const Cart = ({
  cart,
  handleUpdateQty,
  handleEmptyCart,
  handleRemoveFromCart,
}) => {
  const classes = useStyles();
  const EmptyCart = () => (
    <Typography variant='subtitle1'>
      You have no items,{' '}
      <Link to='/' classes={classes.link}>
        start adding
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CardItem
              item={item}
              handleUpdateQty={handleUpdateQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant='h4'>
          Subtotal : {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size='large'
            type='button'
            variant='contained'
            color='secondary'
            onClick={handleEmptyCart}>
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size='large'
            type='button'
            variant='contained'
            color='primary'>
            Check out
          </Button>
        </div>
      </div>
    </>
  );
  if (!cart.line_items) return 'Loading';
  return (
    <Container>
      <div className={classes.toolbar}>
        <Typography variant='h3' className={classes.title} gutterBottom>
          Your shopping Cart
        </Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </div>
    </Container>
  );
};

export default Cart;
