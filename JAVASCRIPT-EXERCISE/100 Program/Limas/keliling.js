// const sisi = document.getElementById('sisi')
// const lebar = document.getElementById('lebar')
// const hasil = document.getElementById('hasil')
// const keliling = document.getElementById('keliling')
// hasil.addEventListener ('click',function(){
//   let s = sisi.value
//   let l = lebar.value
//   let keliling = 4 * s + l
// })
const sisi = document.getElementById('sisi');
const lebar = document.getElementById('lebar');
const hasil = document.getElementById('hasil');
const keliling = document.getElementById('keliling');

hasil.addEventListener('click', function () {
  let s = parseFloat(sisi.value);
  let l = parseFloat(lebar.value);
  let k = 4 * s + l;
  keliling.textContent = k;
});
