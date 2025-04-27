import { NavLink } from 'react-router-dom';
import{ Home, Users, Settings, LogOut, Menu } from 'lucide-react';
import { JSX, useState } from 'react';
type MenuItems ={
name:string;
path:string;
icons:JSX.Element;
}

const Sidebars = () => {
const [isOpen, setIsOpen] = useState(false);

  const menuItems:MenuItems[] = [
    {name:'Dashboard', path:'',icons:<Home size={18} />},
    {name:'Users', path:'/users',icons:<Users size={18} />},
    {name:'Settings', path:'/settings',icons:<Settings size={18} />},
    {name:'Logout', path:'/logout',icons:<LogOut size={18} />},
  ];
    

  
  return (
    <>
    {/* Hamburger Menu */}
    <button
    className="md:hidden fixed top-4 left-4 z-50 text-white
     bg-purple-600 p-2 rounded-lg shadow-lg"
    onClick={() => setIsOpen(!isOpen)}>
    <Menu />
  </button>
 {/* sidebar */}
  <aside className={`fixed md:relative
  
   top-0 left-0 z-40 w-30 lg:w-64  min-h-screen 
  bg-gradient-to-br from-orange-800 via-pink-600 to-purple-500 text-white shadow-lg p-6 space-y-6
  transform transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
  >
      <h1 className='text-2xl font-bold md:ml-8 tracking-wider'>Dashboard</h1>
      <nav className='space-y-4 '>
      {
        menuItems.map((item)=>(
          <NavLink key={item.name} to={item.path}
          onClick={() => setIsOpen(false)} // close on click (mobile)
          className={({isActive}) => `flex item-center gap-3 px-4 py-2 transition-all duration-300 ${
            isActive ? "bg-white text-purple-700 font-semibold shadow-md" : "hover:bg-white/30"
          }`}
          >
            {item.icons}
            {item.name}
          </NavLink>
        ))
      }
      </nav>
    </aside>

    </>
    
  )
}

export default Sidebars
