import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About BCA", to: "/about" },
    {
      label: "Administrative",
      submenu: [
        { label: "Coordinator", to: "/coordinator" },
        { label: "Teacher", to: "/teacher" },
        { label: "Non-Teaching-Staff", to: "/non-teaching-staff" },
      ],
    },
    {
      label: "Academics",
      submenu: [
        { label: "Syllabus", to: "/syllabus" },
        { label: "Study Material", to: "/study-material" },
        { label: "Previous Year Papers", to: "/previous-year-papers" },
        { label: "Library", to: "/library" },
        { label: "Academic Collaboration", to: "/academic-collaboration" },
      ],
    },
    {
      label: "Admission & Fees",
      submenu: [
        { label: "Prospectus", to: "/prospectus" },
        { label: "Fee Structure", to: "/fee-structure" },
        { label: "Admission Process and Guidelines", to: "/admission-process" },
        { label: "Apply for New Admission", to: "/apply-new-admission" },
      ],
    },
    {
      label: "Student Zone",
      submenu: [
        { label: "Student Portal", to: "/student-portal" },
        { label: "Job Openings", to: "/job-openings" },
        { label: "Campus Placements", to: "/campus-placements" },
      ],
    },
    {
      label: "Information Corner",
      submenu: [
        { label: "Notices & Announcements", to: "/notices" },
        { label: "News & Events", to: "/news-events" },
        { label: "Downloads", to: "/downloads" },
      ],
    },
    {
      label: "Gallery",
      submenu: [
        { label: "Photo Gallery", to: "/gallery/photos" },
        { label: "Video Gallery", to: "/gallery/videos" },
      ],
    },
    { label: "Contact", to: "/contact-us" },
    { label: "FAQ", to: "/faq" },
  ];

  const renderDropdown = (items) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 mt-2 w-48 bg-white text-gray-800 border border-gray-200 rounded shadow-lg z-10"
        onMouseEnter={() => {}}
        onMouseLeave={() => setActiveDropdown("")}
      >
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block px-4 py-2 hover:bg-blue-100"
            onClick={() => {
              setActiveDropdown("");
              setIsMobileMenuOpen(false);
            }}
          >
            {item.label}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div className="flex flex-col">
      <div className="flex justify-end items-center space-x-4 text-sm px-4 py-2  bg-gray-200 text-black ">
        <a href="#main-content" className="hover:underline">
          Skip to main content
        </a>
        <button aria-label="Accessibility" className="focus:outline-none">
          <span role="img" aria-label="accessibility">
            ♿
          </span>
        </button>
        <a href="/login" className="hover:underline">
          Login
        </a>
        <a href="/register" className="hover:underline ">
          Register
        </a>
      </div>

      <div className="flex items-center justify-between px-2 py-2 bg-gray-800 text-white">
        <div className="flex items-center">
          <img
            src="https://res.cloudinary.com/dt5913iha/image/upload/v1738791028/tpcollege_bnzmoy.png"
            alt="BCA logo"
            className="h-12 w-12 md:h-16 md:w-16 object-contain mr-4"
          />
          <div className="text-center">
            <span className="block md:hidden text-white text-lg font-semibold">
              BCA DEPARTMENT TP COLLEGE
            </span>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center text-center">
          <span className="text-white text-4xl font-bold">
            BCA DEPARTMENT TP COLLEGE
          </span>
          <p className="text-sm text-white">
            A Constituent of B.N. Mandal University, Madhepura (Bihar), India
            <br />
            Established since 1993. Recognised by UGC under 2F/2B since 1954.
          </p>
        </div>

        <div className="hidden md:flex gap-4">
          <Link to={"/add-notice"}>
            <h4 className="text-sm font-bold text-white border-2 border-blue-600 border:bg-red-600 p-1 mt-5 bg-blue-600 rounded-sm">
              ADD NOTICE
            </h4>
          </Link>
          <Link to="https://admissions.bnmuumis.in/Online/Registration_PersonalInfo.aspx">
            <img
              src="online_admission.png"
              alt="TPC logo 2"
              className="h-20 w-60 object-contain"
            />
          </Link>
          <img
            src="https://res.cloudinary.com/dt5913iha/image/upload/v1739230911/tpcollege63_gliufd.png"
            alt="TPC logo 2"
            className="h-20 w-200 object-contain "
          />
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-black hover:bg-gray-200 rounded-lg"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 ">
          {/* Desktop Nav */}
          <div className="hidden md:flex justify-center space-x-6 py-2 relative">
            {navItems.map((item) =>
              item.submenu ? (
                <div
                  key={item.label}
                  className="relative group" // Added group class
                >
                  <div
                    className="hover:bg-blue-800 px-4 py-2 rounded-lg flex items-center gap-1 cursor-pointer"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                  >
                    {item.label}
                  </div>
                  <div
                    className="absolute left-0 w-full h-2" // Invisible area below the nav item
                    onMouseEnter={() => setActiveDropdown(item.label)}
                  />
                  {activeDropdown === item.label &&
                    renderDropdown(item.submenu)}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="hover:bg-blue-800 px-4 py-2 rounded-lg"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Nav */}
          {isMobileMenuOpen && (
            <div className="md:hidden flex flex-col py-2 space-y-2">
              {navItems.map((item) =>
                item.submenu ? (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? "" : item.label
                        )
                      }
                      className="w-full text-left px-4 py-2 hover:bg-blue-800"
                    >
                      {item.label}
                    </button>
                    {activeDropdown === item.label &&
                      item.submenu.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          onClick={() => {
                            setActiveDropdown("");
                            setIsMobileMenuOpen(false);
                          }}
                          className="block px-6 py-2 text-sm bg-blue-800 hover:bg-indigo-500"
                        >
                          {sub.label}
                        </Link>
                      ))}
                  </div>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-2 hover:bg-blue-800"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
