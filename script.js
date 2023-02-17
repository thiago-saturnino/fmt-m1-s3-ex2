function geradorLink() {
  let seuNumero = prompt("Digite seu numero", "5548");
  let suaMensagem = prompt("Digite sua mensagem :");
  let linkHTML = document.getElementById("link");
  let link = `api.whatsapp.com/send?phone=${seuNumero}&text=${suaMensagem}`;
  linkHTML.innerHTML = link;

  console.log(link);
}

function clicou() {
  console.log("teste");
}

geradorLink();
