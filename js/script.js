// ==========================================
// DATA JADWAL (Contoh dari jadwal.txt)
// ==========================================
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
            // Data rombel 2 bisa dilanjutkan di sini sesuai jadwal.txt
        }
    },
    "8": {},
    "9": {}
};

// ==========================================
// DATA FUN FACTS (Lengkap 5 Poin)
// ==========================================
const funFacts = [
    {
        title: "Jumlah Guru per Mata Pelajaran",
        facts: [
            "Pendidikan Agama: 9 guru",
            "PKn: 5 guru",
            "Bahasa Indonesia: 10 guru",
            "Matematika & Bahasa Inggris: 8 guru",
            "IPA: 7 guru",
            "IPS: 6 guru",
            "PJOK: 7 guru",
            "Prakarya/Seni Budaya: 5 guru",
            "TIK & BK: 4 guru"
        ]
    },
    {
        title: "Perbandingan Gender",
        facts: [
            "Guru Perempuan: Sekitar 85% (55 dari 65)",
            "Guru Laki-laki: Sekitar 15% (10 dari 65)"
        ]
    },
    {
        title: "Guru Multi-Mapel",
        facts: [
            "Sartika Ambat, S.Pd.: Agama Kristen & PKn",
            "Rahmi Astuti, S.Pd: B. Indonesia & B. Inggris",
            "Venly Pande, S.Pd: PJOK & TIK",
            "Rizki Wahyuni & Debi Bawiling: B. Indonesia & B. Inggris"
        ]
    },
    {
        title: "Beban Jam Mengajar Tertinggi",
        facts: [
            "Nita A. Modali, S.Kom (TIK): 42 JP",
            "Christi Tumangkeng, S.Pd (TIK): 42 JP",
            "Abdul Wahid, S.Pd.I (Agama): 36 JP",
            "Yohanes Andrew K., S.Pd (TIK): 36 JP",
            "Fakta: Guru TIK memiliki beban jam tertinggi karena mengajar banyak kelas."
        ]
    },
    {
        title: "Gelar Akademik Tertinggi (Magister)",
        facts: [
            "John Wuisan, M.Th (Magister Theologi)",
            "Sicilia Ledy S Sambur, M.Pd (Magister Pendidikan)",
            "Hesty M. Lontoh, S.Pd, M.Pd (Magister Pendidikan)",
            "Marjeine Dalonto, M.Pd (Magister Pendidikan)"
        ]
    }
];

// ==========================================
// SELEKTOR DOM & STATE
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const factsContainer = document.getElementById('factsContainer');
const scheduleList = document.getElementById('scheduleList');

let currentClass = null;
let currentRombel = null;

// ==========================================
// FUNGSI TEMA (LIGHT/DARK)
// ==========================================
function toggleTheme() {
    const isDark = body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// ==========================================
// NAVIGASI LAYAR
// ==========================================
function switchScreen(fromId, toId) {
    const fromScreen = document.getElementById(fromId);
    const toScreen = document.getElementById(toId);
    
    fromScreen.classList.remove('active');
    setTimeout(() => {
        toScreen.classList.add('active');
        window.scrollTo(0, 0);
    }, 300);
}

// ==========================================
// LOGIKA TAMPILAN JADWAL
// ==========================================
function showRombelSelection(classNum) {
    currentClass = classNum;
    document.getElementById('rombelTitle').innerText = `Kelas ${classNum} - Pilih Rombel`;
    
    const rombelGrid = document.getElementById('rombelGrid');
    rombelGrid.innerHTML = '';
    
    // Rombel 1-14 sesuai data sekolah
    for (let i = 1; i <= 14; i++) {
        const btn = document.createElement('button');
        btn.className = 'rombel-btn';
        btn.innerText = `Rombel ${i}`;
        btn.onclick = () => showDaySelection(i);
        rombelGrid.appendChild(btn);
    }
    
    switchScreen('mainMenu', 'rombelSelection');
}

function showDaySelection(rombelNum) {
    currentRombel = rombelNum;
    document.getElementById('dayTitle').innerText = `Kelas ${currentClass} - Rombel ${rombelNum}`;
    switchScreen('rombelSelection', 'daySelection');
}

function showSchedule(day) {
    document.getElementById('scheduleTitle').innerText = `${day} - Rombel ${currentRombel}`;
    scheduleList.innerHTML = '';

    const dayData = scheduleData[currentClass]?.[currentRombel]?.[day];

    if (dayData && dayData.length > 0) {
        dayData.forEach(item => {
            const div = document.createElement('div');
            div.className = 'schedule-item';
            div.innerHTML = `
                <div class="time">${item.time}</div>
                <div class="subject">${item.subject}</div>
            `;
            scheduleList.appendChild(div);
        });
    } else {
        scheduleList.innerHTML = `
            <div class="schedule-item">
                <div class="subject" style="grid-column: span 2; text-align: center;">
                    Data jadwal belum diinput untuk Rombel ini.
                </div>
            </div>`;
    }

    switchScreen('daySelection', 'scheduleDisplay');
}

// ==========================================
// LOGIKA TAMPILAN FUN FACTS
// ==========================================
function showFunFacts() {
    factsContainer.innerHTML = '';
    funFacts.forEach(cat => {
        const div = document.createElement('div');
        div.className = 'fact-category';
        let items = cat.facts.map(f => `<li class="fact-item">${f}</li>`).join('');
        div.innerHTML = `<h3><i class="fas fa-star"></i> ${cat.title}</h3><ul>${items}</ul>`;
        factsContainer.appendChild(div);
    });
    switchScreen('mainMenu', 'funFactsDisplay');
}

// ==========================================
// INISIALISASI
// ==========================================
function initEventListeners() {
    themeToggle.onclick = toggleTheme;
    
    document.querySelectorAll('.class-btn').forEach(btn => {
        btn.onclick = () => showRombelSelection(btn.dataset.class);
    });
    
    document.getElementById('funFactsBtn').onclick = showFunFacts;
    
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.onclick = () => showSchedule(btn.dataset.day);
    });
    
    // Tombol Kembali
    document.getElementById('backToMain').onclick = () => switchScreen('rombelSelection', 'mainMenu');
    document.getElementById('backToRombel').onclick = () => switchScreen('daySelection', 'rombelSelection');
    document.getElementById('backToDay').onclick = () => switchScreen('scheduleDisplay', 'daySelection');
    document.getElementById('backToMainFromFacts').onclick = () => switchScreen('funFactsDisplay', 'mainMenu');
}

function initApp() {
    // Memuat tema yang disimpan
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    }
    initEventListeners();
}

window.onload = initApp;
