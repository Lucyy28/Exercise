const namaInput = document.getElementById('nama');
const kamu = document.getElementById('kamu');
const output = document.getElementById('output');

kamu.addEventListener('click', () => {
  const bold = document.createElement('strong');
  bold.textContent = namaInput.value;
  output.innerHTML = "";
  output.appendChild(bold);
});
