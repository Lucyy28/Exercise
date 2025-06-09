const namaInput = document.getElementById('nama');
const tombol = document.getElementById('hasil');
const output = document.getElementById('output');

tombol.addEventListener('click', () => {
  const h1 = document.createElement('h1');
  h1.textContent = namaInput.value;
  output.innerHTML = "";
  output.appendChild(h1);
});
