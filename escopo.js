let estudante

if (1 > 0 ){
    estudante = 'Caroline'
    console.log(estudante)
}

console.log(estudante)


/* 

Escopo em JavaScript: Um Guia Didático
Em JavaScript, o escopo define a visibilidade de variáveis e funções dentro de um programa. Imagine um grande armário com diferentes prateleiras e gavetas. Cada prateleira ou gaveta representa um escopo, e os itens guardados dentro dela só podem ser acessados a partir daquele local específico.

No JavaScript, existem três tipos principais de escopo:

1. Escopo Global:

O armário inteiro! Esse é o escopo mais amplo, onde as variáveis e funções declaradas fora de qualquer bloco de código ou função ficam disponíveis em todo o programa. Pense nele como as prateleiras abertas do armário, onde qualquer um pode pegar os itens.
Exemplo:


var nomeGlobal = "Fulano"; // Variável global

function mostrarNome() {
  console.log(nomeGlobal); // Acessa a variável global
}

mostrarNome(); // Exibe: Fulano

*/ 