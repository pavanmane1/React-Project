import React from "react";

const Modal = ({
    isOpen,
    title,
    children,
    onClose,
    onSubmit,
    submitText = "Save",
    cancelText = "Cancel",
}) => {
    if (!isOpen) return null; // Do not render if modal is closed

    return (
        <div
            className="relative z-50"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity"
                aria-hidden="true"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-4">
                <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white rounded-lg shadow-lg sm:my-8 p-6">
                    {/* Modal Header */}
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                        <h3
                            id="modal-title"
                            className="text-lg font-semibold text-gray-900"
                        >
                            {title}
                        </h3>
                        <button
                            type="button"
                            className="text-gray-800 bg-gray-100 hover:text-gray-600 focus:outline-none rounded-full p-2"
                            aria-label="Close"
                            onClick={onClose}
                        >
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Modal Content */}
                    <div className="py-6">{children}</div>

                    {/* Footer Buttons */}
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            className="px-4 py-2 sm:w-1/5 md:w-1/5 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                            onClick={onClose}
                        >
                            {cancelText}
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 sm:w-1/5 md:w-1/5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            onClick={onSubmit}
                        >
                            {submitText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
