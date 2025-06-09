console.log 
function liatAngka(){
  let angka = document.getElementById('angka').value;
  let output = document.getElementById('output');

  angka = Number(angka)
  if(angka %2==1){
    output.innerText = "bilangan ganjil";
  }
  else{
    output.innerText = "bilangan genap";
  }
}