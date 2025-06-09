function dataTb() {
  let tb = document.getElementById("tb").value;
  let output = document.getElementById("output");

  if (tb >= 170) {
    output.innerText = "Tinggi";
  }
  else if (tb >=150){
    output.innerText = "Sedang";
  }
  else if (tb <=150){
    output.innerText = "Pendek";
  }
}
