
let nota1 = 10;
let nota2 = 7;
let nota3 = 5;

let totalNota = nota1 + nota2 + nota3;

let aprovado = false;
let reprovado = false;

let media = totalNota / 3;

if (media >= 7) {
  aprovado = true;
} else {
  reprovado = true;
}

if (aprovado) {
  console.log(`Sua nota foi ${media}. Parabéns, você foi aprovado!`);
} else {
  console.log(`Sua nota foi ${media}. Infelizmente, você foi reprovado.`);
}


/* No mundo da programação, os booleans são os guardiões da verdade, ditando o "sim" ou "não" que guia o fluxo do seu código. No JavaScript, esses heróis silenciosos assumem a forma dos valores true e false, influenciando tudo, desde decisões complexas até simples verificações.

Para se tornar um mestre Jedi dos booleans, vamos desvendar seus segredos e explorar seus poderes em detalhes:

1. Desvendando os Tipos Booleanos:
Em JavaScript, os booleans podem ser representados de duas formas:

Valores primitivos: São os booleans puros, representados pelas palavras-chave true e false. Imagine-os como cavaleiros leais, sempre prontos para defender a verdade.
Objetos Booleanos: São representações encapsuladas de valores booleanos, criados usando o construtor Boolean(). Pense neles como castelos fortificados que protegem o valor booleano dentro.*/

// Valor booleano primitivo
let verdadeiro = true;
let falso = false;

// Objeto Boolean
let objVerdadeiro = new Boolean(true);
let objFalso = new Boolean(false);


/*
Dominando os Booleans em JavaScript: Um Guia Didático Detalhado!
No mundo da programação, os booleans são os guardiões da verdade, ditando o "sim" ou "não" que guia o fluxo do seu código. No JavaScript, esses heróis silenciosos assumem a forma dos valores true e false, influenciando tudo, desde decisões complexas até simples verificações.

Para se tornar um mestre Jedi dos booleans, vamos desvendar seus segredos e explorar seus poderes em detalhes:

1. Desvendando os Tipos Booleanos:
Em JavaScript, os booleans podem ser representados de duas formas:

Valores primitivos: São os booleans puros, representados pelas palavras-chave true e false. Imagine-os como cavaleiros leais, sempre prontos para defender a verdade.
Objetos Booleanos: São representações encapsuladas de valores booleanos, criados usando o construtor Boolean(). Pense neles como castelos fortificados que protegem o valor booleano dentro.
Exemplo:

JavaScript
// Valor booleano primitivo
let verdadeiro = true;
let falso = false;

// Objeto Boolean
let objVerdadeiro = new Boolean(true);
let objFalso = new Boolean(false);
Use o código com cuidado.
content_copy
Diferenças:

Valores primitivos: São mais leves e eficientes, perfeitos para uso frequente.
Objetos Booleanos: Úteis em situações específicas, como convertendo outros tipos para booleanos.
2. Operadores Booleanos: Desvendando a Linguagem dos Booleans
Para se comunicar com os booleans, você precisa dominar seus operadores mágicos:

Operador lógico "not" (!): Nega o valor booleano. Imagine um cavaleiro erguendo seu escudo, invertendo a verdade.

!true retorna false
!false retorna true
Operadores de comparação: Comparar valores é o forte dos booleans!

== (igualdade): Verifica se dois valores são iguais (cuidado! Confunde com tipo e valor).
=== (igualdade estrita): Verifica se dois valores e tipos são iguais (mais preciso).
!= (diferença): Verifica se dois valores são diferentes (cuidado! Confunde com tipo e valor).
!== (diferença estrita): Verifica se dois valores e tipos são diferentes (mais preciso).
< (menor que): Verifica se um valor é menor que outro.
<= (menor ou igual a): Verifica se um valor é menor ou igual a outro.
> (maior que): Verifica se um valor é maior que outro.
>= (maior ou igual a): Verifica se um valor é maior ou igual a outro.
Operadores lógicos "and" (&&) e "or" (||): Combinam booleans como um sábio conselho.

&& (e): Retorna true apenas se ambos os valores forem true. Imagine dois cavaleiros precisando abrir um portão juntos.
|| (ou): Retorna true se pelo menos um valor for true. Imagine um cavaleiro abrindo um portão sozinho ou com outro.
Exemplo:*/

let maiorDeIdade = idade >= 18;
let possuiDocumento = documento != null;

let podeEntrar = maiorDeIdade && possuiDocumento; // Usando "and" para duas condições
let podePagarComCartao = cartaoCredito || dinheiroEmEspecie; // Usando "or" para alternativas














