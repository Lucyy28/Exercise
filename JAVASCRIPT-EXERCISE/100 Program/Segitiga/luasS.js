const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const hitung = document.getElementById('hitung')
const output = document.getElementById('output')
hitung.addEventListener ('click',function(){
  let a = alas.value
  let t = tinggi.value
  let luas = 0.5*a*t
  output.innerHTML = `Luas Segitiga dari alas ${a}Cm dan tinggi ${t}Cm adalah ${luas}Cm`
})