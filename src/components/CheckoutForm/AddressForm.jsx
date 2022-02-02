import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { jkvintage } from '../../lib/jkvintage';

import FormInput from './CustomTextField';

const AddressForm = ({ checkoutToken, next }) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({id: code, label: name}));
    const options = shippingOptions.map((s0) => ({ id: s0.id, label: `${s0.description} - (${s0.price.formatted_with_symbol})`}));

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await jkvintage.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }

    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await jkvintage.services.localeListSubdivisions(countryCode);
        console.log('subdivisions: ' + subdivisions);
        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    }

    const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
        const options = await jkvintage.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });
        setShippingOptions(options);
        console.log(stateProvince);
        console.log(options)
        if(options[0].id) setShippingOption(options[0].id);
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, []);

    useEffect(() => {
      if(shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);

    useEffect(() => {
       if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [shippingSubdivision]);

    return (
        <div>
            <Typography variant="h6" gutterBottom>Dirección de envío</Typography>
            <FormProvider { ...methods}>
            <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>                    
            <Grid container spacing={3}>
                        <FormInput name='firstName' label="Nombre"></FormInput>
                        <FormInput name='lastName' label="Apellidos"></FormInput>
                        <FormInput name='address1' label="Dirección"></FormInput>
                        <FormInput name='email' label="Correo electrónico"></FormInput>
                        <FormInput name='city' label="Ciudad"></FormInput>
                        <FormInput name='zip' label="Código Postal"></FormInput>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>País de envío</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {countries.map((country) => (
                                    <MenuItem key={country.id} value={country.id}>
                                    {country.label}
                                </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Comunidad Autónoma</InputLabel>
                            <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                {subdivisions.map((subdivision) => (
                                    <MenuItem key={subdivision.id} value={subdivision.id}>
                                    {subdivision.label}
                                </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Opciones de envío</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                            {options.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                    {option.label}
                                </MenuItem>
                                ))}
                                </Select>
                        </Grid> 
                    </Grid>
                
                <br></br>
                <div style={{ display: 'flex', justifyContent:'space-between' }}>
                    <Button component={Link} to="/cart" variant="outlined">Volver al carrito</Button>
                    <Button type="submit" variant="contained" color="primary">Next</Button>
                </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default AddressForm
