// ReadOnlyInput.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/styles';

const TextInput = React.memo(({
    label,
    type = 'text',
    value,
    placeholder = '',
    isReadOnly = false,
    onChange
}) => {
    return (
        <div className={styles.utility.centeredRow}>
            {/* Label for input */}
            <label
                htmlFor={label}
                className={styles.utility.label}
            >
                {label}:
            </label>

            {/* Input field */}
            <input
                id={label} // Associates the label with the input for accessibility
                type={type}
                value={value}
                placeholder={placeholder}
                readOnly={isReadOnly}
                onChange={isReadOnly ? undefined : onChange} // Disable onChange for read-only fields
                className={`${styles.utility.inputStyle} ${isReadOnly ? styles.utility.readOnlyStyle : ''
                    }`}
                aria-label={label}
            />
        </div>
    );
});

// Prop validation
TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    placeholder: PropTypes.string,
    isReadOnly: PropTypes.bool,
    onChange: PropTypes.func,
};

export default TextInput;
