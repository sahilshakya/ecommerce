import CartState from "@/context/CartState";
import "@/styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CartState>
        <Component {...pageProps} />
      </CartState>
    </>
  );
}
