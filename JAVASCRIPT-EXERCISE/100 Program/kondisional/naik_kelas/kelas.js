function liatkeLulusan(){
  let nilai = document.getElementById("nilai").value;
  let output = document.getElementById("output");
  nilai = Number(nilai)
  if (nilai > 75) {
    output.innerText = "Kmau Lulus.";
  } else {
    output.innerText = "Kamu tidak lulus.";
  }
}
