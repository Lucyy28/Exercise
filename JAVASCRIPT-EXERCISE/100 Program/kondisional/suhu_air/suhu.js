function dataSuhu(){
  let suhu = document.getElementById('suhu').value.toLowerCase();
  let output = document.getElementById('output');

  if (suhu <=0){
    output.innerText = "Air membaku"
  }
  else if (suhu >=0 && suhu <100){
    output.innerText = "Air dalam keadaan cair"
  }
  else if (suhu >=100){
    output.innerText = "Air mendidih"
  }
}