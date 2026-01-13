// Di awal file, tambahkan:
console.log('Script loaded successfully');

// Cek apakah ada error parsing
try {
    // Data scheduleData yang sudah diperbaiki...
} catch (error) {
    console.error('Error in scheduleData:', error);
    alert('Terjadi kesalahan dalam data jadwal. Silakan periksa console.');
}

// Event listener debug
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
});

// Data Jadwal Lengkap dari file jadwal.txt
const scheduleData = {
    "7": {
        "1": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 10.50", subject: "Agama" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Indonesia" },
                { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                { time: "09.20 - 10.00", subject: "Bahasa Indonesia" },
                { time: "10.00 - 10.40", subject: "Mulok" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "2": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PJOK" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Prakarya" },
                { time: "08.40 - 09.20", subject: "Prakarya" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "3": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Prakarya" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Bahasa Inggris" },
                { time: "09.20 - 10.00", subject: "Bahasa Inggris" },
                { time: "10.00 - 10.40", subject: "Bahasa Inggris" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "4": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PKn" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                { time: "09.20 - 10.00", subject: "Bahasa Indonesia" },
                { time: "10.00 - 10.40", subject: "Bahasa Indonesia" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "5": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 10.50", subject: "Matematika" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Prakarya" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PJOK" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPS" },
                { time: "08.40 - 09.20", subject: "IPS" },
                { time: "09.20 - 10.00", subject: "IPS" },
                { time: "10.00 - 10.40", subject: "Mulok" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "6": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 10.50", subject: "Bahasa Inggris" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Prakarya" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Agama" },
                { time: "08.40 - 09.20", subject: "Agama" },
                { time: "09.20 - 10.00", subject: "TIK" },
                { time: "10.00 - 10.40", subject: "TIK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "7": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Prakarya" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPS" },
                { time: "08.40 - 09.20", subject: "IPS" },
                { time: "09.20 - 10.00", subject: "IPS" },
                { time: "10.00 - 10.40", subject: "Mulok" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "8": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Indonesia" },
                { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                { time: "09.20 - 10.00", subject: "Prakarya" },
                { time: "10.00 - 10.40", subject: "Prakarya" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "9": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 10.50", subject: "Mulok" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PJOK" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Prakarya" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPA" },
                { time: "08.40 - 09.20", subject: "IPA" },
                { time: "09.20 - 10.00", subject: "PKn" },
                { time: "10.00 - 10.40", subject: "PKn" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "10": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Matematika" },
                { time: "08.40 - 09.20", subject: "Matematika" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "11": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 10.50", subject: "TIK" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PKn" },
                { time: "08.40 - 09.20", subject: "PKn" },
                { time: "09.20 - 10.00", subject: "Matematika" },
                { time: "10.00 - 10.40", subject: "Matematika" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "12": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 10.50", subject: "Matematika" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PJOK" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Inggris" },
                { time: "08.40 - 09.20", subject: "Bahasa Inggris" },
                { time: "09.20 - 10.00", subject: "Bahasa Inggris" },
                { time: "10.00 - 10.40", subject: "Mulok" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        }
    },
    "8": {
        "1": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 10.50", subject: "PKn" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Indonesia" },
                { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                { time: "09.20 - 10.00", subject: "Prakarya" },
                { time: "10.00 - 10.40", subject: "Prakarya" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "2": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 10.50", subject: "IPS" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PJOK" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPA" },
                { time: "08.40 - 09.20", subject: "IPA" },
                { time: "09.20 - 10.00", subject: "TIK" },
                { time: "10.00 - 10.40", subject: "TIK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "3": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PJOK" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Mulok" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "TIK" },
                { time: "08.40 - 09.20", subject: "TIK" },
                { time: "09.20 - 10.00", subject: "Mulok" },
                { time: "10.00 - 10.40", subject: "Mulok" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "4": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 10.50", subject: "PKn" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PJOK" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Prakarya" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Bahasa Inggris" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "5": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 10.50", subject: "Agama" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PKn" },
                { time: "08.40 - 09.20", subject: "Agama" },
                { time: "09.20 - 10.00", subject: "Matematika" },
                { time: "10.00 - 10.40", subject: "Matematika" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "6": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 10.50", subject: "Agama" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PJOK" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Indonesia" },
                { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                { time: "09.20 - 10.00", subject: "Bahasa Inggris" },
                { time: "10.00 - 10.40", subject: "Bahasa Inggris" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "7": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PKn" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Agama" },
                { time: "08.40 - 09.20", subject: "IPA" },
                { time: "09.20 - 10.00", subject: "Matematika" },
                { time: "10.00 - 10.40", subject: "Matematika" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "8": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 10.50", subject: "Mulok" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Prakarya" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPA" },
                { time: "08.40 - 09.20", subject: "Matematika" },
                { time: "09.20 - 10.00", subject: "PJOK" },
                { time: "10.00 - 10.40", subject: "Bahasa Indonesia" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "9": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 10.50", subject: "Agama" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "BINGGRIS" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Prakarya" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Bahasa Inggris" },
                { time: "09.20 - 10.00", subject: "Bahasa Indonesia" },
                { time: "10.00 - 10.40", subject: "Bahasa Indonesia" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "10": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 10.50", subject: "Agama" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PJOK" },
                { time: "11.40 - 12.20", subject: "Mulok" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "TIK" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Indonesia" },
                { time: "08.40 - 09.20", subject: "PJOK" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "11": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 10.50", subject: "Bahasa Inggris" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "BINDO MA" },
                { time: "08.10 - 08.50", subject: "BINDO MA" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Prakarya" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Prakarya" },
                { time: "08.40 - 09.20", subject: "Agama" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "12": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "BINDO MA" },
                { time: "08.10 - 08.50", subject: "BINDO MA" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Matematika" },
                { time: "08.40 - 09.20", subject: "Matematika" },
                { time: "09.20 - 10.00", subject: "PKn" },
                { time: "10.00 - 10.40", subject: "PKn" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "13": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "MLK 8.11" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PKn" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "TIK" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "MLK 8.14" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Prakarya" },
                { time: "08.40 - 09.20", subject: "Agama" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "14": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 10.50", subject: "Prakarya" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPA" },
                { time: "08.40 - 09.20", subject: "IPA" },
                { time: "09.20 - 10.00", subject: "PKn" },
                { time: "10.00 - 10.40", subject: "PKn" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        }
    },
    "9": {
        "1": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 10.50", subject: "TIK" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Agama" },
                { time: "08.40 - 09.20", subject: "Agama" },
                { time: "09.20 - 10.00", subject: "PJOK" },
                { time: "10.00 - 10.40", subject: "PJOK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "2": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 10.50", subject: "PKn" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Prakarya" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Prakarya" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Agama" },
                { time: "08.40 - 09.20", subject: "Agama" },
                { time: "09.20 - 10.00", subject: "PJOK" },
                { time: "10.00 - 10.40", subject: "PJOK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "3": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 10.50", subject: "Agama" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Indonesia" },
                { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "4": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 10.50", subject: "Prakarya" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPA" },
                { time: "08.40 - 09.20", subject: "IPA" },
                { time: "09.20 - 10.00", subject: "PKn" },
                { time: "10.00 - 10.40", subject: "PKn" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "5": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "Prakarya" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 10.50", subject: "Matematika" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PKn" },
                { time: "08.40 - 09.20", subject: "PKn" },
                { time: "09.20 - 10.00", subject: "TIK" },
                { time: "10.00 - 10.40", subject: "TIK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "6": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 10.50", subject: "Bahasa Inggris" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Mulok" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Agama" },
                { time: "08.40 - 09.20", subject: "Agama" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "7": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Mulok" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Mulok" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PJOK" },
                { time: "08.40 - 09.20", subject: "PJOK" },
                { time: "09.20 - 10.00", subject: "TIK" },
                { time: "10.00 - 10.40", subject: "TIK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "8": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 10.50", subject: "PJOK" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Mulok" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PJOK" },
                { time: "08.40 - 09.20", subject: "PJOK" },
                { time: "09.20 - 10.00", subject: "TIK" },
                { time: "10.00 - 10.40", subject: "TIK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "9": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PJOK" },
                { time: "08.40 - 09.20", subject: "PJOK" },
                { time: "09.20 - 10.00", subject: "IPS" },
                { time: "10.00 - 10.40", subject: "IPS" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "10": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 10.50", subject: "PJOK" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PKn" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PJOK" },
                { time: "08.40 - 09.20", subject: "PJOK" },
                { time: "09.20 - 10.00", subject: "IPS" },
                { time: "10.00 - 10.40", subject: "IPS" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "11": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "Prakarya" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Prakarya" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Mulok" },
                { time: "09.20 - 10.00", subject: "PJOK" },
                { time: "10.00 - 10.40", subject: "PJOK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "12": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 10.50", subject: "Mulok" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Mulok" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "13": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Mulok" },
                { time: "09.20 - 10.00", subject: "PJOK" },
                { time: "10.00 - 10.40", subject: "PJOK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "14": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 10.50", subject: "Mulok" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PJOK" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Mulok" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PKn" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Mulok" },
                { time: "09.20 - 10.00", subject: "IPS" },
                { time: "10.00 - 10.40", subject: "IPS" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        }
    }
};

// Data Fun Facts (sama seperti sebelumnya)
const funFactsData = [
    {
        title: "📊 Jumlah Guru Per Mata Pelajaran",
        items: [
            "Agama: 9 guru (3 Kristen, 3 Islam, 2 Katolik, 1 tidak spesifik)",
            "PKn: 5 guru",
            "Bahasa Indonesia:  10 guru",
            "Matematika: 8 guru",
            "Bahasa Inggris: 8 guru",
            "IPA: 7 guru",
            "IPS: 6 guru",
            "PJOK: 7 guru",
            "Prakarya/Seni Budaya: 5 guru",
            "TIK: 4 guru"
        ]
    },
    {
        title: "👥 Perbandingan Gender",
        items: [
            "Guru Perempuan:  Sekitar 85% (~55 dari 65)",
            "Guru Laki-laki: Sekitar 15% (~10 dari 65)",
            "Mayoritas guru adalah perempuan"
        ]
    },
    {
        title: "🎓 Guru dengan Gelar Akademik Tertinggi",
        items:  [
            "John Wuisan, M.  Th (Magister Theologi)",
            "Sicilia Ledy S Sambur, M.  Pd (Magister Pendidikan)",
            "Hesty M. Lontoh, S. Pd & M.  Pd (Sarjana Pendidikan & Magister Pendidikan)",
            "Marjeine Dalonto, M. Pd (Magister Pendidikan)"
        ]
    },
    {
        title: "⏰ Jam Mengajar Terbanyak",
        items:  [
            "Abdul Wahid, S. Pd.  I (Agama Islam): 36 JP",
            "Nita A. Modali, S.Kom (TIK): 42 JP",
            "Christi Tumangkeng, S.Pd (TIK): 42 JP",
            "Guru TIK memiliki beban jam tertinggi"
        ]
    }
];

// State aplikasi
let currentState = {
    selectedClass: null,
    selectedRombel: null,
    selectedDay: null
};

// Elemen DOM
const screens = {
    mainMenu: document.getElementById('mainMenu'),
    rombelSelection: document.getElementById('rombelSelection'),
    daySelection: document. getElementById('daySelection'),
    scheduleDisplay: document.getElementById('scheduleDisplay'),
    funFactsDisplay: document.getElementById('funFactsDisplay')
};

const elements = {
    themeToggle: document.getElementById('themeToggle'),
    currentDate: document.getElementById('currentDate'),
    classButtons: document.querySelectorAll('.class-btn'),
    funFactsBtn: document.getElementById('funFactsBtn'),
    fixedBackButton: document.getElementById('fixedBackButton'),
    rombelTitle: document.getElementById('rombelTitle'),
    rombelGrid: document.getElementById('rombelGrid'),
    dayTitle: document.getElementById('dayTitle'),
    dayButtons: document.querySelectorAll('.day-btn'),
    scheduleTitle: document.getElementById('scheduleTitle'),
    scheduleList: document.getElementById('scheduleList'),
    factsContainer: document.getElementById('factsContainer')
};

// ===== FUNGSI UTILITAS =====
function updateCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = now.toLocaleDateString('id-ID', options);
    elements.currentDate.textContent = formattedDate;
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body. classList.remove('dark-mode');
        document.body.classList. add('light-mode');
    }
}

// ===== FUNGSI NAVIGASI LAYAR =====
function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList. remove('active');
    });
    
    if (screens[screenName]) {
        screens[screenName].classList.add('active');
    }
    
    // Kontrol tombol kembali
    const backTargets = {
        'mainMenu': null,
        'rombelSelection':  'mainMenu',
        'daySelection':  'rombelSelection',
        'scheduleDisplay': 'daySelection',
        'funFactsDisplay': 'mainMenu'
    };
    
    const targetScreen = backTargets[screenName];
    controlBackButton(targetScreen !== null, targetScreen);
}

// ===== FUNGSI UNTUK MENAMPILKAN ROMBEL =====
function showRombels(className) {
    currentState.selectedClass = className;
    elements.rombelTitle.textContent = `Kelas ${className} - Pilih Kelas`;
    elements.rombelGrid.innerHTML = '';
    
    const rombels = Object.keys(scheduleData[className] || {});
    
    rombels.forEach((rombelNum, index) => {
        const rombelBtn = document.createElement('button');
        rombelBtn.className = 'rombel-btn';
        rombelBtn.textContent = `${currentState.selectedClass}-${i}`;
        rombelBtn.style.setProperty('--i', index + 1);
        
        rombelBtn.addEventListener('click', () => {
            currentState.selectedRombel = rombelNum;
            showDays();
        });
        
        elements.rombelGrid.appendChild(rombelBtn);
    });
    
    showScreen('rombelSelection');
}

// ===== FUNGSI UNTUK MENAMPILKAN HARI =====
function showDays() {
    elements.dayTitle.textContent = `Kelas ${currentState.selectedClass}-${currentState.selectedRombel}`;
    showScreen('daySelection');
}

// ===== FUNGSI UNTUK MENAMPILKAN JADWAL =====
function showSchedule(day) {
    currentState.selectedDay = day;
    
    const dayNames = {
        'SENIN': 'Senin',
        'SELASA':  'Selasa',
        'RABU': 'Rabu',
        'KAMIS': 'Kamis',
        'JUMAT': 'Jumat'
    };
    
    elements.scheduleTitle.textContent = `Jadwal ${dayNames[day]} - Kelas ${currentState.selectedClass}-${currentState.selectedRombel}`;
    elements.scheduleList.innerHTML = '';
    
    const schedule = scheduleData[currentState.selectedClass]?.[currentState.selectedRombel]? .[day];
    
    if (schedule && schedule.length > 0) {
        schedule.forEach((item, index) => {
            const scheduleItem = document.createElement('div');
            scheduleItem. className = 'schedule-item fade-in';
            scheduleItem.style.animationDelay = `${index * 0.1}s`;
            
            const timeSlot = document.createElement('div');
            timeSlot.className = 'time-slot';
            timeSlot.innerHTML = `<i class="fas fa-clock"></i> ${item.time}`;
            
            const subject = document. createElement('div');
            subject. className = 'subject';
            subject.innerHTML = `<i class="fas fa-book"></i> ${item.subject}`;
            
            scheduleItem.appendChild(timeSlot);
            scheduleItem.appendChild(subject);
            elements.scheduleList.appendChild(scheduleItem);
        });
    } else {
        const noSchedule = document.createElement('div');
        noSchedule.className = 'schedule-item fade-in';
        noSchedule.innerHTML = '<div class="time-slot">-</div><div class="subject">Tidak ada jadwal untuk hari ini</div>';
        elements.scheduleList.appendChild(noSchedule);
    }
    
    showScreen('scheduleDisplay');
}

// ===== FUNGSI UNTUK MENAMPILKAN FUN FACTS =====
function showFunFacts() {
    elements.factsContainer.innerHTML = '';
    
    funFactsData.forEach((fact, index) => {
        const factCategory = document.createElement('div');
        factCategory. className = 'fact-category fade-in';
        factCategory. style.animationDelay = `${index * 0.2}s`;
        
        const title = document.createElement('h3');
        title.innerHTML = fact.title;
        
        const list = document.createElement('ul');
        
        fact.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'fact-item';
            listItem.textContent = item;
            list.appendChild(listItem);
        });
        
        factCategory.appendChild(title);
        factCategory.appendChild(list);
        elements.factsContainer.appendChild(factCategory);
    });
    
    showScreen('funFactsDisplay');
}

// ===== FUNGSI KONTROL TOMBOL KEMBALI =====
function controlBackButton(show, targetScreen = null) {
    const backButton = elements.fixedBackButton;
    
    if (show) {
        backButton.onclick = () => {
            if (targetScreen) {
                showScreen(targetScreen);
            }
        };
        
        backButton.classList.remove('hide');
        setTimeout(() => {
            backButton. classList.add('show');
        }, 10);
    } else {
        backButton.classList.remove('show');
        backButton. classList.add('hide');
        
        setTimeout(() => {
            backButton. classList.remove('hide');
            backButton.onclick = null;
        }, 300);
    }
}

// ===== SETUP EVENT LISTENERS =====
function setupEventListeners() {
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    elements.classButtons. forEach(button => {
        button.addEventListener('click', () => {
            const className = button.getAttribute('data-class');
            showRombels(className);
        });
    });
    
    elements.dayButtons.forEach(button => {
        button.addEventListener('click', () => {
            const day = button.getAttribute('data-day');
            showSchedule(day);
        });
    });
    
    elements.funFactsBtn.addEventListener('click', showFunFacts);
}

// ===== INISIALISASI =====
function init() {
    setInitialTheme();
    updateCurrentDate();
    controlBackButton(false);
    setupEventListeners();
    showScreen('mainMenu');
}

document.addEventListener('DOMContentLoaded', init);