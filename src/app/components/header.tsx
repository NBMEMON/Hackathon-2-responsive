import Image from "next/image";
import NikeLogo from "../images/lebron.png";
import NikeLogo1 from "../images/nike logo.png";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa"; // Importing icons from react-icons/fa
import Link from "next/link";

export default function Header() {
  return (
    <div>
      {/* Top Bar */}
      <div className="w-full h-9 bg-[#F5F5F5] flex justify-between items-center px-4 sm:px-12">
        <Image
          className="h-6"
          src={NikeLogo}
          alt="Nike Logo"
        />
        <div className="text-xs sm:text-sm font-medium flex space-x-2 sm:space-x-4">
          <span>Find a Store</span>
          <span>|</span>
          <Link href="/Help">Help</Link>
          <span>|</span>
          <Link href="/JoinUs">Join Us</Link>
          <span>|</span>
          <Link href="/SignUpPage">Sign in</Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full h-14 bg-white flex flex-col sm:flex-row justify-between items-center px-4 sm:px-12">
        {/* Logo */}
        <Link href="/">
          <Image
            src={NikeLogo1}
            alt="Nike Logo"
            className="h-10"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center items-center space-x-4 mt-2 sm:mt-0">
          <li className="text-sm">New & Featured</li>
          <li className="text-sm">Men</li>
          <li className="text-sm">Women</li>
          <li className="text-sm">Kids</li>
          <li className="text-sm">Sale</li>
          <li className="text-sm font-bold">SNKRS</li>
        </ul>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full max-w-sm h-10 py-2 pl-10 pr-4 border rounded-full bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
          </div>

          {/* Heart and Cart Icons */}
          <div className="flex space-x-4">
            <FaHeart className="h-6 text-gray-500" size={20} />
            <Link href="/Cart">
              <FaShoppingCart className="h-6 text-gray-500" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* App Promotion */}
      <div className="flex flex-col justify-center items-center px-4 py-6">
        <h3 className="font-extrabold text-lg sm:text-xl">Hello Nike App</h3>
        <p className="text-xs sm:text-sm text-center max-w-md">
          Download the app to access everything Nike. Get Your Great.
        </p>
      </div>
    </div>
  );
}
