import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>

      <div>{children}</div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
