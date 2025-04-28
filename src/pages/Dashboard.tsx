import Cards from "../Components/Cards";

const Dashboard = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
    <h1 className="text-2xl md:text-3xl font-black text-center text-white py-8">
      Welcome back John
    </h1>
    <div className="max-w-7xl mx-auto">
      <Cards />
    </div>
  </div>
  );
};

export default Dashboard;
