export interface Freela {
    titulo: string;
    descricao: string;
}

export interface Contact {
    github: string;
    linkedin: string;
    email: string;
}

export interface Person {
    path: string;
    foto: any;
    bio: string;
    nome: string;
    tecnologias: string[];
    ultimosTrabalhos: Freela[];
    contato: Contact;
}