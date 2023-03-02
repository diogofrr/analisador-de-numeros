// Botão de acionamento
const botaoadd = document.querySelector('button#add')

// Lista de Números
let contLC = 0
let listaC = []

// Função de adicionar o item no bloco
function adicionar(numV){
    const listaNum = document.querySelector('ul#numeros')
    const CtotalNum = document.querySelector('p#total')

    if (numV>=1 && numV<=100) {
        listaC[contLC] = numV
        contLC ++

        const novoli = document.createElement('li')
        const textoli = document.createTextNode(`Valor adicionado: ${numV}`)
        novoli.appendChild(textoli)
        listaNum.appendChild(novoli)
        CtotalNum.innerHTML = (`O total de números registrados é: ${contLC}`)

        menorMaior(numV)
        somar()
    } else {
        window.alert('O valor inserido não é válido. Tente novamente.')
    }
}

// Função de verificar se o número já foi adicionado anteriormente
function verificar(){
    let num = Number(document.querySelector('input#numinput').value)

    for (let index in listaC) {
        if (listaC[index] === num) {
            num = 0
            break;
        }
    }
    
    adicionar(num)
}

// Função que verifica qual o menor e qual o maior número
function menorMaior(num_mM){
    const CmM = document.querySelector('p#menorMaior')
    let maior = num_mM
    let menor = num_mM
    
    for (let index in listaC) {
        if (listaC[index] > maior) {
            maior = listaC[index]
        } else if (listaC[index] < menor){
            menor = listaC[index]
        }
    }

    CmM.innerHTML = (`O menor valor é ${menor} e o maior é ${maior}.`)
}

// Função para somar todos os números
function somar(){
    const CsomaNum = document.querySelector('p#soma')
    let resultado = 0

    for (let index in listaC){
        resultado += listaC[index]
    }

    CsomaNum.innerHTML = (`O valor total da soma dos números é: ${resultado}`)
    media(resultado)
}

// Função para calcular a média
function media(total){
    const CmediaNum = document.querySelector('p#media')
    totalMedia = (total/contLC)

    CmediaNum.innerHTML = (`A média dos números registrados é: ${totalMedia}`)
}

botaoadd.addEventListener('click', verificar)