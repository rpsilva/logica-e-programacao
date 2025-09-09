const { somarDoisNumeros } = require('../src/calculadora');
const { expect }= require('chai');

/** testar sem o uso de ferramenta de automação
const resultadoDaSoma = somarDoisNumeros(5,3);
console.log(resultadoDaSoma); **/

describe('Testes da função de Soma', function() {
	it('A função deve ser capaz de somar dois números positivos', function() {
		//Coleta o resultado da função
		const resultadoDaSoma = somarDoisNumeros(5,3);

		//Compara o resultado com o valor que você espera
		expect(resultadoDaSoma).to.equal(8);
});

	it('A função deve ser capaz de somar um número positivo e um negativo', function() {
		//Coleta o resultado da função
		const resultadoDaSoma = somarDoisNumeros(50,-15);

		//Compara o resultado com o valor que você espera
		expect(resultadoDaSoma).to.equal(35);
  });


	it('A função deve ser capaz de somar núermos zerados', function() {
		//Coleta o resultado da função
		const resultadoDaSoma = somarDoisNumeros(0,0);

		//Compara o resultado com o valor que você espera
		expect(resultadoDaSoma).to.equal(0);
  });

	it('A função deve ser capaz de somar dois números negativos', function() {
		//Coleta o resultado da função
		const resultadoDaSoma = somarDoisNumeros(-30,-50);

		//Compara o resultado com o valor que você espera
		expect(resultadoDaSoma).to.equal(-80);
  });



});

