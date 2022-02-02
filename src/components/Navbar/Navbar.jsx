import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, Input} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/jklogo2.png';
import useStyles from './styles';
import Sidebar from './Sidebar/Sidebar';

const Navbar = ({ totalItems, setvalueSearch}) => {
    const classes = useStyles();
    const location = useLocation();
    const [menuActive, setMenuActive] = useState(false);

    const showMenu = () =>{
        setMenuActive(true);
      }   
      
    const closeMenu = () =>{
        setMenuActive(false);
      }  
    return (
        <AppBar position='fixed' className={classes.appBar} color="inherit">
            <Toolbar>
                {menuActive ?
            <><button class="hamburger hamburger--collapse  is-active" type="button" onClick={closeMenu} style={{ zIndex: 999, padding: 0 }}>
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button><Sidebar setMenuActive={setMenuActive}></Sidebar></>
            : 
            <button class="hamburger hamburger--collapse" type="button" onClick={showMenu} style={{zIndex: 999, padding: 0}} >
                <span class="hamburger-box">
                <span class="hamburger-inner"></span>
                </span>
            </button> }
                <Typography className={classes.title} color="inherit">
                    
                </Typography>
                {location.pathname === '/' && 
                <img src={logo} alt="JK Vintage" height="25px" className={classes.image} />
                 }
                {(location.pathname ==='/polos' || location.pathname ==='/camisas' || location.pathname ==='/camisetas' || location.pathname ==='/chaquetas' || location.pathname ==='/sudaderas' || location.pathname ==='/pantalones' || location.pathname ==='/accesorios' || location.pathname ==='/drop' || location.pathname ==='/productos')  && (
                <Input
            type="search"
            placeholder="Buscar por marca..."
            onChange={(e) => setvalueSearch(e.target.value)}
            />)}
                <div className={classes.grow} />
                {(location.pathname ==='/polos' || location.pathname ==='/camisas' || location.pathname ==='/camisetas' || location.pathname ==='/chaquetas' || location.pathname ==='/sudaderas' || location.pathname ==='/pantalones' || location.pathname ==='/accesorios' || location.pathname ==='/drop' || location.pathname ==='/productos') && (
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Mostrar productos del carrito" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div> )}
            </Toolbar>            
        </AppBar>
    )
}

export default Navbar;
