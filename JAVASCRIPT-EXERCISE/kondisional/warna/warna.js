function dataWarna(){
  let warna = document.getElementById("warna").value.toLowerCase();
  let output = document.getElementById('output');

  if (warna=="merah"){
    output.innerText = "Pemberani"
  }
  else if (warna=="biru"){
    output.innerText = "Tenang"
  }
  else if (warna=="kuring"){
    output.innerText = "Ceria"
  }
  else{
    output.innerText = "Warna tidak diketahui"
  }
}