import React, { useState } from 'react'
import InputField from "../Components/inputfield";
import currencyOptions from "../data/currencydata";
import { FaSave, FaTimes } from 'react-icons/fa';
import axios from 'axios'
import { useEffect } from 'react';

const CurrencyMaster = () => {
    // Reusable Button Component
    const FormButton = ({ children }) => (
        <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150"
        >
            {children}
        </button>
    );

    const [currencies, setCurrencies] = useState([]);
    const [SelectedCurrency, setSelectedCurrency] = useState('')
    const [selectedCurrencySymbole, setSelectedCurrencySymbole] = useState('')
    useEffect(() => {
        fetchCurrencyDetails();
    }, [])

    const fetchCurrencyDetails = async () => {
        try {
            // Example URL - replace with a real endpoint for currency data
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

            // Process and extract the currency details from the response
            // const currencyData = response.data.rates; // Example structure, adjust as needed
            // const formattedCurrencies = Object.keys(currencyData).map((code) => ({
            //     code,
            //     rate: currencyData[code],
            // }));
            console.log("response");
            console.log(response.data);
            // setCurrencies(formattedCurrencies);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error fetching currency data:', error.response.data);
                console.error('Status:', error.response.status);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
            } else {
                // Something happened in setting up the request
                console.error('Error setting up the request:', error.message);
            }
        }
    }
    const handleChange = (e) => {
        const selectedCurrencyCode = e.target.value;
        setSelectedCurrency(selectedCurrencyCode);

        const selectedcurrency = currencyOptions.find(currency => currency.code === selectedCurrencyCode)
        if (selectedcurrency) {
            setSelectedCurrencySymbole(selectedcurrency.symbol);
        } else {
            setSelectedCurrencySymbole(''); // Reset symbol if no match
        }
    }
    return (

        <div className='rounded-md p-4'>
            <div className="flex justify-center items-center mb-8">
                <h1 className="text-gray-900  text-shadow-sm font-semibold text-3xl sm:text-4xl md:text-3xl lg:text-3xl text-center leading-tight tracking-wide transition-all duration-500 ease-in-out transform hover:scale-105">
                    Currency Master
                </h1>
            </div>


            <div className='flex justify-center'>
                <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/3 shadow-lg bg-white p-3 rounded-xl">
                    <form className="space-y-6 p-4">
                        <div className='flex items-center justify-between'>
                            <label htmlFor='currency' className="text-gray-900 text-center font-medium block">
                                Currency:
                            </label>
                            <select
                                onChange={handleChange}
                                value={SelectedCurrency}
                                className='text-black focus:outline-none w-5/6 p-2 bg-gray-200 border border-gray-400 focus:ring-gray-800 rounded-md'
                                name="currency" id="currency">
                                <option className='text-black' value="">Select Currency</option>
                                {
                                    currencyOptions.map((currency) => (
                                        <option className='text-black' key={currency.id} value={currency.code}>
                                            {currency.name} ({currency.code}) ({currency.symbol})
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='flex items-center justify-between'>
                            <label htmlFor='Symbol' className="text-gray-900 text-center font-medium block">
                                Symbol:
                            </label>
                            <input
                                type='text'
                                value={selectedCurrencySymbole}
                                placeholder='Symbol'
                                readOnly
                                className="w-5/6 p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-150"
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

            <div className='flex justify-center mt-4'>
                <div className="bg-white w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-md p-4 overflow-auto">
                    <table className="min-w-full text-black rounded-xl border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200 text-left font-semibold border-b border-gray-400">
                                <th className="py-2 px-4 border text-gray-800 border-gray-500">Currency Name</th>
                                <th className="py-2 px-4 border text-black rounded-md border-gray-400">Currency Symbol</th>
                                <th className="py-2 px-4 border text-black rounded-md border-gray-400">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border rounded-md border-gray-400">Row 1 Data 1</td>
                                <td className="py-2 px-4 border border-gray-400">Row 1 Data 2</td>
                                <td className="py-2 px-4 border border-gray-400">Row 1 Data 3</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border border-gray-400">Row 2 Data 1</td>
                                <td className="py-2 px-4 border border-gray-400">Row 2 Data 2</td>
                                <td className="py-2 px-4 border border-gray-400">Row 2 Data 3</td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CurrencyMaster
