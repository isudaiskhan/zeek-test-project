"use client";

import UserHeader from "@/components/Header/UserHeader";
import Footer from "components/Footer/Footer";

const UnauthorizedLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative z-10">
        <UserHeader />
      </div>
      <div className="relative flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default UnauthorizedLayout;
