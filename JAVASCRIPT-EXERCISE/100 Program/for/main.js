function tampilkanData() {
  const input = document.getElementById('angkaInput').value;
  const output = document.getElementById('output');
  output.innerHTML = '';

  const angka = parseInt(input);
  if (isNaN(angka) || angka <= 0) {
    output.innerHTML = 'Masukkan angka yang benar!';
    return;
  }

  for (let i = 1; i <= angka; i++) {
    const p = document.createElement('p');
    p.textContent = `data ke - ${i}`;
    output.appendChild(p);
  }
}
