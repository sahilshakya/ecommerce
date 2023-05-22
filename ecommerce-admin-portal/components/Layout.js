import React from "react";
import Nav from "./Sidebar";
import { signIn, useSession } from "next-auth/react";
import Loader from "./Loader";

const Layout = ({ children }) => {
  const { data: session, status } = useSession();

  const signInHandler = (event) => {
    event.preventDefault();
    signIn("google");
  };
  if (status === "loading") {
    return <Loader />;
  }

  if (!session) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h2 className="text-center text-red-400 text-xl p-5">
          Login Pannel for Admin
        </h2>
        <div className="">
          <button
            onClick={(event) => signInHandler(event)}
            className="bg-blue-500 text-white p-4 rounded-lg"
          >
            SignIn with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen">
        <div className="flex">
          <Nav />
          <div className="flex-grow p-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
