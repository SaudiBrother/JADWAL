// Data Jadwal dari file jadwal.txt
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
        // Data untuk rombel 2-12 (disederhanakan untuk contoh)
        "2": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" }
            ]
        },
        "3": {}, "4": {}, "5": {}, "6": {}, "7": {}, "8": {}, "9": {}, "10": {}, "11": {}, "12": {}
    },
    "8": {
        "1": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "PKN" },
                { time: "10.10 - 10.50", subject: "PKN" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "TIK" }
            ]
        },
        // Data untuk rombel 2-14 (disederhanakan)
        "2": {}, "3": {}, "4": {}, "5": {}, "6": {}, "7": {}, "8": {}, "9": {}, "10": {}, "11": {}, "12": {}, "13": {}, "14": {}
    },
    "9": {
        "1": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 10.50", subject: "TIK" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "TIK" }
            ]
        },
        // Data untuk rombel 2-14 (disederhanakan)
        "2": {}, "3": {}, "4": {}, "5": {}, "6": {}, "7": {}, "8": {}, "9": {}, "10": {}, "11": {}, "12": {}, "13": {}, "14": {}
    }
};

// Data Fun Facts dari file Fun Facts.txt
const funFactsData = [
    {
        title: "JUMLAH GURU PER MATA PELAJARAN",
        facts: [
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
            "Mulok: Diajarkan wali kelas (tidak dihitung)"
        ]
    },
    {
        title: "PERBANDINGAN GENDER (Dari Nama Di Jadwal)",
        facts: [
            "Guru Perempuan: Sekitar 85% (55 dari 65)",
            "Guru Laki-laki: Sekitar 15% (10 dari 65)"
        ]
    },
    {
        title: "GURU YANG MENGAJAR DUA MATA PELAJARAN",
        facts: [
            "Sartika Ambat, S.Pd. → Agama Kristen & PKn",
            "Rahmi Astuti, S.Pd → Bahasa Indonesia & Bahasa Inggris",
            "Rizki Wahyuni → Bahasa Indonesia & Bahasa Inggris",
            "Venly Pande, S.Pd → PJOK & TIK",
            "Debi Bawiling, S.Pd → Bahasa Indonesia & Bahasa Inggris"
        ]
    },
    {
        title: "GURU DENGAN JAM MENGAJAR TERBANYAK",
        facts: [
            "Abdul Wahid, S.Pd.I (Agama Islam): 36 JP → mengajar semua kelas 8 (VII)",
            "Yohanes Andrew Kapahese, S.Pd. (TIK): 36 JP → mengajar hampir semua kelas 8 (VII)",
            "Nita A. Modali, S.Kom (TIK): 42 JP → mengajar semua kelas 7(VIII)",
            "Christi Tumangkeng, S.Pd (TIK): 42 JP → mengajar semua rombel 9 (IX)"
        ]
    },
    {
        title: "GURU DENGAN GELAR AKADEMIK TERTINGGI",
        facts: [
            "John Wuisan, M.Th (Magister Theologi)",
            "Sicilia Ledy S Sambur, M.Pd (Magister Pendidikan)",
            "Hesty M. Lontoh, S.Pd, M.Pd (Magister Pendidikan)",
            "Marjeine Dalonto, M.Pd (Magister Pendidikan)"
        ]
    }
];

// State aplikasi
let currentClass = null;
let currentRombel = null;
let currentDay = null;

// Elemen DOM
const themeToggle = document.getElementById('themeToggle');
const mainContainer = document.getElementById('mainContainer');
const screens = document.querySelectorAll('.screen');

// Fungsi untuk mengganti tema
function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
}

// Fungsi untuk berpindah antar layar dengan animasi
function switchScreen(fromId, toId) {
    const fromScreen = document.getElementById(fromId);
    const toScreen = document.getElementById(toId);
    
    // Tambahkan efek fade out
    fromScreen.style.opacity = '0';
    fromScreen.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        // Sembunyikan layar lama, tampilkan layar baru
        fromScreen.classList.remove('active');
        toScreen.classList.add('active');
        
        // Reset dan tambahkan efek fade in
        toScreen.style.opacity = '0';
        toScreen.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            toScreen.style.opacity = '1';
            toScreen.style.transform = 'translateY(0)';
        }, 50);
    }, 400);
}

