import { useState, useEffect } from 'react';

const SuccessAlert = ({ message, duration = 3000 }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    const handleClose = () => {
        setVisible(false);
    };

    return (
        visible && (
            <div
                className={`fixed bottom-5 right-5 w-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg transform transition-transform duration-500 ${visible ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center">
                    <div>
                        <strong>Success!</strong> {message}
                    </div>
                    <button
                        className="text-white font-bold text-xl"
                        onClick={handleClose}
                    >
                        &times;
                    </button>
                </div>
            </div>
        )
    );
};

export default SuccessAlert;
