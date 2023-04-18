import { modal } from "./modal.js" //QUANDO IMPORTARMOS, O JS NÃO ESCREVERÁ CORRETAMENTE, ELE COLOCARÁ APENAS O NOME DO ARQUIVO, MAS VOCÊ DEVE MANUALMENTE COLOCAR O '.js' PARA QUE NÃO OCORRA NENHUM ERRO 404
import { alertError } from './alert-error.js'
import { calculateIMC, notANumber} from './utils.js'


const inputHeight = document.querySelector("#height")
const inputWeight = document.querySelector("#weight")

modal.form.onsubmit = function(event){
  event.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value
  
  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height) //Caso o height ou o weight não sejam números, aparecerá o erro.
  
  if (weightOrHeightIsNotANumber) {
    alertError.open() //aqui, caso for mostrar o erro, vai buscar no outro arquivo javascript que ta com a div do alert-error e vai colocar a class open pra abrir o erro.
    return //Devemos colocar um return para parar imediatamente a aplicação caso aconteça o erro.
  }

  inputWeight.oninput = () => alertError.close()
  inputHeight.oninput = () => alertError.close()

  alertError.close()
  const result = calculateIMC(weight, height)
  displayResultMessage(result)
  inputHeight.value = ''
  inputWeight.value = ''
}
function displayResultMessage(result){
  modal.message.innerText = `Seu IMC é de: ${result}`
  modal.open()
}
