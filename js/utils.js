//Podemos jogar algumas funções úteis aqui

export function notANumber(value) {
  return isNaN(value) || value == "" //isNaN é uma função que verifica se o que foi escrito é um número. Caso for um número, retornará false, caso for qualquer outra coisa a não ser um número, retornará true, não é um número (is not a number). Dentro do isNaN(value) no lugar do value colocaremos weight e height, que são os valores que queremos puxar para verificarmos se é um número.
}

export function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}