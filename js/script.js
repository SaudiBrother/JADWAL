/**
 * script.js - VERSI LENGKAP & DIPERBAIKI
 * Aplikasi Jadwal Pelajaran Interaktif SMP Negeri 2 Bitung
 * 
 * FITUR:
 * ✅ Navigasi antar layar dengan animasi smooth
 * ✅ Sistem tema (dark/light) dengan localStorage
 * ✅ Panel Fun Facts dengan toggle
 * ✅ Keyboard navigation (Escape key)
 * ✅ Responsive design
 * ✅ Accessibility (ARIA attributes)
 * ✅ Auto-update tanggal/waktu
 * ✅ Error handling
 */

(() => {
    "use strict";

    // ========== KONSTANTA & VARIABEL GLOBAL ==========
    const DAYS = ["SENIN", "SELASA", "RABU", "KAMIS", "JUMAT"];
    const MONTHS = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const DAYS_ID = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

    // Data lengkap (sama seperti sebelumnya)
    const DATA = {
        "7": {
            label: "KELAS VII",
            rombels: [
                {
                    id: "7-1",
                    name: "ROMBEL 1",
                    schedule: {
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
                            { time: "13.40 - 14.20", subject: "Proyek" },
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
                            { time: "13.40 - 14.20", subject: "Proyek" },
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
                            { time: "13.40 - 14.20", subject: "Proyek" },
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
                            { time: "13.40 - 14.20", subject: "Proyek" },
                        ],
                        "JUMAT": [
                            { time: "07.00 - 08.00", subject: "Ibadah" },
                            { time: "08.00 - 08.40", subject: "Bahasa Indonesia" },
                            { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                            { time: "09.20 - 10.00", subject: "Bahasa Indonesia" },
                            { time: "10.00 - 10.40", subject: "Mulok" },
                            { time: "10.40 - 11.10", subject: "Istirahat" },
                            { time: "11.10 - 11.50", subject: "Proyek" },
                            { time: "11.50 - 12.30", subject: "Proyek" },
                        ],
                    }
                },
                {
                    id: "7-2",
                    name: "ROMBEL 2",
                    schedule: {
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
                            { time: "13.40 - 14.20", subject: "Proyek" },
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
                            { time: "12.20 - 13.00", subject: "PKn" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" },
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
                            { time: "13.40 - 14.20", subject: "Proyek" },
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
                            { time: "13.40 - 14.20", subject: "Proyek" },
                        ],
                        "JUMAT": [
                            { time: "07.00 - 08.00", subject: "Ibadah" },
                            { time: "08.00 - 08.40", subject: "Mulok" },
                            { time: "08.40 - 09.20", subject: "Bahasa Inggris" },
                            { time: "09.20 - 10.00", subject: "Bahasa Inggris" },
                            { time: "10.00 - 10.40", subject: "Bahasa Inggris" },
                            { time: "10.40 - 11.10", subject: "Istirahat" },
                            { time: "11.10 - 11.50", subject: "Proyek" },
                            { time: "11.50 - 12.30", subject: "Proyek" },
                        ],
                    }
                },
                {
                    id: "7-3",
                    name: "ROMBEL 3",
                    schedule: {
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
                            { time: "13.40 - 14.20", subject: "Proyek" },
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
                            { time: "13.40 - 14.20", subject: "Proyek" },
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
                            { time: "13.40 - 14.20", subject: "Proyek" },
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
                            { time: "13.40 - 14.20", subject: "Proyek" },
                        ],
                        "JUMAT": [
                            { time: "07.00 - 08.00", subject: "Ibadah" },
                            { time: "08.00 - 08.40", subject: "Mulok" },
                            { time: "08.40 - 09.20", subject: "Bahasa Inggris" },
                            { time: "09.20 - 10.00", subject: "Bahasa Inggris" },
                            { time: "10.00 - 10.40", subject: "Bahasa Inggris" },
                            { time: "10.40 - 11.10", subject: "Istirahat" },
                            { time: "11.10 - 11.50", subject: "Proyek" },
                            { time: "11.50 - 12.30", subject: "Proyek" },
                        ],
                    }
                }
            ]
        },
        "8": {
            label: "KELAS VIII",
            rombels: [
                {
                    id: "8-1",
                    name: "ROMBEL 1",
                    schedule: {
                        "SENIN": [
                            { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                            { time: "08.10 - 08.50", subject: "IPA" },
                            { time: "08.50 - 09.30", subject: "IPA" },
                            { time: "09.30 - 10.10", subject: "PKN" },
                            { time: "10.10 - 10.50", subject: "PKN" },
                            { time: "10.50 - 11.40", subject: "Istirahat" },
                            { time: "11.40 - 12.20", subject: "PJOK" },
                            { time: "12.20 - 13.00", subject: "PJOK" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" },
                        ],
                        "SELASA": [
                            { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                            { time: "07.30 - 08.10", subject: "IPS" },
                            { time: "08.10 - 08.50", subject: "IPS" },
                            { time: "08.50 - 09.30", subject: "IPS" },
                            { time: "09.30 - 10.10", subject: "TIK" },
                            { time: "10.10 - 11.00", subject: "Istirahat" },
                            { time: "11.00 - 11.40", subject: "TIK" },
                            { time: "11.40 - 12.20", subject: "MATEMATIKA" },
                            { time: "12.20 - 13.00", subject: "MATEMATIKA" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "RABU": [
                            { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                            { time: "07.30 - 08.10", subject: "MATEMATIKA" },
                            { time: "08.10 - 08.50", subject: "MATEMATIKA" },
                            { time: "08.50 - 09.30", subject: "AGAMA" },
                            { time: "09.30 - 10.10", subject: "AGAMA" },
                            { time: "10.10 - 11.00", subject: "Istirahat" },
                            { time: "11.00 - 11.40", subject: "BAHASA INDONESIA" },
                            { time: "11.40 - 12.20", subject: "PRAKARYA" },
                            { time: "12.20 - 13.00", subject: "PRAKARYA" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "KAMIS": [
                            { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                            { time: "07.30 - 08.10", subject: "Mulok" },
                            { time: "08.10 - 08.50", subject: "MATEMATIKA" },
                            { time: "08.50 - 09.30", subject: "AGAMA" },
                            { time: "09.30 - 10.10", subject: "Mulok" },
                            { time: "10.10 - 11.00", subject: "Istirahat" },
                            { time: "11.00 - 11.40", subject: "BAHASA INGGRIS" },
                            { time: "11.40 - 12.20", subject: "BAHASA INDONESIA" },
                            { time: "12.20 - 13.00", subject: "IPS" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "JUMAT": [
                            { time: "07.00 - 08.00", subject: "Ibadah" },
                            { time: "08.00 - 08.40", subject: "BAHASA INDONESIA" },
                            { time: "08.40 - 09.20", subject: "BAHASA INDONESIA" },
                            { time: "09.20 - 10.00", subject: "PRAKARYA" },
                            { time: "10.00 - 10.40", subject: "PRAKARYA" },
                            { time: "10.40 - 11.10", subject: "Istirahat" },
                            { time: "11.10 - 11.50", subject: "Proyek" },
                            { time: "11.50 - 12.30", subject: "Proyek" }
                        ]
                    }
                },
                {
                    id: "8-2",
                    name: "ROMBEL 2",
                    schedule: {
                        "SENIN": [
                            { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                            { time: "08.10 - 08.50", subject: "BAHASA INDONESIA" },
                            { time: "08.50 - 09.30", subject: "BAHASA INDONESIA" },
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
                            { time: "08.50 - 09.30", subject: "PKN" },
                            { time: "09.30 - 10.10", subject: "PKN" },
                            { time: "10.10 - 11.00", subject: "Istirahat" },
                            { time: "11.00 - 11.40", subject: "MATEMATIKA" },
                            { time: "11.40 - 12.20", subject: "MATEMATIKA" },
                            { time: "12.20 - 13.00", subject: "IPA" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "RABU": [
                            { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                            { time: "07.30 - 08.10", subject: "Mulok" },
                            { time: "08.10 - 08.50", subject: "MATEMATIKA" },
                            { time: "08.50 - 09.30", subject: "PJOK" },
                            { time: "09.30 - 10.10", subject: "PJOK" },
                            { time: "10.10 - 11.00", subject: "Istirahat" },
                            { time: "11.00 - 11.40", subject: "PJOK" },
                            { time: "11.40 - 12.20", subject: "PRAKARYA" },
                            { time: "12.20 - 13.00", subject: "PRAKARYA" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "KAMIS": [
                            { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                            { time: "07.30 - 08.10", subject: "MATEMATIKA" },
                            { time: "08.10 - 08.50", subject: "MATEMATIKA" },
                            { time: "08.50 - 09.30", subject: "IPA" },
                            { time: "09.30 - 10.10", subject: "AGAMA" },
                            { time: "10.10 - 11.00", subject: "Istirahat" },
                            { time: "11.00 - 11.40", subject: "BAHASA INDONESIA" },
                            { time: "11.40 - 12.20", subject: "BAHASA INDONESIA" },
                            { time: "12.20 - 13.00", subject: "BAHASA INGGRIS" },
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
                    }
                },
                {
                    id: "8-3",
                    name: "ROMBEL 3",
                    schedule: {
                        "SENIN": [
                            { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                            { time: "08.10 - 08.50", subject: "MATEMATIKA" },
                            { time: "08.50 - 09.30", subject: "MATEMATIKA" },
                            { time: "09.30 - 10.10", subject: "IPA" },
                            { time: "10.10 - 10.50", subject: "IPA" },
                            { time: "10.50 - 11.40", subject: "Istirahat" },
                            { time: "11.40 - 12.20", subject: "PKN" },
                            { time: "12.20 - 13.00", subject: "PKN" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "SELASA": [
                            { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                            { time: "07.30 - 08.10", subject: "BAHASA INDONESIA" },
                            { time: "08.10 - 08.50", subject: "BAHASA INDONESIA" },
                            { time: "08.50 - 09.30", subject: "MATEMATIKA" },
                            { time: "09.30 - 10.10", subject: "MATEMATIKA" },
                            { time: "10.10 - 11.00", subject: "Istirahat" },
                            { time: "11.00 - 11.40", subject: "MATEMATIKA" },
                            { time: "11.40 - 12.20", subject: "TIK" },
                            { time: "12.20 - 13.00", subject: "TIK" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "RABU": [
                            { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                            { time: "07.30 - 08.10", subject: "PJOK" },
                            { time: "08.10 - 08.50", subject: "PRAKARYA" },
                            { time: "08.50 - 09.30", subject: "IPA" },
                            { time: "09.30 - 10.10", subject: "IPA" },
                            { time: "10.10 - 11.00", subject: "Istirahat" },
                            { time: "11.00 - 11.40", subject: "BAHASA INGGRIS" },
                            { time: "11.40 - 12.20", subject: "Mulok" },
                            { time: "12.20 - 13.00", subject: "IPS" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "KAMIS": [
                            { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                            { time: "07.30 - 08.10", subject: "AGAMA" },
                            { time: "08.10 - 08.50", subject: "Mulok" },
                            { time: "08.50 - 09.30", subject: "AGAMA" },
                            { time: "09.30 - 10.10", subject: "Mulok" },
                            { time: "10.10 - 11.00", subject: "Istirahat" },
                            { time: "11.00 - 11.40", subject: "IPS" },
                            { time: "11.40 - 12.20", subject: "IPS" },
                            { time: "12.20 - 13.00", subject: "BAHASA INGGRIS" },
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
                    }
                }
            ]
        },
        "9": {
            label: "KELAS IX",
            rombels: [
                {
                    id: "9-1",
                    name: "ROMBEL 1",
                    schedule: {
                        "SENIN": [
                            { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                            { time: "08.10 - 08.50", subject: "MATEMATIKA" },
                            { time: "08.50 - 09.30", subject: "MATEMATIKA" },
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
                            { time: "07.30 - 08.10", subject: "MATEMATIKA" },
                            { time: "08.10 - 08.50", subject: "MATEMATIKA" },
                            { time: "08.50 - 09.30", subject: "PJOK" },
                            { time: "09.30 - 10.10", subject: "TIK" },
                            { time: "10.10 - 11.00", subject: "Istirahat" },
                            { time: "11.00 - 11.40", subject: "BAHASA INGGRIS" },
                            { time: "11.40 - 12.20", subject: "BAHASA INGGRIS" },
                            { time: "12.20 - 13.00", subject: "IPS" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "RABU": [
                            { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                            { time: "07.30 - 08.10", subject: "PKN" },
                            { time: "08.10 - 08.50", subject: "PKN" },
                            { time: "08.50 - 09.30", subject: "TIK" },
                            { time: "09.30 - 10.10", subject: "TIK" },
                            { time: "10.10 - 11.00", subject: "Istirahat" },
                            { time: "11.00 - 11.40", subject: "IPA" },
                            { time: "11.40 - 12.20", subject: "IPA" },
                            { time: "12.20 - 13.00", subject: "BAHASA INDONESIA" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "KAMIS": [
                            { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                            { time: "07.30 - 08.10", subject: "MATEMATIKA" },
                            { time: "08.10 - 08.50", subject: "MATEMATIKA" },
                            { time: "08.50 - 09.30", subject: "IPA" },
                            { time: "09.30 - 10.10", subject: "IPA" },
                            { time: "10.10 - 11.00", subject: "Istirahat" },
                            { time: "11.00 - 11.40", subject: "MATEMATIKA" },
                            { time: "11.40 - 12.20", subject: "BAHASA INGGRIS" },
                            { time: "12.20 - 13.00", subject: "Mulok" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "JUMAT": [
                            { time: "07.00 - 08.00", subject: "Ibadah" },
                            { time: "08.00 - 08.40", subject: "AGAMA" },
                            { time: "08.40 - 09.20", subject: "AGAMA" },
                            { time: "09.20 - 10.00", subject: "PJOK" },
                            { time: "10.00 - 10.40", subject: "PJOK" },
                            { time: "10.40 - 11.10", subject: "Istirahat" },
                            { time: "11.10 - 11.50", subject: "Proyek" },
                            { time: "11.50 - 12.30", subject: "Proyek" }
                        ]
                    }
                },
                {
                    id: "9-2",
                    name: "ROMBEL 2",
                    schedule: {
                        "SENIN": [
                            { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                            { time: "08.10 - 08.50", subject: "IPA" },
                            { time: "08.50 - 09.30", subject: "IPA" },
                            { time: "09.30 - 10.10", subject: "PKN" },
                            { time: "10.10 - 10.50", subject: "PKN" },
                            { time: "10.50 - 11.40", subject: "Istirahat" },
                            { time: "11.40 - 12.20", subject: "MATEMATIKA" },
                            { time: "12.20 - 13.00", subject: "MATEMATIKA" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "SELASA": [
                            { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                            { time: "07.30 - 08.10", subject: "IPA" },
                            { time: "08.10 - 08.50", subject: "IPA" },
                            { time: "08.50 - 09.30", subject: "BAHASA INDONESIA" },
                            { time: "09.30 - 10.10", subject: "BAHASA INDONESIA" },
                            { time: "10.10 - 11.00", subject: "Istirahat" },
                            { time: "11.00 - 11.40", subject: "Mulok" },
                            { time: "11.40 - 12.20", subject: "MATEMATIKA" },
                            { time: "12.20 - 13.00", subject: "MATEMATIKA" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "RABU": [
                            { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                            { time: "07.30 - 08.10", subject: "BAHASA INDONESIA" },
                            { time: "08.10 - 08.50", subject: "BAHASA INDONESIA" },
                            { time: "08.50 - 09.30", subject: "PRAKARYA" },
                            { time: "09.30 - 10.10", subject: "PRAKARYA" },
                            { time: "10.10 - 11.00", subject: "Istirahat" },
                            { time: "11.00 - 11.40", subject: "PRAKARYA" },
                            { time: "11.40 - 12.20", subject: "PKN" },
                            { time: "12.20 - 13.00", subject: "PKN" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "KAMIS": [
                            { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                            { time: "07.30 - 08.10", subject: "MATEMATIKA" },
                            { time: "08.10 - 08.50", subject: "MATEMATIKA" },
                            { time: "08.50 - 09.30", subject: "BAHASA INDONESIA" },
                            { time: "09.30 - 10.10", subject: "BAHASA INDONESIA" },
                            { time: "10.10 - 11.00", subject: "Istirahat" },
                            { time: "11.00 - 11.40", subject: "BAHASA INGGRIS" },
                            { time: "11.40 - 12.20", subject: "BAHASA INGGRIS" },
                            { time: "12.20 - 13.00", subject: "IPS" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "JUMAT": [
                            { time: "07.00 - 08.00", subject: "Ibadah" },
                            { time: "08.00 - 08.40", subject: "AGAMA" },
                            { time: "08.40 - 09.20", subject: "AGAMA" },
                            { time: "09.20 - 10.00", subject: "PJOK" },
                            { time: "10.00 - 10.40", subject: "PJOK" },
                            { time: "10.40 - 11.10", subject: "Istirahat" },
                            { time: "11.10 - 11.50", subject: "Proyek" },
                            { time: "11.50 - 12.30", subject: "Proyek" }
                        ]
                    }
                },
                {
                    id: "9-3",
                    name: "ROMBEL 3",
                    schedule: {
                        "SENIN": [
                            { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                            { time: "08.10 - 08.50", subject: "PKN" },
                            { time: "08.50 - 09.30", subject: "PKN" },
                            { time: "09.30 - 10.10", subject: "AGAMA" },
                            { time: "10.10 - 10.50", subject: "AGAMA" },
                            { time: "10.50 - 11.40", subject: "Istirahat" },
                            { time: "11.40 - 12.20", subject: "PRAKARYA" },
                            { time: "12.20 - 13.00", subject: "PRAKARYA" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "SELASA": [
                            { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                            { time: "07.30 - 08.10", subject: "AGAMA" },
                            { time: "08.10 - 08.50", subject: "AGAMA" },
                            { time: "08.50 - 09.30", subject: "IPA" },
                            { time: "09.30 - 10.10", subject: "IPA" },
                            { time: "10.10 - 11.00", subject: "Istirahat" },
                            { time: "11.00 - 11.40", subject: "IPA" },
                            { time: "11.40 - 12.20", subject: "BAHASA INDONESIA" },
                            { time: "12.20 - 13.00", subject: "BAHASA INDONESIA" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "RABU": [
                            { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                            { time: "07.30 - 08.10", subject: "IPA" },
                            { time: "08.10 - 08.50", subject: "IPA" },
                            { time: "08.50 - 09.30", subject: "PKN" },
                            { time: "09.30 - 10.10", subject: "PKN" },
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
                            { time: "11.00 - 11.40", subject: "BAHASA INGGRIS" },
                            { time: "11.40 - 12.20", subject: "BAHASA INGGRIS" },
                            { time: "12.20 - 13.00", subject: "IPS" },
                            { time: "13.00 - 13.40", subject: "Proyek" },
                            { time: "13.40 - 14.20", subject: "Proyek" }
                        ],
                        "JUMAT": [
                            { time: "07.00 - 08.00", subject: "Ibadah" },
                            { time: "08.00 - 08.40", subject: "BAHASA INDONESIA" },
                            { time: "08.40 - 09.20", subject: "BAHASA INDONESIA" },
                            { time: "09.20 - 10.00", subject: "IPA" },
                            { time: "10.00 - 10.40", subject: "IPA" },
                            { time: "10.40 - 11.10", subject: "Istirahat" },
                            { time: "11.10 - 11.50", subject: "Proyek" },
                            { time: "11.50 - 12.30", subject: "Proyek" }
                        ]
                    }
                }
            ]
        }
    };

    const FUN_FACTS = [
        {
            title: "Jumlah Guru per Mata Pelajaran",
            items: [
                "Pendidikan Agama: 9 guru (3 Kristen, 3 Islam, 2 Katolik, 1 tidak spesifik)",
                "PKn: 5 guru",
                "Bahasa Indonesia: 10 guru",
                "Matematika: 8 guru",
                "Bahasa Inggris: 8 guru",
                "IPA: 7 guru",
                "IPS: 6 guru",
                "PJOK: 7 guru",
                "Prakarya/Seni Budaya: 5 guru",
                "TIK: 4 guru",
                "BK: 4 guru",
                "Mulok: Diajarkan wali kelas (tidak dihitung)",
                "Catatan: Total ~65 guru, beberapa mengajar lebih dari satu mata pelajaran."
            ]
        },
        {
            title: "Perbandingan Gender (dari nama di jadwal)",
            items: [
                "Guru Perempuan: Sekitar 85% (~55 dari 65) — contoh: Eva, Dortje, Sicilia, Fitri, Maereen",
                "Guru Laki-laki: Sekitar 15% (~10 dari 65) — contoh: John, Abdul Wahid, Yuddy, Tommy, Slamet"
            ]
        },
        {
            title: "Guru yang Mengajar Dua Mata Pelajaran",
            items: [
                "Sartika Ambat, S.Pd. → Agama Kristen & PKn",
                "Rahmi Astuti, S.Pd → Bahasa Indonesia & Bahasa Inggris",
                "Rizki Wahyuni → Bahasa Indonesia & Bahasa Inggris",
                "Venly Pande, S.Pd → PJOK & TIK",
                "Debi Bawiling, S.Pd → Bahasa Indonesia & Bahasa Inggris"
            ]
        },
        {
            title: "Guru dengan Jam Mengajar Terbanyak",
            items: [
                "Abdul Wahid, S.Pd.I (Agama Islam): 36 JP",
                "Yohanes Andrew Kapahese, S.Pd. (TIK): 36 JP",
                "Nita A. Modali, S.Kom (TIK): 42 JP",
                "Christi Tumangkeng, S.Pd (TIK): 42 JP",
                "Fakta: Guru TIK cenderung memiliki beban jam lebih tinggi."
            ]
        },
        {
            title: "Gelar Akademik Tertinggi (Contoh)",
            items: [
                "John Wuisan, M.Th (Magister Theologi)",
                "Sicilia Ledy S Sambur, M.Pd (Magister Pendidikan)",
                "Hesty M. Lontoh, S.Pd, M.Pd (Magister Pendidikan)",
                "Marjeine Dalonto, M.Pd (Magister Pendidikan)"
            ]
        }
    ];

    // ========== STATE APLIKASI ==========
    const state = {
        activeGrade: null,
        activeRombel: null,
        activeDay: null,
        currentTheme: localStorage.getItem('school_schedule_theme') || 'light'
    };

    // ========== DOM CACHE ==========
    const DOM = {
        // Screens
        mainMenu: document.getElementById('mainMenu'),
        rombelSelection: document.getElementById('rombelSelection'),
        daySelection: document.getElementById('daySelection'),
        scheduleDisplay: document.getElementById('scheduleDisplay'),
        
        // Elements
        rombelGrid: document.getElementById('rombelGrid'),
        rombelTitle: document.getElementById('rombelTitle'),
        dayTitle: document.getElementById('dayTitle'),
        scheduleList: document.getElementById('scheduleList'),
        scheduleTitle: document.getElementById('scheduleTitle'),
        factsContainer: document.getElementById('factsContainer'),
        funFactsPanel: document.getElementById('funFactsPanel'),
        
        // Buttons
        backToMain: document.getElementById('backToMain'),
        backToRombel: document.getElementById('backToRombel'),
        backToDay: document.getElementById('backToDay'),
        levelBtns: document.querySelectorAll('.level-btn'),
        dayBtns: document.querySelectorAll('.day-btn'),
        themeToggle: document.getElementById('themeToggle'),
        openFunFactsBtn: document.getElementById('openFunFacts'),
        closeFunFactsBtn: document.getElementById('closeFunFacts'),
        
        // Date
        todayEl: document.getElementById('today')
    };

    // ========== UTILITY FUNCTIONS ==========
    function showScreen(screenEl) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.remove('active');
            s.setAttribute('aria-hidden', 'true');
        });
        
        // Show selected screen
        screenEl.classList.add('active');
        screenEl.setAttribute('aria-hidden', 'false');
        
        // Scroll to top for better UX
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function clearChildren(el) {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    }

    function staggerAppend(parent, children, options = {}) {
        const { delay = 40 } = options;
        
        children.forEach((child, index) => {
            child.style.opacity = '0';
            child.style.transform = 'translateY(6px)';
            parent.appendChild(child);
            
            setTimeout(() => {
                child.style.transition = 'opacity 420ms cubic-bezier(0.16, 0.84, 0.39, 1), transform 420ms cubic-bezier(0.16, 0.84, 0.39, 1)';
                child.style.opacity = '1';
                child.style.transform = 'translateY(0)';
            }, index * delay);
        });
    }

    // ========== THEME MANAGEMENT ==========
    function applyTheme(theme) {
        const body = document.body;
        
        if (theme === 'dark') {
            body.classList.remove('light');
            body.classList.add('dark');
            DOM.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            DOM.themeToggle.setAttribute('aria-pressed', 'true');
        } else {
            body.classList.remove('dark');
            body.classList.add('light');
            DOM.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            DOM.themeToggle.setAttribute('aria-pressed', 'false');
        }
        
        state.currentTheme = theme;
        localStorage.setItem('school_schedule_theme', theme);
    }

    function toggleTheme() {
        const newTheme = state.currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    }

    // ========== DATE MANAGEMENT ==========
    function updateDateTime() {
        const now = new Date();
        const day = DAYS_ID[now.getDay()];
        const date = now.getDate();
        const month = MONTHS[now.getMonth()];
        const year = now.getFullYear();
        
        DOM.todayEl.textContent = `${year} • ${day}, ${date} ${month}`;
    }

    // ========== RENDERING FUNCTIONS ==========
    function populateRombels(grade) {
        if (!DATA[grade]) {
            alert('Data untuk kelas ini belum tersedia.');
            return;
        }
        
        clearChildren(DOM.rombelGrid);
        DOM.rombelTitle.textContent = `${DATA[grade].label} — Pilih Rombel`;
        
        const cards = DATA[grade].rombels.map(rombel => {
            const card = document.createElement('button');
            card.className = 'rombel-card';
            card.setAttribute('type', 'button');
            card.setAttribute('data-rombel-id', rombel.id);
            card.innerHTML = `
                <h4>${rombel.name}</h4>
                <p>Klik untuk melihat jadwal</p>
            `;
            
            card.addEventListener('click', () => {
                state.activeGrade = grade;
                state.activeRombel = rombel;
                openDaySelection(grade, rombel);
            });
            
            return card;
        });
        
        staggerAppend(DOM.rombelGrid, cards, { delay: 50 });
    }

    function openDaySelection(grade, rombel) {
        DOM.dayTitle.textContent = `${DATA[grade].label} — ${rombel.name}`;
        showScreen(DOM.daySelection);
    }

    function populateScheduleFor(day) {
        if (!state.activeRombel) return;
        
        clearChildren(DOM.scheduleList);
        
        const schedule = state.activeRombel.schedule[day] || [];
        DOM.scheduleTitle.textContent = `${DATA[state.activeGrade].label} — ${state.activeRombel.name} • ${day}`;
        
        if (schedule.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'slot';
            empty.innerHTML = `
                <div class="time">—</div>
                <div>
                    <div class="subject">Tidak ada jadwal</div>
                    <div class="note">Tidak ada entri untuk hari ini.</div>
                </div>
            `;
            DOM.scheduleList.appendChild(empty);
        } else {
            const nodes = schedule.map(item => {
                const slot = document.createElement('div');
                slot.className = 'slot';
                slot.innerHTML = `
                    <div class="time">${item.time}</div>
                    <div>
                        <div class="subject">${item.subject}</div>
                        ${item.note ? `<div class="note">${item.note}</div>` : ''}
                    </div>
                `;
                return slot;
            });
            
            staggerAppend(DOM.scheduleList, nodes, { delay: 60 });
        }
        
        showScreen(DOM.scheduleDisplay);
    }

    function populateFunFacts() {
        clearChildren(DOM.factsContainer);
        
        const factElements = FUN_FACTS.map(fact => {
            const factEl = document.createElement('div');
            factEl.className = 'fact';
            
            const itemsHtml = fact.items.map(item => `<li>${item}</li>`).join('');
            
            factEl.innerHTML = `
                <h4>${fact.title}</h4>
                <ul>${itemsHtml}</ul>
            `;
            
            return factEl;
        });
        
        staggerAppend(DOM.factsContainer, factElements, { delay: 40 });
    }

    // ========== PANEL FUN FACTS ==========
    function openFunFactsPanel() {
        populateFunFacts();
        DOM.funFactsPanel.setAttribute('aria-hidden', 'false');
    }

    function closeFunFactsPanel() {
        DOM.funFactsPanel.setAttribute('aria-hidden', 'true');
    }

    // ========== KEYBOARD NAVIGATION ==========
    function handleKeyboardNavigation(e) {
        if (e.key === 'Escape') {
            // Close fun facts panel if open
            if (DOM.funFactsPanel.getAttribute('aria-hidden') === 'false') {
                closeFunFactsPanel();
                return;
            }
            
            // Navigate back through screens
            if (DOM.scheduleDisplay.classList.contains('active')) {
                showScreen(DOM.daySelection);
            } else if (DOM.daySelection.classList.contains('active')) {
                showScreen(DOM.rombelSelection);
            } else if (DOM.rombelSelection.classList.contains('active')) {
                showScreen(DOM.mainMenu);
            }
        }
    }

    // ========== EVENT LISTENERS ==========
    function setupEventListeners() {
        // Level buttons (kelas 7, 8, 9)
        DOM.levelBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const grade = btn.dataset.grade;
                populateRombels(grade);
                showScreen(DOM.rombelSelection);
            });
        });
        
        // Day buttons
        DOM.dayBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const day = btn.dataset.day;
                populateScheduleFor(day);
            });
        });
        
        // Back navigation
        DOM.backToMain.addEventListener('click', () => showScreen(DOM.mainMenu));
        DOM.backToRombel.addEventListener('click', () => showScreen(DOM.rombelSelection));
        DOM.backToDay.addEventListener('click', () => showScreen(DOM.daySelection));
        
        // Theme toggle
        DOM.themeToggle.addEventListener('click', toggleTheme);
        
        // Fun facts panel
        DOM.openFunFactsBtn.addEventListener('click', openFunFactsPanel);
        DOM.closeFunFactsBtn.addEventListener('click', closeFunFactsPanel);
        
        // Close panel when clicking outside
        document.addEventListener('click', (e) => {
            if (DOM.funFactsPanel.getAttribute('aria-hidden') === 'false' &&
                !DOM.funFactsPanel.contains(e.target) &&
                e.target !== DOM.openFunFactsBtn) {
                closeFunFactsPanel();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', handleKeyboardNavigation);
    }

    // ========== INITIALIZATION ==========
    function init() {
        // Apply saved theme
        applyTheme(state.currentTheme);
        
        // Update date/time
        updateDateTime();
        setInterval(updateDateTime, 60000); // Update every minute
        
        // Setup event listeners
        setupEventListeners();
        
        // Initially show main menu
        showScreen(DOM.mainMenu);
        
        // Populate fun facts (hidden initially)
        populateFunFacts();
        DOM.funFactsPanel.setAttribute('aria-hidden', 'true');
        
        // Add tabindex for accessibility
        document.querySelectorAll('button').forEach(btn => {
            if (!btn.hasAttribute('tabindex')) {
                btn.setAttribute('tabindex', '0');
            }
        });
        
        console.log('✅ Aplikasi Jadwal Pelajaran siap digunakan!');
    }

    // ========== EXPORT FOR DEBUGGING ==========
    window.SCHOOL_SCHEDULE = {
        DATA,
        FUN_FACTS,
        state,
        utils: {
            showScreen,
            populateRombels,
            populateScheduleFor,
            populateFunFacts
        }
    };

    // ========== START APPLICATION ==========
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();