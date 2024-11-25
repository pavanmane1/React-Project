import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../slice/PaginationSlice';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import styles from '../styles/styles';
import { fetchCurrencies, editSelectedCurrency, deleteSelectedCurrency } from '../slice/currencySlice';

const PaginatedTable = () => {
    const dispatch = useDispatch();
    const { currencies, status, error, editCurrencydata } = useSelector((state) => state.currency);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCurrencies());
        }
    }, [status, dispatch]);

    const oneditClicked = (item) => {
        dispatch(editSelectedCurrency({
            id: item.id,
            currency: item.currency,
            symbol: item.symbol,
            showpopup: true
        }));
    }
    const ondeleteClicked = (id) => {
        dispatch(deleteSelectedCurrency({
            currencyId: id,
            showDeletePopup: true
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
        <div className={styles.tableStyles.tableContainerStyle}>
            {/* Table */}
            <table className={styles.tableStyles.table}>
                <thead className={styles.tableStyles.tableHeader}>
                    <tr>
                        <th className={styles.tableStyles.teableheadingText}>Sr No</th>
                        <th className={styles.tableStyles.teableheadingText}>Currency</th>
                        <th className={styles.tableStyles.teableheadingText}>Symbol</th>
                        <th className={styles.tableStyles.teableheadingText}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item, index) => (
                        <tr key={(currentPage - 1) * itemsPerPage + index + 1} className={styles.tableStyles.tableRow}>
                            <td className={styles.tableStyles.tableCellTd}>
                                {(currentPage - 1) * itemsPerPage + index + 1}
                            </td>
                            <td className={styles.tableStyles.tableCellTd}>{item.currency}</td>
                            <td className={styles.tableStyles.tableCellTd}>{item.symbol}</td>
                            <td className={styles.tableStyles.tableCellTd}>
                                <div className={styles.tableStyles.tableAction}>
                                    <button className={styles.tableStyles.tableActionButtons} onClick={() => oneditClicked(item)}>
                                        <FaEdit className={styles.tableStyles.tableActionButtonText} />
                                    </button>
                                    <button className={styles.tableStyles.tableActionButtons} onClick={() => ondeleteClicked(item.id)}>
                                        <FaTrashAlt className={styles.tableStyles.tableActionButtonText} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Mobile View Card Format */}
            <div className={styles.cardStyle.cardContainerOnMediumSize}>
                {currentData.map((item, index) => (
                    <div key={(currentPage - 1) * itemsPerPage + index + 1} className={styles.cardStyle.cardContainer}>
                        <div className={styles.cardStyle.cardContent}>
                            <div>
                                <h3 className={styles.cardStyle.cardContentHeading}>{item.currency}</h3>
                                <p className={styles.cardStyle.cardContentText}>{item.symbol}</p>
                            </div>
                            <div className={styles.cardStyle.cardActionContainer}>
                                <button className={styles.cardStyle.cardActionButton}>
                                    <FaEdit className={styles.cardStyle.cardButtonText} />
                                </button>
                                <button className={styles.cardStyle.cardActionButton}>
                                    <FaTrashAlt className={styles.cardStyle.cardButtonText} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Pagination Controls */}
            <div className={styles.tableStyles.tablePaginationContainer}>
                {/* Previous 10 button (visible only on larger screens) */}
                <button
                    onClick={() => changePageBy10('previous')}
                    disabled={currentPage <= pagesToShow}
                    className={styles.tableStyles.tablePaginationForwordButton}
                    aria-label="Previous 10 pages"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14 7l-5 5 5 5V7z"></path></svg>
                </button>

                {/* Previous button */}
                <button
                    onClick={goToPrevious}
                    disabled={currentPage === 1}
                    className={styles.tableStyles.tablePaginationPreviousButton}
                    aria-label="Previous page"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7v14z"></path></svg>
                </button>

                {/* Page number buttons */}
                <div className={styles.tableStyles.tableCounterButtonsuttonsContainer}>
                    {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                        <button
                            key={startPage + index}
                            onClick={() => changePage(startPage + index)}
                            className={`${styles.tableStyles.tablePaginationCounterButtonAnimation} ${currentPage === startPage + index ? styles.tableStyles.tablePaginatinonbuttonText : styles.tableStyles.tablePaginationButtonChange}`} aria-label={`Page ${startPage + index}`}
                        >
                            {startPage + index}
                        </button>
                    ))}
                </div>

                {/* Next button */}
                <button
                    onClick={goToNext}
                    disabled={currentPage === totalPages}
                    className={styles.tableStyles.tablePaginationNextButton}
                    aria-label="Next page"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7V5z"></path></svg>
                </button>

                {/* Next 10 button (visible only on larger screens) */}
                <button
                    onClick={() => changePageBy10('next')}
                    disabled={currentPage + pagesToShow > totalPages}
                    className={styles.tableStyles.tablePaginationForwordButton}
                    aria-label="Next 10 pages"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M10 17l5-5-5-5v10z"></path></svg>
                </button>
            </div>
        </div>
    );
};

export default PaginatedTable;
