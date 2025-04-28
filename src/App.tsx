import HeaderPage from "./Components/HeaderPage";
import Sidebars from "./Components/Sidebars";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      {/* <div className="flex min-h-screen bg-gray-100 "> */}
      <div className="flex min-h-screen bg-gray-100 overflow-hidden ">
        <Sidebars />
        {/* <div className="flex-1 p-4 transition-all duration-300"> */}
        <div className="flex-1 flex flex-col">
          <HeaderPage />
          <main className="flex-1 px-4 overflow-auto
          bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-900
           ">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
