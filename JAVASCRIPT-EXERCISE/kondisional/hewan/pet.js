function dataHewan() {
  let hewan = document.getElementById("hewan").value.toLowerCase();
  let output = document.getElementById("output");

  if (hewan === "kucing" || hewan === "sapi" || hewan === "ayam") {
    output.innerText = "Saya memelihara hewan tersebut";
  } else {
    output.innerText = "Saya tidak memiliki hewan peliharaan";
  }
}
