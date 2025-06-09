var a = 1;
var tampung = "";
while (a <= 5) {
  tampung += `looping - ${a}<br>`;
  a++;
}
document.getElementById("output").innerHTML = tampung;
