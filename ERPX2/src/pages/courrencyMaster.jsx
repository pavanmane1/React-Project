import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrencies, addCurrency, selectCurrencyData, editSelectedCurrency, editCurrencyapi, deleteCurrency, deleteSelectedCurrency } from '../slice/currencySlice';
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
import TextInputTopLabel from '../Components/Inputs/InputWithTopLabel';

const CurrencyMaster = () => {
    const dispatch = useDispatch();
    const { status, error, editCurrencydata, CurrencySelectionData, deleteCurrencyData, } = useSelector((state) => state.currency);
    const { id, currency, symbol, showpopup } = editCurrencydata;
    const { selectedCurrencyCode, selectedCurrencySymbol } = CurrencySelectionData;
    const { currencyId, showDeletePopup } = deleteCurrencyData;
    let updatedData

    const handleChange = (e) => {
        const selectedCurrencyCode = e.target.value;
        const selectedCurrencyData = currencyOptions.find((currency) => currency.code === selectedCurrencyCode);
        dispatch(selectCurrencyData({
            selectedCurrencyCode: selectedCurrencyCode,
            selectedCurrencySymbol: selectedCurrencyData ? selectedCurrencyData.symbol : ''

        }));
    };


    const handleClose = () => {
        dispatch(editSelectedCurrency({
            showpopup: false
        }));
    };
    const handleSave = async (e) => {
        e.preventDefault();
        if (!selectedCurrencyCode || !selectedCurrencySymbol) {
            toast.error('Please select a currency before saving.', {
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
            return;
        }

        const newCurrency = {
            currency: selectedCurrencyCode,
            symbol: selectedCurrencySymbol,
        };

        try {
            await dispatch(addCurrency(newCurrency)).unwrap();
            toast.success(' New Currency Added Success!', {
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
            dispatch(selectCurrencyData({
                selectedCurrencyCode: '',
                selectedCurrencySymbol: ''

            }));

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
    const handleEditChange = useCallback((e) => {
        const { name, value } = e.target;

        const updatedData = {
            ...editCurrencydata, // Immutable state update
            [name]: value,
        };

        // Basic validation
        if (!updatedData.currency || !updatedData.symbol) {
            console.warn('Currency and Symbol are required!');
            return;
        }

        // Dispatch updated data to Redux store
        dispatch(editSelectedCurrency(updatedData));

        // Optionally, log the updated data, but be mindful to remove in production
        console.log('Edited Data:', updatedData);
    }, [dispatch, editCurrencydata]); // Use the dependencies carefully

    const handleEdit = async (e) => {
        e.preventDefault();

        // Prepare the updated data
        const updatedData = {
            id, // Ensure the ID is included for updating
            currency,
            symbol,
            showpopup: false, // Explicitly set showpopup to false
        };

        try {
            // Dispatch the edit action to update the currency
            await dispatch(editCurrencyapi(updatedData)).unwrap();
            await dispatch(fetchCurrencies()).unwrap();
            dispatch(editSelectedCurrency({ showpopup: false }));
            toast.success('Currency Updated Successfully!', {
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

        } catch (error) {
            // Show error notification
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
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            // Dispatch the edit action to update the currency
            await dispatch(deleteCurrency(currencyId)).unwrap();
            await dispatch(fetchCurrencies()).unwrap();
            dispatch(deleteSelectedCurrency({ showDeletePopup: false }));
            toast.success('Currency Deleted Successfully!', {
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

        } catch (error) {
            // Show error notification
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
    }
    const handleCancel = () => {
        dispatch(selectCurrencyData({
            selectedCurrencyCode: '',
            selectedCurrencySymbol: ''

        }));
    };

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {console.log(showDeletePopup)}

            {console.log(currencyId)}
            <div className={styles.utility.centerStyle}>
                <div className={styles.utility.shadowContainer}>
                    <form className={styles.utility.formComponentSpacing} onSubmit={handleSave}>
                        <Dropdown
                            label="Currency"
                            selectedCurrency={selectedCurrencyCode}
                            currencyOptions={currencyOptions}
                            onChange={handleChange}
                        />
                        <TextInput
                            label="Symbol"
                            type="text"
                            value={selectedCurrencySymbol || ''}
                            placeholder="Symbol"
                            isReadOnly={true}
                        />
                        <SaveCancelButton onCancelClick={handleCancel} onSaveClick={handleSave} />
                    </form>
                </div>
            </div>
            <PaginatedTable itemsPerPage={10} />
            <ToastContainer />
            {/* Conditionally Render the CurrencyModal */}
            {showpopup &&
                <Modal
                    isOpen={showpopup}
                    title="Edit Currency"
                    onClose={handleClose}
                    onSubmit={handleEdit}
                    cancelText="Cancel"
                    submitText="Save"
                >
                    <form className="space-y-6">
                        <TextInputTopLabel
                            id="currency"
                            label="Currency"
                            name="currency"
                            value={currency || ''}
                            onChange={handleEditChange}
                            placeholder="Currency"
                        />

                        <TextInputTopLabel
                            id="symbol"
                            label="Symbol"
                            name="symbol"
                            value={symbol || ''}
                            onChange={handleEditChange}
                            placeholder="Symbol"
                        />
                    </form>
                </Modal>}
            {
                showDeletePopup && (<Modal
                    isOpen={showDeletePopup}
                    title="Delete Currency"
                    onClose={handleClose}
                    onSubmit={handleDelete}
                    cancelText="Cancel"
                    submitText="Delete"
                >
                    <p className='text-black'>Are You want to delete Record ?</p>
                </Modal>)
            }
        </div>
    );
};

export default CurrencyMaster;
