document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form agar tidak reload halaman

    // Mendapatkan data dari form
    const name = document.getElementById('name').value;
    const ttl = document.getElementById('ttl').value;
    const address = document.getElementById('address').value;
    const status = document.getElementById('status').value;
    const email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    // Validasi format telepon (memulai dengan +62 atau 08, diikuti angka)
    const phonePattern = /^(?:\+62|08)\d+$/;
    if (!phonePattern.test(phone)) {
        alert("Nomor telepon tidak valid. Pastikan nomor telepon dimulai dengan +62 atau 08.");
        return;
    }

    // Membuat baris baru di tabel
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);

    // Menambahkan data ke dalam kolom tabel
    newRow.innerHTML = `
        <td>${table.rows.length}</td>
        <td>${name}</td>
        <td>${ttl}</td>
        <td>${address}</td>
        <td>${status}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>
            <button class="edit" onclick="editRow(this)">Edit</button>
            <button class="delete" onclick="deleteRow(this)">Hapus</button>
        </td>
    `;

    // Mengosongkan form setelah data ditambahkan ke tabel
    document.getElementById('userForm').reset();
});

// Fungsi untuk menghapus baris
function deleteRow(button) {
    const row = button.closest('tr'); // Menemukan baris yang berisi tombol
    row.remove(); // Menghapus baris
}

// Fungsi untuk mengedit baris
function editRow(button) {
    const row = button.closest('tr'); // Menemukan baris yang berisi tombol
    const cells = row.getElementsByTagName('td');

    // Memasukkan data ke dalam formulir
    document.getElementById('name').value = cells[1].innerText;
    document.getElementById('ttl').value = cells[2].innerText;
    document.getElementById('address').value = cells[3].innerText;
    document.getElementById('status').value = cells[4].innerText;
    document.getElementById('email').value = cells[5].innerText;
    document.getElementById('phone').value = cells[6].innerText;

    // Menghapus baris setelah data dimasukkan ke formulir
    row.remove();
}
