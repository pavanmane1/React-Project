import React, { useState, useEffect } from 'react';
import InputField from "../Components/inputfield";
// import currencyOptions from "../Components/currencydata";
import { FaSave, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { Country, State, City } from 'country-state-city';

const CountryStateCity = () => {
    const FormButton = ({ children }) => (
        <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150"
        >
            {children}
        </button>
    );

    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [selectedCurrencySymbol, setSelectedCurrencySymbol] = useState('');

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');

    useEffect(() => {
        const allCountries = Country.getAllCountries();  // Ensure this function fetches countries correctly
        setCountries(allCountries);
    }, []);
    useEffect(() => {
        if (countries.length > 0) {
            countries.forEach((country) => {
                console.log(country.name);  // Log only the 'name' field of each country
            });
        }
    }, [countries]);  // This will log whenever countries change

    const fetchCurrencyDetails = async () => {
        try {
            const response = await axios.get('https://192.168.1.38:8082/api/getcurrency');
            const currencyData = response.data.rates;
            const formattedCurrencies = Object.keys(currencyData).map((code) => ({
                code,
                rate: currencyData[code],
            }));
            setCurrencies(formattedCurrencies);
        } catch (error) {
            console.error('Error fetching currency data:', error);
        }
    };

    const handleCurrencyChange = (e) => {
        const selectedCurrencyCode = e.target.value;
        setSelectedCurrency(selectedCurrencyCode);
        const selectedCurrency = currencyOptions.find(currency => currency.code === selectedCurrencyCode);
        setSelectedCurrencySymbol(selectedCurrency ? selectedCurrency.symbol : '');
    };

    const handleCountryChange = (e) => {
        const countryCode = e.target.value;
        setSelectedCountry(countryCode);
        setStates(State.getStatesOfCountry(countryCode));
        setCities([]);
        setSelectedState('');
    };

    const handleStateChange = (e) => {
        const stateCode = e.target.value;
        setSelectedState(stateCode);
        setCities(City.getCitiesOfState(selectedCountry, stateCode));
    };

    return (
        <div className='rounded-md p-4'>
            <div className="flex justify-center items-center mb-8">
                <h1 className="text-gray-900 text-shadow-sm font-semibold text-3xl sm:text-4xl md:text-3xl lg:text-3xl text-center leading-tight tracking-wide transition-all duration-500 ease-in-out transform hover:scale-105">
                    Location Master
                </h1>
            </div>

            <div className='flex justify-center'>
                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/3 shadow-lg bg-white p-3 rounded-xl">
                    <form className="space-y-6 p-4">
                        {/* <div className='flex items-center justify-between'>
                            <label htmlFor='currency' className="text-gray-900 text-center font-medium block">Currency:</label>
                            <select
                                onChange={handleCurrencyChange}
                                value={selectedCurrency}
                                className='text-black focus:outline-none w-5/6 p-2 bg-gray-200 border border-gray-400 focus:ring-gray-800 rounded-md'
                            >
                                <option className='text-black' value="">Select Currency</option>
                                {currencyOptions.sort((a, b) => a.name.localeCompare(b.name)).map((currency) => (
                                    <option className='text-black' key={currency.id} value={currency.code}>
                                        {currency.name} ({currency.code}) ({currency.symbol})
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='flex items-center justify-between'>
                            <label htmlFor='symbol' className="text-gray-900 text-center font-medium block">Symbol:</label>
                            <input
                                type='text'
                                value={selectedCurrencySymbol}
                                readOnly
                                className="w-5/6 p-2 border text-black border-gray-300 rounded-lg"
                            />
                        </div> */}

                        <div className='flex items-center justify-between'>
                            <label htmlFor='country' className="text-gray-900 font-medium block">Country:</label>
                            <select
                                onChange={handleCountryChange}
                                value={selectedCountry}
                                className='text-black focus:outline-none w-5/6 p-2 bg-gray-200 border border-gray-400 rounded-md'
                            >
                                <option className='text-black' value="">Select Country</option>
                                {countries.map((country) => (
                                    <option className='text-black' key={country.isoCode} value={country.isoCode}> {country.flag} {country.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className='flex items-center justify-between'>
                            <label htmlFor='state' className="text-gray-900 font-medium block">State:</label>
                            <select
                                onChange={handleStateChange}
                                value={selectedState}
                                className='text-black focus:outline-none w-5/6 p-2 bg-gray-200 border border-gray-400 rounded-md'
                                disabled={!selectedCountry}
                            >
                                <option className='text-black' value="">Select State</option>
                                {states.map((state) => (
                                    <option className='text-black' key={state.isoCode} value={state.isoCode}>{state.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className='flex items-center justify-between'>
                            <label htmlFor='city' className="text-gray-900 font-medium block">City:</label>
                            <select
                                className='text-black focus:outline-none w-5/6 p-2 bg-gray-200 border border-gray-400 rounded-md'
                                disabled={!selectedState}
                            >
                                <option className='text-black' value="">Select City</option>
                                {cities.map((city) => (
                                    <option className='text-black' key={city.name} value={city.name}>{city.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-center justify-center mt-4 space-x-2 sm:space-x-4">
                            <button className="w-full sm:w-1/3 md:w-1/5 p-2 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                                <FaSave className="mr-2 md:mr-3" /> Save
                            </button>
                            <button className="w-full sm:w-1/3 md:w-1/5 p-2 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                                <FaTimes className="mr-2" /> Cancel
                            </button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default CountryStateCity;
