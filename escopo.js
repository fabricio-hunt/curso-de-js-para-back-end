let estudante

if (1 > 0 ){
    estudante = 'Caroline'
    console.log(estudante)
}

console.log(estudante)


/* 

Em JavaScript, o escopo define a visibilidade de variáveis e funções dentro de um programa. Imagine um grande armário com diferentes prateleiras e gavetas. Cada prateleira ou gaveta representa um escopo, e os itens guardados dentro dela só podem ser acessados a partir daquele local específico.

No JavaScript, existem três tipos principais de escopo:

1. Escopo Global:

O armário inteiro! Esse é o escopo mais amplo, onde as variáveis e funções declaradas fora de qualquer bloco de código ou função ficam disponíveis em todo o programa. Pense nele como as prateleiras abertas do armário, onde qualquer um pode pegar os itens.
Exemplo: */


var nomeGlobal = "Fulano"; // Variável global

function mostrarNome() {
  console.log(nomeGlobal); // Acessa a variável global
}

mostrarNome(); // Exibe: Fulano

/* 2. Escopo de Função:

Dentro de cada gaveta! As variáveis e funções declaradas dentro de uma função só são acessíveis dentro daquela função e de suas funções aninhadas. Pense nelas como itens guardados em uma gaveta específica, que só podem ser vistos por quem abre a gaveta.
Exemplo:*/

function criarUsuario(nome, idade) {
    var nomeCompleto = nome + " " + sobrenome; // Variável de função
  
    function mostrarNomeCompleto() {
      console.log(nomeCompleto); // Acessa a variável da função
    }
  
    return mostrarNomeCompleto;
  }
  
  var mostrarNome = criarUsuario("Ana", 25);
  mostrarNome(); // Exibe: Ana Silva (nomeCompleto definido na função criarUsuario)
  

  /* 3. Escopo de Bloco (ES6):

Introduzido no ES6, o escopo de bloco oferece ainda mais organização! As variáveis declaradas usando let ou const dentro de blocos de código ({}) só são acessíveis dentro daquele bloco. Imagine gavetas com divisórias, onde cada divisória representa um bloco, e os itens dentro só podem ser vistos por quem abre aquela divisória específica.
Exemplo: */ 

function calcularMedia(notas) {
    let soma = 0;
    for (let nota of notas) {
      soma += nota;
    }
    let media = soma / notas.length;
    return media;
  }
  
  var notas = [10, 8, 7, 9];
  var mediaFinal = calcularMedia(notas);
  console.log(mediaFinal); // Exibe a média das notas
  