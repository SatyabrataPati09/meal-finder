import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MealDetails from "./pages/MealDetails";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* ✅ NAVBAR (ONLY HERE) */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* ✅ SIDEBAR (GLOBAL) */}
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        onSelectCategory={(cat) => {
          window.dispatchEvent(new CustomEvent("categorySelect", { detail: cat }));
          closeSidebar();
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
      </Routes>
    </>
  );
}

export default App;