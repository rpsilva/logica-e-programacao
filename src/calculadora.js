function somarDoisNumeros (valor1, valor2) {
	const resultado = valor1 + valor2;
	return resultado;
}

function calcularMediaDeDoisNumeros (valor1, valor2){
	//1. Soma todos os valores
	const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2);

	//2. Divida pela quantidade de números passados
	const resultadodaMediaDeDoisValores = resultadoSomaDeDoisValores /2;

	//3. Retornar o resultado
	return resultadodaMediaDeDoisValores

}

module.exports = {
somarDoisNumeros                   //colocar todas as funções que quer expor para outras

}