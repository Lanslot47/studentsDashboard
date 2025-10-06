"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const links = [
        { id: 1, title: "Home", url: "/home" },
        { id: 2, title: "About", url: "/about" },
        { id: 3, title: "Gallery", url: "/gallery" },
    ]
    const [showDropDown, setShowDropDown] = useState(false);
    return (
        <div>
            <nav className="flex justify-between items-center w-full px-8 py-5 shadow-md fixes top-0 z-50 bg-white ">
                <div className="flex-1">
                    <Link className="font-bold text-md md:text-2xl text-green-600" href='/'><h1>The Greens College</h1></Link>
                </div>
                <div className="hidden md:flex justify-center flex-1 gap-6">
                    {
                        links.map(link => (
                            <Link className="text-gray-900 hover:text-green-500 transition font-semibold"
                                href={link.url}
                                key={link.id}>
                                {link.title}
                            </Link>
                        ))
                    }
                </div>
                <div className="flex-1 flex justify-end relative">
                    <button
                        onClick={() => setShowDropDown(prev => !prev)}
                        className="flex items-center gap-2 font-semibold py-2 px-6 rounded-md bg-gradient-to-r from-green-400 to bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Login
                        <ChevronDown className={`transition-transform duration-200 ${showDropDown ? 'rotate-180' : ''}`} size={18} />
                    </button>
                    {showDropDown && (
                        <div className="absolute top-full mt-2 right-0 w-48 border-1 rounded-md shadow-lg z-50 animate-fade-in">
                            <Link href='./auth/adminA' className="block px-4 py-2 hover:bg-gray-300 text-sm text-gray-700">
                                Admin Login
                            </Link>
                            <Link href='./student' className="block px-4 py-2 hover:bg-gray-300 text-sm text-gray-700">
                                Student Login
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}
export default Navbar