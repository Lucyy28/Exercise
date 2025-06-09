function cekUmur() {
  let umur = document.getElementById("umur").value;
  let output = document.getElementById("output");

  umur = Number(umur); 

  if (umur >= 18) {
    output.innerText = "Kamu sudah dewasa.";
  } else {
    output.innerText = "Kamu belum dewasa.";
  }
}
