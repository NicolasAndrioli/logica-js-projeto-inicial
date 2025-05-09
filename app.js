alert("Adivinhe o número secreto");
// alert serve para a mensagem ser exibida na tela, sempre colocar o texto dentro de ""

let numeroMaximo = parseInt(Math.random() * 100 + 1);

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// let serve para declarar as variaveis e armazenar elas 

console.log(numeroSecreto) ;
// mostra no console o numero secreto

let chute ;
// prompt abre um espaço para o usuário digitar o número

let tentativas = 1;


//enquanto o chute não for igual ao n.s 
// != significa diferente
while (chute != numeroSecreto){
    chute = prompt (`Escolha um número entre 1 a ${numeroMaximo}`);

    {if (chute == numeroSecreto){
        break;
        // if diz que se o chute for igual ao número secreto irá exibir a mensagem do alert
    }       else {
        //else é basicamente o se não
                if (chute > numeroSecreto) {
                    alert(`O número secreto é menor que ${chute}`);
                } else {
                    alert(`O número secreto é maior que ${chute}`);
                }
                tentativas ++;

                // criamos um outro if para caso errar o jogo dar uma dica ao usuário
            }}
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Você acerto! o número era ${numeroSecreto} , com ${tentativas} ${palavraTentativa}`);

// : se chama operador ternário


// if (tentativas >1){
//     alert(`Você acerto! o número era ${numeroSecreto} , com ${tentativas} tentativas`);
// } else {
//     alert(`Você acerto! o número era ${numeroSecreto} , com ${tentativas} tentativa`);
// }



