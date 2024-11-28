import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

import logo from "../../assets/more/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="Coffee Store Logo"
              className="mx-auto md:mx-0 mb-4 w-9"
            />
            <h3 className="text-2xl font-bold text-[#372727] mb-4">
              Coffee Store
            </h3>
            <p className="text-gray-600">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-[#372727] transition duration-300 text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#372727] transition duration-300 text-2xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#372727] transition duration-300 text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#372727] transition duration-300 text-2xl"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Center Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-[#372727] mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start text-gray-600">
                <MdPhone className="text-2xl mr-2" />
                +88 01533 333 333
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-600">
                <MdEmail className="text-2xl mr-2" />
                info@gmail.com
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-600">
                <MdLocationOn className="text-2xl mr-2" />
                72, Wall Street, King Road, Dhaka
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#372727] mb-4">
              Connect with Us
            </h3>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-4 p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full mb-4 p-2 border border-gray-300 rounded"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-2 bg-[#e3b577] text-white font-bold rounded hover:bg-[#372727] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center border-t border-gray-300 pt-4">
          <p className="text-sm text-gray-600">
            Copyright © Coffee Store | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
