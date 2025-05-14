document.getElementById('bmiForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const berat = parseFloat(document.getElementById('berat').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  const usia = parseInt(document.getElementById('usia').value);
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const aktivitas = parseFloat(document.querySelector('input[name="aktivitas"]:checked').value);

  const tinggiMeter = tinggi / 100;
  const bmi = berat / (tinggiMeter * tinggiMeter);
  let kategori = '';

  if (bmi < 18.5) kategori = 'Kurus';
  else if (bmi < 25) kategori = 'Normal';
  else if (bmi < 30) kategori = 'Berat Berlebih';
  else kategori = 'Obesitas';

  // Rumus Harris Benedict
  let bmr;
  if (gender === 'male') {
    bmr = 66.5 + (13.75 * berat) + (5.003 * tinggi) - (6.75 * usia);
  } else {
    bmr = 655 + (9.563 * berat) + (1.850 * tinggi) - (4.676 * usia);
  }

  const kebutuhanKalori = Math.round(bmr * aktivitas);
  const beratIdeal = Math.round(22 * tinggiMeter * tinggiMeter);
  const kelebihan = berat - beratIdeal;

  document.getElementById('hasil').innerHTML = `
    <div>
      <h3>Hasil IMT Kamu: ${bmi.toFixed(2)} (${kategori})</h3>
      <p>Total Energi Harian: ${kebutuhanKalori} kalori</p>
      <p>Berat Ideal: ${beratIdeal} kg</p>
      <p>Kelebihan Berat: ${kelebihan > 0 ? kelebihan.toFixed(1) + ' kg' : 'Tidak ada'}</p>
    </div>
  `;
});
