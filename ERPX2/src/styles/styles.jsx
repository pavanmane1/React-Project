// styles.js

const utilityStyle = {
    textblack: "text-black",
    dropdownstyle: "text-black focus:outline-none w-5/6 p-2 bg-gray-200 border border-gray-400 focus:ring-gray-800 rounded-md",
    label: "text-gray-900 text-center font-medium block",
    centeredRow: "flex items-center justify-between ",
    centerStyle: "flex justify-center mt-1",
    buttonStyle: "w-full sm:w-1/3 md:w-1/5 p-2 bg-blue-600 text-white rounded-lg flex items-center justify-center",
    cardStyle: "bg-white shadow-md rounded-lg p-4",
    inputStyle: "w-5/6 p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-150",
    shadowContainer: " mt-4 w-full sm:w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/3 shadow-lg bg-white p-2 rounded-xl",
    popupContainer: "fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50",
    formComponentSpacing: "space-y-6 p-2",
    titleTextStyle: " mb-2 text-gray-900 text-shadow-sm font-semibold text-2xl sm:text-4xl md:text-3xl lg:text-3xl text-center leading-tight tracking-wide transition-all duration-500 ease-in-out transform hover:scale-105",
    tableContainerStyle: "p-4 mt-2 bg-white rounded-lg shadow-lg min-w-1/3 min-h-1/2",
    table: "min-w-full bg-white rounded-lg shadow-md border-collapse overflow-hidden hidden md:table",
    tableHeader: "bg-gray-100 border-b",
    teableheadingText: "py-2 px-4 text-center text-sm font-semibold text-gray-700 border",
    tableRow: "border-b hover:bg-gray-50 transition-colors duration-200",
    tableCellTd: "py-2 px-4 text-center text-sm text-gray-950 border",
    tableAction: "flex space-x-2 justify-center items-center",
    tableActionButtons: "flex items-center justify-center p-2 rounded-lg bg-gray-500 text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out shadow-md hover:shadow-lg active:scale-95",
    textSmall: "text-sm",
    dropdown: "text-black focus:outline-none w-5/6 p-2 bg-gray-200 border border-gray-400 focus:ring-gray-800 rounded-md"
}

const popupModalStyles = {
    mainContainer: "relative z-50",
    overlay: "fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity",
    modelContainer: "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-4",
    modelHeaderContainer: "relative w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white rounded-lg shadow-lg sm:my-8 p-6",
    modelHearder: "flex justify-between items-center border-b border-gray-200 pb-4",
    modelTitle: "text-lg font-semibold text-gray-900",
    modelCloseButton: "text-gray-800 bg-gray-700 hover:text-gray-600 focus:outline-none rounded-full p-2",
    modalContent: "py-6",
    modelFooterContainer: "flex justify-end space-x-3",
    modelFooterButton: "px-4 py-2 sm:w-1/5 md:w-1/5 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
}
const cardStyle = {
    cardContainerOnMediumSize: "block md:hidden",
    cardContainer: "mb-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-all w-full",
    cardContent: "flex justify-between items-center text-xs",
    cardActionContainer: "flex space-x-2 justify-center items-center",
    cardActionButton: "p-2 bg-gray-500 text-blue-500 rounded-lg hover:text-blue-700",
    cardButtonText: "text-sm",

    cardContentHeading: "text-sm font-semibold text-gray-700",
    cardContentText: "text-sm text-gray-600",
};

// Layout styles
const layoutStyles = {
    container: "container mx-auto px-4 sm:px-6 lg:px-8",
    section: "py-10",
    grid: (cols = 3) => `grid grid-cols-${cols} gap-6`,
    flexRow: "flex flex-row",
    flexColumn: "flex flex-col",
    responsiveFlex: "flex flex-wrap justify-between",
    card: "bg-white shadow-md rounded-lg p-4",
    row: "flex flex-row space-x-4",
    column: "flex flex-col space-y-4",
};

// Typography styles
const typographyStyles = {
    heading1: "text-3xl font-bold text-gray-900",
    heading2: "text-2xl font-semibold text-gray-800",
    heading3: "text-xl font-medium text-gray-700",
    paragraph: "text-base text-gray-600",
    smallText: "text-sm text-gray-500",
    boldText: "font-bold",
    italicText: "italic",
    textGray: "text-gray-600",
    textBlue: "text-blue-600",
    textRed: "text-red-600",
};

// Form and input styles
const formStyles = {
    input: "w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out",
    label: "block text-sm font-semibold text-gray-700",
    button: "px-4 py-2 bg-blue-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-700 transition duration-200",
    select: "w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out",
    checkbox: "form-checkbox text-blue-500",
    radioButton: "form-radio text-blue-500",
    textarea: "w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out",
};

// Table styles
const tableStyles = {
    tableContainerStyle: "p-4 mt-2 bg-white rounded-lg shadow-lg min-w-1/3 min-h-1/2",
    table: "min-w-full bg-white rounded-lg shadow-md border-collapse overflow-hidden hidden md:table",
    tableHeader: "bg-gray-100 border-b",
    teableheadingText: "py-2 px-4 text-center text-sm font-semibold text-gray-700 border",
    tableRow: "border-b hover:bg-gray-50 transition-colors duration-200",
    tableCellTd: "py-2 px-4 text-center text-sm text-gray-950 border",
    tableAction: "flex space-x-2 justify-center items-center",
    tableActionButtonText: "text-sm",
    tableActionButtons: "flex items-center justify-center p-2 rounded-lg bg-gray-500 text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out shadow-md hover:shadow-lg active:scale-95",
    tablePaginationContainer: " mt-6 flex flex-wrap items-center justify-center space-x-2",
    tablePaginationPreviousButton: "px-3 py-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200",
    tablePaginationForwordButton: "px-3 py-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200 hidden sm:inline",
    tableCounterButtonsuttonsContainer: "flex items-center space-x-2 mb-2 sm:mb-0",
    tablePaginationCounterButtonAnimation: "px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg transition duration-200",
    tablePaginationCounteButtons: "bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300",
    tablePaginatinonbuttonText: "bg-blue-600 text-white",
    tablePaginationButtonChange: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    tablePaginationNextButton: "px-3 py-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200"

};

// Button styles
const buttonStyles = {
    primary: "px-4 py-2 bg-blue-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-700 transition duration-200",
    secondary: "px-4 py-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-700 transition duration-200",
    danger: "px-4 py-2 bg-red-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 hover:bg-red-700 transition duration-200",
    iconButton: "p-2 rounded-lg text-gray-500 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200",
};

// Modal styles
const modalStyles = {
    overlay: "relative z-50",
    modelContainer: "fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity",
    modalContent: "bg-white rounded-lg p-6 shadow-lg",
    closeButton: "absolute top-0 right-0 p-2 text-gray-500 hover:text-red-500",
};

// Responsive styles
const responsiveStyles = {
    mobile: "sm:hidden",
    tablet: "sm:block md:hidden",
    desktop: "md:block",
    largeDesktop: "lg:block",
};


// Helper styles
const helperStyles = {
    errorText: "text-red-500 text-sm",
    successText: "text-green-500 text-sm",
    infoText: "text-blue-500 text-sm",
    warningText: "text-yellow-500 text-sm",
};

const styles = {
    utility: utilityStyle,
    tableStyles: tableStyles,
    popupModalStyles: popupModalStyles,
    cardStyle: cardStyle
};
export default styles;
