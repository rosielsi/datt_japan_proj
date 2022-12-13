import React from "react";
import MainMenu from "./MainMenu";
import Menu from "./Menu";
import Footer from "./Footer";
import RepairForm from "./RepairForm";
import RepairNav from "./RepairNav";

function Routes() {
  return (
    <div>
      <div className="sticky top-0 transition-opacity">
        <Menu />
      </div>
        <div className="bg-teal-800">
        <h1 class="text-center max-w-[1000px] py-2 mb-4 text-3xl font-extrabold text-white dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-gray-300 from-teal-900">MAIN</span> MENU</h1>
          <MainMenu />
        </div>
      <div>
        <Footer />
      </div>

    </div>

  );
}

export default Routes;



