function cekBerat() {
  let berat = document.getElementById("berat").value;
  let hasil = document.getElementById("hasil");

  if (berat < 50) {
    hasil.textContent = "Berat badan kurang";
  } else if (berat <= 70) {
    hasil.textContent = "Berat badan normal";
  } else {
    hasil.textContent = "Berat badan berlebih";
  }
}
