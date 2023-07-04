import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Person from "../../components/person";
import { FreelasPresentation } from "../../components/person/styles";
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
        <FreelasPresentation>
          {freelas.map((freela) => (
            <Link to={"/freelas/" + freela.path}>
              <Person
                path={freela.path}
                foto={freela.foto}
                nome={freela.nome}
                tecnologias={freela.tecnologias}
                ultimosTrabalhos={freela.ultimosTrabalhos}
                bio={freela.bio}
                contato={freela.contato}
              />
            </Link>
          ))}
        </FreelasPresentation>
      </Content>
    </>
  );
};

export default Freelas;
