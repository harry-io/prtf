import "../styles/globals.css";
import Portfolio from "./portfolio";
import "../styles/portfolio.css";
import Navbar from "./components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
