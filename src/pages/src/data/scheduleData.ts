// Data Jadwal Pelajaran SMP Negeri 2 Bitung
// Struktur: scheduleData[kelas][rombel][hari] = array jadwal

export interface ScheduleItem {
  time: string;
  subject: string;
}

export interface DaySchedule {
  [day: string]: ScheduleItem[];
}

export interface RombelSchedule {
  [rombel: string]: DaySchedule;
}

export interface ScheduleData {
  [kelas: string]: RombelSchedule;
}

export const scheduleData: ScheduleData = {
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
        { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
        { time: "13.00 - 13.40", subject: "Bahasa Inggris" }
      ],
      "RABU": [
        { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
        { time: "07.30 - 08.10", subject: "Matematika" },
        { time: "08.10 - 08.50", subject: "Matematika" },
        { time: "08.50 - 09.30", subject: "IPA" },
        { time: "09.30 - 10.10", subject: "IPA" },
        { time: "10.10 - 11.00", subject: "Istirahat" },
        { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
        { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
        { time: "12.20 - 13.00", subject: "Seni" },
        { time: "13.00 - 13.40", subject: "Seni" }
      ],
      "KAMIS": [
        { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
        { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
        { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
        { time: "08.50 - 09.30", subject: "IPA" },
        { time: "09.30 - 10.10", subject: "IPA" },
        { time: "10.10 - 11.00", subject: "Istirahat" },
        { time: "11.00 - 11.40", subject: "Informatika" },
        { time: "11.40 - 12.20", subject: "Informatika" },
        { time: "12.20 - 13.00", subject: "Mulok" },
        { time: "13.00 - 13.40", subject: "Mulok" }
      ],
      "JUMAT": [
        { time: "07.00 - 08.00", subject: "Ibadah/Olahraga" },
        { time: "08.00 - 08.40", subject: "Proyek" },
        { time: "08.40 - 09.20", subject: "Proyek" },
        { time: "09.20 - 10.00", subject: "Proyek" },
        { time: "10.00 - 10.30", subject: "Istirahat" },
        { time: "10.30 - 11.10", subject: "Proyek" },
        { time: "11.10 - 11.50", subject: "Proyek" },
        { time: "11.50 - 12.30", subject: "Proyek" }
      ]
    },
    "2": {
      "SENIN": [
        { time: "07.00 - 08.10", subject: "Upacara Bendera" },
        { time: "08.10 - 08.50", subject: "Agama" },
        { time: "08.50 - 09.30", subject: "Agama" },
        { time: "09.30 - 10.10", subject: "Matematika" },
        { time: "10.10 - 10.50", subject: "Matematika" },
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
        { time: "08.50 - 09.30", subject: "PKn" },
        { time: "09.30 - 10.10", subject: "PKn" },
        { time: "10.10 - 11.00", subject: "Istirahat" },
        { time: "11.00 - 11.40", subject: "PJOK" },
        { time: "11.40 - 12.20", subject: "PJOK" },
        { time: "12.20 - 13.00", subject: "IPS" },
        { time: "13.00 - 13.40", subject: "IPS" }
      ],
      "RABU": [
        { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
        { time: "07.30 - 08.10", subject: "Seni" },
        { time: "08.10 - 08.50", subject: "Seni" },
        { time: "08.50 - 09.30", subject: "Matematika" },
        { time: "09.30 - 10.10", subject: "Matematika" },
        { time: "10.10 - 11.00", subject: "Istirahat" },
        { time: "11.00 - 11.40", subject: "IPA" },
        { time: "11.40 - 12.20", subject: "IPA" },
        { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
        { time: "13.00 - 13.40", subject: "Bahasa Indonesia" }
      ],
      "KAMIS": [
        { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
        { time: "07.30 - 08.10", subject: "Mulok" },
        { time: "08.10 - 08.50", subject: "Mulok" },
        { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
        { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
        { time: "10.10 - 11.00", subject: "Istirahat" },
        { time: "11.00 - 11.40", subject: "IPA" },
        { time: "11.40 - 12.20", subject: "IPA" },
        { time: "12.20 - 13.00", subject: "Informatika" },
        { time: "13.00 - 13.40", subject: "Informatika" }
      ],
      "JUMAT": [
        { time: "07.00 - 08.00", subject: "Ibadah/Olahraga" },
        { time: "08.00 - 08.40", subject: "Proyek" },
        { time: "08.40 - 09.20", subject: "Proyek" },
        { time: "09.20 - 10.00", subject: "Proyek" },
        { time: "10.00 - 10.30", subject: "Istirahat" },
        { time: "10.30 - 11.10", subject: "Proyek" },
        { time: "11.10 - 11.50", subject: "Proyek" },
        { time: "11.50 - 12.30", subject: "Proyek" }
      ]
    },
    "3": {
      "SENIN": [
        { time: "07.00 - 08.10", subject: "Upacara Bendera" },
        { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
        { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
        { time: "09.30 - 10.10", subject: "Agama" },
        { time: "10.10 - 10.50", subject: "Agama" },
        { time: "10.50 - 11.40", subject: "Istirahat" },
        { time: "11.40 - 12.20", subject: "Matematika" },
        { time: "12.20 - 13.00", subject: "Matematika" },
        { time: "13.00 - 13.40", subject: "Proyek" },
        { time: "13.40 - 14.20", subject: "Proyek" }
      ],
      "SELASA": [
        { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
        { time: "07.30 - 08.10", subject: "IPS" },
        { time: "08.10 - 08.50", subject: "IPS" },
        { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
        { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
        { time: "10.10 - 11.00", subject: "Istirahat" },
        { time: "11.00 - 11.40", subject: "PKn" },
        { time: "11.40 - 12.20", subject: "PKn" },
        { time: "12.20 - 13.00", subject: "PJOK" },
        { time: "13.00 - 13.40", subject: "PJOK" }
      ],
      "RABU": [
        { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
        { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
        { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
        { time: "08.50 - 09.30", subject: "Seni" },
        { time: "09.30 - 10.10", subject: "Seni" },
        { time: "10.10 - 11.00", subject: "Istirahat" },
        { time: "11.00 - 11.40", subject: "Matematika" },
        { time: "11.40 - 12.20", subject: "Matematika" },
        { time: "12.20 - 13.00", subject: "IPA" },
        { time: "13.00 - 13.40", subject: "IPA" }
      ],
      "KAMIS": [
        { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
        { time: "07.30 - 08.10", subject: "IPA" },
        { time: "08.10 - 08.50", subject: "IPA" },
        { time: "08.50 - 09.30", subject: "Mulok" },
        { time: "09.30 - 10.10", subject: "Mulok" },
        { time: "10.10 - 11.00", subject: "Istirahat" },
        { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
        { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
        { time: "12.20 - 13.00", subject: "Prakarya" },
        { time: "13.00 - 13.40", subject: "Prakarya" }
      ],
      "JUMAT": [
        { time: "07.00 - 08.00", subject: "Ibadah/Olahraga" },
        { time: "08.00 - 08.40", subject: "Proyek" },
        { time: "08.40 - 09.20", subject: "Proyek" },
        { time: "09.20 - 10.00", subject: "Proyek" },
        { time: "10.00 - 10.30", subject: "Istirahat" },
        { time: "10.30 - 11.10", subject: "Proyek" },
        { time: "11.10 - 11.50", subject: "Proyek" },
        { time: "11.50 - 12.30", subject: "Proyek" }
      ]
    }
  },
  "8": {
    "1": {
      "SENIN": [
        { time: "07.00 - 08.10", subject: "Upacara Bendera" },
        { time: "08.10 - 08.50", subject: "Matematika" },
        { time: "08.50 - 09.30", subject: "Matematika" },
        { time: "09.30 - 10.10", subject: "IPA" },
        { time: "10.10 - 10.50", subject: "IPA" },
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
        { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
        { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
        { time: "10.10 - 11.00", subject: "Istirahat" },
        { time: "11.00 - 11.40", subject: "IPS" },
        { time: "11.40 - 12.20", subject: "IPS" },
        { time: "12.20 - 13.00", subject: "PJOK" },
        { time: "13.00 - 13.40", subject: "PJOK" }
      ],
      "RABU": [
        { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
        { time: "07.30 - 08.10", subject: "Agama" },
        { time: "08.10 - 08.50", subject: "Agama" },
        { time: "08.50 - 09.30", subject: "IPA" },
        { time: "09.30 - 10.10", subject: "IPA" },
        { time: "10.10 - 11.00", subject: "Istirahat" },
        { time: "11.00 - 11.40", subject: "Matematika" },
        { time: "11.40 - 12.20", subject: "Matematika" },
        { time: "12.20 - 13.00", subject: "Seni" },
        { time: "13.00 - 13.40", subject: "Seni" }
      ],
      "KAMIS": [
        { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
        { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
        { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
        { time: "08.50 - 09.30", subject: "Informatika" },
        { time: "09.30 - 10.10", subject: "Informatika" },
        { time: "10.10 - 11.00", subject: "Istirahat" },
        { time: "11.00 - 11.40", subject: "Mulok" },
        { time: "11.40 - 12.20", subject: "Mulok" },
        { time: "12.20 - 13.00", subject: "Prakarya" },
        { time: "13.00 - 13.40", subject: "Prakarya" }
      ],
      "JUMAT": [
        { time: "07.00 - 08.00", subject: "Ibadah/Olahraga" },
        { time: "08.00 - 08.40", subject: "Proyek" },
        { time: "08.40 - 09.20", subject: "Proyek" },
        { time: "09.20 - 10.00", subject: "Proyek" },
        { time: "10.00 - 10.30", subject: "Istirahat" },
        { time: "10.30 - 11.10", subject: "Proyek" },
        { time: "11.10 - 11.50", subject: "Proyek" },
        { time: "11.50 - 12.30", subject: "Proyek" }
      ]
    }
  },
  "9": {
    "1": {
      "SENIN": [
        { time: "07.00 - 08.10", subject: "Upacara Bendera" },
        { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
        { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
        { time: "09.30 - 10.10", subject: "Matematika" },
        { time: "10.10 - 10.50", subject: "Matematika" },
        { time: "10.50 - 11.40", subject: "Istirahat" },
        { time: "11.40 - 12.20", subject: "IPA" },
        { time: "12.20 - 13.00", subject: "IPA" },
        { time: "13.00 - 13.40", subject: "Proyek" },
        { time: "13.40 - 14.20", subject: "Proyek" }
      ],
      "SELASA": [
        { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
        { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
        { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
        { time: "08.50 - 09.30", subject: "PKn" },
        { time: "09.30 - 10.10", subject: "PKn" },
        { time: "10.10 - 11.00", subject: "Istirahat" },
        { time: "11.00 - 11.40", subject: "IPS" },
        { time: "11.40 - 12.20", subject: "IPS" },
        { time: "12.20 - 13.00", subject: "PJOK" },
        { time: "13.00 - 13.40", subject: "PJOK" }
      ],
      "RABU": [
        { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
        { time: "07.30 - 08.10", subject: "Seni" },
        { time: "08.10 - 08.50", subject: "Seni" },
        { time: "08.50 - 09.30", subject: "IPA" },
        { time: "09.30 - 10.10", subject: "IPA" },
        { time: "10.10 - 11.00", subject: "Istirahat" },
        { time: "11.00 - 11.40", subject: "Matematika" },
        { time: "11.40 - 12.20", subject: "Matematika" },
        { time: "12.20 - 13.00", subject: "Agama" },
        { time: "13.00 - 13.40", subject: "Agama" }
      ],
      "KAMIS": [
        { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
        { time: "07.30 - 08.10", subject: "Informatika" },
        { time: "08.10 - 08.50", subject: "Informatika" },
        { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
        { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
        { time: "10.10 - 11.00", subject: "Istirahat" },
        { time: "11.00 - 11.40", subject: "Mulok" },
        { time: "11.40 - 12.20", subject: "Mulok" },
        { time: "12.20 - 13.00", subject: "Prakarya" },
        { time: "13.00 - 13.40", subject: "Prakarya" }
      ],
      "JUMAT": [
        { time: "07.00 - 08.00", subject: "Ibadah/Olahraga" },
        { time: "08.00 - 08.40", subject: "Proyek" },
        { time: "08.40 - 09.20", subject: "Proyek" },
        { time: "09.20 - 10.00", subject: "Proyek" },
        { time: "10.00 - 10.30", subject: "Istirahat" },
        { time: "10.30 - 11.10", subject: "Proyek" },
        { time: "11.10 - 11.50", subject: "Proyek" },
        { time: "11.50 - 12.30", subject: "Proyek" }
      ]
    }
  }
};

// Fun Facts data
export interface FunFact {
  title: string;
  icon: string;
  items: string[];
}

export const funFacts: FunFact[] = [
  {
    title: "Jumlah Guru Per Mapel",
    icon: "fa-users",
    items: [
      "Total: 65 Guru",
      "Agama: 9 guru (3 Kristen, 3 Islam, 2 Katolik, 1 tidak spesifik)",
      "BK: 4 guru",
      "Bahasa Indonesia: 10 guru",
      "Bahasa Inggris: 8 guru",
      "IPA: 7 guru",
      "IPS: 6 guru",
      "Matematika: 8 guru",
      "PKn: 5 guru",
      "PJOK: 7 guru",
      "Prakarya/Seni Budaya: 5 guru",
      "TIK: 4 guru"
    ]
  },
  {
    title: "Perbandingan Gender",
    icon: "fa-venus-mars",
    items: [
      "Perempuan: 85% (55 orang)",
      "Laki-laki: 15% (10 orang)"
    ]
  },
  {
    title: "Guru Mengajar Dua Mata Pelajaran",
    icon: "fa-chalkboard-teacher",
    items: [
      "Sartika Ambat, S.Pd. → Agama Kristen & PKn",
      "Rahmi Astuti, S.Pd → Bahasa Indonesia & Bahasa Inggris",
      "Rizki Wahyuni → Bahasa Indonesia & Bahasa Inggris",
      "Venly Pande, S.Pd → PJOK & TIK",
      "Debi Bawiling, S.Pd → Bahasa Indonesia & Bahasa Inggris"
    ]
  },
  {
    title: "Guru Jam Mengajar Terbanyak",
    icon: "fa-clock",
    items: [
      "Abdul Wahid, S.Pd.I (Agama Islam): 36 JP",
      "Yohanes Andrew Kapahese, S.Pd. (TIK): 36 JP",
      "Nita A. Modali, S.Kom (TIK): 42 JP",
      "Christi Tumangkeng, S.Pd (TIK): 42 JP",
      "Fakta: Guru TIK memiliki beban jam tertinggi."
    ]
  },
  {
    title: "Gelar Akademik Tertinggi",
    icon: "fa-graduation-cap",
    items: [
      "John Wuisan, M.Th (Magister Theologi)",
      "Sicilia Ledy, M.Pd (Magister Pendidikan)",
      "Hesty M. Lontoh, S.Pd, M.Pd (Magister Pendidikan)",
      "Marjeine Dalonto, M.Pd (Magister Pendidikan)"
    ]
  }
];
