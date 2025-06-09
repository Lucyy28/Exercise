function dataHari(){
  let hari = document.getElementById('hari').value;
  let output = document.getElementById('output');

  if (hari == "minggu"){
    output.innerText = "Hari Libur"
  }
  else {
    output.innerText = "Bukan Hari Libur"
  }
}