import { useState } from 'react';

const AlertModal = ({ title, message, accountId, accountName, accountScheduleId, onCancel, onOk }) => {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
        onCancel();
    };

    const handleOk = () => {
        onOk();
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
                    <div className="bg-white w-80 md:w-96 p-6 rounded-lg shadow-lg relative">
                        <button
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
                            onClick={closeModal}
                        >
                            &#x2715;
                        </button>
                        <h2 className="text-xl text-black font-semibold text-center mb-4">{title}</h2>
                        <hr className="mb-4" />
                        <p className="text-gray-700 mb-6">{message}</p>
                        <form method="post" action="/ERPX/updater/account/AdvanceAccount">

                            <input type="text" className='w-5/6 p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-150' name="accountid" value={accountId} />
                            <input type="text" className='w-5/6 p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-150' name="accountname" value={accountName} />
                            <input type="text" className='w-5/6 p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-150' name="accountScheduleId" value={accountScheduleId} />
                            <div className="flex justify-evenly space-x-2">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 focus:outline-none"
                                    onClick={closeModal}
                                >
                                    Cancel Delete
                                </button>
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 focus:outline-none"
                                    onClick={handleOk}
                                >
                                    OK
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AlertModal;
