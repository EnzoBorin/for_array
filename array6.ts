/*Nome: Enzo Cardoso Boirn

6- Faça um programa que verifique e mostre os números entre
1.000 e 2.000 (inclusive) que, quando divididos por 11
produzam resto igual a 2. Utilizar o laço de repetição FOR
*/

console.clear();

for (let numero = 1000; numero <= 2000; numero++) {
    if (numero % 11 == 2) {
        console.log(numero);
    }
}
