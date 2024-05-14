var armazenamento = new Array(9);
var armazenamentoInverso = new Array(9);
var z = 0;
for (var x = 0; x <= 9; x++) {
    armazenamento[x] = parseInt(teclado("Digite um n\u00FAmero para amarzenar ".concat(x, ": ")));
}
for (var y = 9; y >= 0; y--) {
    armazenamentoInverso[z] = armazenamento[y];
    z++;
}
console.log(armazenamento);
console.log(armazenamentoInverso);
