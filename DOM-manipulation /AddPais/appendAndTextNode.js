const bnt = document.getElementById("bnt")

bnt.addEventListener("click", () => {
  const input = document.getElementById("inputText")
  const inputValue = input.value

  const divItem = document.createElement("div")
  const divRemove = document.createElement("div")
  const text = document.createTextNode(`${inputValue}`)

  divItem.classList.add("item")
  divRemove.classList.add("remove")
  divRemove.innerText = "X"
  divItem.appendChild(divRemove)
  divItem.appendChild(text)

  const placesContainer = document.getElementById("places-container")
  placesContainer.appendChild(divItem)
})

const remove = document.getElementById("remove")

remove.addEventListener("click", () => {
  console.log(remove)
})
