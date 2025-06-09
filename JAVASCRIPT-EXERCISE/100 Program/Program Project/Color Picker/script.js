document.getElementById("colorInput")
addEventListener("input", function(even){
  let selectedColor = even.target.value

  document.getElementById("colorCode").textContent= selectedColor

  document.getElementById("colorDisplay").style.backgroundColor = selectedColor
})