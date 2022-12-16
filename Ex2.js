
let Num = [1,5,3,10,12,13,4]; //Array de Objetos 


 Num.sort((a, b)=> a-b); // Ordena do menor para o maior


console.log(Num[Num.length - 1]); // Trás a quantidade de casa do array - 1 ex : (0,1,2,3,4,5,6,(7)O Sete é subtraido e retorna o 6 Objeto do array)

////Refatorando para executar menos linhas

let maximo = console.log(Math.max(...Num));
