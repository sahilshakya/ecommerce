import React from "react";
import Nav from "./Sidebar";
import { signIn, useSession } from "next-auth/react";

const Layout = ({ children }) => {
  const { data: session } = useSession();

  const signInHandler = (event) => {
    event.preventDefault();
    signIn("google");
  };

  if (!session) {
    return (
      <div>
        <button
          onClick={(event) => signInHandler(event)}
          className="bg-blue-400 flex align-middle p-4 rounded-lg"
        >
          SignIn with Google
        </button>
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
