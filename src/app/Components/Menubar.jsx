"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menubar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () =>{
        setShowMenu(!showMenu);
    }

    console.log(showMenu);
    return (
        <div className="lg:hidden">
            <Image onClick={()=>handleShowMenu()} src={'/icons8-menu-50.png'} className="lg:hidden relative" alt="menu icon" height={30} width={30}></Image>
            <div className={`p-2 ${showMenu ? "block lg:hidden": "hidden"} rounded bg-white text-black
             absolute top-12 left-12`}>
                <Link className="hover:bg-blue-100 transition duration-200" href={'chatHistory'}>History</Link>
                <ul>
                    <li className="hover:bg-blue-100 transition duration-200">Store</li>
                    <li className="hover:bg-blue-100 transition duration-200">AI Task</li>
                </ul>
            </div>
        </div>
    );
};

export default Menubar;