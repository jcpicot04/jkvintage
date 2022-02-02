import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import { Collapse } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    background: 'rgba(0,0,0,0.5)',
    margin: '70px',
    boxShadow: '3px 5px 26px 1px #000000',
    '&:hover' : {
     transform : 'scale(1.05)'
    },
    [theme.breakpoints.down('xs')]: {
      margin: '40px',
    },
  },
  "@keyframes changewidth": {
    "0%": {
      width: 500
    },
    "100%": {
      width: 550
    }
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
}));

export default function ImageCard({ category, checked }) {
  const classes = useStyles();

  return (
  //  <Collapse in={checked} {...(checked ? { timeout: 500 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={category.imageUrl}
          title="Categoria"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {category.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {category.description}
          </Typography>
        </CardContent>
      </Card>
  //  </Collapse>
  );
}