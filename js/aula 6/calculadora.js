function calculadora() {
  const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão Real (/) \n 5 - Divisao Inteira (%) \n 6 - Potenciação (**) \n 7 - sair'));

  if (!operacao || operacao >= 8 || operacao <= 0) {
    alert('Erro - operação inválida!')
    calculadora();
  }

  let n1 = Number(prompt('Insira o primeiro numero: '))
  let n2 = Number(prompt('Insira o segundo numero: '))
  let resultado;

  if (!n1 || !n2) {
    alert('erro - parametros inválidos')
    calculadora();
  }

  function soma() {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`)
    novaOperacao();
  }
  function subtracao() {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`)
    novaOperacao();
  }
  function multiplicacao() {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`)
    novaOperacao();
  }
  function divisaoreal() {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`)
    novaOperacao();
  }
  function divisaointeira() {
    resultado = n1 % n2;
    alert(`O resto da divisao entre${n1} e ${n2} = ${resultado}`)
    novaOperacao();
  }
  function potenciacao() {
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2}ª é igual a resultado ${resultado}`)
    novaOperacao();
  }
  function novaOperacao() {
    let opcao = prompt('deseja fazer outra operação? \n 1 - Sim\n 2 - Não');

    if (opcao == 1) {
      calculadora();
    } else if (opcao == 2) {
      alert('Ate Mais')
    } else {
      alert('Digite uma opção valida! ')
      novaOperacao();
    }

  }
  function sair() {
    if (opcao == 7)
      alert('Ate mais');
    sair()


  }


  if (operacao == 1) {
    soma();
  } else if (operacao == 2) {
    subtracao()
  } else if (operacao == 3) {
    multiplicacao()
  } else if (operacao == 4) {
    divisaoreal()
  } else if (operacao == 5) {
    divisaointeira()
  } else if (operacao == 6) {
    potenciacao()
  } else if (operacao == 7)
    sair()
}
calculadora()
