document.getElementById("tombolTampil").onclick = function () {
  const nilai = document.getElementById("inputAngka").value;
  const batas = Number(nilai);
  const output = document.getElementById("output");
  output.innerHTML = ""

  if (nilai) {
    for (let i = 1; i <= batas; i += 2) {
      output.innerHTML += i + "<br>";
    }
  } else {
    output.innerHTML = "Silakan isi angkanya dulu.";
  }
};
