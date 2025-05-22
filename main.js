import { tambahGenre } from './utils.js';

const daftarGenre = [];
const inputGenre = ['rock', 'pop', 'Metal', 'phonk', 123, 'funk', 'jazz', true, 'synthwave','Romantic','pop',''];

inputGenre.forEach(genre => {
    try {
        const hasil = tambahGenre(genre, daftarGenre);
        console.log(hasil);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
});

console.log('\nDaftar genre akhir:');
daftarGenre.forEach((genre, index) => {
    console.log(`${index + 1}. ${genre}`);  
});
