import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <>
      <Link
        to={props.link}
        className=" text-white bg-[#2C7B63] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center mt-4"
      >
        {props.label}
      </Link>
    </>
  );
};

export default Navigation;
