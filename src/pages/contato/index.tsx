import { useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../../components/navbar";
import { Content } from "./styles";

const ContatoPage = () => {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendMessage = () => {

    if(email.length === 0 || message.length === 0) {
      toast("Preencha os campos corretamente para que possamos entrar em contato!", {
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
    setMessage('');
  };

  return (
    <>
      <Navbar />
      <Content>
        <h1>Contate-nos</h1>
        <p>Estamos ansiosos para ouvir de você e responder a todas as suas dúvidas, comentários ou solicitações. Temos o compromisso de fornecer um excelente atendimento ao cliente e garantir que sua experiência conosco seja a melhor possível.</p>
        <p>Nossa equipe de suporte está pronta para ajudar. Se você tiver alguma dúvida sobre nossos produtos ou serviços, não hesite em entrar em contato conosco. Nossos especialistas altamente qualificados estão prontos para fornecer informações detalhadas e orientações personalizadas para atender às suas necessidades específicas.</p>

        <input placeholder="email@email.com.br" type={"email"} value={email} onChange={e => setEmail(e.target.value)}></input>
        <textarea rows={10} placeholder={'Olá estou interessado sobre os seus freelas!'} value={message} onChange={e => setMessage(e.target.value)}/>
        <button onClick={sendMessage}>Enviar</button>
      </Content>
    </>
  );
};

export default ContatoPage;
