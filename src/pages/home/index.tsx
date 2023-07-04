import Navbar from "../../components/navbar";

import { Content, FormContactUs } from "./styles";

import background from "./background.jpg";
import { toast } from "react-toastify";
import { useState } from "react";

const HomePage = () => {

  const [email, setEmail] = useState<string>('');

  const sendEmail = () => {

    if(email.length === 0) {
      toast("Informe o email para que possamos entrar em contato!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return;
    }

    toast("Em breve entraremos em contato!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setEmail('');
  };

  return (
    <>
      <Navbar />
      <Content>
        <h1>Encontre os melhores Freelas do mundo</h1>
        <h3>
          Um marketplace digital que conecta freelancers talentosos a projetos
          em diversas áreas, proporcionando oportunidades de trabalho flexíveis
          e colaborativas.
        </h3>
        <FormContactUs>
          <input type={"email"} placeholder={"meu_email@email.com.br"} value={email} onChange={e => setEmail(e.target.value)}/>
          <button onClick={sendEmail}>Contate nós</button>
        </FormContactUs>
        <img src={background} alt="Logo" />
      </Content>
    </>
  );
};

export default HomePage;
