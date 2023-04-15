const readlineSync = require('readline-sync');
// Importando readlineSync 

let DataAtual = "20,11,20"
let DataDoEvento = readlineSync.question('Qual a data do evento ?');
if (DataDoEvento < DataAtual) {
    console.log("Data Incorreta");
} else {
    Idade = readlineSync.question('Qual a idade do participante?');
    if (Idade < 18) {
        console.log("Idade não permitida!");
    }
}
let Nome = readlineSync.question('Qual o nome do participante ?');

Participantes = ['João', 'Lucas', 'Júlia', 'Matheus']

if (Participantes.length > 100) {
    console.log("Número de participante excedido!");
}
else {
    Participantes.push(Nome);
    for (i = 0; i < Participantes.length; i++) {

        console.log(Participantes[i]);

    }
    console.log("Cadastro permitido! ");
}






