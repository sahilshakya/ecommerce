import Layout from "@/components/Layout";
import axios from "axios";
import React, { useState, useEffect } from "react";

const orders = () => {
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    const response = await axios.get("/api/orders");
    setOrders(response.data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <Layout>
      <h1>Orders</h1>
      <table className="basic">
        <thead>
          <tr>
            <td>Order name</td>
            <td>Order price</td>
            <td>Order time</td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </Layout>
  );
};

export default orders;
