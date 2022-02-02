import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, products }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">El carrito está vacío!
            <Link to="/productos" className={classes.link}> Empieza introduciendo algo!</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
        <Grid container spacing={2} className={classes.products}>
            {cart.line_items.map((item) => (
                <Grid item xs={8} sm={3} key={item.id}>
                    <CartItem item={item}  onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} products={products}></CartItem>
                    </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4">Subtotal: { cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Vaciar carrito</Button>
                <Button  component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Continuar</Button>
            </div>
        </div>
        </>
    );

    if(!cart.line_items) return 'Cargando...';

    return (
        <Container>
            <div className={classes.toolbar}></div>
            
            <Typography className={classes.title} variant="h3">Carrito de la compra</Typography>
            { !cart.line_items.length ? <EmptyCart></EmptyCart> : <FilledCart></FilledCart>}
        </Container>
    )
}

export default Cart
