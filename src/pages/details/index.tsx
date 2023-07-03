import { useParams } from "react-router-dom";
import { Person as PersonParam } from "../../shared/person";

const FreelaDetalhesPage = (param: PersonParam) => {
  const { foto, nome, tecnologias, ultimosTrabalhos } = param;
  const { freelaId } = useParams();
  return <>detalhes de cada freela: {freelaId}</>;
};

export default FreelaDetalhesPage;
