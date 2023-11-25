"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // usePathname is a hook now imported from navigation

interface SidebarProps {
    MenuContent?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ MenuContent }) => {
    const router = usePathname();
    const topMenu = [
        {
            icon: 'dashboard',
            navigate: '',
            active: false,
            url: '/dashboard'
        },
        {
            icon: 'map',
            navigate: '',
            active: true,
            url: '/vessel-group'
        },
    ]

    const bottomMenu = [
        {
            icon: 'info',
            navigate: '',
            active: false,
            url: '/info'
        },
        {
            icon: 'user',
            navigate: '',
            active: false,
            url: '/profile'
        },
        {
            icon: 'sign-out-alt',
            navigate: '',
            active: false,
            url: 'logout'
        },
    ]
    return (
        <div className="fixed">
                <div className="w-32 h-screen bg-black flex flex-col justify-between">
                    {/* TOP SECTIONS */}
                    <div className="flex p-3 flex-col gap-5">
                        {/* APP LOGO SECTIONS */}
                        <div className="flex justify-center my-5">
                            <i className="fi fi-rr-sailboat text-white text-[2rem]"></i>
                        </div>
                        {/* NAVIGATION SECTIONS  */}
                        <div className="flex justify-center">
                            <ul className="list-none space-y-10">
                                {
                                    topMenu.map((item,key) => {
                                        return (
                                            <li key={'top-menu-item-'+key}>
                                                {
                                                    item.url !== 'logout' ? (
                                                        <Link href={item?.url}>
                                                            <i className={`${router.startsWith(item.url) ? 'text-white font-bold' : 'text-gray-500' } text-[20px] fi fi-rr-${item.icon} hover:text-gray-50`}></i>
                                                        </Link>
                                                    ) : (
                                                        <div onClick={()=> alert('logout')}>
                                                            <i className={`${router.startsWith(item.url) ? 'text-white font-bold' : 'text-gray-500' } text-[20px] fi fi-rr-${item.icon} hover:text-gray-50`}></i>
                                                        </div>
                                                    )
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    {/* BOTTOM SECTIONS */}
                    <div className="flex p-3 flex-col gap-5 mb-10">
                        {/* NAVIGATION SECTIONS  */}
                        <div className="flex justify-center">
                            <ul className="list-none space-y-10">
                            {
                                    bottomMenu.map((item,key) => {
                                        return (
                                            <li key={'top-menu-item-'+key}>
                                                {
                                                    item.url !== 'logout' ? (
                                                        <Link href={item?.url}>
                                                            <i className={`${router.startsWith(item.url) ? 'text-white font-bold' : 'text-gray-500' } text-[20px] fi fi-rr-${item.icon} hover:text-gray-50`}></i>
                                                        </Link>
                                                    ) : (
                                                        <div onClick={()=> alert('logout')}>
                                                            <i className={`${router.startsWith(item.url) ? 'text-white font-bold' : 'text-gray-500' } text-[20px] fi fi-rr-${item.icon} hover:text-gray-50`}></i>
                                                        </div>
                                                    )
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}


export default Sidebar;