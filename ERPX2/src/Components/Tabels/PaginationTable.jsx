import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../slice/PaginationSlice';
import styles from '../../styles/styles';

const PaginatedDataTable = ({
    headings = [],
    data = [],
    actions = [],
    itemsPerPage = 10,
}) => {
    const dispatch = useDispatch();

    // Access Redux state for pagination
    const { currentPage } = useSelector((state) => state.pagination);
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
                        {headings.map((heading, index) => (
                            index !== 0 ? ( // Use a ternary operator to conditionally render the header
                                <th key={index} className={styles.tableStyles.teableheadingText}>
                                    {heading}
                                </th>
                            ) : null // Skip rendering for the first heading
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item, rowIndex) => (
                        <tr key={rowIndex} className={styles.tableStyles.tableRow}>
                            <td className={styles.tableStyles.tableCellTd}>
                                {(currentPage - 1) * itemsPerPage + rowIndex + 1}
                            </td>
                            {Object.keys(item).map((key, colIndex) =>
                                colIndex !== 0 ? ( // Exclude 'id' column from rendering
                                    <td key={colIndex} className={styles.tableStyles.tableCellTd}>
                                        {item[key]}
                                    </td>
                                ) : null
                            )}
                            {actions.length > 0 && (

                                <td className={styles.tableStyles.tableCellTd}>
                                    <div className={styles.tableStyles.tableAction}>
                                        {actions.map((action, actionIndex) => (
                                            <button
                                                key={actionIndex}
                                                className={styles.tableStyles.tableActionButtons}
                                                onClick={() => action.onClick(item)}
                                            >
                                                {action.icon}
                                            </button>
                                        ))}
                                    </div>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>

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

export default PaginatedDataTable;
