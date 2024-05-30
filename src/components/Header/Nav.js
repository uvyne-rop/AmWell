import React from 'react';

const Nav = () => {
    return (
        <header className="bg-blue-900 py-4">
            <nav className="flex justify-between items-center w-[92%] mx-auto">
                <div className="w-16 font-bold text-blue-100">
                    {/* SVG Icon from Amwell assets */}
                    <img src="https://cdn.cookielaw.org/logos/8bcf9297-0df2-44bc-a5d8-52441b7f4d31/fce25745-0207-486a-b071-ce736f8d57e9/ccb7501c-2eaf-4f03-97b9-cb87639303ba/Amwell_Logo_Blue_2023_v02_CMYK.jpg" alt="Amwell Logo" />
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
                    <img src="https://img.freepik.com/free-vector/ui-ux-element-search_24877-82663.jpg?t=st=1717081618~exp=1717085218~hmac=dbde706acc02c47b9b14d450a7ff247e42fb96818e689ef11deb7e59a7bde2f2&w=740" alt="Search Icon" className="cursor-pointer text-white" style={{ width: '24px', height: '24px' }} />
                </div>
            </nav>
        </header>
    );
};

export default Nav;
