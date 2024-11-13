import React, { useState } from 'react';
import logo from '../assets/images/logo/9dattaE.png';
import InputField from '../Components/inputfield';
// Reusable Input Field Component


// Reusable Button Component
const FormButton = ({ children }) => (
    <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150"
    >
        {children}
    </button>
);

// Reusable Footer Link Component
const FooterLink = ({ onClick, children }) => (
    <a
        href="#"
        onClick={onClick}
        className="text-sm hover:text-blue-600 transition duration-150"
    >
        {children}
    </a>
);

const Login = () => {
    const [isCreateAccount, setIsCreateAccount] = useState(false);

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            {/* Login Card */}
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full md:max-w-[500px] overflow-hidden">
                {/* Logo and Header */}
                <div className="flex p-4 transition-transform duration-500 items-center justify-between mb-1">
                    <img src={logo} alt="Company Logo" className="h-1/2 w-1/2 mr-4" />
                    <h1 className="text-3xl font-semibold text-gray-800">
                        {isCreateAccount ? 'Create Account' : 'Welcome Back'}
                    </h1>
                </div>

                {/* Form Container */}
                <div className={`flex transition-transform duration-700 ${isCreateAccount ? 'transform translate-x-[-100%] flex-1' : ''}`}>
                    {/* Login Form */}
                    <div className=" min-h-1 min-w-full p-3">
                        <form className="space-y-6">
                            <InputField
                                id="Username"
                                name="username"
                                type="text"
                                placeholder=" username"
                                ariaLabel=" username"
                                autoComplete="username"
                            />
                            <InputField
                                id="Password"
                                name="password"
                                type="password"
                                placeholder=" password"
                                ariaLabel=" password"
                                autoComplete="current-password"
                            />
                            <InputField
                                id="Date"
                                name="date"
                                type="date"
                                placeholder="date"
                                ariaLabel="Date"
                                autoComplete="off"
                            />
                            <FormButton>Login</FormButton>
                        </form>
                    </div>

                    {/* Create Account Form */}
                    <div className="min-w-full p-3">
                        <form className="space-y-6">
                            <InputField
                                id="Name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                ariaLabel=" Name"
                                autoComplete="name"
                            />
                            <InputField
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Enter your username"
                                ariaLabel=" username"
                                autoComplete="username"
                            />
                            <InputField
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                ariaLabel=" password"
                                autoComplete="new-password"
                            />
                            <InputField
                                id="date"
                                name="date"
                                type="date"
                                placeholder="Enter your date"
                                ariaLabel="date"
                                autoComplete="off"
                            />
                            <FormButton>Create Account</FormButton>
                        </form>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="flex p-3 justify-between items-center text-gray-600">
                    <FooterLink onClick={() => setIsCreateAccount(false)}>
                        Already have an account? Login
                    </FooterLink>
                    <FooterLink onClick={() => setIsCreateAccount(true)}>
                        Create an Account
                    </FooterLink>
                </div>
            </div>
        </div>
    );
};

export default Login;
