const categoria = document.getElementById("categoria")
const esporte = document.querySelectorAll(".tabelas")

const url = 'https://api-dadosjogos.onrender.com'




categoria.addEventListener('click', atualizarPagina)



function atualizarPagina() {
    const categoriaSelecionada = categoria.value;

    const tabelas = esporte[0]


    tabelas.innerHTML = `
                <img src="./tabelas/Cacador${categoriaSelecionada}ano.svg" onload="fetchSvg(this, 'cacador')" alt="">
                <img src="./tabelas/FutFem${categoriaSelecionada}ano.svg"  onload="fetchSvg(this, 'FutFem')" alt="">
                <img src="./tabelas/FutMas${categoriaSelecionada}ano.svg"  onload="fetchSvg(this, 'FutMas')" alt="">
                <img src="./tabelas/Volei${categoriaSelecionada}ano.svg"  onload="fetchSvg(this, 'Volei')" alt="">
                `


}


const fetchSvg = (image, esporte) => {
    fetch(image.src)
        .then((response) => response.text())
        .then((response) => {
            const span = document.createElement('span');
            span.innerHTML = response;
            const inlineSvg = span.getElementsByTagName('svg')[0]

            image.parentNode.replaceChild(inlineSvg, image);
            return true
        })
        .then(() => {
            atualizarTabela(esporte);
        })


}


async function atualizarTabela(esporte) {
    const categoriaSelecionada = categoria.value

    const res = await fetch(`${url}/${categoriaSelecionada}ano`)
        .then(res => res.json())
    // .then(res => console.log(res["values"]))
    const dados = res
    dadosJogos = dados["values"]
    

    if (esporte == 'cacador') {
        for (let i = 0; i < 6; i++) {
            jogo = dadosJogos[i]

            for (let j = 0; j < 2; j++) {

                const time = document.getElementById(`jogo${i + 1}${j + 1}`)
                const placar = document.getElementById(`p${i + 1}${j + 1}`)
                if (j == 0) {
                    time.innerHTML = `<tspan class="time">${jogo[1]}</tspan>`
                    placar.innerHTML = `<tspan class="placar">${jogo[2]}</tspan>`

                } else if (j = 1) {
                    time.innerHTML = `<tspan class="time">${jogo[3]}</tspan>`
                    placar.innerHTML = `<tspan class="placar">${jogo[4]}</tspan>`
                }
            }
        }
    } else if (esporte == 'FutFem') {

        for (let i = 0; i < 16; i++) {
            jogo = dadosJogos[i + 9]

            for (let j = 0; j < 2; j++) {

                const time = document.getElementById(`fjogo${i + 1}${j + 1}`)
                const placar = document.getElementById(`fp${i + 1}${j + 1}`)
                if (j == 0) {
                    time.innerHTML = `<tspan class="time">${jogo[1]}</tspan>`
                    placar.innerHTML = `<tspan class="placar">${jogo[2]}</tspan>`

                } else if (j = 1) {
                    time.innerHTML = `<tspan class="time">${jogo[3]}</tspan>`
                    placar.innerHTML = `<tspan class="placar">${jogo[4]}</tspan>`
                }
            }
        }
    } else if (esporte == 'FutMas') {

        for (let i = 0; i < dadosJogos.length; i++) {
            jogo = dadosJogos[i + 18]

            for (let j = 0; j < 2; j++) {

                const time = document.getElementById(`mjogo${i + 1}${j + 1}`)
                const placar = document.getElementById(`mp${i + 1}${j + 1}`)
                if (j == 0) {
                    time.innerHTML = `<tspan class="time">${jogo[1]}</tspan>`
                    placar.innerHTML = `<tspan class="placar">${jogo[2]}</tspan>`
                    
                } else if (j = 1) {
                    time.innerHTML = `<tspan class="time">${jogo[3]}</tspan>`
                    placar.innerHTML = `<tspan class="placar">${jogo[4]}</tspan>`
                }
            }
        }
    } else if (esporte == 'Volei') {

        for (let i = 0; i < dadosJogos.length; i++) {
            jogo = dadosJogos[i + 27]
            console.log(jogo)
            for (let j = 0; j < 2; j++) {

                const time = document.getElementById(`vjogo${i + 1}${j + 1}`)
                const placar = document.getElementById(`vp${i + 1}${j + 1}`)
                if (j == 0) {
                    time.innerHTML = `<tspan class="time">${jogo[1]}</tspan>`
                    placar.innerHTML = `<tspan class="placar">${jogo[2]}</tspan>`
                    console.log(placar)
                } else if (j = 1) {
                    time.innerHTML = `<tspan class="time">${jogo[3]}</tspan>`
                    placar.innerHTML = `<tspan class="placar">${jogo[4]}</tspan>`
                }
            }
        }


    }
}

atualizarPagina()