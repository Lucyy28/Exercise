function cekGrade() {
  let nilaiInput = document.getElementById("nilai").value;
  let hasil = document.getElementById("hasil");

  if (nilaiInput === "") {
    hasil.textContent = "Nilai tidak boleh kosong.";
    return;
  }

  let nilai = parseInt(nilaiInput);

  if (nilai >= 90) {
    hasil.textContent = "Grade A";
  } else if (nilai >= 80) {
    hasil.textContent = "Grade B";
  } else if (nilai >= 70) {
    hasil.textContent = "Grade C";
  } else if (nilai >= 60) {
    hasil.textContent = "Grade D";
  } else {
    hasil.textContent = "Grade E";
  }
}
