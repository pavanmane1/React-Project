// MainContent.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainContent = () => (
    <div className="flex-grow h-screen relative pt-20 p-5 bg-[#f1f3f5]">
        <Outlet /> {/* Dynamic content goes here */}
    </div>
);

export default MainContent;
