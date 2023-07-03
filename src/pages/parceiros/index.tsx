import { Carousel } from "react-responsive-carousel";

import Navbar from "../../components/navbar";
import { Content } from "./styles";

const ParceirosPage = () => {
  return (
    <>
      <Navbar />
      <Content>
        <h1>Alguns de nossos parceiros</h1>
        <p>Temos a honra de contar com uma rede diversificada de parceiros estratégicos, que contribuem de forma significativa para o nosso sucesso e crescimento contínuo. Essas parcerias são fundamentais para a ampliação da nossa oferta de produtos e serviços, bem como para o fortalecimento da nossa posição no mercado.</p>
        <p>Um dos nossos parceiros mais valiosos é uma renomada empresa de tecnologia, líder no desenvolvimento de soluções inovadoras. Juntos, trabalhamos em estreita colaboração para integrar suas tecnologias de ponta aos nossos produtos, oferecendo aos nossos clientes soluções completas e de última geração. Essa parceria nos permite estar na vanguarda da inovação, atendendo às demandas em constante evolução do mercado.</p>
        <Carousel width={"500px"}>
          <div>
            <img src="images/amazon.png" />
            <p className="legend">Amazon</p>
          </div>
          <div>
            <img src="images/apple.jpeg" />
            <p className="legend">Apple</p>
          </div>
          <div>
            <img src="images/google.jpeg" />
            <p className="legend">Google</p>
          </div>
          <div>
            <img src="images/microsoft.jpg" />
            <p className="legend">Microsoft</p>
          </div>
        </Carousel>
      </Content>
    </>
  );
};
export default ParceirosPage;
