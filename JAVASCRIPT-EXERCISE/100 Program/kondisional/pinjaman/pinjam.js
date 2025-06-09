function dataBuku() {
  let buku = Number(document.getElementById('buku').value);
  let output = document.getElementById('output');

  if (buku >= 4) {
    output.innerText = "Tidak bertanggung jawab, kamu akan dikenakan denda Rp 50.000";
  } else {
    output.innerText = "Bagus, kamu tepat waktu";
  }
}
