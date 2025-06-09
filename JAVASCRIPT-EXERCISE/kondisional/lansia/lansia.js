function umurLansia(){
  let lansia = document.getElementById('lansia').value;
  let output = document.getElementById('output');

  if (lansia >=60){
    output.innerText = "Termasuk lansia"
  }
  else {
    output.innerText = "Bukan lansia"
  }
}