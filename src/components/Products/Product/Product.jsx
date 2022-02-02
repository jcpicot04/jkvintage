import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Popover, Divider } from '@material-ui/core';
import { AddShoppingCart, HelpOutline } from '@material-ui/icons';
import useStyles from './styles';
import Modal from './Modal';

const Product = ( { product, onAddToCart, myRef } ) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [blurBackground, setBlurBackground] = useState(false);
    const [load, setLoad] = useState(false);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const blurBack = document.getElementsByClassName('MuiCard-root');

    if (blurBackground) {
        for (var i=0; i<blurBack.length; i++) {
            blurBack[i].style.filter = "blur(3px)";
        }
      }
      if(!blurBackground && blurBack !== null) {
        for (var p=0; p<blurBack.length; p++) {
            blurBack[p].style.filter = "blur(0)";
        }
      }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const modalProduct = () => {
        setShowModal(prev => !prev);
        console.log(product);

    };

    const blurBg = () => {
        setBlurBackground(prev => !prev);
    }

    const setHidden = () => {
        document.body.style.overflow = "hidden";
        const blockBack = document.getElementsByClassName('MuiCard-root');
            for (var i=0; i<blockBack.length; i++) {
                blockBack[i].style.pointerEvents = "none";
                blockBack[i].style.display='none';
            }
      };
    
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div>
        <Card className={classes.root} id="productParent">
            <CardMedia className={classes.media} image={product.media.source} title={product.name} onClick={() =>{modalProduct(); setHidden(); blurBg();}}/>
            <CardContent>
                <div className={classes.cardContent}>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="h5">
                    {product.price.formatted_with_symbol}
                </Typography>
                </div>
                <Divider></Divider>
                <Typography variant="subtitle2">
                {product.variant_groups.length ? product.variant_groups[0].name : null} {product.variant_groups.length ? product.variant_groups[0].options[0].name : null}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <div>
                <IconButton aria-describedby={id} onClick={handleClick}>
            <HelpOutline className={classes.helpIcon}/>
            </IconButton>
            <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography className={classes.popover} sx={{ p: 2 }}>Haz click en la imagen para saber más detalles del producto.</Typography>
      </Popover>
                </div>
                <IconButton disabled={load} aria-label="Añadir al carrito" onClick={() => {setLoad(true); onAddToCart(product.id, 1).then(() => setLoad(false))}}>
                    <AddShoppingCart className={classes.addCart}/>
                </IconButton>
            </CardActions>
        </Card>
        <Modal onClick={setHidden} showModal={showModal} setShowModal={setShowModal} product={product} onAddToCart={onAddToCart} setBlurBackground={setBlurBackground} myRef={myRef}></Modal>
        </div>
    )
}

export default Product;
