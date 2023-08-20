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
    // axios.get("api/order").then((response) => {
    //   setOrders(response.data);
    // });
    getOrders();
  }, []);

  return (
    <Layout>
      <h1>Orders</h1>
      <table className="basic">
        <thead>
          <tr>
            <td>Date</td>
            <td>Recipient</td>
            <td>Product</td>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 &&
            orders.map((order) => (
              <tr>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
                <td>
                  {order.name} {order.email} <br />
                  {order.city} {order.postalCode}
                  <br />
                  {order.country} <br />
                  {order.streetAddress}
                </td>
                <td>
                  {order.line_items.map((l) => (
                    <>
                      {l.price_data?.product_data.name} x{l.quantity} <br />
                    </>
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default orders;
