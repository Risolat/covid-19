import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import style from './CountryPicker.module.css';
import { fetchCountries } from '../../api';
  

const CountryPicker = ({ handleCountryChange }) => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setCountries(await fetchCountries());
    }
    fetchApi();
   }, []);
   
  // console.log(countries);
  return(
    <FormControl className={style.formControl}>
      <NativeSelect defaultValue="" onChange = {(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;