import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart, products }) => {
    const classes = useStyles();
    console.log(item);
    console.log(products);


    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}></CardMedia>
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_width_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => item.quantity===1 ? null : onUpdateCartQty(item, item.quantity - 1)}>-</Button>
                    <Typography variant="h5">{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Eliminar</Button>
            </CardActions>
     </Card>
    )
}

export default CartItem
