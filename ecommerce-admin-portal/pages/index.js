import Layout from "@/components/Layout";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Component() {
  const { data: session } = useSession();
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
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-300 rounded-lg gap-1">
          <img src={session?.user?.image} className="w-8 h-8" />
          <span className="px-2">{session?.user?.email}</span>
        </div>
      </div>

      <div>Order Details are:</div>

      <div class=" rounded  shadow-lg ">
        <div class="grid grid-cols-2 gap-4  ">
          {orders.length > 0 &&
            orders.map((order) => (
              <div class="m-5 p-6  bg-blue-200 rounded-lg">
                <div>
                  {order.line_items.map((l) => (
                    <h2 class="text-2xl">
                      Purchased Order: {l.price_data?.product_data.name} <br />
                      Order Quantity: {l.quantity} <br />
                    </h2>
                  ))}
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <br />
                  <span class="bg-emerald-600 text-white rounded-full p-1">
                    {order.name}
                  </span>
                  <br /> {order.email} <br />
                  <br />
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
