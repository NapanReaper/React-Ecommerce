import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';

const Cart = ({ cart }) => {
  const classes = useStyles();
  const EmptyCart = () => (
    <Typography variant='subtitle1'>You have no items, start adding</Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cartDetails}>
        <Typography variant='h4'>
          Subtotal : {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size='large'
            type='button'
            variant='contained'
            color='secondary'>
            Empty Cart
          </Button>
        </div>
        <div>
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
        <Typography variant='h3' className={classes.title}>
          Your shopping Cart
        </Typography>
        {cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </div>
    </Container>
  );
};

export default Cart;
