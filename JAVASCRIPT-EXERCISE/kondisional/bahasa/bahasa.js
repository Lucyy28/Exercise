function dataBahasa(){
  let bahasa = document.getElementById('bahasa').value;
  let output = document.getElementById('output');

  if (bahasa =="indonesia"){
    output.innerText = "Halo"
  }
  else if (bahasa =="inggris"){
    output.innerText = "Hello"
  }
  else if (bahasa =="jepang"){
    output.innerText = "Konnichiwa"
  }
  else if (bahasa =="arab"){
    output.innerText = "Marhaban"
  }
}