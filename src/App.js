import React from "react";
import Loginpage from "./Components/Loginpage";
import Routess from "./Components/Routess";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RepairRequest from "./Components/RepairRequest";
import RepairRequestSearch from "./Components/RepairRequestSearch";
import Register from "./Components/Register";
import AfterRegister from "./Components/AfterRegister";
import ProvisionalReg from "./Components/ProvisionalReg";


function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/repair-request-search" element={<RepairRequestSearch />} />
        <Route path="/main-menu" element={<Routess />} />
        <Route path="/register-success" element={<AfterRegister />} />
        <Route path="/prov-reg" element={<ProvisionalReg />} />
        <Route path="/repair" element={<RepairRequest />} />
        <Route exact path="*" element={<h1>Error 404 Not found</h1>} />

      </Routes>
    </BrowserRouter>

    

  );
}

export default App;


