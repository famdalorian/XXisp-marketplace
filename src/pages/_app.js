import { Notification } from "components/NavBar";
import "../styles/globals.css";
import { Footer, Subscribe } from "components/componentindex";
// INTERNAL IMPORT
import { NavBar } from "components/componentindex";
import BigNFTSilder from "components/BigNFTslider/BigNFTSlider";
const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <Subscribe />
    <BigNFTSilder />
    <Footer />
  </div>
);

export default MyApp;
