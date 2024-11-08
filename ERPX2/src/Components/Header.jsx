// Header.js
import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import logo from '../assets/images/logo/9dattaE.png';

const Header = ({ toggleSidebar, isSidebarOpen }) => (
    <div className="flex justify-between w-full bg-[#343a40] text-white p-3">
        <button onClick={toggleSidebar} className="text-white">
            {isSidebarOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
        <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8" />
            <div className="mr-2">Icons</div>
            <MdManageAccounts size={30} />
        </div>
    </div>
);

export default Header;
