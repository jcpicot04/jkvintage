import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    background: '#ff6e7f',
background: '-webkit-linear-gradient(to right, #bfe9ff, #ff6e7f)',
background: 'linear-gradient(to right, #bfe9ff, #ff6e7f)',

    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    fontFamily: 'Lobster',
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    "@media (max-width: 2560px)": {
      width: "5%",
      height: "auto"
    },
    "@media (max-width: 1440px)": {
      width: "8%",
      height: "auto"
    },
    "@media (max-width: 1024px)": {
      width: "12%",
      height: "auto"
    },
    "@media (max-width: 768px)": {
      width: "15%",
      height: "auto"
    },
    "@media (max-width: 425px)": {
      width: "21%",
      height: "auto"
    }
  },

  grow: {
    flexGrow: 1
  }

}));
