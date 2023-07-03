import Navbar from "../../components/navbar";
import Trabalho from "../../components/trabalho";
import { Content } from "./styles";

const TrabalhosPage = () => {
  return (
    <>
      <Navbar />
      <Content>
        <h1>Alguns de nossos trabalhos</h1>
        <Trabalho
          titulo="Especialista em SEO para otimização de site de comércio eletrônico"
          descricao="Contratado como freelancer para otimizar o site de uma loja virtual de moda feminina nos mecanismos de busca. Nossas responsabilidades incluíram a análise de palavras-chave relevantes, otimização de conteúdo, melhorias na estrutura do site, criação de metatags e implementação de estratégias de link building. Utilizamos ferramentas de análise de SEO e técnicas de otimização on-page e off-page para melhorar a visibilidade do site nos resultados de pesquisa. Como resultado do trabalho, o site do cliente alcançou posições mais altas nos rankings de pesquisa e experimentou um aumento significativo no tráfego orgânico e nas vendas."
        />

        <Trabalho
          titulo="Desenvolvedor de Realidade Virtual para criação de aplicativo de treinamento"
          descricao="Contratado como freelancer para desenvolver um aplicativo de treinamento em realidade virtual para uma empresa de manufatura. O objetivo era fornecer uma experiência de treinamento imersiva e interativa para os funcionários, simulando situações reais de trabalho. Utilizei tecnologias como Unity, C# e Oculus Rift para criar o ambiente virtual, implementar interações e cenários de treinamento realistas. Colaboramos com a equipe de instrutores da empresa para garantir que os objetivos de treinamento fossem alcançados. O aplicativo de treinamento em realidade virtual foi altamente elogiado por sua eficácia na melhoria do desempenho e da segurança dos funcionários."
        />

        <Trabalho
          titulo="Especialista em Segurança de Redes para teste de invasão"
          descricao="Contratado como especialista em segurança de redes para realizar um teste de invasão em uma empresa de serviços financeiros. Nosso objetivo era identificar vulnerabilidades na infraestrutura de rede e sistemas, simulando ataques cibernéticos reais. Realizamos uma análise abrangente de segurança, testes de penetração e avaliação de riscos. Apresentamos um relatório detalhado com as falhas de segurança identificadas e forneci recomendações para fortalecer a segurança da empresa. Colaboramos com a equipe de TI para implementar medidas de correção e aprimorar a postura de segurança geral. Como resultado, a empresa conseguiu fortalecer sua segurança cibernética e reduzir significativamente os riscos de violações de dados."
        />
      </Content>
    </>
  );
};

export default TrabalhosPage;
