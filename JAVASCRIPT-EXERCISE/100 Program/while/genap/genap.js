let i = 2;
let hasil = "";

while (i <= 10) {
  hasil += i + "<br>";
  i += 2;
}

document.getElementById("output").innerHTML = hasil;
