import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
    const [isOpen, setMenuState] = useState(false);

    return (
        <nav className="glass   header top-5 left-2/5 h-[50px] md:h-[70px] flex justify-between items-center p-6 cursor-pointer">
            <div className="flex items-center space-x-4">
                <img src="./svg/logo.svg" alt="Logo" className="h-10" />
                <h1 className="text-[crimson] text-2xl font-bold">Kumo Kirie</h1>
            </div>
            <ul className="hidden md:flex space-x-8">
                <li className="text-red-800 hover:text-red-500 transition-colors duration-300">Home</li>
                <li className="text-red-800 hover:text-red-500 transition-colors duration-300">About</li>
                <li className="text-red-800 hover:text-red-500 transition-colors duration-300">Projects</li>
                <li className="text-red-800 hover:text-red-500 transition-colors duration-300">Contact</li>
            </ul>
            <div className="md:hidden">
                {isOpen ? (
                    <X onClick={() => setMenuState(!isOpen)} className="w-8 h-8 text-blue-600" />
                ) : (
                    <Menu onClick={() => setMenuState(!isOpen)} className="w-8 h-8 text-blue-600" />
                )}
            </div>
        <div className={`glass sidebar ${isOpen && `showDialog`} place-items-center text-white w-64 fixed`}>
            <ul className="space-y-4 p-4">
                <li className="hover:bg-gray-700 p-2 rounded"><a href="#home">Home</a></li>
                <li className="hover:bg-gray-700 p-2 rounded"><a href="#about">About</a></li>
                <li className="hover:bg-gray-700 p-2 rounded"><a href="#services">Services</a></li>
                <li className="hover:bg-gray-700 p-2 rounded"><a href="#contact">Contact</a></li>
            </ul>
        </div>
            
        </nav>
    );
}

export default Header;