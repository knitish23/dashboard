import Profile from "./Profile";


const HeaderPage = () => {
  return (
    <header className="h-16 bg-gradient-to-br from-slate-100 to-slate-200 text-black rounded-lg flex items-center justify-between px-10 ">
      <h2 className="text-xl ">Dashboard</h2> 
      <Profile />
    </header>
  );
};



export default HeaderPage;
