const bnt = document.getElementById("bntCreatNewLi")

bnt.addEventListener("click", () => {
  const input = document.getElementById("textInput")
  const inputValue = input.value
  const capitalizeFirstLetter =
    inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
  const ol = document.getElementById("orderedList")

  const createLi = document.createElement("li")
  const text = document.createTextNode(capitalizeFirstLetter)

  ol.appendChild(createLi)
  createLi.appendChild(text)
})
