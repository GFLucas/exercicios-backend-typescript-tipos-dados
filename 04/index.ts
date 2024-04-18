

const produtos = (info: {
    produto: string,
    lote: number,
    ano: number,
    qtd: number
}) => {
    for (let i = 1; i <= info.qtd; i++) {
        console.log(`${info.lote}-${info.ano}-${i.toString().padStart(3, '0')}`)
    }

}

const pc = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}
produtos(pc)