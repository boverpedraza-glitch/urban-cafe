const botonMenu = document.getElementById("botonMenu");
const listaMenu = document.getElementById("listaMenu");

botonMenu.addEventListener("click", function() {
  if (listaMenu.style.display === "none") {
    listaMenu.style.display = "block";
  } else {
    listaMenu.style.display = "none";
  }
});
const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();

  respuesta.textContent = "¡Gracias por tu mensaje! Te responderemos pronto.";
  formulario.reset();
});