function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar tag da img
  const img = document.querySelector("#profile img")

  // subistituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "foto de perfil 2")
  } else {
    // se tiver darck mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute("alt", "foto de perfil 1")
  }
}
