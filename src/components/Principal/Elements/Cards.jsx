import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ImageCard from './ImageCard';
import categories from './categories';
import useWindowPosition from './useWindowPosition';
import king from '../../../assets/negraazul.png';
import rocket from '../../../assets/negroazul.png';
import mark from '../../../assets/negrooazul.png';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      marginTop: '80%'
    },
  },
  svg: {
    width: 200,
    height: 200,
    margin: '35%',
    filter: 'drop-shadow(5px 5px 20px #85B3D1FF)',
    textAlign: 'center',
    marginBottom : '80%',
    [theme.breakpoints.down('lg')]: {
      margin: '20%',
      marginBottom: '80%',
    }
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    textweight: 'bold',
    marginLeft: '20%',
  },
  icons: {
    margin: '3%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0%',
    }
  }
}));
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div>
    <div className={classes.root} id="categories">
      <Link to="/camisetas" style={{ textDecoration: 'none' }}>
      <ImageCard category={categories[0]} checked={checked} />
      </Link>
      <Link to="/chaquetas" style={{ textDecoration: 'none' }}>
      <ImageCard category={categories[1]} checked={checked} />
      </Link>
        <Link to="/camisas" style={{ textDecoration: 'none' }}>
        <ImageCard category={categories[2]} checked={checked} />
        </Link>
        <Link to="/polos" style={{ textDecoration: 'none' }}>
        <ImageCard category={categories[3]} checked={checked} />
        </Link>
        <Link to="/sudaderas" style={{ textDecoration: 'none' }}>
        <ImageCard category={categories[4]} checked={checked} />
        </Link>
        <Link to="/jerseys" style={{ textDecoration: 'none' }}>
        <ImageCard category={categories[5]} checked={checked} />
        </Link>
          <Link to="/pantalones" style={{ textDecoration: 'none' }}>
        <ImageCard category={categories[6]} checked={checked} />
        </Link>
        <Link to="/accesorios" style={{ textDecoration: 'none' }}>
        <ImageCard category={categories[7]} checked={checked} />
        </Link>
        <Link to="/drop" style={{ textDecoration: 'none' }}>
        <ImageCard category={categories[8]} checked={checked} />
        </Link>
        <Link to="/productos" style={{ textDecoration: 'none' }}>
        <ImageCard category={categories[9]} checked={checked} />
        </Link>
      <div className={classes.icons}>
        <div className={classes.svg}>
        <img src={king} alt="Corona Logo" />
        <p className={classes.text}>LAS MEJORES PRENDAS VINTAGE AL MEJOR PRECIO</p>
        </div>
        <div className={classes.svg}>
        <img src={rocket} alt="Cohete Logo" />
        <p className={classes.text}>ENVÍOS A TODA ESPAÑA EN 24/48H</p>
        </div>
        <div className={classes.svg}>
        <img src={mark} alt="Mark Logo" />
        <p className={classes.text}>COMPRA RÁPIDO Y SEGURO</p>
        </div>
        </div>
      </div>
      </div>
  );
}