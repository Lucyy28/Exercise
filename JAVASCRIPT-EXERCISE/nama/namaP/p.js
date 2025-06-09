console.log
const namaInput = document.getElementById('nama');
const kamu = document.getElementById('kamu');
const output = document.getElementById('output');

kamu.addEventListener('click', () => {
  const p = document.createElement('p');
  p.textContent = namaInput.value;
  output.innerHTML = "";
  output.appendChild(p);
});
