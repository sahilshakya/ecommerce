import Layout from "@/components/Layout";
import React from "react";

const settings = () => {
  return (
    <Layout>
      <h2>Edit Profile</h2>
      <form>
        <label>Your Name</label>
        <input type="text" name="name" />
        <label>Your Email</label>
        <input type="email" name="email" />
        <label>Change Passwrd</label>
        <input type="password" name="password" />
        <label>Confirm Change Passwrd</label>
        <input type="password" name="passwordConfirmation" />
        <button
          type="submit"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Save
        </button>
      </form>
    </Layout>
  );
};

export default settings;
