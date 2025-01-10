import Header from "../components/header"
import Footer from "../components/footer"
import NikeLogo from "../images/nike logo.png"
import Image from "next/image";

export default function SignIn() {
    return (
        <div>
            <Header/>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        {/* Nike Logo */}
        <Image
           src={NikeLogo}
           alt=""/>
  
        {/* Form Section */}
        <div className="w-full max-w-md">
          <h1 className="text-center text-xl font-semibold mb-6">
            YOUR ACCOUNT FOR EVERYTHING NIKE
          </h1>
          <form className="space-y-4">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-black"
              />
            </div>
  
            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-black"
              />
            </div>
  
            {/* Keep Me Signed In */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Keep me signed in
              </label>
              <a href="#" className="hover:underline">
                Forgotten your password?
              </a>
            </div>
  
            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-800"
            >
              SIGN IN
            </button>
          </form>
  
          {/* Terms and Links */}
          <p className="text-xs text-center text-gray-600 mt-6">
            By logging in, you agree to Nikes
            <a href="#" className="underline">
              Privacy Policy
            </a>
            and
            <a href="#" className="underline">
              Terms of Use
            </a>.
          </p>
  
          <p className="text-sm text-center text-gray-600 mt-6">
            Not a Member?{' '}
            <a href="#" className="underline font-medium">
              Join Us.
            </a>
          </p>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
  