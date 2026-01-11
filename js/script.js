// Data Jadwal Lengkap dari file jadwal.txt
const scheduleData = {
    // Data yang sudah ada untuk kelas 7...
    // Data untuk kelas 8 dan 9 akan ditambahkan di bawah
};

// Data tambahan untuk kelas 8 dan 9
const class8Data = {
    "1": {
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
    },
    "2": {
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
};

const class9Data = {
    "1": {
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
    },
    "2": {
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
};

// Menambahkan data kelas 8 dan 9 ke scheduleData
scheduleData["8"] = class8Data;
scheduleData["9"] = class9Data;

// Data Fun Facts
const funFactsData = [
    {
        title: "📊 Jumlah Guru Per Mata Pelajaran",
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
            "TIK: 4 guru"
        ]
    },
    {
        title: "👥 Perbandingan Gender",
        items: [
            "Guru Perempuan: Sekitar 85% (~55 dari 65)",
            "Guru Laki-laki: Sekitar 15% (~10 dari 65)",
            "Mayoritas guru adalah perempuan dengan dedikasi tinggi"
        ]
    },
    {
        title: "🎓 Guru dengan Gelar Akademik Tertinggi",
        items: [
            "John Wuisan, M. Th (Magister Theologi)",
            "Sicilia Ledy S Sambur, M. Pd (Magister Pendidikan)",
            "Hesty M. Lontoh, S. Pd, M. Pd",
            "Marjeine Dalonto, M.Pd"
        ]
    },
    {
        title: "⏰ Jam Mengajar Terbanyak",
        items: [
            "Abdul Wahid, S.Pd. I (Agama Islam): 36 JP",
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
    daySelection: document.getElementById('daySelection'),
    scheduleDisplay: document.getElementById('scheduleDisplay'),
    funFactsDisplay: document.getElementById('funFactsDisplay')
};

const elements = {
    themeToggle: document.getElementById('themeToggle'),
    currentDate: document.getElementById('currentDate'),
    classButtons: document.querySelectorAll('.class-btn'),
    funFactsBtn: document.getElementById('funFactsBtn'),
    backToMain: document.getElementById('backToMain'),
    backToRombel: document.getElementById('backToRombel'),
    backToDay: document.getElementById('backToDay'),
    backToMainFromFacts: document.getElementById('backToMainFromFacts'),
    rombelTitle: document.getElementById('rombelTitle'),
    rombelGrid: document.getElementById('rombelGrid'),
    dayTitle: document.getElementById('dayTitle'),
    dayButtons: document.querySelectorAll('.day-btn'),
    scheduleTitle: document.getElementById('scheduleTitle'),
    scheduleList: document.getElementById('scheduleList'),
    factsContainer: document.getElementById('factsContainer')
};

// Fungsi untuk menampilkan tanggal sekarang
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

// Fungsi untuk mengganti tema
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    
    // Simpan preferensi tema di localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Fungsi untuk mengatur tema awal
function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
}

// Fungsi untuk mengganti layar
function showScreen(screenName) {
    // Sembunyikan semua layar
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Tampilkan layar yang dipilih
    if (screens[screenName]) {
        screens[screenName].classList.add('active');
    }
}

// Fungsi untuk menampilkan rombel berdasarkan kelas
function showRombels(className) {
    currentState.selectedClass = className;
    elements.rombelTitle.textContent = `Kelas ${className} - Pilih Rombel`;
    elements.rombelGrid.innerHTML = '';
    
    // Dapatkan jumlah rombel untuk kelas ini
    const rombelCount = scheduleData[className] ? Object.keys(scheduleData[className]).length : 0;
    
    // Buat tombol rombel
    for (let i = 1; i <= rombelCount; i++) {
        const rombelBtn = document.createElement('button');
        rombelBtn.className = 'rombel-btn';
        rombelBtn.textContent = `Rombel ${i}`;
        rombelBtn.style.setProperty('--i', i);
        
        rombelBtn.addEventListener('click', () => {
            currentState.selectedRombel = i.toString();
            showDays();
        });
        
        elements.rombelGrid.appendChild(rombelBtn);
    }
    
    showScreen('rombelSelection');
}

// Fungsi untuk menampilkan hari
function showDays() {
    elements.dayTitle.textContent = `Kelas ${currentState.selectedClass} - Rombel ${currentState.selectedRombel}`;
    showScreen('daySelection');
}

// Fungsi untuk menampilkan jadwal
function showSchedule(day) {
    currentState.selectedDay = day;
    
    const dayNames = {
        'SENIN': 'Senin',
        'SELASA': 'Selasa',
        'RABU': 'Rabu',
        'KAMIS': 'Kamis',
        'JUMAT': 'Jumat'
    };
    
    elements.scheduleTitle.textContent = `Jadwal ${dayNames[day]} - Kelas ${currentState.selectedClass} Rombel ${currentState.selectedRombel}`;
    elements.scheduleList.innerHTML = '';
    
    // Dapatkan jadwal berdasarkan kelas, rombel, dan hari
    const schedule = scheduleData[currentState.selectedClass]?.[currentState.selectedRombel]?.[day];
    
    if (schedule && schedule.length > 0) {
        schedule.forEach(item => {
            const scheduleItem = document.createElement('div');
            scheduleItem.className = 'schedule-item fade-in';
            
            const timeSlot = document.createElement('div');
            timeSlot.className = 'time-slot';
            timeSlot.innerHTML = `<i class="fas fa-clock"></i> ${item.time}`;
            
            const subject = document.createElement('div');
            subject.className = 'subject';
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

// Fungsi untuk menampilkan fun facts
function showFunFacts() {
    elements.factsContainer.innerHTML = '';
    
    funFactsData.forEach((fact, index) => {
        const factCategory = document.createElement('div');
        factCategory.className = 'fact-category fade-in';
        factCategory.style.animationDelay = `${index * 0.2}s`;
        
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

// Event Listeners
function setupEventListeners() {
    // Toggle tema
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Tombol kelas
    elements.classButtons.forEach(button => {
        button.addEventListener('click', () => {
            const className = button.getAttribute('data-class');
            showRombels(className);
        });
    });
    
    // Tombol hari
    elements.dayButtons.forEach(button => {
        button.addEventListener('click', () => {
            const day = button.getAttribute('data-day');
            showSchedule(day);
        });
    });
    
    // Tombol Fun Facts
    elements.funFactsBtn.addEventListener('click', showFunFacts);
    
    // Tombol kembali
    elements.backToMain.addEventListener('click', () => showScreen('mainMenu'));
    elements.backToRombel.addEventListener('click', () => showScreen('rombelSelection'));
    elements.backToDay.addEventListener('click', () => showScreen('daySelection'));
    elements.backToMainFromFacts.addEventListener('click', () => showScreen('mainMenu'));
}

// Inisialisasi aplikasi
function init() {
    // Atur tema awal
    setInitialTheme();
    
    // Perbarui tanggal
    updateCurrentDate();
    
    // Setup event listeners
    setupEventListeners();
    
    // Tampilkan layar utama
    showScreen('mainMenu');
}

// Jalankan aplikasi ketika DOM sudah dimuat
document.addEventListener('DOMContentLoaded', init);

