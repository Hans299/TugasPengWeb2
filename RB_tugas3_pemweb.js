function showData() {
    // Ambil data input.
    const name = document.getElementById('name-input').value;
    const prodi = document.getElementById('prodi-input').value;

    // Set data ke preview.
    document.getElementById('name-view').innerText = name;
    document.getElementById('prodi-view').innerText = prodi;

    // Clear data input.
    document.getElementById('name-input').value = '';
    document.getElementById('prodi-input').value = '';
}