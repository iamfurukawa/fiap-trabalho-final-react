import { Person as PersonParam } from "../../shared/person";
import { Content, ProfileDescription, ProfileImage } from "./styles";

const Person = (param: PersonParam) => {
  const { foto, nome, tecnologias, ultimosTrabalhos } = param;

  return (
    <Content>
      <ProfileImage src={foto} />
      <ProfileDescription>
        <h1>{nome}</h1>

        <h2>Tecnologias</h2>
        <ul>{tecnologias.join(", ")}.</ul>

        <h2>Ultimos trabalhos</h2>
        <ul>
          {ultimosTrabalhos.map((trabalho) => (
            <li>{trabalho.titulo}</li>
          ))}
        </ul>
      </ProfileDescription>
    </Content>
  );
};

export default Person;
