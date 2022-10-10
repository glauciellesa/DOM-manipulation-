const divExemple = document.getElementById("exemple")

divExemple.addEventListener("keyup", () => {
  const input = document.getElementById("textInput")
  const textInput = input.value
  const result = document.getElementById("resultId")
  result.innerHTML = `Your name is: ${textInput}`
  console.log(textInput)
})
