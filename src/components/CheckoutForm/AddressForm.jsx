import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './CustomTextField';
const AddressForm = () => {
  const [shippingCountries, setsShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setshippingSubdivions] = useState([]);
  const [shippingSubdivision, setshippingSubdivion] = useState('');
  const [shippingOptions, setshippingOptions] = useState([]);
  const [shippingOption, setshippingOption] = useState('');
  const methods = useForm();

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit=''>
          <Grid container spacing={3}>
            <FormInput name='firstName' label='First name' required />
            <FormInput name='lastName' label='Last name' required />
            <FormInput name='address' label='Address' required />
            <FormInput name='email' label='Email' required />
            <FormInput name='city' label='City' required />
            <FormInput name='ZIP' label='ZIP / Postal code' required />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value fullWidth onChange>
                <MenuItem key value>
                  Select me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value fullWidth onChange>
                <MenuItem key value>
                  Select me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Option</InputLabel>
              <Select value fullWidth onChange>
                <MenuItem key value>
                  Select me
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
