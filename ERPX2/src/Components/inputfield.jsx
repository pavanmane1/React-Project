import React from 'react';

const InputField = ({ id, name, type, placeholder, ariaLabel, autoComplete }) => (
    <div >
        <label htmlFor={id} className="text-gray-900 font-medium block mb-2">
            {ariaLabel}
        </label>
        <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className="w-full p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-150"
            aria-label={ariaLabel}
        />
    </div>
);

export default InputField;
