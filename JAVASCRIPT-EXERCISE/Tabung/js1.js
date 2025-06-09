console.log('tabung')
const jari = document.getElementById('fr-jari')
const tinggi = document.getElementById('fr-tinggi')
const btnHitung = document.getElementById('btn-hitung')
const luas = document.querySelector('#txt-luaspermukaan')
const volume = document.querySelector('#txt-volume')

function hitungLuasTabung (r,t){
  return 2 * Math.PI * r * (r+t);
}

function hitungVolumeTabung (r,t){
  return Math.PI * r * r * t;
}
btnHitung.addEventListener ('click',  () => {
  luas.textContent = hitungLuasTabung(Number(jari.value),Number(tinggi.value));
  volume.textContent = hitungVolumeTabung(Number(jari.value),Number(tinggi.value));
})