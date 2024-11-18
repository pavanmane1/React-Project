// CurrencySelect.js
import React from 'react';
import styles from '../../styles/styles';
const Dropdown = ({ label, name, id, selectedCurrency, currencyOptions, onChange }) => {
    return (
        <div className={styles.utility.centeredRow}>
            <label htmlFor={label} className={styles.utility.label}>
                {label}:
            </label>
            <select
                onChange={onChange}
                value={selectedCurrency}
                className={styles.utility.dropdownstyle}
                name={name}
                id={id}
            >
                <option className={styles.utility.textblack} value="">
                    Select Currency
                </option>
                {currencyOptions.map((currency) => (
                    <option className={styles.utility.textblack} key={currency.id} value={currency.code}>
                        {currency.name} ({currency.code}) ({currency.symbol})
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
