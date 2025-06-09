function cekAngka() {
  let angka = document.getElementById("angkaInput").value;
  if (angka === "") {
    alert("Silakan masukkan angka terlebih dahulu.");
  } else if (angka % 2 === 0) {
    alert("Angka genap.");
  } else {
    alert("Angka ganjil.");
  }
}
