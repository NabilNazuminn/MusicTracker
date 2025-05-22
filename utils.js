export function tambahGenre(genre, daftarGenre) {
    if (typeof genre !== 'string') {
        throw new Error('Input invalid: Genre harus berupa string!');
    }
    const genreLower = genre.toLowerCase().trim();
    if (genreLower === '') {
        throw new Error('Input invalid: Genre tidak boleh kosong!');
    }
    if (daftarGenre.includes(genreLower)) {
        return `Genre "${genre}" sudah tercatat.`;
    } else {
        daftarGenre.push(genreLower);
        return `Genre "${genre}" berhasil ditambahkan.`;
    }
}
