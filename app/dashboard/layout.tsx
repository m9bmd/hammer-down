import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className=" relative h-[calc(100vh_-_64px)] px-4">
    <DashboardNavbar/>
    {children}
    
    </div>;
};

export default layout;
