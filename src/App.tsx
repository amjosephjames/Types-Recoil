import React from "react";
import Homescreen from "../src/components/homescreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../src/components/signup";
import Signin from "../src/components/signin";
import Forgotpassword from "../src/components/forgotpassword";
import Resetpassword from "../src/components/resetpassword";
import Home from "../src/components/home";
const app = () => {
  return (
    // <div>
    //   <Homescreen />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default app;
