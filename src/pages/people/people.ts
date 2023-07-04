import { Person } from '../../shared/person';
import ViniFoto from './images/vini.png';
import MichelleFoto from './images/michelle.jpeg';

const freelas: Person[] = [
    {
        path: 'vinicius-furukawa-carvalho',
        foto: ViniFoto,
        nome: "Vinícius Furukawa Carvalho",
        tecnologias: ['Java', 'Python', 'ReactJS', 'Angular', 'Svelte', 'Flutter', 'JS/TS', 'PostgreSQL', 'NoSQL', 'AWS', 'Firebase', 'Docker'],
        ultimosTrabalhos: [
            {
                titulo: 'Desenvolvedor Web para criação de site de comércio eletrônico.',
                descricao: 'Fui contratado como freelancer para desenvolver um site de comércio eletrônico para uma loja de roupas. Minhas responsabilidades incluíam a criação de um design moderno e atraente, a implementação de funcionalidades de carrinho de compras e pagamento online, integração com sistemas de gerenciamento de estoque e garantia de que o site fosse responsivo e compatível com dispositivos móveis. Utilizei tecnologias como HTML, CSS, JavaScript e PHP, além de frameworks como Bootstrap e Laravel. O projeto foi concluído dentro do prazo e o cliente ficou extremamente satisfeito com o resultado, relatando um aumento significativo nas vendas online.'
            },
            {
                titulo: 'Consultor de Segurança Cibernética para análise de vulnerabilidades.',
                descricao: 'Fui contratado como consultor de segurança cibernética por uma empresa de médio porte para realizar uma análise abrangente de suas medidas de segurança. Realizei testes de penetração em sua rede, identifiquei vulnerabilidades e apresentei um relatório detalhado com recomendações para mitigar os riscos identificados. Além disso, ministrei treinamentos aos funcionários sobre conscientização em segurança da informação e implementei políticas e procedimentos de segurança. Meus conhecimentos em segurança de rede, criptografia e conformidade com regulamentos como GDPR foram fundamentais para o sucesso do projeto. A empresa pôde aprimorar suas medidas de segurança e mitigar potenciais ameaças cibernéticas.'
            },
            {
                titulo: 'Desenvolvedor Mobile para aplicativo de entrega de alimentos.',
                descricao: 'Fui contratado como freelancer para desenvolver um aplicativo de entrega de alimentos para uma startup do setor de restaurantes. Trabalhei em estreita colaboração com a equipe de design e o cliente para criar uma interface de usuário intuitiva e atraente. Utilizei tecnologias como Swift e Xcode para desenvolver a versão iOS do aplicativo e Java e Android Studio para a versão Android. Implementei recursos como rastreamento de pedidos, integração com serviços de pagamento online e notificações push. O aplicativo foi lançado com sucesso e recebeu feedback positivo dos usuários e do cliente, que relataram um aumento nas vendas e uma melhor experiência do cliente.'
            }
        ],
        contato: {
            email: 'vinicius_furuka@hotmail.com.br',
            github: 'https://github.com/iamfurukawa',
            linkedin: 'https://www.linkedin.com/in/iamfurukawa'
        },
        bio: 'Tenho 26 anos, nasci na Praia Grande/SP, mas atualmente moro em Sorocaba. Vou pra baixada todos os meses pra visitar meus pais, mas não sou viciado em praia. Jogo bastante video game, ultimamente zerei Hogwarts Legacy, mas o meu top 3 jogos são God of War, Horizon e Life is Strange. Maratono uma lista enorme de séries e já perdi muito tempo assistindo Supernatural, Greys Anatomy, Friends e How I met your mother. Minhas bandas favoritas são Paramore e Linkin Park. Sou formado em ciência da computação na UFSCar Sorocaba (2019) e desde então trabalhei somente em consultorias, atualmente estou na OPUS Software e trabalho com várias tecnologias desde java backend ou com react e até flutter (e sou péssimo com design).'
    },
    {
        path: 'michelle-sinibaldi',
        foto: MichelleFoto,
        nome: "Michelle Sinibaldi",
        tecnologias: ['Java', 'Kotlin', 'ServerDrivenUI', 'AWS', 'Firebase'],
        ultimosTrabalhos: [
            {
                titulo: 'Desenvolvedora Mobile - Iti',
                descricao: 'Um hub de relacionamento com o cliente, para engajar os cliente a utilizarem a aplicação. Através de tarefas simples (gameficação), é possível liberar para o cliente uma série de benefícios. Tecnologias usadas no projeto: Kotlin, MVVM, Coroutines, Testes unitários e instrumentados, ServerDrivenUI, Beagle, BFF, Componentização, CI, Acessibilidade, Firebase, Tagueamento, GitHub.'
            },
            {
                titulo: 'Desenvolvedora Mobile - Credicard',
                descricao: 'Através de tarefas (gameficação), é possível permitir que o cliente tenha acesso ao crédito ou consiga aumentar o seu limite de crédito. As terefas são mensais, e precisam cumprir uma série de requisitos para aprovação e liberação. Tecnologias Usadas: Kotlin, MVVM, Coroutines, Testes unitários e instrumentados, BFF, Componentização, CI, Acessibilidade, Firebase, Tagueamento, GitHub.'
            },
            {
                titulo: 'Desenvolvedora Mobile - Íon.',
                descricao: 'Um aplicativo onde é possével gerenciar todos os os investimentos em um único local, tanto os da instituição como de outras corretoras. Através de uma "vitrine de produtos", é possível ter acesso a todos os fundos disponívies, além de uma personalização de acordo com cada perfil de investidor e acompanhamento de todas as ações. Kotlin, MVVM, Coroutines, Testes unitários e instrumentados, BFF, Componentização, CI, Acessibilidade, Firebase, Tagueamento, GitHub.'
            }
        ],
        contato: {
            email: 'mia_araujo92@hotmail.com.br',
            github: 'https://github.com/mi-sinibaldi',
            linkedin: 'https://www.linkedin.com/in/mi-sinibaldi'
        },
        bio: 'Sou a Michelle, tenho 31 anos. Me formei em Marketing e em Análise e Desenvolvimento de Sistemas, mas um dia ainda serei Bióloga. Sou mãe do Henrique e mãe de Pet, a Cloe, uma labradora amarela e gorda. Minha casa é a Grifinória, meu personagem favorito é a Edwiges (claro!), amo um show, não perco um (literalmente!), adoro músicas e atualmente eu estou fazendo aula de dança, estou fazendo sertanejo e forró, em breve eu pretendo competir. Adoro ler e meu sonho é ter um lar para os animais.'
    },
]

export default freelas;