import React from "react";
import ProfileCard from "../components/ProfileCard";
import SideBar from "../components/SideBar";

const MarketPlace = () => {
  return (
    <>
      <div className="grid lg:grid-cols-[300px,1fr] ">
        <div className="hidden lg:block p-2">
          <SideBar />
        </div>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 m-3">

          {Array.from({ length: 5 }).map((_, index) => (
            <ProfileCard />
          ))}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
