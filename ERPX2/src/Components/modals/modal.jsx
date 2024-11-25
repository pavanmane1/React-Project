import React from "react";
import styles from "../../styles/styles";

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
            className={styles.popupModalStyles.mainContainer}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true">

            {/* Overlay */}
            <div
                className={styles.popupModalStyles.overlay}
                aria-hidden="true"
                onClick={onClose}></div>

            {/* Modal Container */}
            <div className={styles.popupModalStyles.modelContainer}>
                <div className={styles.popupModalStyles.modelHeaderContainer}>
                    {/* Modal Header */}
                    <div className={styles.popupModalStyles.modelHearder}>
                        <h3
                            id="modal-title"
                            className={styles.popupModalStyles.modelTitle}>
                            {title}
                        </h3>

                        <button
                            type="button"
                            className={styles.popupModalStyles.modelCloseButton}
                            aria-label="Close"
                            onClick={onClose}>
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Modal Content */}
                    <div className={styles.popupModalStyles.modalContent}>{children}</div>

                    {/* Footer Buttons */}
                    <div className={styles.popupModalStyles.modelFooterContainer}>
                        <button
                            type="button"
                            className={styles.popupModalStyles.modelFooterButton}
                            onClick={onClose}>

                            {cancelText}
                        </button>
                        <button
                            type="button"
                            className={styles.popupModalStyles.modelFooterButton}
                            onClick={onSubmit}>
                            {submitText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
