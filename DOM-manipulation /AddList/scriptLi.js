const bnt = document.getElementById("bntCreatNewLi")

bnt.addEventListener("click", () => {
  const input = document.getElementById("textInput")

  const unorderedList = document.getElementById("unorderedList")
  const createLi = document.createElement("li")
  const text = document.createTextNode(input.value)

  unorderedList.appendChild(createLi)
  createLi.appendChild(text)
})
