import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrencies, addCurrency } from '../slice/currencySlice';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import currencyOptions from '../data/currencydata';
import PaginatedTable from './pagination';
import TextInput from '../Components/Inputs/inputWithReadOnly';
import Dropdown from '../Components/Inputs/Dropdown';
import SaveCancelButton from '../Components/buttons/SaveCancelButton';
import styles from '../styles/styles';
import CurrencyModal from '../Components/modal';
import Modal from '../Components/modals/modal';
const CurrencyMaster = () => {
    const dispatch = useDispatch();
    const { status, error, editCurrencydata } = useSelector((state) => state.currency);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [selectedCurrencySymbol, setSelectedCurrencySymbol] = useState('');
    const { id, currency, symbol, showpopup } = editCurrencydata;

    const handleChange = (e) => {
        const selectedCurrencyCode = e.target.value;
        setSelectedCurrency(selectedCurrencyCode);

        const selectedCurrencyData = currencyOptions.find((currency) => currency.code === selectedCurrencyCode);
        setSelectedCurrencySymbol(selectedCurrencyData ? selectedCurrencyData.symbol : '');
    };

    const handleClose = () => setIsModalOpen(false);
    const handleSave = async (e) => {
        e.preventDefault();
        setIsModalOpen(false);
        if (!selectedCurrency || !selectedCurrencySymbol) {
            toast.error('Please select a currency before saving.');
            return;
        }

        const newCurrency = {
            currency: selectedCurrency,
            symbol: selectedCurrencySymbol,
        };

        try {
            await dispatch(addCurrency(newCurrency)).unwrap();
            toast.success('Success! Data saved.', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                transition: Bounce,
            });
            setSelectedCurrency('');
            setSelectedCurrencySymbol('');
        } catch (error) {
            toast.error(`Error: ${error}`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                transition: Bounce,
            });
        }
    };

    const handleCancel = () => {
        // Close the modal or reset the form as needed
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h4 className={styles.utility.titleTextStyle}>Currency Master</h4>
            <div className={styles.utility.centerStyle}>
                <div className={styles.utility.shadowContainer}>
                    <form className={styles.utility.formComponentSpacing} onSubmit={handleSave}>
                        <Dropdown
                            label="Currency"
                            selectedCurrency={selectedCurrency}
                            currencyOptions={currencyOptions}
                            onChange={handleChange}
                        />
                        <TextInput
                            label="Symbol"
                            type="text"
                            value={selectedCurrencySymbol}
                            placeholder="Symbol"
                            isReadOnly={true}
                        />
                        <SaveCancelButton onCancelClick={handleCancel} onSaveClick={handleSave} />
                    </form>
                </div>
            </div>

            {/* Conditionally Render the CurrencyModal */}
            {showpopup ? (
                <Modal
                    isOpen={isModalOpen}
                    title="Edit Currency"
                    onClose={handleClose}
                    onSubmit={handleSave}
                    cancelText="Cancel"
                    submitText="Save"
                >
                    <form className="space-y-6">
                        {/* Input: Currency */}
                        <div>
                            <label
                                htmlFor="currency"
                                className="block text-sm font-medium text-gray-900"
                            >
                                Currency
                            </label>
                            <input
                                id="currency"
                                type="text"
                                value={currency}
                                placeholder="Currency"
                                className="w-full block p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-150"
                                readOnly
                            />
                        </div>

                        {/* Input: Symbol */}
                        <div>
                            <label
                                htmlFor="symbol"
                                className="block text-sm font-medium text-gray-900"
                            >
                                Symbol
                            </label>
                            <input
                                id="symbol"
                                type="text"
                                value={symbol}
                                onChange={(e) => setSymbol(e.target.value)}
                                placeholder="Symbol"
                                className="w-full block p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-150"
                            />
                        </div>
                    </form>
                </Modal>

            ) : <PaginatedTable itemsPerPage={10} />}


            <ToastContainer />
        </div>
    );
};

export default CurrencyMaster;
