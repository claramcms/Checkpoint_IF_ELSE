//Atividade 1
let promocao = true

//Atividade 3
promocao = false

//Atividade 2
if (promocao == true) {
    console.log('Hora de comprar!')
}

//Atividade 4
else {
    console.log('Hora de esperar a promoção.')
}

//Atividade 5
let nivelFome = 7

//Atividadde 6
if (nivelFome > 7){
    console.log('Hora de comer!')
}
else {
    console.log('Podemos comer mais tarde!')
}

//Atividade 7
let humor = 'sonolento'
let nivelCansaco = 6

if ( humor == 'sonolento' && nivelCansaco > 8){
    console.log('Hora de dormir.')
}
else {
    console.log('Ainda não é hora de dormir.')
}

//Atividade 8 
let estacao = 'inverno' 
if (estacao == 'inverno'){
    console.log('É inverno! Tudo está coberto de neve.')
}

//Atividade 9
else if(estacao == 'outono'){
    console.log('É outono! As folhas estão caindo!')
}

//Atividade 10
else if(estacao == 'verão'){
    console.log('É ensolarado e quente porque é verão!')
}

//Atividade 11
let posicaoFinalAtleta = 'primeiro lugar'

//Atividade 12
switch (posicaoFinalAtleta){
    case 'primeiro lugar':
        console.log('Você ganha a medalha de ouro!')
        break
    case 'segundo lugar':
        console.log('Você ganha medalha de prata!')
        break
    case 'terceiro lugar':
        console.log('Você ganha a medalha de bronze!')
        break
    default:
        console.log('Nenhuma medalha concedida.')
        break
}

