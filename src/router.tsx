import { Route, Routes } from "react-router-dom";

import ParceirosPage from "./pages/parceiros";
import ContatoPage from "./pages/contato";
import FreelaDetalhesPage from "./pages/details";
import HomePage from "./pages/home";
import Freelas from "./pages/people";
import TrabalhosPage from "./pages/trabalhos";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="freelas" element={<Freelas />}/>
      <Route path="/freelas/:freelaId" element={<FreelaDetalhesPage />} />
      <Route path="our-works" element={<TrabalhosPage />} />
      <Route path="contact-us" element={<ContatoPage />} />
      <Route path="partners" element={<ParceirosPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default Router;
