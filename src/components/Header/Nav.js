import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-900 py-4">
            <nav className="flex justify-between items-center w-[92%] mx-auto">
                <div className="w-16 font-bold text-blue-100">
                    Amwell
                </div>
                <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <a className="hover:text-gray-500" href="#">Who We Serve</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">What We Offer</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">About Us</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Resources</a>
                        </li>
                        <li>
                            <button className="hover:text-gray-500" href="#">See Doctor</button>
                        </li>
                        <li>
                            <button className="hover:text-gray-500" href="#">Contact Us</button>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <ion-icon onclick="onToggleMenu(this)" name="menu" className="text-3xl cursor-pointer md:hidden text-white"></ion-icon>
                    <ion-icon name="search" className="text-3xl cursor-pointer text-white"></ion-icon> 
                </div>
            </nav>
        </header>
    );
};

export default Header;
