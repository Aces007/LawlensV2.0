import { Link } from "react-router-dom";

const NavigationHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left nav */}
        <div className="flex gap-4 border border-black">
          <Link to="/about" className="hover:text-indigo-600">About</Link>
          <Link to="/experience" className="hover:text-indigo-600">Experience</Link>
        </div>

        {/* Logo */}
        <div className="logo_nav text-2xl font-bold">A</div>

        {/* Right nav */}
        <div className="flex gap-4">
          <Link to="/portfolio" className="hover:text-indigo-600">Portfolio</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;
