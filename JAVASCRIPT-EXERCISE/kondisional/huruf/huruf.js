function cekHuruf() {
  let huruf = document.getElementById("inputHuruf").value.toLowerCase();
  let output = document.getElementById("hasil");

  if (huruf.length === 0) {
    output.textContent = "Silakan masukkan satu karakter.";
  } else if (!huruf.match(/[a-z]/)) {
    output.textContent = "Bukan huruf.";
  } else if ("aiueo".includes(huruf)) {
    output.textContent = "Huruf vokal.";
  } else {
    output.textContent = "Huruf konsonan.";
  }
}
