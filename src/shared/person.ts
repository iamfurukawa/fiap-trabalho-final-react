export interface Freela {
    titulo: string;
    descricao: string;
}

export interface Person {
    path: string;
    foto: any;
    nome: string;
    tecnologias: string[];
    ultimosTrabalhos: Freela[];
}