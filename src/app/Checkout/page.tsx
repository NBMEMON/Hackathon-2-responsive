import React from 'react';
import product1 from "../images/shoe1.png";
import product2 from "../images/shoe2.png";
import Image from 'next/image';
import Header from "../components/header";
import Footer from "../images/Frame (2).png";

export default function Checkout() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-6 max-w-[1000px]">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* Left Section: Form */}
          <div className="flex-1 bg-white p-4 sm:p-6 rounded-md shadow-md">
            <h1 className="text-lg sm:text-xl font-bold mb-4">
              How would you like to get your order?
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              Customs regulation for India requires a copy of the recipient's KYC. The address on
              this KYC needs to match the shipping address. Our courier will contact you via
              SMS/email to obtain a copy of your KYC.{' '}
              <a href="#" className="text-blue-500 underline">
                Learn More
              </a>
            </p>
            <button className="w-full max-w-[440px] h-20 border border-black py-2 rounded-lg mb-6 flex items-center justify-center">
              Deliver it
            </button>

            {/* Form */}
            <form>
              <h2 className="font-bold text-lg mb-4">Enter your name and address:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="First Name" className="border rounded-md p-2" />
                <input type="text" placeholder="Last Name" className="border rounded-md p-2" />
                <input
                  type="text"
                  placeholder="Address Line 1"
                  className="border rounded-md p-2 col-span-2"
                />
                <input type="text" placeholder="Address Line 2" className="border rounded-md p-2" />
                <input type="text" placeholder="Address Line 3" className="border rounded-md p-2" />
                <input type="text" placeholder="Postal Code" className="border rounded-md p-2" />
                <input type="text" placeholder="Locality" className="border rounded-md p-2" />
                <select className="border rounded-md p-2">
                  <option value="">State/Territory</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Maharashtra">Maharashtra</option>
                </select>
                <select className="border rounded-md p-2">
                  <option value="">India</option>
                </select>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <input type="checkbox" id="save-address" className="w-4 h-4" />
                <label htmlFor="save-address" className="text-sm">
                  Save this address to my profile
                </label>
              </div>

              {/* Contact Information */}
              <h2 className="font-bold text-lg mb-4">What's your contact information?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="email" placeholder="Email" className="border rounded-md p-2" />
                <input type="text" placeholder="Phone Number" className="border rounded-md p-2" />
              </div>

              {/* PAN */}
              <h2 className="font-bold text-lg mb-4">What's your PAN?</h2>
              <input type="text" placeholder="PAN" className="border rounded-md p-2 w-full mb-4" />
              <div className="flex items-center gap-2 mb-4">
                <input type="checkbox" id="save-pan" className="w-4 h-4" />
                <label htmlFor="save-pan" className="text-sm">
                  Save PAN details to my profile
                </label>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <input type="checkbox" id="consent" className="w-4 h-4" />
                <label htmlFor="consent" className="text-sm">
                  I have read and consent to Nikeworld processing my information.
                </label>
              </div>
              <div className="flex justify-center">
                <button className="w-full max-w-[440px] h-14 bg-gray-200 text-gray-700 rounded-full">
                  Continue
                </button>
              </div>
            </form>
          </div>

          {/* Right Section: Order Summary */}
          <div className="w-full lg:w-1/3 bg-white p-4 sm:p-6 rounded-md shadow-md">
            <h1 className="text-lg sm:text-xl font-bold mb-4">Order Summary</h1>
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-bold text-gray-600">₹ 20,890.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Delivery/Shipping</p>
                <p className="font-bold text-gray-600">Free</p>
              </div>
              <div className="border-t pt-4 flex justify-between">
                <p className="font-bold">Total</p>
                <p className="font-bold">₹ 20,890.00</p>
              </div>
              <p className="text-sm text-gray-600">
                (The total reflects the price of your order, including all duties and taxes.)
              </p>
            </div>
            <div className="mt-6">
              <p className="text-sm font-bold">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
              <div className="flex items-center gap-4 mt-4">
                <Image
                  src={product2}
                  alt="Nike Shirt"
                  className="w-full max-w-[208px] h-auto object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold text-sm">Nike Dri-FIT ADV TechKnit Ultra</p>
                  <p className="text-sm text-gray-600">Qty 1, Size L</p>
                  <p className="font-bold text-sm">₹ 3,895.00</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <Image
                  src={product1}
                  alt="Nike Shoes"
                  className="w-full max-w-[208px] h-auto object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold text-sm">Nike Air Max 97 SE</p>
                  <p className="text-sm text-gray-600">Qty 1, Size UK 8</p>
                  <p className="font-bold text-sm">₹ 16,995.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={Footer} alt="Footer" className="w-full" />
    </div>
  );
}
