function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains('light')) {
    img.setAttribute("src", "./assets/avatar-light.png"),
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos escuros e jaqueta preta, barba e fundo rosa e azul.")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  }
