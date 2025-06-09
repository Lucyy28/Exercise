const panjang = document.getElementById('panjang');
const lebar = document.getElementById('lebar');
const tinggi = document.getElementById('tinggi');
const hitung = document.getElementById('perhitungan');

const luas = document.getElementById('Luas');
const volume = document.getElementById('Volume');

const hitungLuas = (p, l, t) => 2 * ((p * l) + (p * t) + (l * t));
const hitungVolume = (p, l, t) => p * l * t;

hitung.addEventListener('click', () => {
  const p = parseFloat(panjang.value) || 0;
  const l = parseFloat(lebar.value) || 0;
  const t = parseFloat(tinggi.value) || 0;

  luas.textContent = hitungLuas(p, l, t);
  volume.textContent = hitungVolume(p, l, t);
});
