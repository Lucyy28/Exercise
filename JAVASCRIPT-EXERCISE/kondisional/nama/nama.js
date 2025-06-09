function dataNama() {
  let nama = document.getElementById('nama').value.toLowerCase();
  let output = document.getElementById('output');

  if (nama === "sandi") {
    output.innerText = "KAMU GANTENG BANGET";
  } else {
    output.innerText = "KAMU PLOSOK BANGET!!";
  }
}
