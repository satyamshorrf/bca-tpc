import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaHome,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f0019] to-[#2c0101] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start items-center gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <img src="/header-logo.webp" alt="bca logo" className="w-28 md:w-32" />
          <h4 className="mt-4 font-semibold">Contact us</h4>
          <div className="mt-2 space-y-1">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <FaHome />
              T.P COLLEGE CAMPUS
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <FaPhoneAlt /> +91 - (0612)-2547532
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <FaEnvelope /> contact@bcatpc.com
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/notice" className="hover:underline">
                Notice
              </a>
            </li>
            <li>
              <a href="/exam-updates" className="hover:underline">
                Exam updates
              </a>
            </li>
            <li>
              <a href="/academics" className="hover:underline">
                Academics
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Information</h3>
          <ul className="space-y-2">
            <li>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/term-of-use" className="hover:underline">
                Term of Use
              </a>
            </li>
            <li>
              <a href="/disclaimer" className="hover:underline">
                Disclaimer
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">
                Faq
              </a>
            </li>
            <li>
              <a href="/help" className="hover:underline">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Reach Us</h3>
          <iframe
            title="map"
            className="w-full max-w-xs h-40 mb-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4174581681094!2d86.79033397531277!3d25.9192669772819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f25090f41713b5%3A0xb0ed5a8b36aa89d!2sThakur%20Prasad%20College!5e0!3m2!1sen!2sin!4v1681219990000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <IconLink icon={<FaFacebookF />} />
            <IconLink icon={<FaTwitter />} />
            <IconLink icon={<FaInstagram />} />
            <IconLink icon={<FaLinkedinIn />} />
            <IconLink icon={<FaYoutube />} />
          </div>
        </div>
      </div>

      <div className="text-sm text-center mt-8">
        👁 0123456789 Visitors
        <br />
        <p className="mt-2">
          Department Of Computer Applicaiton ©2025. All rights reserved.{" "}
          <a
            href="https://linktr.ee/satyamshorrf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 font-semibold"
          >
            @satyamshorrf
          </a>
        </p>
      </div>
    </footer>
  );
};

const IconLink = ({ icon }) => (
  <button className="w-10 h-10 flex items-center justify-center border border-white rounded hover:bg-white hover:text-black transition">
    {icon}
  </button>
);

export default Footer;
