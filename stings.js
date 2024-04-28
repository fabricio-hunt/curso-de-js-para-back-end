/*Strings são sequências de caracteres alfanuméricos (letras, números e/ou símbolos) amplamente usadas em programação. Em JavaScript,
 uma string sempre estará entre aspas. Podemos declará-las com aspas duplas (") ou simples ('). Por exemplo:*/
    const frase = "Mergulhando em tecnologia com Alura";
/*Também é possível combinar aspas simples 
e duplas quando a string contém aspas internamente:
---------------------------------------------------------------------------------------------------------------------------*/
    console.log('Ela disse: "Adeus!"');
    console.log("Ela disse: 'Adeus!'");
/* -------------------------------------------------------------------------------------------------------------------------
após definida, a string é imutável, ou seja, não pode ter seu valor 
alterado. Sempre que manipulamos uma string, uma nova instância é 
criada por baixo dos panos, gerando um novo espaço na memória com
 uma cópia do valor da string. Portanto, é necessário armazená-la 
 em uma variável.
Além disso, o JavaScript oferece o objeto String, 
que permite criar ou converter um tipo em uma string. Por exemplo:*/
    const numero = 256;
    const convertidoEmString = new String(numero);
    /*Para manipular strings, podemos usar métodos como length 
    (que retorna o tamanho da string), charAt (para acessar caracteres),
     indexOf (para buscar substrings) e muitos outros123. 🚀*/

     /*---------------------------------------------------------------------------------------------------------------
     Template Strings (ou template literals) são uma forma mais flexível e legível de criar strings. 
     Elas permitem a interpolação de expressões 
     diretamente no corpo da string. Aqui estão alguns pontos importantes:
Sintaxe:
As template strings são envolvidas por acentos graves (` `), em vez de aspas simples ou duplas.
Elas podem possuir placeholders, indicados por um cifrão seguido de chaves (${expression}).
As expressões nos placeholders, bem como o texto em volta delas, são passadas a uma função. 
A função padrão apenas concatena as partes em uma única string.
Exemplo:*/
    const nome = "Mundo";
    const saudacao = `Olá, ${nome}!`;
/*Strings Multi-linhas:
Qualquer caractere de nova linha inserido no código é parte da template string.
Antes, com strings normais, precisávamos usar a sintaxe abaixo para obter strings multi-linhas:*/
    console.log("texto string linha 1\\n" + "texto string linha 2");
    // Saída: "texto string linha 1
    // texto string linha 2"
    /* Agora, com template strings, podemos escrever*/
    console.log(`texto string linha 1
    texto string linha 2`);
    // Saída: "texto string linha 1
    // texto string linha 2"
/*Interpolação de Expressões:
Antes, para encapsular expressões dentro de strings, usávamos a seguinte sintaxe*/
    const a = 5;
    const b = 10;
    console.log("Quinze é " + (a + b) + " e não " + (2 * a + b) + ".");
    // Saída: "Quinze é 15 e não 20."
/*Tagged Template Strings:
Uma forma mais avançada dos template strings são os tagged template strings.
Com eles, você pode modificar a saída dos template strings usando uma função.
O primeiro argumento contém um array de literais (“Hello” e “World” no exemplo abaixo), 
e os argumentos subsequentes contêm valores previamente processados pelas expressões de substituição.
No final, a função retorna a string já manipulada*/
    function tag(strings, ...values) {
        console.log(strings[0]); // "Hello "
        console.log(strings[1]); // " world "
        console.log(values[0]); // 15
        console.log(values[1]); // 50
        return "Bazinga!";
    }
    tag`Hello ${a + b} world ${a * b}`;
    // Saída: "Bazinga!"

/*Strings Raw:
A propriedade especial raw, disponível no primeiro argumento da função da tagged template string, 
permite o acesso às strings de maneira pura (raw), exatamente como foram especificadas.
Concatenação de Strings:
A concatenação tradicional usa o sinal de +.
Exemplo:*/
    //let nome = "Mundo";
    //let saudacao = "Olá, " + nome + "!";

/*Com template strings, podemos fazer isso de forma mais legível*/
    //let nome = "Mundo";
    //let saudacao = `Olá, ${nome}!`;


