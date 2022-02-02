import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import logo from '../../assets/logo.jpg';
import Header from './Elements/Header';
import Cards from './Elements/Cards';
import { FooterContainer } from './Footer/containers/footer'
const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: `url(${logo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: 'auto',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: 'max-content',
      },
    },
  }));

  const Principal = () => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Cards />
      <FooterContainer />
    </div>
    )
}

export default Principal