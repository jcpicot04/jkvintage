import React from 'react'
import useStyles from './styles';
import { Divider, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Sidebar = ({setMenuActive}) => {
    const classes = useStyles();

    return (
        <div className={classes.sidebar}>
        <Typography component={Link} to="/drop" onClick={() => setMenuActive(false)} style={{ textDecoration: 'none' }}>
        <div className={classes.option} id="option1">ÚLTIMO DROP</div>
        </Typography>
        <Divider></Divider>
        <Typography component={Link} to="/camisetas" onClick={() => setMenuActive(false)} style={{ textDecoration: 'none' }}>
        <div className={classes.option}>CAMISETAS</div>
        </Typography>
        <Divider></Divider>
        <Typography component={Link} to="/camisas" onClick={() => setMenuActive(false)} style={{ textDecoration: 'none' }}>
        <div className={classes.option}>CAMISAS</div>
        </Typography>
        <Divider></Divider>
        <Typography component={Link} to="/polos" onClick={() => setMenuActive(false)} style={{ textDecoration: 'none' }}>
        <div className={classes.option}>POLOS</div>
        </Typography>
        <Divider></Divider>
        <Typography component={Link} to="/chaquetas" onClick={() => setMenuActive(false)} style={{ textDecoration: 'none' }}>
        <div className={classes.option}>CHAQUETAS</div>
        </Typography>
        <Divider></Divider>
        <Typography component={Link} to="/sudaderas" onClick={() => setMenuActive(false)} style={{ textDecoration: 'none' }}>
        <div className={classes.option}>SUDADERAS</div>
        </Typography>
        <Divider></Divider>
        <Typography component={Link} to="/pantalones" onClick={() => setMenuActive(false)} style={{ textDecoration: 'none' }}>
        <div className={classes.option}>PANTALONES</div>
        </Typography>
        <Divider></Divider>
        <Typography component={Link} to="/accesorios" onClick={() => setMenuActive(false)} style={{ textDecoration: 'none' }}>
        <div className={classes.option}>ACCESORIOS</div>
        </Typography>
        <Divider></Divider>
        <Typography component={Link} to="/productos" onClick={() => setMenuActive(false)} style={{ textDecoration: 'none' }}>
        <div className={classes.option}>TODO</div>
        </Typography>
        <Divider></Divider>
        <Typography component={Link} to="/" onClick={() => setMenuActive(false)} style={{ textDecoration: 'none' }}>
        <div className={classes.option}>INICIO</div>
        </Typography>
        <Divider></Divider>
        </div>
    )
}

export default Sidebar
