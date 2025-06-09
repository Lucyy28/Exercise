function dataCuaca(){
  let cuaca = document.getElementById('cuaca').value;
  let output = document.getElementById('output');

  if (cuaca == "hujan"){
    output.innerText = "Bawa payung cuaca lagi hujan"
  }
  else{
    output.innerText = "Tidak usah bawa payung"
  }
}