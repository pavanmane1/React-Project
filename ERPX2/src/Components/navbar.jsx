import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Outlet
import { Sidebardata } from './sidebarData';
import { MdManageAccounts } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../assets/images/logo/9dattaE.png';
const Navbar = () => {
    const [active, setActive] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleMenuClick = (index) => {
        setActive((prev) => (prev === index ? null : index));
    };

    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    return (<>
        <div >

        </div>
        <div className='flex min-h-screen min-w-full'>
            <nav className=" bg-gray-100">
                {/* Sidebar */}
                <div className={`h-screen bg-[#004085] text-white transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-[260px]' : 'w-0'} overflow-hidden`}>
                    <div className="h-[60px] bg-[#004085] flex items-center justify-start px-4">
                        <img src={logo} alt="Logo" className="h-9" sizes='24' />
                    </div>

                    <ul className="space-y-2 p-2  h-screen overflow-y-auto scrollbar-hide transition duration-500 scroll-smooth">
                        {Sidebardata.map((item, index) => (
                            <li key={index} className={`transition duration-300 ease-in-out ${active === index ? 'bg-[#0056b3]' : 'bg-[#004085]'} rounded-lg`}>
                                <Link to={item.subMenu.length === 0 ? item.path : '#'} onClick={() => handleMenuClick(index)}
                                    className="flex items-center text-white cursor-pointer p-3 hover:bg-[#007bff] transition duration-300"
                                >
                                    <span className="text-xl mr-3">{item.icon}</span>
                                    <span className="text-lg flex-grow">{item.title}</span>
                                    {item.sideIcon && item.subMenu.length > 0 && (
                                        <span className="text-xl ml-3">{item.sideIcon}</span>
                                    )}
                                </Link>

                                {/* Sub-menu items */}
                                {active === index && item.subMenu.length > 0 && (
                                    <ul className="pl-6 space-y-2">
                                        {item.subMenu.map((subItem, subIndex) => (
                                            <li key={subIndex} className="p-3 rounded-md bg-[#0056b3] hover:bg-[#007bff]  transition duration-300">
                                                <Link to={subItem.path} className="flex items-center text-white">
                                                    <span clssName="text-xl mr-3">{subItem.subIcon}</span>
                                                    <span className="text-lg flex-grow ">{subItem.title}</span>
                                                    {subItem.subSideIcon && (
                                                        <span className="text-xl ml-3">{subItem.subSideIcon}</span>
                                                    )}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                </div>



                {/* Hamburger Menu Button (For Mobile View) */}
                <div className="absolute top-4 left-4 lg:hidden transition duration-300">
                    <button onClick={toggleSidebar} className="text-black">
                        {isSidebarOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Main content area */}
            <div className="flex-grow h-screen relative">
                <div className="flex justify-between w-full bg-[#004085] text-white p-3 absolute top-0">
                    <div>
                        <button onClick={toggleSidebar} className="text-white">
                            {isSidebarOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                        </button>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <img src={logo} alt="Logo" className="h-8" />
                        </div>
                        <div className='mr-2'>Icons</div>
                        <div className='mr-2'><MdManageAccounts size={30} /></div>
                    </div>
                </div>
                {/* Render routed content */}
                <div className="pt-20 p-5 bg-[#f1f3f5]">
                    <Outlet />
                </div>

            </div>

        </div>


    </>
    );
};

export default Navbar;
