import React from 'react'

import { IoHome } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GrHostMaintenance } from "react-icons/gr";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { MdSupervisorAccount } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbCategory } from "react-icons/tb";

import { FaCity } from "react-icons/fa";

export const Sidebardata = [
    {
        title: "Home",
        path: "/",
        icon: <IoHome />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [], // No sub-menu for "Home"
    },
    {
        title: "Dashboard",
        path: "/Dashboard",
        icon: <MdDashboard />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [],

    },
    {
        title: "Account",
        path: "/Account",
        icon: <MdOutlineManageAccounts />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [
            { title: 'Currency Master', path: '/account/Currency', subIcon: <MdSupervisorAccount />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'Country Master', path: '/account/Country', subIcon: <MdSupervisorAccount />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'State Master', path: '/account/State', subIcon: <MdSupervisorAccount />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'City Master', path: '/account/City', subIcon: <MdSupervisorAccount />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'LocationMaster', path: '/account/LocationMaster', subIcon: <MdSupervisorAccount />, subSideIcon: <IoMdArrowDropright /> },
        ],
    },
    {
        title: "Master",
        path: "/Master",
        icon: <GrHostMaintenance />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [
            { title: 'Country', path: '/master/country', subIcon: <FaCity />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'State', path: '/master/state', subIcon: <FaCity />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'City', path: '/master/city', subIcon: <FaCity />, subSideIcon: <IoMdArrowDropright /> },
        ],

    },
    {
        title: "Product",
        path: "/product",
        icon: <MdProductionQuantityLimits />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [
            { title: 'Product category', path: '/Product/country', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'Product Master', path: '/Product/state', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            // { title: 'City', path: '/master/city',  subIcon :<FaCity/>,subSideIcon: <IoMdArrowDropright /> },
        ],

    },
    {
        title: "Account",
        path: "/Account",
        icon: <MdOutlineManageAccounts />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [
            { title: 'AC Master', path: '/account/master', subIcon: <MdSupervisorAccount />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'AC Sales', path: '/account/sales', subIcon: <MdSupervisorAccount />, subSideIcon: <IoMdArrowDropright /> },
        ],
    },
    {
        title: "Master",
        path: "/Master",
        icon: <GrHostMaintenance />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [
            { title: 'Country', path: '/master/country', subIcon: <FaCity />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'State', path: '/master/state', subIcon: <FaCity />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'City', path: '/master/city', subIcon: <FaCity />, subSideIcon: <IoMdArrowDropright /> },
        ],

    },
    {
        title: "Product",
        path: "/product",
        icon: <MdProductionQuantityLimits />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [
            { title: 'Product category', path: '/Product/country', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'Product Master', path: '/Product/state', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            // { title: 'City', path: '/master/city',  subIcon :<FaCity/>,subSideIcon: <IoMdArrowDropright /> },
        ],

    },
    {
        title: "Account",
        path: "/Account",
        icon: <MdOutlineManageAccounts />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [
            { title: 'AC Master', path: '/account/master', subIcon: <MdSupervisorAccount />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'AC Sales', path: '/account/sales', subIcon: <MdSupervisorAccount />, subSideIcon: <IoMdArrowDropright /> },
        ],
    },
    {
        title: "Master",
        path: "/Master",
        icon: <GrHostMaintenance />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [
            { title: 'Country', path: '/master/country', subIcon: <FaCity />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'State', path: '/master/state', subIcon: <FaCity />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'City', path: '/master/city', subIcon: <FaCity />, subSideIcon: <IoMdArrowDropright /> },
        ],

    },
    {
        title: "Product",
        path: "/product",
        icon: <MdProductionQuantityLimits />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [
            { title: 'Product category', path: '/Product/country', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'Product Master', path: '/Product/state', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            // { title: 'City', path: '/master/city',  subIcon :<FaCity/>,subSideIcon: <IoMdArrowDropright /> },
        ],

    },
    {
        title: "Account",
        path: "/Account",
        icon: <MdOutlineManageAccounts />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [
            { title: 'AC Master', path: '/account/master', subIcon: <MdSupervisorAccount />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'AC Sales', path: '/account/sales', subIcon: <MdSupervisorAccount />, subSideIcon: <IoMdArrowDropright /> },
        ],
    },
    {
        title: "Master",
        path: "/Master",
        icon: <GrHostMaintenance />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [
            { title: 'Country', path: '/master/country', subIcon: <FaCity />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'State', path: '/master/state', subIcon: <FaCity />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'City', path: '/master/city', subIcon: <FaCity />, subSideIcon: <IoMdArrowDropright /> },
        ],

    },
    {
        title: "Product",
        path: "/product",
        icon: <MdProductionQuantityLimits />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [
            { title: 'Product category', path: '/Product/country', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'Product Master', path: '/Product/state', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            // { title: 'City', path: '/master/city',  subIcon :<FaCity/>,subSideIcon: <IoMdArrowDropright /> },
        ],

    },
    {
        title: "Product",
        path: "/product",
        icon: <MdProductionQuantityLimits />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [
            { title: 'Product category', path: '/Product/country', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'Product Master', path: '/Product/state', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            // { title: 'City', path: '/master/city',  subIcon :<FaCity/>,subSideIcon: <IoMdArrowDropright /> },
        ],

    },
    {
        title: "Product",
        path: "/product",
        icon: <MdProductionQuantityLimits />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [
            { title: 'Product category', path: '/Product/country', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'Product Master', path: '/Product/state', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            // { title: 'City', path: '/master/city',  subIcon :<FaCity/>,subSideIcon: <IoMdArrowDropright /> },
        ],

    },
    {
        title: "Product",
        path: "/product",
        icon: <MdProductionQuantityLimits />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [
            { title: 'Product category', path: '/Product/country', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'Product Master', path: '/Product/state', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            // { title: 'City', path: '/master/city',  subIcon :<FaCity/>,subSideIcon: <IoMdArrowDropright /> },
        ],

    },
    {
        title: "Product",
        path: "/product",
        icon: <MdProductionQuantityLimits />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [
            { title: 'Product category', path: '/Product/country', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'Product Master', path: '/Product/state', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            // { title: 'City', path: '/master/city',  subIcon :<FaCity/>,subSideIcon: <IoMdArrowDropright /> },
        ],

    },
    {
        title: "Product",
        path: "/product",
        icon: <MdProductionQuantityLimits />,
        sideIcon: <IoIosArrowDropdownCircle />,
        subMenu: [
            { title: 'Product category', path: '/Product/country', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            { title: 'Product Master', path: '/Product/state', subIcon: <TbCategory />, subSideIcon: <IoMdArrowDropright /> },
            // { title: 'City', path: '/master/city',  subIcon :<FaCity/>,subSideIcon: <IoMdArrowDropright /> },
        ],

    },


]