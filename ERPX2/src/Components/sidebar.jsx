// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebardata } from './sidebarData';

const Sidebar = ({ active, setActive, isSidebarOpen }) => {
    const handleMenuClick = (index) => {
        setActive((prev) => (prev === index ? null : index));
    };

    return (
        <div className={`h-screen bg-[#004085] text-white transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-[260px]' : 'w-0'} overflow-hidden`}>
            <div className="h-[60px] bg-[#004085] flex items-center justify-start px-4">
                Datta Enterprise
            </div>

            <ul className="space-y-2 p-2">
                {Sidebardata.map((item, index) => (
                    <li key={index} className={`transition duration-300 ease-in-out ${active === index ? 'bg-[#0056b3]' : 'bg-[#004085]'} rounded-lg`}>
                        <Link to={item.path} onClick={() => handleMenuClick(index)}
                            className="flex items-center text-white cursor-pointer p-3 hover:bg-[#007bff] transition duration-300"
                        >
                            <span className="text-xl mr-3">{item.icon}</span>
                            <span className="text-lg flex-grow">{item.title}</span>
                            {item.sideIcon && item.subMenu.length > 0 && (
                                <span className="text-xl ml-3">{item.sideIcon}</span>
                            )}
                        </Link>
                        {active === index && item.subMenu.length > 0 && (
                            <ul className="pl-6 space-y-2">
                                {item.subMenu.map((subItem, subIndex) => (
                                    <li key={subIndex} className="p-3 rounded-md bg-[#0056b3] hover:bg-[#007bff] transition duration-300">
                                        <Link to={subItem.path} className="flex items-center text-white">
                                            <span className="text-xl mr-3">{subItem.subIcon}</span>
                                            <span className="text-lg flex-grow">{subItem.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
