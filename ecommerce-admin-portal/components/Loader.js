import React from "react";
import { ClockLoader, BarLoader } from "react-spinners";

export const CircleLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <BarLoader
        // color={"#fffff"}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

const Loader = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "black",
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <ClockLoader
        // color={"#fffff"}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
