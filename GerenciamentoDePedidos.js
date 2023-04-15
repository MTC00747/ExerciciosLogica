//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

function calcularValorTotal(n, pedidos, cupom) { //Função para calcular valor total de um pedido. Passado como parametro  n, um aray de pedidos e uym cupom. 
    let total = 0; // inicia o total em "0"
    for (let i = 0; i < n; i++) { // percorre todo o array "N" Vezes , N é a quantidade de itens, enquanto i for menor que n , ele vao percorrer o array 
      let [nome, valor] = pedidos[i].split(' '); //Separa nome do pedido e valor do pedido do array
      valor = parseFloat(valor); // transforma o valor  que é string em float
      total += valor; //soma o valor com o total. 
    }
    
    //TODO: Criar as condições para aplicar o cupom de desconto (10% ou 20%).
    if (cupom === "10%"){
      total *= 0.9
    } else if (cupom === "20%"){
      total *= 0.8
    }
    return total.toFixed(2); // retorna o total 
  }
  
  //Recupera os valores de entrada, criando um array para os pedidos:
  const n = 5; // transforma n em número inteiro
  const pedidos = ["Pizza 10.00", "Pizza 20.00", "Pizza 40.00"]; // array de pedidos
  for (let i = 0; i < n; i++) {
    pedidos.push("Pizza 30.00","Hamburguer 10.00");
  }
  const cupom="10%";
  
  //TODO: Analisar e completar a função "calcularValorTotal", invocando-a para obtenção do total.
  const valorTotal = calcularValorTotal(n,pedidos,cupom); 

  
  //TODO: Imprimir o valor total obtido de acordo com o padrão solicitado neste desafio.
  
  console.log(`Valor total: ${valorTotal}`);