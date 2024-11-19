import React from 'react';
import PropTypes from 'prop-types';

const TextInputTopLabel = ({
    id,
    label,
    name,
    value,
    onChange,
    placeholder = '',
    className = '',
    ...rest
}) => {
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-900"
            >
                {label}
            </label>
            <input
                id={id}
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full block p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-150 ${className}`}
                {...rest}
            />
        </div>
    );
};

TextInputTopLabel.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
};

export default TextInputTopLabel;
