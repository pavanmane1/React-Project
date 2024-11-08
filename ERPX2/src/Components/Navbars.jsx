import React from 'react'

export const Navbars = () => {
    return (
        <div><nav className=" bg-gray-100">
            {/* Sidebar */}
            <div className={`h-screen bg-[#004085] text-white transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-[260px]' : 'w-0'} overflow-hidden`}>
                <div className="h-[60px] bg-[#004085] flex items-center justify-start px-4">
                    Datta Enterprise
                </div>



            </div>



            {/* Hamburger Menu Button (For Mobile View) */}
            <div className="absolute top-4 left-4 lg:hidden transition duration-300">
                <button onClick={toggleSidebar} className="text-black">
                    {isSidebarOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </button>
            </div>
        </nav>
        </div>
    )
}
