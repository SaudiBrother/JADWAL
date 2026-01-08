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
        "2": {}, "3": {}, "4": {}, "5": {}, "6": {}, "7": {}, "8": {}, "9": {}, "10": {}, "11": {}, "12": {}, "13": {}, "14": {}
    }
};

const funFactsData = [
    {
        title: "JUMLAH GURU PER MATA PELAJARAN",
        facts: [
            "Pendidikan Agama: 9 guru", "PKn: 5 guru", "Bahasa Indonesia: 10 guru",
            "Matematika: 8 guru", "Bahasa Inggris: 8 guru", "IPA: 7 guru",
            "IPS: 6 guru", "PJOK: 7 guru", "Prakarya/Seni Budaya: 5 guru",
            "TIK: 4 guru", "BK: 4 guru"
        ]
    },
    {
        title: "PERBANDINGAN GENDER",
        facts: ["Guru Perempuan: ~85% (55/65)", "Guru Laki-laki: ~15% (10/65)"]
    },
    {
        title: "GURU DENGAN JAM MENGAJAR TERBANYAK",
        facts: [
            "Abdul Wahid (Agama): 36 JP", "Yohanes Kapahese (TIK): 36 JP",
            "Nita A. Modali (TIK): 42 JP", "Christi Tumangkeng (TIK): 42 JP"
        ]
    }
];

// State
let currentClass = null;
let currentRombel = null;
let currentDay = null;

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const screens = document.querySelectorAll('.screen');

function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');
    if (isDarkMode) {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark');
    }
}

function switchScreen(fromId, toId) {
    const fromScreen = document.getElementById(fromId);
    const toScreen = document.getElementById(toId);
    
    fromScreen.style.opacity = '0';
    fromScreen.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        fromScreen.classList.remove('active');
        toScreen.classList.add('active');
        toScreen.style.opacity = '0';
        toScreen.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            toScreen.style.opacity = '1';
            toScreen.style.transform = 'translateY(0)';
        }, 50);
    }, 400);
}

function showRombelSelection(selectedClass) {
    currentClass = selectedClass;
    document.getElementById('rombelTitle').textContent = `Kelas ${selectedClass} Berapa?`;
    
    const rombelGrid = document.getElementById('rombelGrid');
    rombelGrid.innerHTML = '';
    
    let rombelCount = (selectedClass === '7') ? 12 : 14;
    
    for (let i = 1; i <= rombelCount; i++) {
        const rombelBtn = document.createElement('button');
        rombelBtn.className = 'rombel-btn';
        rombelBtn.textContent = `Rombel ${i}`;
        rombelBtn.style.setProperty('--i', i);
        
        rombelBtn.onclick = () => {
            currentRombel = i.toString(); // Gunakan string agar cocok dengan key object
            showDaySelection();
        };
        rombelGrid.appendChild(rombelBtn);
    }
    switchScreen('mainMenu', 'rombelSelection');
}

function showDaySelection() {
    document.getElementById('dayTitle').textContent = `Kelas ${currentClass} - Rombel ${currentRombel}`;
    switchScreen('rombelSelection', 'daySelection');
}

// FUNGSI UTAMA YANG DIPERBAIKI
function showSchedule(selectedDay) {
    currentDay = selectedDay;
    document.getElementById('scheduleTitle').textContent = `Jadwal Kelas ${currentClass} - Rombel ${currentRombel} (${selectedDay})`;
    
    const scheduleList = document.getElementById('scheduleList');
    scheduleList.innerHTML = '';
    
    // Safety check: Pastikan urutan data ada
    const classData = scheduleData[currentClass];
    const rombelData = classData ? classData[currentRombel] : null;
    const schedule = (rombelData && rombelData[selectedDay]) ? rombelData[selectedDay] : [];
    
    if (schedule.length > 0) {
        schedule.forEach(item => {
            const div = document.createElement('div');
            div.className = 'schedule-item';
            div.innerHTML = `<div class="time-slot">${item.time}</div><div class="subject">${item.subject}</div>`;
            scheduleList.appendChild(div);
        });
    } else {
        scheduleList.innerHTML = `<div class="schedule-item"><div class="subject" style="grid-column: 1/-1; text-align:center; padding:40px;">Jadwal belum tersedia untuk pilihan ini.</div></div>`;
    }
    
    switchScreen('daySelection', 'scheduleDisplay');
}

function showFunFacts() {
    const container = document.querySelector('.facts-container');
    container.innerHTML = '';
    funFactsData.forEach(cat => {
        const div = document.createElement('div');
        div.className = 'fact-category';
        let items = cat.facts.map(f => `<li class="fact-item">${f}</li>`).join('');
        div.innerHTML = `<h3><i class="fas fa-chart-bar"></i> ${cat.title}</h3><ul>${items}</ul>`;
        container.appendChild(div);
    });
    switchScreen('mainMenu', 'funFactsDisplay');
}

function initEventListeners() {
    themeToggle.onclick = toggleTheme;
    
    document.querySelectorAll('.class-btn').forEach(btn => {
        btn.onclick = () => showRombelSelection(btn.dataset.class);
    });
    
    document.getElementById('funFactsBtn').onclick = showFunFacts;
    
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.onclick = () => showSchedule(btn.dataset.day);
    });
    
    document.getElementById('backToMain').onclick = () => switchScreen('rombelSelection', 'mainMenu');
    document.getElementById('backToRombel').onclick = () => switchScreen('daySelection', 'rombelSelection');
    document.getElementById('backToDay').onclick = () => switchScreen('scheduleDisplay', 'daySelection');
    document.getElementById('backToMainFromFacts').onclick = () => switchScreen('funFactsDisplay', 'mainMenu');
}

function initApp() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme + '-mode');
    initEventListeners();
}

document.addEventListener('DOMContentLoaded', initApp);
