import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Person from "../../components/person";
import freelas from "./people";
import { Content } from "./styles";

const Freelas = () => {
  return (
    <>
      <Navbar />
      <Content>
        <h1>Esses são os nossos Freelas</h1>
        <p>
          Nossos freelancers são verdadeiros especialistas em suas áreas,
          trazendo uma combinação de habilidades técnicas e criativas que os
          destacam no mercado. Com sua expertise e paixão pelo que fazem, eles
          entregam resultados excepcionais em cada projeto em que se envolvem.
        </p>
        {freelas.map((freela) => (
          <Link to={"/freelas/" + freela.path}>
            <Person
              path={freela.path}
              foto={freela.foto}
              nome={freela.nome}
              tecnologias={freela.tecnologias}
              ultimosTrabalhos={freela.ultimosTrabalhos}
            />
          </Link>
        ))}
      </Content>
    </>
  );
};

export default Freelas;
