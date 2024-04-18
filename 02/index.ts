type Regra = {
    nome: string,
    idade: number,
    status: boolean
}

const usuarios: Regra[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

const buscarUsuario = (lista: Regra[], parametro: string) => {
    const nomeBusca = parametro.toLocaleLowerCase();

    return lista.filter(usuario => usuario.nome.toLocaleLowerCase().includes(nomeBusca))
}

console.log(buscarUsuario(usuarios, "JO"))