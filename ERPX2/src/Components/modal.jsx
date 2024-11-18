import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CurrencyModal = ({ show, handleClose }) => {
    const [amount1, setAmount1] = useState('');
    const [amount2, setAmount2] = useState('');

    return (
        <>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CurrencyModal;
