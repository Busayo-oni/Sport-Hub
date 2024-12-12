import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
            <p className="text-sm">
              We are your go-to platform for all things sports – breaking news,
              in-depth analysis, and exclusive interviews. Stay tuned with us!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/football" className="hover:text-blue-400 transition">
                  Football
                </Link>
              </li>
              <li>
                <Link to="/tennis" className="hover:text-blue-400 transition">
                  Tennis
                </Link>
              </li>
              <li>
                <Link to="/boxing" className="hover:text-blue-400 transition">
                  Boxing
                </Link>
              </li>
              <li>
                <Link to="/AboutUs" className="hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ContactUs" className="hover:text-blue-400 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Subscribe</h3>
            <p className="text-sm mb-4">
              Get the latest updates and exclusive content delivered directly to
              your inbox.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <p className="text-sm mb-4">Connect with us on social media:</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Sport Blog. All rights reserved.  <strong>DeOracleEdge</strong> Creation
          </p>
          <ul className="flex space-x-4 text-sm mt-4 sm:mt-0">
            <li>
              <Link to="/privacy" className="hover:text-blue-400 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-blue-400 transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
