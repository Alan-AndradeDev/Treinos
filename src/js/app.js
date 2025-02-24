/**
 * number, NaN, infinity, string, boolean, null, undefined, object, array, function
 *
 * Passando para inteiro ou string:
 * Colocar antes Number()
 * Colocar antes String()
 * 
 * var n1 = Number.parseInt(window.prompt('Digite o primeiro número: '));
var n2 = Number.parseInt(window.prompt('Digite o segundo número: '));
 ou
 var n1 = Number(window.prompt("Digite o primeiro número: "))
 var n2 = Number(window.prompt("Digite o segundo número: "))
var s = n1 + n2;
window.alert('A soma dos números é: ${s}');

 */
/**
 * 5+2 é igual a 7
 * 5-2 é igual a 3
 * 5*2 é igual a 10
 * 5/2 é igual a 2.5
 * 5%2 é igual a 1 (Resto da divisão)
 * 5**2 é igual a 25 (Potência)
 * Cuidado com as precedencias dos operadores
 * () > ** > *, /, % > +, -
 * Simplificando o recebe:
 * n = n+4 para n+= 4 e para os outros é a mesma coisa
 * x = x+ 1 para x++
 * x = x-1 para x--
 * if e else encurtado:
 * media>= 7 ? "Aprovado" : "Reprovado"
 */
//Escrever no documento
let nome = window.prompt('Digite o seu nome: ');
document.write(`Nome minúsculo: ${nome.toLowerCase()}</br>`);
document.write(`Nome maiúsculo: ${nome.toUpperCase()}`);

