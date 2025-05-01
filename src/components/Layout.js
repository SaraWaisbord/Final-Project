import React from "react";
// import Nav from "./Nav";
// import Footer from "./Footer";
import "../css/Layout.css"; // Import your CSS file here
const Layout = ({ children }) => {
  return (
    <>
      {/* <Nav /> */}
      <div className="mx-[10px]">
        {children}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
