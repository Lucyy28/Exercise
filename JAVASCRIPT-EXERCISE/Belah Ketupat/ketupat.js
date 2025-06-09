const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const tombol = document.getElementById('hasil');
const keliling = document.getElementById('keliling');

const hitungKeliling = (a, b, c, d) => a + b + c + d;

tombol.addEventListener('click', () => {
  const hasil = hitungKeliling(
    parseFloat(a.value),
    parseFloat(b.value),
    parseFloat(c.value),
    parseFloat(d.value)
  );
  keliling.textContent = hasil;
});
