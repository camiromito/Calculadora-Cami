function calcular() {
  const uno = document.getElementById("uno");
  const dos = document.getElementById("dos");
  const resultado = document.getElementById("resultado");

  resultado.value = parseInt(uno.value) + parseInt(dos.value);
}
