/* const button = document.getElementById("bnt") */
const divExemple = document.getElementById("exemple")
const place = document.getElementById("place")

/* button.addEventListener("click", () => { */
divExemple.addEventListener("change", () => {
  const selectedOption = place.options[place.selectedIndex]
  const result = document.getElementById("resultId")
  if (!selectedOption.value) {
    result.innerHTML = ""
  } else {
    const textValue = selectedOption.text
    const price = selectedOption.dataset.price
    result.innerHTML = `Cidade: ${textValue}, preço:${price} `
  }
})
