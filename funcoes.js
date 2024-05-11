/*
O que são funções em JavaScript?

Funções em JavaScript são blocos de código reutilizáveis que executam uma tarefa específica. Elas são como unidades de código independentes que podem ser chamadas de diferentes partes do seu programa.

Pense em uma função como uma receita culinária. A receita fornece instruções passo a passo para preparar um prato específico. Da mesma forma, uma função em JavaScript fornece instruções passo a passo para realizar uma tarefa específica.

Benefícios do uso de funções:

Reutilização de código: Funções permitem que você escreva o mesmo código uma vez e o use em vários lugares do seu programa, evitando redundância e tornando seu código mais organizado e fácil de manter.
Modularidade: Funções dividem seu programa em módulos menores e mais gerenciáveis, facilitando o entendimento, a depuração e a modificação do código.
Esconder a complexidade: Funções encapsulam código complexo dentro de si, expondo apenas a interface necessária para interagir com elas, tornando seu código mais fácil de usar e entender.
Criando funções em JavaScript:

Existem duas maneiras principais de criar funções em JavaScript:*/

/*Declaração de função:*/

function nomeDaFuncao(parametro1, parametro2) {
    // Instruções da função
  }

  /*Expressão de função:*/

  const nomeDaFuncao = function(parametro1, parametro2) {
    // Instruções da função
  };

  /*Parâmetros de função:

Os parâmetros de função são os valores que você passa para a função quando a chama. Eles permitem que você forneça dados específicos para a função realizar sua tarefa.

Exemplo:*/

function somar(numero1, numero2) {
    return numero1 + numero2;
  }
  
  const resultado = somar(5, 3);
  console.log(resultado); // Resultado: 8
  

