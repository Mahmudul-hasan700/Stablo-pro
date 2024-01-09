import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; // Import social icons
import { myLoader } from "@/utils/all";
import VercelLogo from "../public/img/vercel.svg";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800 relative">
      {/* Social Links */}
      <div className="flex items-center justify-center space-x-4 py-4">
        {/* Facebook */}
        <a href="YOUR_FACEBOOK_URL" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
          <FaFacebook size={24} />
        </a>

        {/* Twitter */}
        <a href="YOUR_TWITTER_URL" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300">
          <FaTwitter size={24} />
        </a>

        {/* Instagram */}
        <a href="YOUR_INSTAGRAM_URL" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400">
          <FaInstagram size={24} />
        </a>

        {/* YouTube */}
        <a href="YOUR_YOUTUBE_URL" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500">
          <FaYoutube size={24} />
        </a>
      </div>

      {/* Copyright and Theme Switch */}
      <div className="text-sm text-center">
        Copyright Â© {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="flex items-center justify-center mt-2">
        <ThemeSwitch />
      </div>
    </Container>
  );
}