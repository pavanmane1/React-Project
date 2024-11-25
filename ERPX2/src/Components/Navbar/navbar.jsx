import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Outlet
import { Sidebardata } from '../../data/sidebarData';
import { MdManageAccounts } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../../assets/images/logo/9dattaE.png';

const Navbar = () => {
    const [active, setActive] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchText, setsearchText] = useState('')
    const handleMenuClick = (index) => {
        setActive((prev) => (prev === index ? null : index));
    };

    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };
    const handelSearchchange = (e) => {
        setsearchText(e.target.value.toLowerCase())

    }
    const filterData = Sidebardata.filter((item) => {
        return item.title.toLowerCase().includes(searchText) || item.subMenu.some(subItem => subItem.title.toLocaleLowerCase().includes(searchText))
    })

    return (<>
        <div >

        </div>
        <div className='flex min-h-screen min-w-full'>
            <nav className=" bg-gray-100">
                {/* Sidebar */}
                <div className={`h-screen bg-primary text-white transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-[260px]' : 'w-0'} overflow-hidden`}>
                    <div className="h-[60px] bg-primary flex items-center justify-start px-4">
                        <img src={logo} alt="Logo" className="h-9" sizes='24' />
                    </div>

                    <ul className="space-y-2 p-2  h-screen overflow-y-auto scrollbar-hide transition duration-500 scroll-smooth">
                        <input type="text"
                            name='searchbar'
                            placeholder="Search..."
                            value={searchText}
                            onChange={handelSearchchange}
                            className="w-full p-2 border text-black border-gray-300 rounded-lg focus:outline-none  focus:ring-1 focus:ring-blue-500 transition duration-200 animate-fade-slide" />
                        {filterData.map((item, index) => (
                            <li key={index} className={`transition duration-300 ease-in-out rounded-lg ${active === index ? 'bg-secondary' : 'bg-primary'}  animate-fade-slide`}
                            >
                                <Link to={item.subMenu.length === 0 ? item.path : '#'} onClick={() => handleMenuClick(index)}
                                    className="flex items-center text-white cursor-pointer p-3 hover:bg-accent transition duration-300"
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
                                            <li key={subIndex} className="p-3 rounded-md bg-secondary hover:bg-accent transition duration-300  animate-fade-slide"
                                            >
                                                <Link to={subItem.path} className="flex items-center text-white">
                                                    <span className="text-xl mr-3">{subItem.subIcon}</span>
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
                    {/* <button onClick={toggleSidebar} className="text-black">
                        {isSidebarOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button> */}
                </div>
            </nav>

            {/* Main content area */}
            <div className="flex-grow h-screen relative">
                <div className="flex justify-between w-full bg-primary text-white p-3 absolute top-0">
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
                <div className="pt-14 p-4 bg-background">
                    <Outlet />
                </div>

            </div>

        </div>


    </>
    );
};

export default Navbar;
