import HeaderPage from "./Components/HeaderPage";
import Sidebars from "./Components/Sidebars";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebars />
        <div className="flex-1 flex flex-col min-h-screen">
          <HeaderPage />
          <main
            className="flex-1 p-4
          bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-900
           "
          >
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
