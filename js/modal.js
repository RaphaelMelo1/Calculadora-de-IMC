export const modal = {
  form: document.querySelector("form"),
  wrapper: document.querySelector(".modal-wrapper"),
  buttonClose: document.querySelector("button.close"),
  message: document.querySelector(".modal .title span"),


  open() {
    modal.wrapper.classList.add("open") //Nós conseguimos referenciar uma propriedade de um objeto no próprio objeto * explosion *
  },
  close() {
    modal.wrapper.classList.remove("open")
  },
}

modal.buttonClose.onclick = () => {
  modal.close()
}

window.addEventListener('keydown', handleEscape)

function handleEscape(aew){
  if(aew.key === 'Escape'){
    modal.close()
  }
}