import React, { useState, useEffect } from 'react';
import InputField from "../Components/inputfield";
// import currencyOptions from "../Components/currencydata";
import { FaSave, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { Country, State, City } from 'country-state-city';
import CountryWiseCurrency from '../data/CountrywiseCourrency'
const CountrywiseCourrency = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCurrencySymbole, setSelectedCurrencySymbole] = useState('')
    const [selectedCurrencyCode, setSelectedCurrencyCode] = useState('');
    useEffect(() => {
        const allCountries = Country.getAllCountries();  // Ensure this function fetches countries correctly
        setCountries(allCountries);
    }, []);

    // useEffect(() => {
    //     if (countries.length > 0) {
    //         countries.forEach((country) => {
    //             console.log(country.name);  // Log only the 'name' field of each country
    //         });
    //     }
    // }, [countries]);  // This will log whenever countries change



    const handleCountryChange = (e) => {
        const selectedcountryCode = e.target.value;
        setSelectedCountry(selectedcountryCode);
        const selectedCurrency = CountryWiseCurrency.find(countryCode => countryCode.country_code === selectedcountryCode);
        if (selectedCurrency) {
            setSelectedCurrencySymbole(selectedCurrency.symbol);
            setSelectedCurrencyCode(selectedCurrency.code)
        } else {
            setSelectedCurrencySymbole(''); // Reset symbol if no match
        }
    };

    return (
        <div className='rounded-md p-4'>
            <div className="flex justify-center items-center mb-8">
                <h1 className="text-gray-900 text-shadow-sm font-semibold text-3xl sm:text-4xl md:text-3xl lg:text-3xl text-center leading-tight tracking-wide transition-all duration-500 ease-in-out transform hover:scale-105">
                    Currency Master
                </h1>
            </div>

            <div className='flex justify-center'>
                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/3 shadow-lg bg-white p-3 rounded-xl">
                    <form className="space-y-6 p-4">
                        <div className="flex items-center space-x-2"> {/* Using flex-row to align horizontally */}
                            <label htmlFor="country" className="text-gray-900 font-medium block w-1/4"> {/* Added w-1/3 to set label width */}
                                Country:
                            </label>
                            <select
                                onChange={handleCountryChange}
                                value={selectedCountry}
                                className="text-black focus:outline-none w-2/3 p-2 bg-gray-200 border border-gray-400 rounded-md"
                            >
                                <option className="text-black" value="">
                                    Select Country
                                </option>
                                {countries.map((country) => (
                                    <option className="text-black" key={country.isoCode} value={country.isoCode}>
                                        {country.flag} {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-center space-x-2"> {/* Using flex-row to align horizontally */}
                            <label htmlFor="code" className="text-gray-900 font-medium block w-1/4"> {/* Added w-1/3 to set label width */}
                                Currency Code:
                            </label>
                            <input
                                type="text"
                                value={selectedCurrencyCode}
                                placeholder="code"
                                readOnly
                                className="w-2/3 p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-150"
                            />
                        </div>

                        <div className="flex items-center space-x-2"> {/* Using flex-row to align horizontally */}
                            <label htmlFor="Symbol" className="text-gray-900 font-medium block w-1/4"> {/* Added w-1/3 to set label width */}
                                Currency Symbol:
                            </label>
                            <input
                                type="text"
                                value={selectedCurrencySymbole}
                                placeholder="Symbol"
                                readOnly
                                className="w-2/3 p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-150"
                            />
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

export default CountrywiseCourrency;
