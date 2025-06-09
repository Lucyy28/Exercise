function dataBarang(){
  let barang = document.getElementById('barang').value;
  let output = document.getElementById('output');

  if(barang >=10){
    output.innerText = "Mendapatkan diskon sebesar 10%"
  }
  else {
    output.innerText = "Tidak dapat diskon"
  }
}