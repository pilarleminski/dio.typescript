interface Pessoa {
    nome: string, 
    idade: number,
    profissao?: string // ? => opcional
}

const pessoa: Pessoa = {
    nome: 'Pilar',
    idade: 39
}

const outraPessoa: Pessoa = {
    nome: 'Paulo',
    idade: 25,
    profissao: 'Desenvolvedor'
}

const arrayPessoa: Pessoa[] = [
    pessoa,
    outraPessoa
]

// OU
const arrayPessoa1: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const arrayNum: number[] = [
    1, 2, 3
]

const arrayString: Array<string> = [
    '1', '2', '3'
]
