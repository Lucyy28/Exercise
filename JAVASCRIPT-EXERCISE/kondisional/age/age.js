function cekUmur() {
  let umur = document.getElementById("umur").value;
  let output = document.getElementById("output");

  umur = Number(umur); 

  if (umur <5) {
    output.innerText = "Kamu Balita.";
  }
  else if (umur>=5 && umur <=12){
    output.innerText = "Kamu Anak-anak"
  }
  else if (umur>=13 && umur <=17){
    output.innerText = "Kamu remaja"
  }
  else {
    output.innerText = "Kamu belum dewasa.";
  }
}
