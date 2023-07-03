import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Router from "./router";

import GlobalStyles from "./shared/global-styles";
import 'react-toastify/dist/ReactToastify.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <BrowserRouter>
      <Router/>
      <GlobalStyles />
      <ToastContainer />
    </BrowserRouter>
  </>
);
