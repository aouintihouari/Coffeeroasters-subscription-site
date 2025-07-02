import { useState } from "react";
import { Route, Routes } from "react-router";

import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import CreatePlan from "./pages/CreatePlan";

import Footer from "./components/Footer";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => setOpenMenu(!openMenu);

  return (
    <main className="bg-cream-500 h-full min-h-screen w-full overflow-x-hidden px-[5%] py-[5%] md:px-[5%] md:py-[2%] lg:px-[10%]">
      <Header openMenu={openMenu} onOpenMenu={handleOpenMenu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/create-plan" element={<CreatePlan />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
