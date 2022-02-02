import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ checkoutToken }) => (
        <div>
            <Typography variant="h6" gutterBottom>Resumen del pedido</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{padding: '10px 0'}} key={product.name}>
                        <ListItemText primary={product.name} secondary={`Cantidad:  ${product.quantity}`}></ListItemText>
                        <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{padding: '10px 0'}}>
                    <ListItemText primary="Total"></ListItemText>
                    <Typography variant="subtitle1" style={{ FontWeight: 700 }}>
                        {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Typography>
                </ListItem>
            </List>
        </div>
    );
export default Review
