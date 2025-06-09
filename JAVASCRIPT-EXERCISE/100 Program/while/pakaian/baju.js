var pakaian = ["Baju", "Celana", "Jaket"];
var keranjang = "";
var i = 0;

while (i < pakaian.length) {
  keranjang += `aku mau pakaian itu ${pakaian[i]}<br>`;
  i++;
}

document.getElementById('output').innerHTML = keranjang;