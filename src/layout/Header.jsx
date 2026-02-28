import { NavLink, useNavigate, useLocation } from "react-router-dom"; 
import { useState } from "react";
import { FaShieldAlt, FaChevronDown, FaBars, FaTimes, FaLayerGroup } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [isOpen, setIsOpen] = useState(false);

  const securityPillars = [
    { name: "Integrity", path: "/integrity" },
    { name: "Firewall", path: "/firewall" },
    { name: "Authentication", path: "/authentication" },
    { name: "Availability", path: "/availability" },
    { name: "Confidentiality", path: "/confidentiality" },
  ];

  const handleNavigation = (e) => {
    const path = e.target.value;
    if (path) {
      navigate(path);
    }
  };

  const desktopNavLinkStyles = ({ isActive }) => 
    isActive 
      ? "text-blue transition font-bold border-b-2 border-blue pb-1 shadow-sm" 
      : "text-white/80 hover:text-blue transition font-medium pb-1";

  const mobileNavLinkStyles = ({ isActive }) => 
    isActive 
      ? "text-blue transition font-bold text-lg flex items-center gap-2" 
      : "text-white/80 transition font-medium text-lg flex items-center gap-2";

  return (
    <header className="sticky top-0 z-40 bg-primaryCard border-b border-border text-white shadow-lg w-full">
      <div className="center-container flex justify-between items-center py-4 px-4 lg:px-0">
        <NavLink to="/" className="flex items-center gap-3 shrink-0">
          <FaShieldAlt className="text-blue text-3xl" />
          <div className="flex flex-col text-white">
            <h1 className="text-lg md:text-xl font-bold leading-none uppercase tracking-wider">Network Security</h1>
            <span className="text-[10px] text-text2 mt-1 opacity-70">Suwayda NextGen</span>
          </div>
        </NavLink>

        {/* التعديل هنا: تم تغيير md إلى lg لإخفاء القائمة العادية حتى شاشات الـ Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink to="/" end className={desktopNavLinkStyles}>Home</NavLink>
          <NavLink to="/about" className={desktopNavLinkStyles}>About</NavLink>
          
          <div className="relative ml-4">
            <select 
              onChange={handleNavigation}
              value={securityPillars.some(p => p.path === location.pathname) ? location.pathname : ""}
              className="bg-primary text-white text-sm border border-border rounded-lg px-4 py-2 outline-none appearance-none cursor-pointer w-52"
            >
              <option value="" disabled>Security Pillars</option>
              {securityPillars.map((item) => (
                <option key={item.name} value={item.path} className="bg-primaryCard">
                  {item.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-text2">
              <FaChevronDown size={10} />
            </div>
          </div>
        </div>

        {/* التعديل هنا: تم تغيير md إلى lg ليظهر زر المينيو في وقت أبكر */}
        <button className="lg:hidden text-2xl text-blue p-2 shrink-0" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* التعديل هنا: تم تغيير md إلى lg في الطبقة المنبثقة */}
      {isOpen && (
        <div className="fixed inset-0 top-[73px] lg:hidden bg-primary/95 backdrop-blur-lg z-40 overflow-y-auto">
          <div className="flex flex-col p-6 space-y-8 h-full">
            <div className="flex flex-col space-y-6">
               <NavLink to="/" end className={mobileNavLinkStyles} onClick={() => setIsOpen(false)}>Home</NavLink>
               <NavLink to="/about" className={mobileNavLinkStyles} onClick={() => setIsOpen(false)}>About</NavLink>
            </div>

            <div className="flex flex-col space-y-4 pt-6 border-t border-border/50">
              <label className="text-text2 text-[10px] uppercase font-bold tracking-[0.2em] mb-2 flex items-center gap-2">
                <FaLayerGroup className="text-blue" /> Security Pillars
              </label>
              <div className="grid grid-cols-1 gap-3">
                {securityPillars.map((item) => (
                  <NavLink 
                    key={item.name} 
                    to={item.path} 
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                      `px-4 py-3 rounded-xl border ${isActive ? 'bg-blue/10 border-blue text-blue' : 'bg-primaryCard border-border text-white/70'}`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;