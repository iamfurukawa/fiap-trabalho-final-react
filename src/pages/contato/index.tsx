import Navbar from "../../components/navbar";
import { Content } from "./styles";

const ContatoPage = () => {
  return (
    <>
      <Navbar />
      <Content>
        <h1>Contate-nos</h1>
        <p>Estamos ansiosos para ouvir de você e responder a todas as suas dúvidas, comentários ou solicitações. Temos o compromisso de fornecer um excelente atendimento ao cliente e garantir que sua experiência conosco seja a melhor possível.</p>
        <p>Nossa equipe de suporte está pronta para ajudar. Se você tiver alguma dúvida sobre nossos produtos ou serviços, não hesite em entrar em contato conosco. Nossos especialistas altamente qualificados estão prontos para fornecer informações detalhadas e orientações personalizadas para atender às suas necessidades específicas.</p>

        <input placeholder="email@email.com.br" type={"email"}></input>
        <textarea rows={10} placeholder={'Olá estou interessado sobre os seus freelas!'}/>
        <button>Enviar</button>
      </Content>
    </>
  );
};

export default ContatoPage;
