let kata = "sandi";
let hasil = "";
for (let i = 0; i < kata.length; i++) {
  hasil += kata[i] + "<br>";
}
document.getElementById("output").innerHTML = hasil;
