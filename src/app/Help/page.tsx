// pages/help.js
import React from "react";
import Header from "../components/header"
import Footer from "../components/footer"
import Phone from "../images/phone.png"
import Message from "../images/message.png"
import Mail from "../images/mail.png"
import Pin from "../images/pin icon.png"
import Image from "next/image";
import tUp from "../images/thumbsUp.png"
import tDown from "../images/ThumbsDown.png"

export default function HelpPage() {
  return (
    <div>
        <Header/>
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <h1 className="text-3xl font-semibold text-center mb-6">GET HELP</h1>
        <div className="mb-8 flex items-center justify-center">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-[457px] border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="col-span-2">
            <h2 className="text-xl font-bold mb-4">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <p className="text-gray-700 mb-4">
              We want to make buying your favorite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Visa, Mastercard, Diners Club, Discover, American Express</li>
              <li>Visa Electron, Maestro</li>
              <li>Apple Pay</li>
            </ul>
            <p className="text-gray-700 mb-4">
              If you enter your PAN information at checkout, youll be able to
              pay for your order with PayTM or a local credit or debit card.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Nike Members</strong> can store multiple debit or credit
              cards in their profile for faster checkout. If youre not already
              a Member,{" "}
              <a href="#" className="text-black underline font-medium">
                join us
              </a>{" "}
              today.
            </p>
            <div className="flex space-x-4 mb-6">
              <button className="bg-black text-white py-2 px-6 rounded-[25px]">
                JOIN US
              </button>
              <button className="border bg-black text-white py-2 px-6 rounded-[25px]">
                SHOP NIKE
              </button>
            </div>

            {/* FAQs Section */}
            <h2 className="text-xl font-bold mb-4">FAQs</h2>
            <div className="mb-4">
              <h3 className="font-bold mb-2 ">
                Does my card need international purchases enabled?
              </h3>
              <p className="text-gray-700">
                Yes, we recommend asking your bank to enable international
                purchases on your card. You will be notified at checkout if
                international purchases need to be enabled.
              </p><p className="mt-[15px]">Please note, some banks may charge a small transaction fee for international orders.</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold mb-2">
                Can I pay for my order with multiple methods?
              </h3>
              <p className="text-gray-700">
                No, payment for Nike orders cant be split between multiple
                payment methods.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold mb-2">
                Why dont I see Apple Pay as an option?
              </h3>
              <p className="text-gray-700">
                To see Apple Pay as an option in the Nike App or on Nike.com,
                youll need to use a compatible Apple device running the latest
                OS, be signed in to your iCloud account and have a supported
                card in your Wallet.
              </p>
            </div>
            <div className="mt-8">
      {/* Feedback */}
      <p className="text-gray-700 mb-4">Was this answer helpful?</p>
      <div className="flex space-x-4 mb-6">
        <button className="flex items-center space-x-2 text-gray-700 hover:text-black">
          <Image src={tUp} alt="Thumb Up" className="h-5 w-5" />
          <span>Yes</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-700 hover:text-black">
          <Image src={tDown}alt="Thumb Down" className="h-5 w-5" />
          <span>No</span>
        </button>
      </div>

      {/* Related Links */}
      <p className="text-gray-700 font-bold mb-2">RELATED</p>
      <ul className="space-y-2">
        <li>
          <a
            href="#"
            className="text-black underline hover:text-gray-700 transition"
          >
            WHAT ARE NIKES DELIVERY OPTIONS?
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black underline hover:text-gray-700 transition"
          >
            HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
          </a>
        </li>
      </ul>
    </div>
          </div>
            
          {/* Right Section */}
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-bold mb-4">CONTACT US</h2>
            <div className="flex flex-col text-center items-center space-x-4">
              <Image src={Phone} alt="Phone" className="h-16 w-16" />
              <div>
                <p className="font-medium mt-[20px]">000 800 919 0566</p>
                <p className="text-gray-700 text-sm">
                  Products & Orders: 24 hours a day,<br></br> 7 days a week
                </p>
                <p className="text-gray-700 text-sm">
                  Company Info & Enquiries: 07:30<br></br> - 16:30, Monday - Friday
                </p>
              </div>
            </div>
            <div className="flex flex-col text-center items-center space-x-4">
              <Image src={Message} alt="Chat" className="h-16 w-16" />
              <p className="text-gray-700 text-sm">24 hours a day,<br></br> 7 days a week</p>
            </div>
            <div className="flex flex-col text-center items-center space-x-4">
              <Image src={Mail} alt="Email" className="h-16 w-16" />
              <p className="text-gray-700 text-sm">
                Well reply within <br></br>five business days.
              </p>
            </div>
            <div className="flex flex-col text-center items-center space-x-4">
              <Image src={Pin} alt="Store Locator" className="h-16 w-16" />
              <p>Store Locator</p>
              <p className="text-gray-700 text-sm">
                Find Nike retail stores near you.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}
