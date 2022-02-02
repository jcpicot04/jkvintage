import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './styles';
import { Link, useHistory } from 'react-router-dom';
import { jkvintage } from '../../../lib/jkvintage';

const steps = ['Dirección de envío', 'Detalles de pago'];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const classes = useStyles();
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setIsFinished] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await jkvintage.checkout.generateToken(cart.id,{ type: 'cart' });
                setCheckoutToken(token);
            } catch (error) {
                history.pushState('/');
            }
        }

        generateToken();
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);



    const next = (data) => {
        setShippingData(data);

        nextStep();
    }

    const timeout = () =>{
        setTimeout(() => {
            setIsFinished(true);
        }, 5000);
    }
    
    const Confirmation = () => order.customer ? (
        <div>
        <div>
            <Typography variant="h5">Gracias por tu compra {order.customer.firstName} {order.customer.CircularProgresslastName}</Typography>
            <Divider className={classes.divider}></Divider>
            <Typography variant="subtitle2">Ref. pedido: {order.customer_reference}</Typography>
        </div>
        <br></br>
        <Button component={Link} to="/" variant="outlined" type="button">Volver al inicio</Button>
        </div>
    ) : isFinished ? (
        <div>
        <div>
            <Typography variant="h5">El pago no ha podido ser efectuado. Revise si ha introducido los datos correctamente.</Typography>
            <Divider className={classes.divider}></Divider>
        </div>
        <br></br>
        <Button component={Link} to="/" variant="outlined" type="button">Volver al inicio</Button>
        </div>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress></CircularProgress>
        </div>
    );

if(error) {
    <div>
        <Typography variant="h5">Error: {error}</Typography>
        <br></br>
        <Button component={Link} to="/" variant="outlined" type="button">Volver al inicio</Button>
    </div>
}

    const Form = () => activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} next={next}></AddressForm>
    : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} nextStep={nextStep} onCaptureCheckout={onCaptureCheckout} timeout={timeout}></PaymentForm>
    
    return (
        <div>
            <CssBaseline></CssBaseline>
            <div className={classes.toolbar}>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" align="center">Checkout</Typography>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                                </Step>
                        ))}
                        </Stepper>
                        {activeStep === steps.length ? <Confirmation></Confirmation> : checkoutToken && <Form></Form>}
                    </Paper>
                </main>
            </div>
        </div>
    )
}

export default Checkout
