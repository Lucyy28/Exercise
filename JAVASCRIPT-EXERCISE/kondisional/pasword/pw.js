function dataPasword(){
  let pw = document.getElementById('pw').value;
  let output = document.getElementById('output');

  if (pw == "pplg"){
    output.innerText = "Akses diterima"
  }
  else{
    output.innerText = "Password salah"
  }
}