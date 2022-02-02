import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#eee5e9',
    padding: theme.spacing(6),
  },
  root: {
    flexGrow: 1,
  },
  logoImage: {
    width: '50%'
  },
  lastDrop: {
    left: 0,
    lineHeight: '200px',
    marginTop: '-100px',
    position: 'absolute',
    textAlign: 'center',
    top: '12%',
    width: '100%',
    paddingBottom: '20px',
    "@media (min-width: 2000px)": {
      top: '7%'
    },
  },

  gridproducts : {
    marginTop : '25px'
  },

  title: {
    position: 'absolute',
    top : '10%',
    left : '5%',
    "@media (min-width: 2000px)": {
      top: '6%'
    },
  }
}));