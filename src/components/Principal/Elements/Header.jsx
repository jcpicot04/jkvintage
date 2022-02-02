import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  colorText: {
    color: '#C4E0F5',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
    textShadow: '0px 3px 11px #0A0403'
  },
  goDownArrow: {
    animation: '$goDownArrow 1s infinite ease'

  },
  goDown: {
    color: '#C4E0F5',
    fontSize: '4rem',
  },
  "@keyframes goDownArrow": {
    "0%,100%": {
      bottom: 0
    },
    "50%": {
      bottom: '20px'
    }
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Bienvenido a <br />
            JK<span className={classes.colorText}>VINTAGE.</span>
          </h1>
          <Scroll to="categories" smooth={true}>
            <IconButton className={classes.goDownArrow}>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}