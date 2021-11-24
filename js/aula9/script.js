/*function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(5, 10))*/

function clicou() {
  document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
  console.log(document.getElementById("agradecimento"))

}

function redirecionar() {
  //window.open("https://www.instagram.com/");
  window.location.href = "https://www.instagram.com/";
}

function trocar() {
  document.getElementById("mouseover").innerHTML =
    "<b>valeu!</b>";

}

function voltar() {
  document.getElementById("mouseover").innerHTML =
    "<b>Passe o mouse aqui</b>";
}