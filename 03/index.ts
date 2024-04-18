const numeros: number[] = [1, 5, 2]

const resolverTabuada = (tabuada: number[]) => {
    for (const numero of tabuada) {
        for (let i = 1; i <= 10; i++) {
            const resultado = numero * i
            console.log(`${numero} x ${i} = ${resultado}`)
        }
        console.log("---------------")
    }
}

resolverTabuada(numeros)