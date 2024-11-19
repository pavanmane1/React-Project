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

const utilityStyles = {
    flexCenter: "flex justify-center items-center",
    fullWidth: "w-full",
    fullHeight: "h-full",
    padding: (size = 2) => `p-${size}`,
    margin: (size = 2) => `m-${size}`,
    textCenter: "text-center",
    textRight: "text-right",
    textLeft: "text-left",
    displayNone: "hidden",
    displayBlock: "block",
    displayFlex: "flex",
    displayInlineBlock: "inline-block",
    transitionDefault: "transition duration-200 ease-in-out",
    shadowDefault: "shadow-lg",
    roundedDefault: "rounded-lg",
    borderDefault: "border border-gray-300",
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
    tableContainer: "p-4 mt-2 bg-white rounded-lg shadow-lg min-w-1/3 min-h-1/2",
    table: "min-w-full bg-white rounded-lg shadow-md border-collapse",
    tableHeader: "bg-gray-100 border-b",
    tableRow: "border-b hover:bg-gray-50 transition-colors duration-200",
    tableCell: "py-2 px-4 text-center text-sm text-gray-700 border",
    tableAction: "flex space-x-2 justify-center items-center",
    tableActionButtons: "flex items-center justify-center p-2 rounded-lg bg-gray-500 text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out shadow-md hover:shadow-lg active:scale-95",
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
    overlay: "fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50",
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
    utility: utilityStyle

};
export default styles;
