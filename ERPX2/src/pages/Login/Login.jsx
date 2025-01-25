import React, { useState } from 'react';
import logo from '../../assets/images/logo/9dattaE.png';
import InputField from '../../Components/inputfield';
import axios from 'axios';
// Reusable Input Field Component


// Reusable Button Component
const FormButton = ({ onclick, children }) => (
    <button
        onClick={onclick}
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

const Login = ({ handleLogin }) => {
    const [isCreateAccount, setIsCreateAccount] = useState(false);
    const [logindata, setLogindata] = useState({
        username: '',
        password: '',
        date: ''
    })
    const [newUserDetails, setNewuserDetails] = useState({
        name: '',
        username: '',
        password: '',
        mobile: ''
    })
    const onInputChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        if (isCreateAccount) {
            setNewuserDetails((prevData) => ({ ...prevData, [name]: value }))

        } else {
            setLogindata((prevData) => ({ ...prevData, [name]: value }))
        }
    }

    const handleLoginClick = async (e) => {
        e.preventDefault()
        if (isCreateAccount) {
            try {
                const response = await axios.post("http://192.168.7.16:8081/api/users/user", newUserDetails)
                console.log(response.data);
                if (response.data.success) {
                    alert("user add successed")
                }

            } catch (error) {
                console.error("Login error:", error);
                // alert("An error occurred during login.");
            }

        } else {
            try {
                const response = await axios.post("http://192.168.7.16:8081/api/auth/userlogin", logindata)
                console.log(response.data)
                if (response.data.loginstatus) {

                    sessionStorage.setItem("authTocken", response.data.token)
                    handleLogin()
                }
            } catch (error) {
                console.error("Login error:", error);
                // alert("An error occurred during login.");
            }

        }

    }
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            {/* Login Card */}
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full md:max-w-[500px] overflow-hidden">
                {/* Logo and Header */}
                <div className="flex p-2 transition-transform duration-500 items-center justify-between mb-1">
                    <img src={logo} alt="Company Logo" className="h-1/2 w-1/2 mr-4" />
                    <h1 className="text-3xl font-semibold text-gray-800 opacity-75 tracking-wide">
                        {isCreateAccount ? 'Create Account' : 'Welcome Back'}
                    </h1>
                </div>

                {/* Form Container */}
                <div className={`flex transition-transform duration-700 ${isCreateAccount ? 'transform translate-x-[-100%] flex-1 1 0 display-none' : ''}`}>
                    {/* Login Form */}
                    <div className=" min-h-1 min-w-full p-3">
                        <form className="space-y-5">
                            <InputField
                                id="Username"
                                name={"username"}
                                type="text"
                                onChange={onInputChange}
                                value={logindata.username}
                                placeholder=" username"
                                ariaLabel=" username"
                                autoComplete="username"
                            />
                            <InputField
                                id="Password"
                                name={"password"}
                                type="password"
                                onChange={onInputChange}
                                value={logindata.password}
                                placeholder=" password"
                                ariaLabel=" password"
                                autoComplete="current-password"
                            />
                            <InputField
                                id="Date"
                                name="date"
                                type="date"
                                placeholder="date"
                                value={logindata.date}
                                onChange={onInputChange}
                                ariaLabel="Date"
                                autoComplete="off"
                            />
                            <FormButton onclick={handleLoginClick}>Login</FormButton>
                        </form>
                    </div>

                    {/* Create Account Form */}
                    <div className="min-w-full p-3 ">
                        <form className="space-y-5">
                            <InputField
                                id="Name"
                                name="name"
                                onChange={onInputChange}
                                value={newUserDetails.name}
                                type="text"
                                placeholder="Enter your name"
                                ariaLabel=" Name"
                                autoComplete="name"
                            />
                            <InputField
                                id="username"
                                name="username"
                                onChange={onInputChange}
                                value={newUserDetails.username}
                                type="text"
                                placeholder="Enter your username"
                                ariaLabel=" username"
                                autoComplete="username"
                            />
                            <InputField
                                id="password"
                                name="password"
                                onChange={onInputChange}
                                value={newUserDetails.password}
                                type="password"
                                placeholder="Enter your password"
                                ariaLabel=" password"
                                autoComplete="new-password"
                            />
                            <InputField
                                id="mobile"
                                name="mobile" onChange={onInputChange}
                                value={newUserDetails.mobile}
                                type="number"
                                placeholder="Enter your mobile"
                                ariaLabel="mobile"
                                autoComplete="off"
                            />
                            <FormButton onclick={handleLoginClick}>Create Account</FormButton>
                        </form>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="flex p-2 justify-between items-center text-gray-600">
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
