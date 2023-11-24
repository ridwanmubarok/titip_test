import React from "react";
import Filter from "../forms/Filter";
import Link from "next/link";

interface SidebarProps {
    MenuContent?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ MenuContent }) => {

    const topMenu = [
        {
            icon: 'map',
            navigate: '',
            active: true
        },
        {
            icon: 'box-open',
            navigate: '',
            active: false
        },
    ]

    const bottomMenu = [
        {
            icon: 'info',
            navigate: '',
            active: false
        },
        {
            icon: 'user',
            navigate: '',
            active: false
        },
        {
            icon: 'sign-out-alt',
            navigate: '',
            active: false
        },
    ]
    return (
        <div className="fixed">
                <div className="w-32 h-screen bg-black flex flex-col justify-between">
                    {/* top section */}
                    <div className="flex p-3 flex-col gap-5">
                        {/* APP LOGO SECTIONS */}
                        <div className="flex justify-center my-5">
                            <div className='text-lg font-bold'>LOGO</div>
                        </div>
                        {/* NAVIGATION SECTIONS  */}
                        <div className="flex justify-center">
                            <ul className="list-none space-y-10">
                                {
                                    topMenu.map((item,key) => {
                                        return (
                                            <li key={'top-menu-item-'+key}>
                                                <Link href="">
                                                    <i className={`${item?.active ? 'text-white font-bold' : 'text-gray-500' } text-[20px] fi fi-rr-${item.icon}`}></i>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    {/* Bottom section */}
                    <div className="flex p-3 flex-col gap-5 mb-10">
                        {/* NAVIGATION SECTIONS  */}
                        <div className="flex justify-center">
                            <ul className="list-none space-y-10">
                            {
                                    bottomMenu.map((item,key) => {
                                        return (
                                            <li key={'bottom-menu-item-'+key}>
                                                <Link href="">
                                                    <i className={`${item?.active ? 'text-white font-bold' : 'text-gray-500' } text-[20px] fi fi-rr-${item.icon}`}></i>
                                                </Link>
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