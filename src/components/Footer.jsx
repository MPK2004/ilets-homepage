import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { SiX, SiLinkedin, SiFacebook, SiInstagram, SiSnapchat } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black/20 border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">IELTS<span className="text-blue-400">Prep</span></h3>
            <p className="text-gray-400">Your partner in success.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400"><SiFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-black"><SiX size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-pink-400"><SiInstagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400"><SiLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-10 pt-6 border-t border-white/10">
          <p>&copy; {new Date().getFullYear()} IELTS Prep. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;