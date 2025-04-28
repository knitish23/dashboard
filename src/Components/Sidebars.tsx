import { NavLink } from 'react-router-dom';
import { Home, Users, Settings, LogOut, Menu } from 'lucide-react';
import { JSX, useState } from 'react';

type MenuItems = {
  name: string;
  path: string;
  icons: JSX.Element;
};

const Sidebars = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>("Dashboard"); 
  const [animateTitle, setAnimateTitle] = useState<boolean>(false);

  const menuItems: MenuItems[] = [
    { name: 'Dashboard', path: '', icons: <Home size={18} /> },
    { name: 'Users', path: '/users', icons: <Users size={18} /> },
    { name: 'Settings', path: '/settings', icons: <Settings size={18} /> },
    { name: 'Logout', path: '/logout', icons: <LogOut size={18} /> },
  ];
  const handleMenuClick = (name: string) => {
    
    setAnimateTitle(true); 
    setTimeout(() => {
      setActiveMenu(name); 
      document.title = name
      setAnimateTitle(false); 
    }, 300); 
  };

  return (
    <>
      {/* Hamburger Menu */}
      <button
        className="md:hidden fixed top-1 left-1 z-4 text-white bg-gradient-to-br from-orange-600 via-pink-400 to-purple-600 p-1 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 z-40 w-64 min-h-screen 
          bg-gradient-to-br from-orange-800 via-pink-600 to-purple-500 text-white
           shadow-lg px-10 py-6 space-y-6
           transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
      >
        {/* <h1 className="text-2xl font-bold md:ml-8 tracking-wider"> */}
        <h1 className={`text-2xl font-bold md:ml-2 tracking-wider transition-all duration-500
          ${animateTitle ? "opacity-0 translate-x-5" : "opacity-100 translate-x-0"}`}>
          {activeMenu}
        </h1>

        <nav className="space-y-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => {
                // setActiveMenu(item.name); 
                 handleMenuClick(item.name);
                setIsOpen(false); // Close sidebar - Mobile
              }}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 transition-all duration-300 ${
                  isActive
                    ? "bg-white text-purple-700 font-semibold shadow-md"
                    : "hover:bg-white/30"
                }`
              }
            >
              {item.icons}
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebars;
