function dataHewan() {
  let jenis = document.getElementById("jenis").value;
  let output = document.getElementById("output");

  if (jenis === "kucing" || jenis === "sapi" || jenis === "ayam") {
    output.innerText = "Hewan dikenal";
  } else {
    output.innerText = "Hewan tidak dikenal";
  }
}
