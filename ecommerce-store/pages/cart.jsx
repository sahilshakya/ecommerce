import Navbar from "@/components/NavBar";
import CartContext from "@/context/CartContext";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const CartPage = () => {
  const { cartProduct, addProduct, removeFromCart, findProductInCartId } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const addToCart = (e, id) => {
    e.preventDefault();
    addProduct(id);
  };

  const removeProdCart = (e, id) => {
    e.preventDefault();
    removeFromCart(id);
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window?.location.href.includes("success")) {
      setIsSuccess(true);
    }
  }, []);

  useEffect(() => {
    if (cartProduct.length > 0) {
      axios.post("/api/cart", { ids: cartProduct }).then((resp) => {
        setProducts(resp.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProduct]);

  async function goToPayment() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      cartProduct,
    });
    if (response.data.url) {
      window.location = response.data.url;
    }
  }

  let total = 0;
  for (const productId of cartProduct) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  if (isSuccess) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center mt-10">
          <div className="bg-white rounded-lg p-8">
            <h1 className="text-2xl font-bold mb-4">Thanks for your order!</h1>
            <p>We will email you when your order will be sent.</p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="h-screen bg-gray-100">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto  justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
            {!cartProduct?.length && <div>Your cart is empty</div>}
            {products?.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td className="py-2">
                        <div className="flex items-center">
                          <div className="w-12 h-16 p-1 border border-gray-300 rounded-lg flex items-center justify-center">
                            <img
                              className="max-w-full max-h-full"
                              src={product.images[0]}
                              alt=""
                            />
                          </div>
                          <div className="ml-2">{product.title}</div>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center">
                          <button
                            className="px-2 py-1"
                            onClick={(e) => removeFromCart(e, product._id)}
                          >
                            -
                          </button>
                          <span className="px-2">
                            {
                              cartProduct.filter((id) => id === product._id)
                                .length
                            }
                          </span>
                          <button
                            className="px-2 py-1"
                            onClick={(e) => addToCart(e, product._id)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        Rs.
                        {cartProduct.filter((id) => id === product._id).length *
                          product.price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Rs.{total}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          <div className="mt-6 w-full h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
            <div className="bg-white rounded-lg p-6">
              <h2>Order Information</h2>
              <form>
                <input
                  className="w-full p-4 mb-4 border-gray-300 rounded-lg focus:outline"
                  placeholder="Name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="w-full p-4 mb-4 border-gray-300 rounded-lg focus:outline"
                  placeholder="Email"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex gap-4 mb-4">
                  <input
                    className="w-full p-4 mb-4 border-gray-300 rounded-lg focus:outline"
                    placeholder="Country"
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                  <input
                    className="w-full p-4 mb-4 border-gray-300 rounded-lg focus:outline"
                    placeholder="Street Address"
                    type="text"
                    onChange={(e) => setStreetAddress(e.target.value)}
                  />
                </div>
                <div className="flex gap-4 mb-4">
                  <input
                    className="w-full p-4 mb-4 border-gray-300 rounded-lg focus:outline"
                    placeholder="City"
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <input
                    className="w-full p-4 mb-4 border-gray-300 rounded-lg focus:outline"
                    placeholder="Postal Code"
                    type="number"
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
              </form>
            </div>

            <button
              className=" w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
              onClick={goToPayment}
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