// Fungsi untuk menampilkan pilihan rombel berdasarkan kelas
function showRombelSelection(selectedClass) {
    currentClass = selectedClass;
    const rombelTitle = document.getElementById('rombelTitle');
    rombelTitle.textContent = `Kelas ${selectedClass} Berapa?`;
    
    const rombelGrid = document.getElementById('rombelGrid');
    rombelGrid.innerHTML = '';
    
    // Tentukan jumlah rombel berdasarkan kelas
    let rombelCount = 12; // Default untuk kelas 7
    if (selectedClass === '8') rombelCount = 14;
    if (selectedClass === '9') rombelCount = 14;
    
    // Buat tombol rombel
    for (let i = 1; i <= rombelCount; i++) {
        const rombelBtn = document.createElement('button');
        rombelBtn.className = 'rombel-btn';
        rombelBtn.textContent = `Rombel ${i}`;
        rombelBtn.dataset.rombel = i;
        rombelBtn.style.setProperty('--i', i);
        
        rombelBtn.addEventListener('click', () => {
            currentRombel = i;
            showDaySelection();
        });
        
        rombelGrid.appendChild(rombelBtn);
    }
    
    switchScreen('mainMenu', 'rombelSelection');
}

// Fungsi untuk menampilkan pilihan hari
function showDaySelection() {
    const dayTitle = document.getElementById('dayTitle');
    dayTitle.textContent = `Kelas ${currentClass} - Rombel ${currentRombel}`;
    
    switchScreen('rombelSelection', 'daySelection');
}

// Fungsi untuk menampilkan jadwal
function showSchedule(selectedDay) {
    currentDay = selectedDay;
    const scheduleTitle = document.getElementById('scheduleTitle');
    scheduleTitle.textContent = `Jadwal Kelas ${currentClass} - Rombel ${currentRombel} (${selectedDay})`;
    
    const scheduleList = document.getElementById('scheduleList');
    scheduleList.innerHTML = '';
    
    // Ambil data jadwal
    const schedule = scheduleData[currentClass][currentRombel][selectedDay];
    
    if (schedule && schedule.length > 0) {
        schedule.forEach(item => {
            const scheduleItem = document.createElement('div');
            scheduleItem.className = 'schedule-item';
            
            scheduleItem.innerHTML = `
                <div class="time-slot">${item.time}</div>
                <div class="subject">${item.subject}</div>
            `;
            
            scheduleList.appendChild(scheduleItem);
        });
    } else {
        // Jika tidak ada data, tampilkan pesan
        scheduleList.innerHTML = `
            <div class="schedule-item">
                <div class="subject" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                    Jadwal untuk hari ini belum tersedia.
                </div>
            </div>
        `;
    }
    
    switchScreen('daySelection', 'scheduleDisplay');
}

// Fungsi untuk menampilkan Fun Facts
function showFunFacts() {
    const factsContainer = document.querySelector('.facts-container');
    factsContainer.innerHTML = '';
    
    funFactsData.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'fact-category';
        
        let factsList = '';
        category.facts.forEach(fact => {
            factsList += `<li class="fact-item">${fact}</li>`;
        });
        
        categoryElement.innerHTML = `
            <h3><i class="fas fa-chart-bar"></i> ${category.title}</h3>
            <ul>${factsList}</ul>
        `;
        
        factsContainer.appendChild(categoryElement);
    });
    
    switchScreen('mainMenu', 'funFactsDisplay');
}

// Inisialisasi event listener
function initEventListeners() {
    // Tombol tema
    themeToggle.addEventListener('click', toggleTheme);
    
    // Tombol kelas
    document.querySelectorAll('.class-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedClass = btn.dataset.class;
            showRombelSelection(selectedClass);
        });
    });
    
    // Tombol Fun Facts
    document.getElementById('funFactsBtn').addEventListener('click', showFunFacts);
    
    // Tombol hari
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedDay = btn.dataset.day;
            showSchedule(selectedDay);
        });
    });
    
    // Tombol kembali
    document.getElementById('backToMain').addEventListener('click', () => {
        switchScreen('rombelSelection', 'mainMenu');
    });
    
    document.getElementById('backToRombel').addEventListener('click', () => {
        switchScreen('daySelection', 'rombelSelection');
    });
    
    document.getElementById('backToDay').addEventListener('click', () => {
        switchScreen('scheduleDisplay', 'daySelection');
    });
    
    document.getElementById('backToMainFromFacts').addEventListener('click', () => {
        switchScreen('funFactsDisplay', 'mainMenu');
    });
}

// Inisialisasi aplikasi
function initApp() {
    // Set tema berdasarkan preferensi pengguna
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme === 'dark' ? 'dark-mode' : 'light-mode');
    
    // Inisialisasi event listener
    initEventListeners();
    
    // Tampilkan menu utama
    document.getElementById('mainMenu').classList.add('active');
    
    // Tambahkan animasi untuk tombol rombel
    const style = document.createElement('style');
    style.textContent = `
        .rombel-btn {
            animation: slideInFromBottom 0.5s ease-out forwards;
            animation-delay: calc(var(--i) * 0.05s);
            opacity: 0;
        }
        
        .rombel-btn:hover {
            animation: float-very-slow 4s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);
}

// Jalankan aplikasi ketika DOM siap
document.addEventListener('DOMContentLoaded', initApp);
