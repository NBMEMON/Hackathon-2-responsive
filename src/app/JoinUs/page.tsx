import Image from "next/image";
import NikeLogo from "../images/nike logo.png"
import React from "react";
import Header from "../components/header"
import Footer from "../components/footer";


export default function JoinUs() {
  return (
    <div>
        <Header/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 m-[20px ]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <Image
          src={NikeLogo}
          alt="Nike Logo"
          className="h-20 mx-auto "
        />
        <h1 className="text-2xl font-semibold text-center mb-6">
          Become a Nike Member
        </h1>
        <p className="text-center text-sm text-gray-500 mb-4">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Country/Region
            </label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Gender
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  className="form-radio text-black focus:ring-black"
                />
                <span className="ml-2 text-sm text-gray-700">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  className="form-radio text-black focus:ring-black"
                />
                <span className="ml-2 text-sm text-gray-700">Female</span>
              </label>
            </div>
          </div>
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-black focus:ring-black"
              />
              <span className="ml-2 text-sm text-gray-700">
                Sign up for emails to get updates from Nike on products, offers,
                and member benefits
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            Join Us
          </button>
          <p className="text-center text-sm text-gray-500 mt-4">
            Already a member?{" "}
            <a href="#" className="text-black font-medium">
              Sign In
            </a>
          </p>
        </form>
      </div>
      </div>
      <Footer/>
    </div>
  );
}
