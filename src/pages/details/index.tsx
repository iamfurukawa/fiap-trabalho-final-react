import { useParams } from "react-router-dom";
import freelas from "../people/people";
import NotFoundPage from "../not-found";
import Navbar from "../../components/navbar";
import { Contact, Content, ProfileDescription, ProfileImage } from "./styles";

const FreelaDetalhesPage = () => {
  const { freelaId } = useParams();
  const freelaFound =
    freelas.find((freela) => freela.path === freelaId) || null;

  if (!freelaFound) return <NotFoundPage />;

  return (
    <>
      <Navbar />
      <Content>
        <ProfileImage src={freelaFound.foto} />
        <ProfileDescription>
          <h1>{freelaFound.nome}</h1>
          <p>{freelaFound.bio}</p>

          <h2>Tecnologias</h2>
          <p>{freelaFound.tecnologias.join(", ")}.</p>

          <h2>Ultimos trabalhos</h2>
          <ul>
            {freelaFound.ultimosTrabalhos.map((trabalho) => (
              <>
                <li>{trabalho.titulo}</li>
                <p>{trabalho.descricao}</p>
              </>
            ))}
          </ul>

          <Contact>
            <h2>Como entrar em contato comigo?</h2>
            <h3>Github</h3>
            <p>{freelaFound.contato.github}</p>

            <h3>Email</h3>
            <p>{freelaFound.contato.email}</p>

            <h3>Linkedin</h3>
            <p>{freelaFound.contato.linkedin}</p>
          </Contact>
        </ProfileDescription>
      </Content>
    </>
  );
};

export default FreelaDetalhesPage;
