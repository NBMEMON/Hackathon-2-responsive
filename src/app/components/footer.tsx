import Image from "next/image";
import locationIcon from "../images/Location.png";
import socialIcons from "../images/Icons.png";

export default function Footer() {
  return (
    <div className="bg-black flex flex-col py-6 px-4">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-6 sm:space-y-0">
        {/* Footer Links */}
        <div className="flex flex-wrap gap-6 sm:gap-8 w-full sm:w-auto">
          <div className="flex flex-col space-y-2">
            <h4 className="text-white text-lg font-semibold">FIND A STORE</h4>
            <ul className="text-white space-y-1">
              <li>BECOME A MEMBER</li>
              <li>SIGN UP FOR EMAIL</li>
              <li>Send us Feedback</li>
              <li>STUDENT DISCOUNTS</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="text-white text-lg font-semibold">Get Help</h4>
            <ul className="text-white space-y-1">
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us On Nike.com Inquiries</li>
              <li>Contact Us On All Inquiries</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="text-white text-lg font-semibold">About Me</h4>
            <ul className="text-white space-y-1">
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>

        {/* Social Media and Legal Links */}
        <div className="flex flex-col items-center sm:items-end w-full sm:w-auto space-y-4">
          <Image
            src={socialIcons}
            alt="Social Icons"
            className="h-8 object-contain"
          />
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-[#7E7E7E] text-sm">
            <p>Guides</p>
            <p>Terms of Sale</p>
            <p>Terms of Use</p>
            <p>Nike Privacy Policy</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-wrap items-center justify-between mt-6 text-sm text-[#7E7E7E]">
        <div className="flex items-center space-x-2">
          <Image src={locationIcon} alt="Location Icon" className="h-4 w-4" />
          <strong className="text-white">India</strong>
        </div>
        <p className="mt-4 sm:mt-0">© 2023 Nike, Inc. All Rights Reserved</p>
      </div>
    </div>
  );
}
