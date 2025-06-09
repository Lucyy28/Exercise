var buah = ["semangka", "mangga", "anggur"];
var keranjang = "";
var i = 0;

while (i < buah.length) {
  keranjang += `aku mau buah itu ${buah[i]}<br>`;
  i++;
}

document.getElementById('output').innerHTML = keranjang;