function calcular(tipo, valor) {

  if (tipo === 'acao') {

    if (valor == 'c') {
      // Apagar o valor
      document.getElementById('resultado').value = ''
    }

    if (valor == '/' || valor == '*' || valor == '-' || valor == '+' || valor == '.') {
      // Concatena as ações no console
      document.getElementById('resultado').value += valor
    }

    if (valor == '=') {
      // Cria 1 var e calcula o que está no console, por causa do eval()
      var valor_campo = eval(document.getElementById('resultado').value)
      //Imprime o valor atualizado
      document.getElementById('resultado').value = valor_campo
    }

  } else if (tipo === 'valor') {
    document.getElementById('resultado').value += valor
  }
}