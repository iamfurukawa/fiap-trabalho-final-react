import { Content } from "./styles";

interface TrabalhoParam {
  titulo: string;
  descricao: string;
}

const Trabalho = (params: TrabalhoParam) => {
  const { titulo, descricao } = params;
  return (
    <Content>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </Content>
  );
};

export default Trabalho;
