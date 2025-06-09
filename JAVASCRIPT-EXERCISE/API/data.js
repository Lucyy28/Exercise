document.getElementById("cari").addEventListener("click", function () {
  const namaInput = document.getElementById("nama").value.toLowerCase();
  const hasilDiv = document.getElementById("hasil");

  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      const hasil = data.filter(item => {
        const nama = (item.nama || item.Nama || "").toLowerCase();
        return nama.includes(namaInput);
      });

      if (hasil.length > 0) {
        hasilDiv.innerHTML = "";
        hasil.forEach(item => {
          hasilDiv.innerHTML += `
            <p><b>Nama:</b> ${item.nama || item.Nama}</p>
            <p><b>JK:</b> ${item.jk || item.Jk}</p>
            <p><b>Alamat:</b> ${item.alamat || item.Alamat}</p>
            <p><b>Kelas:</b> ${item.Kelas}</p>
            <hr>
          `;
        });
      } else {
        hasilDiv.innerHTML = "<p>Nama tidak ditemukan.</p>";
      }
    })
    .catch((err) => {
      hasilDiv.innerHTML = "<p>Gagal memuat data.</p>";
      console.error(err);
    });
});
