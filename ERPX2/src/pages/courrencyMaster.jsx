import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrencies, resetPopups, addCurrency, selectCurrencyData, editSelectedCurrency, editCurrencyapi, deleteCurrency, deleteSelectedCurrency } from '../slice/currencySlice';
import { ToastContainer } from 'react-toastify';
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
import PaginatedDataTable from '../Components/Tabels/PaginationTable';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import ShowAlert from '../Components/Alert/ShowAlert';
const CurrencyMaster = () => {
    const dispatch = useDispatch();
    const { currencies, status, error, editCurrencydata, CurrencySelectionData, deleteCurrencyData, } = useSelector((state) => state.currency);
    const { id, currency, symbol, showpopup } = editCurrencydata;
    const { selectedCurrencyCode, selectedCurrencySymbol } = CurrencySelectionData;
    const { currencyId, showDeletePopup } = deleteCurrencyData;
    const headings = ['id', 'Currency', 'Symbol', 'Actions'];

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCurrencies());
        }
    }, [status, dispatch]);

    const actions = [
        {
            icon: <FaEdit />,
            onClick: (item) => oneditClicked(item),
        },
        {
            icon: <FaTrashAlt />,
            onClick: (item) => ondeleteClicked(item.id),
        },
    ];

    const oneditClicked = (item) => {
        dispatch(editSelectedCurrency({
            id: item.id,
            currency: item.currency,
            symbol: item.symbol,
            showpopup: true
        }));
    }

    const ondeleteClicked = (id) => {
        dispatch(deleteSelectedCurrency({
            currencyId: id,
            showDeletePopup: true
        }));

    }

    const handleChange = (e) => {
        const selectedCurrencyCode = e.target.value;
        const selectedCurrencyData = currencyOptions.find((currency) => currency.code === selectedCurrencyCode);
        dispatch(selectCurrencyData({
            selectedCurrencyCode: selectedCurrencyCode,
            selectedCurrencySymbol: selectedCurrencyData ? selectedCurrencyData.symbol : ''

        }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        if (!selectedCurrencyCode || !selectedCurrencySymbol) {
            ShowAlert("Please select a currency before saving.", 'error')
            return;
        }

        const newCurrency = {
            currency: selectedCurrencyCode,
            symbol: selectedCurrencySymbol,
        };

        try {
            await dispatch(addCurrency(newCurrency)).unwrap();
            ShowAlert('New Currency Added Success!', 'success')
            dispatch(selectCurrencyData({
                selectedCurrencyCode: '',
                selectedCurrencySymbol: ''
            }));

        } catch (error) {
            ShowAlert(`Error: ${error}`, 'error')
        }
    };

    const handleEditChange = useCallback((e) => {
        const { name, value } = e.target;
        const updatedData = {
            ...editCurrencydata, // Immutable state update
            [name]: value,
        }
        // Basic validation
        if (!updatedData.currency || !updatedData.symbol) {
            ShowAlert(`Currency and Symbol are required!`, 'warn')
            return;
        }
        // Dispatch updated data to Redux store
        dispatch(editSelectedCurrency(updatedData));
    }, [dispatch, editCurrencydata]);

    const handleEdit = async (e) => {
        e.preventDefault();
        // Prepare the updated data
        const updatedData = {
            id,
            currency,
            symbol,
            showpopup: false, // Explicitly set showpopup to false
        };

        try {
            // Dispatch the edit action to update the currency
            await dispatch(editCurrencyapi(updatedData)).unwrap();
            await dispatch(fetchCurrencies()).unwrap();
            dispatch(resetPopups());
            ShowAlert('Currency Updated Successfully!', 'success')

        } catch (error) {
            // Show error notification
            ShowAlert(`Error: ${error}`, 'error')

        }
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            // Dispatch the edit action to update the currency
            await dispatch(deleteCurrency(currencyId)).unwrap();
            await dispatch(fetchCurrencies()).unwrap();
            dispatch(resetPopups());
            ShowAlert('Currency Deleted Successfully!', 'success')

        } catch (error) {
            // Show error notification
            ShowAlert(`Error: ${error}`, 'error')

        }
    }

    const handleCancel = () => {
        dispatch(selectCurrencyData({
            selectedCurrencyCode: '',
            selectedCurrencySymbol: ''

        }));
    };

    const handleClose = () => {
        dispatch(resetPopups());
    };

    return (
        <div>

            <div className={styles.utility.centerStyle}>

                <div className={styles.utility.shadowContainer}>
                    <h5 className='mb-3 font-semibold text-2xl text-black text-center'>Currency Master</h5>
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

            {status === 'loading' ? (
                <div>Loading...</div>
            ) : status === 'succeeded' ? (
                currencies.length > 0 ? (
                    <PaginatedDataTable
                        headings={headings}
                        data={currencies.map((item) => ({
                            id: item.id,
                            currency: item.currency,
                            symbol: item.symbol,
                        }))}
                        actions={actions}
                        itemsPerPage={10} // Adjust as needed
                    />
                ) : (
                    <div>No data available.</div>
                )
            ) : status === 'failed' ? (
                <div>Error: {error}</div>
            ) : (
                <div>Unexpected state encountered.</div>
            )}   <ToastContainer />
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
