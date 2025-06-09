var kota = ["Cianjur", "Bogor", "Bandung"];
var hiburam = "";
var i = 0;

while (i < kota.length) {
  hiburam += `aku mau hiburan di ${kota[i]}<br>`;
  i++;
}

document.getElementById('output').innerHTML = hiburam;