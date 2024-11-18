import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../slice/PaginationSlice';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import styles from '../styles/styles';
import { fetchCurrencies, setSelectedCurrency } from '../slice/currencySlice';

const PaginatedTable = () => {
    const dispatch = useDispatch();
    const { currencies, status, error, editCurrencydata } = useSelector((state) => state.currency);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCurrencies());
        }
    }, [status, dispatch]);

    const oneditClicked = (item) => {
        dispatch(setSelectedCurrency({
            id: item.id,
            currency: item.currency,
            symbol: item.symbol,
            showpopup: true
        }));
    }
    // Access Redux state
    const { currentPage, itemsPerPage } = useSelector((state) => state.pagination);

    const totalPages = Math.ceil(currencies.length / itemsPerPage);
    const pagesToShow = 10;
    const startPage = Math.floor((currentPage - 1) / pagesToShow) * pagesToShow + 1;
    const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

    const currentData = currencies.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const changePage = (page) => {
        if (page > 0 && page <= totalPages) {
            dispatch(setCurrentPage(page));
        }
    };

    const changePageBy10 = (direction) => {
        const newPage =
            direction === 'next'
                ? Math.min(currentPage + pagesToShow, totalPages)
                : Math.max(currentPage - pagesToShow, 1);
        dispatch(setCurrentPage(newPage));
    };

    const goToPrevious = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
        }
    };

    const goToNext = () => {
        if (currentPage < totalPages) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    };

    return (
        <div className={styles.utility.tableContainerStyle}>
            {/* Table */}
            <table className={styles.utility.table}>
                <thead className={styles.utility.tableHeader}>
                    <tr>
                        <th className={styles.utility.teableheadingText}>Sr No</th>
                        <th className={styles.utility.teableheadingText}>Currency</th>
                        <th className={styles.utility.teableheadingText}>Symbol</th>
                        <th className={styles.utility.teableheadingText}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item, index) => (
                        <tr key={item.id} className={styles.utility.tableRow}>
                            <td className={styles.utility.tableCellTd}>
                                {(currentPage - 1) * itemsPerPage + index + 1}
                            </td>
                            <td className={styles.utility.tableCellTd}>{item.currency}</td>
                            <td className={styles.utility.tableCellTd}>{item.symbol}</td>
                            <td className={styles.utility.tableCellTd}>
                                <div className={styles.utility.tableAction}>
                                    <button className={styles.utility.tableActionButtons} onClick={() => oneditClicked(item)}>
                                        <FaEdit className="text-sm" />
                                    </button>
                                    <button className={styles.utility.tableActionButtons}>
                                        <FaTrashAlt className="text-sm" />
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
                                <h3 className="text-sm font-semibold text-gray-700">{item.currency}</h3>
                                <p className="text-xs text-gray-500">{item.symbol}</p>
                            </div>
                            <div className="flex space-x-2 justify-center items-center">
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
                {/* Previous 10 button (visible only on larger screens) */}
                <button
                    onClick={() => changePageBy10('previous')}
                    disabled={currentPage <= pagesToShow}
                    className="px-3 py-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200 hidden sm:inline"
                    aria-label="Previous 10 pages"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14 7l-5 5 5 5V7z"></path></svg>
                </button>

                {/* Previous button */}
                <button
                    onClick={goToPrevious}
                    disabled={currentPage === 1}
                    className="px-3 py-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200"
                    aria-label="Previous page"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7v14z"></path></svg>
                </button>

                {/* Page number buttons */}
                <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                    {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                        <button
                            key={startPage + index}
                            onClick={() => changePage(startPage + index)}
                            className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg transition duration-200 ${currentPage === startPage + index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                            aria-label={`Page ${startPage + index}`}
                        >
                            {startPage + index}
                        </button>
                    ))}
                </div>

                {/* Next button */}
                <button
                    onClick={goToNext}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200"
                    aria-label="Next page"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7V5z"></path></svg>
                </button>

                {/* Next 10 button (visible only on larger screens) */}
                <button
                    onClick={() => changePageBy10('next')}
                    disabled={currentPage + pagesToShow > totalPages}
                    className="px-3 py-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200 hidden sm:inline"
                    aria-label="Next 10 pages"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M10 17l5-5-5-5v10z"></path></svg>
                </button>
            </div>
        </div>
    );
};

export default PaginatedTable;
