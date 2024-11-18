import React from 'react';
import PropTypes from 'prop-types';
import { FaSave, FaTimes } from 'react-icons/fa';

const SaveCancelButton = React.memo(({ onSaveClick, onCancelClick }) => {
    return (
        <div className="flex items-center justify-center mt-4 space-x-2 sm:space-x-4">
            <button
                type="button"
                onClick={onSaveClick}
                className="w-full sm:w-1/3 md:w-1/3 p-2 bg-blue-600 text-white rounded-lg flex items-center justify-center"
                aria-label="Save"
            >
                <FaSave className="mr-2 md:mr-3" /> Save
            </button>
            <button
                type="button"
                onClick={onCancelClick}
                className="w-full sm:w-1/3 md:w-1/3 p-2 bg-blue-600 text-white rounded-lg flex items-center justify-center"
                aria-label="Cancel"
            >
                <FaTimes className="mr-2" /> Cancel
            </button>
        </div>
    );
});

SaveCancelButton.propTypes = {
    type: PropTypes.string,
    onSaveClick: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired,
};

export default SaveCancelButton;
