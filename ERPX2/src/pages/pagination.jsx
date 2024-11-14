import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const PaginatedTable = ({ data, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const pagesToShow = 10;
    const startPage = Math.floor((currentPage - 1) / pagesToShow) * pagesToShow + 1;
    const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

    const currentData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const changePage = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const changePageBy10 = (direction) => {
        const newPage = direction === 'next'
            ? Math.min(currentPage + pagesToShow, totalPages)
            : Math.max(currentPage - pagesToShow, 1);
        setCurrentPage(newPage);
    };

    const goToPrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg min-w-1/3">
            {/* Table Header */}
            <table className="min-w-full bg-white rounded-lg shadow-md border-collapse overflow-hidden hidden md:table">
                <thead className="bg-gray-100 border-b">
                    <tr>
                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">ID</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">Name</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">Email</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item) => (
                        <tr key={item.id} className="border-b hover:bg-gray-50 transition-colors duration-200">
                            <td className="py-4 px-6 text-sm text-gray-800">{item.id}</td>
                            <td className="py-4 px-6 text-sm text-gray-800">{item.name}</td>
                            <td className="py-4 px-6 text-sm text-gray-800">{item.email}</td>
                            <td className="py-4 px-6 text-sm text-gray-800">
                                <div className="flex space-x-2">
                                    <button className="flex items-center justify-center p-2 rounded-lg bg-gray-500 text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out shadow-md hover:shadow-lg active:scale-95">
                                        <FaEdit className="text-sm" />
                                        <span className="sr-only">Edit</span>
                                    </button>
                                    <button className="flex items-center justify-center p-2 rounded-lg bg-gray-600 text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 ease-in-out shadow-md hover:shadow-lg active:scale-95">
                                        <FaTrashAlt className="text-sm" />
                                        <span className="sr-only">Delete</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Mobile View Card Format */}
            <div className="md:hidden">
                {currentData.map((item) => (
                    <div key={item.id} className="mb-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-all w-full">
                        <div className="flex justify-between items-center text-xs">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-700">{item.name}</h3>
                                <p className="text-xs text-gray-500">{item.email}</p>
                            </div>
                            <div className="flex space-x-2">
                                <button className="p-2 bg-gray-500 text-blue-500 rounded-lg hover:text-blue-700">
                                    <FaEdit className="text-sm" />
                                </button>
                                <button className="p-2 bg-gray-600 text-red-500 rounded-lg hover:text-red-700">
                                    <FaTrashAlt className="text-sm" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-6 flex flex-wrap items-center justify-center space-x-2">
                <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                    {/* Previous 10 button, visible only on large screens */}
                    <button
                        onClick={() => changePageBy10('previous')}
                        disabled={currentPage <= pagesToShow}
                        className="px-3 py-1 bg-indigo-600 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200 hidden sm:inline"
                    >
                        Previous 10
                    </button>
                    {/* Previous button */}
                    <button
                        onClick={goToPrevious}
                        disabled={currentPage === 1}
                        className="px-3 py-1 bg-indigo-600 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200"
                    >
                        Previous
                    </button>
                </div>

                <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                    {/* Page number buttons */}
                    {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                        <button
                            key={startPage + index}
                            onClick={() => changePage(startPage + index)}
                            className={`px-3 py-1 text-xs sm:text-sm font-semibold rounded-lg transition duration-200 ${currentPage === startPage + index ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                        >
                            {startPage + index}
                        </button>
                    ))}
                </div>

                <div className="flex items-center space-x-2">
                    {/* Next button */}
                    <button
                        onClick={goToNext}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 bg-indigo-600 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200"
                    >
                        Next
                    </button>
                    {/* Next 10 button, visible only on large screens */}
                    <button
                        onClick={() => changePageBy10('next')}
                        disabled={currentPage + pagesToShow > totalPages}
                        className="px-3 py-1 bg-indigo-600 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200 hidden sm:inline"
                    >
                        Next 10
                    </button>
                </div>
            </div>


        </div>
    );
};

export default PaginatedTable;
