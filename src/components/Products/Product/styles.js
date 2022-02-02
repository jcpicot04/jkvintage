import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        backgroundColor : '#fff',
        boxShadow: '4px 7px 17px -6px rgba(0,0,0,0.75)'

    },
    media: {
        position: 'relative',
        transition: 'all 1s ease',
        zIndex: '1',
        height: 0,
        paddingTop: '120%',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    },
    CardActions: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    cardContent: {
        fontFamily: 'Lobster !important',
        position: 'relative',
        zIndex: '2',
        display: 'flex',
        justifyContent: 'space-between',
    },
    helpIcon: {
        marginLeft: '2%'
    },
    popover: {
        backgroundColor: '#ef709d',
        color: 'rgb(255, 255, 255)',
        fontWeight: 'bold',
        border: '1px solid',
        textShadow: '1px 1px 2px black',
        padding: '5px'
    }
}));
