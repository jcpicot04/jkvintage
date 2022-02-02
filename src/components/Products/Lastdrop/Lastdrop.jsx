import React, { useState, useEffect, useRef } from "react";
import { Grid, Typography } from "@material-ui/core";
import Product from '../Product/Product';
import useStyles from './styles';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {HomeOutlined} from '@material-ui/icons';
import flame from '../../../assets/flame.svg';

const Lastdrop = ({ products, onAddToCart, valueSearch }) => {
    const classes = useStyles();
    const [filteredSearch, setFilteredSearch] = useState([]);
    useEffect(() => {
        setFilteredSearch(
            products.filter((product) => product.name.toLowerCase().includes(valueSearch.toLowerCase())
        )
        );
    }, [valueSearch,products]);

    const myRef = useRef(null)

   const bottomScroll = () => {
    window.scrollBy(0, 300);
   }
   const topScroll = () => {
    window.scrollTo(0, 0);
   }
   window.scrollTo(0, 0);
    return (
    <div>
        <div className="logoImage">
        </div>
    <main className={classes.content}>
        <div className={classes.toolbar}  />
        { valueSearch ? 
        <Grid container justifyContent="center" spacing={6} className={classes.gridproducts}>
        {filteredSearch.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart}/>
            </Grid>
        ))}
        </Grid> :
        <div>
            <h1 className={classes.lastDrop}>ÚLTIMO DROP</h1>
        <Grid container justifyContent="center" spacing={6} className={classes.gridproducts}>
        {products.slice(0,20).map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart} myRef={myRef}/>
            </Grid>
        ))}
        </Grid>
        </div>
}
<Typography component={Link} to="/" className={classes.title} color="inherit">
                    <HomeOutlined></HomeOutlined>
                </Typography>
    </main>
    
    <div> 
  
  <button onClick={bottomScroll} style={{position: 'fixed',
  top: '90%',
  right: '2%',
  width: '32px',
  height: '32px',
  backgroundColor: '#C4DEF4',
  zIndex: '1000'}}><MdArrowDropDown/></button>
  </div>
  <button onClick={topScroll} style={{position: 'fixed',
  top: '85%',
  right: '2%',
  width: '32px',
  height: '32px',
  backgroundColor: '#C4DEF4',
  zIndex: '1000'}}><MdArrowDropUp/></button>  
    </div>
    )
}; 

export default Lastdrop
