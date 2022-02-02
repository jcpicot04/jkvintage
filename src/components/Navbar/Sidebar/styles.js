import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  sidebar: {
  height: '100%',
  width: '20%',
  position: 'fixed',
  zIndex: 1,
  top: 0,
  left: 0,
  overflowX: 'hidden',
  backdropFilter: 'blur(5px)',
  transition: '0.5s',
  paddingTop: '60px',
  backgroundColor: 'rgb(66 47 58 / 30%)',
  boxShadow: '10px 9px 28px -2px rgba(0,0,0,0.75)',
  animationName : '$slideInLeft',
  animationDuration : '1s',
  animationFillMode : 'both',
  "@media (max-width: 800px)": {
    width: "100%"
  },

  "& #option1": {
    marginTop: "40px"
}
  },

  "@keyframes slideInLeft" : {

    "0%" : {
    transform: 'translateX(-100%)',
    visibility: 'visible'
    },

    "100%" : {
    transform: 'translateX(0)'
    }
    },

   /* option : {
    position : 'relative',
    alignItems : 'center',
    color: 'white',
    fontWeight: '400',
    textShadow : '2px solid rgba(0, 0, 0, 0.)',
    paddingBottom: '10px',
    top: '0',
    left: '30%',
    marginBottom : '10px',
    },*/

    option : {
      padding: '20px 30px',
      textDecoration: 'none',
      borderBottom: '2px solid transparent',
      transition: '0.3s',
      color: 'white',
      textAlign : 'center',
      fontWeight: 'bold',
      textShadow: '4px 3px 6px #110008',
      '&:hover' : {
       borderBottom: '2px solid #3c3a3a',
       cursor: 'pointer'
      }
   }
}));

