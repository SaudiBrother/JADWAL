/**
 * script.js - MODERN SCHOOL SCHEDULE APP
 * Interactive, smooth animations, dan enhanced UX
 */

(() => {
  'use strict';

  // ========== CONSTANTS ==========
  const DAYS = ['SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT'];
  const DAYS_ID = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const MONTHS = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  // ========== SCHEDULE DATA ==========
  const SCHEDULE_DATA = {
    '7':  {
      label: 'Kelas VII',
      rombels: [
        {
          id: '7-1',
          name: 'Rombel 1',
          schedule: {
            'SENIN': [
              { time: '07.00 - 08.10', subject: 'Upacara Bendera' },
              { time: '08.10 - 08.50', subject: 'Matematika' },
              { time:  '08.50 - 09.30', subject: 'Matematika' },
              { time: '09.30 - 10.10', subject: 'Agama' },
              { time:  '10.10 - 10.50', subject: 'Agama' },
              { time:  '10.50 - 11.40', subject: 'Istirahat' },
              { time: '11.40 - 12.20', subject: 'Prakarya' },
              { time: '12.20 - 13.00', subject: 'Prakarya' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'SELASA':  [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'PKn' },
              { time: '08.10 - 08.50', subject: 'PKn' },
              { time: '08.50 - 09.30', subject: 'PJOK' },
              { time: '09.30 - 10.10', subject: 'PJOK' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'IPS' },
              { time: '11.40 - 12.20', subject: 'IPS' },
              { time: '12.20 - 13.00', subject: 'IPS' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time:  '13.40 - 14.20', subject: 'Proyek' },
            ],
            'RABU': [
              { time:  '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time:  '07.30 - 08.10', subject: 'Mulok' },
              { time:  '08.10 - 08.50', subject: 'TIK' },
              { time: '08.50 - 09.30', subject: 'TIK' },
              { time: '09.30 - 10.10', subject: 'IPA' },
              { time:  '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'IPA' },
              { time: '11.40 - 12.20', subject: 'Bahasa Indonesia' },
              { time: '12.20 - 13.00', subject: 'Bahasa Indonesia' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'KAMIS':  [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'Matematika' },
              { time: '08.10 - 08.50', subject: 'Matematika' },
              { time: '08.50 - 09.30', subject: 'IPA' },
              { time: '09.30 - 10.10', subject: 'IPA' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'Bahasa Inggris' },
              { time: '11.40 - 12.20', subject: 'Bahasa Inggris' },
              { time: '12.20 - 13.00', subject: 'Bahasa Inggris' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'JUMAT': [
              { time: '07.00 - 08.00', subject: 'Ibadah' },
              { time: '08.00 - 08.40', subject: 'Bahasa Indonesia' },
              { time: '08.40 - 09.20', subject: 'Bahasa Indonesia' },
              { time: '09.20 - 10.00', subject: 'Bahasa Indonesia' },
              { time: '10.00 - 10.40', subject: 'Mulok' },
              { time:  '10.40 - 11.10', subject: 'Istirahat' },
              { time: '11.10 - 11.50', subject: 'Proyek' },
              { time:  '11.50 - 12.30', subject: 'Proyek' },
            ],
          }
        },
        {
          id: '7-2',
          name: 'Rombel 2',
          schedule: {
            'SENIN': [
              { time:  '07.00 - 08.10', subject: 'Upacara Bendera' },
              { time: '08.10 - 08.50', subject: 'Mulok' },
              { time:  '08.50 - 09.30', subject: 'Bahasa Indonesia' },
              { time: '09.30 - 10.10', subject: 'Bahasa Indonesia' },
              { time: '10.10 - 10.50', subject: 'Bahasa Indonesia' },
              { time: '10.50 - 11.40', subject: 'Istirahat' },
              { time: '11.40 - 12.20', subject: 'IPA' },
              { time:  '12.20 - 13.00', subject: 'IPA' },
              { time:  '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'SELASA': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'Bahasa Indonesia' },
              { time: '08.10 - 08.50', subject: 'Bahasa Indonesia' },
              { time: '08.50 - 09.30', subject: 'Matematika' },
              { time:  '09.30 - 10.10', subject: 'Matematika' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'Bahasa Inggris' },
              { time: '11.40 - 12.20', subject: 'Bahasa Inggris' },
              { time: '12.20 - 13.00', subject: 'PKn' },
              { time:  '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'RABU': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'PKn' },
              { time:  '08.10 - 08.50', subject: 'PKn' },
              { time:  '08.50 - 09.30', subject: 'Matematika' },
              { time:  '09.30 - 10.10', subject: 'Matematika' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'Agama' },
              { time:  '11.40 - 12.20', subject: 'Agama' },
              { time: '12.20 - 13.00', subject: 'Mulok' },
              { time:  '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'KAMIS': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'IPS' },
              { time: '08.10 - 08.50', subject: 'IPS' },
              { time: '08.50 - 09.30', subject: 'IPS' },
              { time: '09.30 - 10.10', subject: 'Matematika' },
              { time:  '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'Matematika' },
              { time:  '11.40 - 12.20', subject: 'PJOK' },
              { time: '12.20 - 13.00', subject: 'PJOK' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'JUMAT': [
              { time:  '07.00 - 08.00', subject: 'Ibadah' },
              { time: '08.00 - 08.40', subject: 'Mulok' },
              { time:  '08.40 - 09.20', subject: 'Bahasa Inggris' },
              { time: '09.20 - 10.00', subject: 'Bahasa Inggris' },
              { time: '10.00 - 10.40', subject: 'Bahasa Inggris' },
              { time: '10.40 - 11.10', subject: 'Istirahat' },
              { time: '11.10 - 11.50', subject: 'Proyek' },
              { time: '11.50 - 12.30', subject: 'Proyek' },
            ],
          }
        },
        {
          id: '7-3',
          name: 'Rombel 3',
          schedule: {
            'SENIN': [
              { time: '07.00 - 08.10', subject: 'Upacara Bendera' },
              { time: '08.10 - 08.50', subject: 'TIK' },
              { time: '08.50 - 09.30', subject: 'TIK' },
              { time: '09.30 - 10.10', subject: 'IPA' },
              { time: '10.10 - 10.50', subject: 'IPA' },
              { time: '10.50 - 11.40', subject: 'Istirahat' },
              { time: '11.40 - 12.20', subject: 'Matematika' },
              { time:  '12.20 - 13.00', subject: 'Matematika' },
              { time:  '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'SELASA': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'Agama' },
              { time:  '08.10 - 08.50', subject: 'Agama' },
              { time: '08.50 - 09.30', subject: 'Bahasa Indonesia' },
              { time: '09.30 - 10.10', subject: 'Bahasa Indonesia' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'Bahasa Indonesia' },
              { time: '11.40 - 12.20', subject: 'PKn' },
              { time:  '12.20 - 13.00', subject: 'PKn' },
              { time:  '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'RABU': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'Bahasa Indonesia' },
              { time: '08.10 - 08.50', subject: 'Bahasa Indonesia' },
              { time: '08.50 - 09.30', subject: 'Prakarya' },
              { time: '09.30 - 10.10', subject: 'Prakarya' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'Mulok' },
              { time:  '11.40 - 12.20', subject: 'IPA' },
              { time:  '12.20 - 13.00', subject: 'IPA' },
              { time:  '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'KAMIS': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'IPS' },
              { time:  '08.10 - 08.50', subject: 'IPS' },
              { time:  '08.50 - 09.30', subject: 'IPS' },
              { time:  '09.30 - 10.10', subject: 'Matematika' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'Matematika' },
              { time:  '11.40 - 12.20', subject: 'PJOK' },
              { time: '12.20 - 13.00', subject: 'PJOK' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'JUMAT': [
              { time: '07.00 - 08.00', subject: 'Ibadah' },
              { time: '08.00 - 08.40', subject: 'Mulok' },
              { time: '08.40 - 09.20', subject: 'Bahasa Inggris' },
              { time: '09.20 - 10.00', subject: 'Bahasa Inggris' },
              { time: '10.00 - 10.40', subject: 'Bahasa Inggris' },
              { time: '10.40 - 11.10', subject: 'Istirahat' },
              { time: '11.10 - 11.50', subject: 'Proyek' },
              { time: '11.50 - 12.30', subject: 'Proyek' },
            ],
          }
        }
      ]
    },
    '8':  {
      label: 'Kelas VIII',
      rombels: [
        {
          id: '8-1',
          name: 'Rombel 1',
          schedule: {
            'SENIN': [
              { time: '07.00 - 08.10', subject: 'Upacara Bendera' },
              { time: '08.10 - 08.50', subject: 'IPA' },
              { time:  '08.50 - 09.30', subject: 'IPA' },
              { time:  '09.30 - 10.10', subject: 'PKN' },
              { time: '10.10 - 10.50', subject: 'PKN' },
              { time: '10.50 - 11.40', subject: 'Istirahat' },
              { time: '11.40 - 12.20', subject: 'PJOK' },
              { time: '12.20 - 13.00', subject: 'PJOK' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'SELASA': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'IPS' },
              { time: '08.10 - 08.50', subject: 'IPS' },
              { time: '08.50 - 09.30', subject: 'IPS' },
              { time: '09.30 - 10.10', subject: 'TIK' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'TIK' },
              { time: '11.40 - 12.20', subject: 'MATEMATIKA' },
              { time:  '12.20 - 13.00', subject: 'MATEMATIKA' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'RABU': [
              { time:  '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time:  '07.30 - 08.10', subject: 'MATEMATIKA' },
              { time:  '08.10 - 08.50', subject: 'MATEMATIKA' },
              { time: '08.50 - 09.30', subject: 'AGAMA' },
              { time:  '09.30 - 10.10', subject: 'AGAMA' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'BAHASA INDONESIA' },
              { time: '11.40 - 12.20', subject: 'PRAKARYA' },
              { time: '12.20 - 13.00', subject: 'PRAKARYA' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'KAMIS': [
              { time:  '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time:  '07.30 - 08.10', subject: 'Mulok' },
              { time:  '08.10 - 08.50', subject: 'MATEMATIKA' },
              { time: '08.50 - 09.30', subject: 'AGAMA' },
              { time: '09.30 - 10.10', subject: 'Mulok' },
              { time:  '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'BAHASA INGGRIS' },
              { time: '11.40 - 12.20', subject: 'BAHASA INDONESIA' },
              { time: '12.20 - 13.00', subject: 'IPS' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time:  '13.40 - 14.20', subject: 'Proyek' }
            ],
            'JUMAT': [
              { time: '07.00 - 08.00', subject: 'Ibadah' },
              { time: '08.00 - 08.40', subject: 'BAHASA INDONESIA' },
              { time: '08.40 - 09.20', subject: 'BAHASA INDONESIA' },
              { time: '09.20 - 10.00', subject: 'PRAKARYA' },
              { time: '10.00 - 10.40', subject: 'PRAKARYA' },
              { time: '10.40 - 11.10', subject: 'Istirahat' },
              { time: '11.10 - 11.50', subject: 'Proyek' },
              { time: '11.50 - 12.30', subject: 'Proyek' }
            ]
          }
        },
        {
          id: '8-2',
          name: 'Rombel 2',
          schedule: {
            'SENIN': [
              { time: '07.00 - 08.10', subject: 'Upacara Bendera' },
              { time: '08.10 - 08.50', subject: 'BAHASA INDONESIA' },
              { time: '08.50 - 09.30', subject: 'BAHASA INDONESIA' },
              { time: '09.30 - 10.10', subject: 'Mulok' },
              { time: '10.10 - 10.50', subject: 'IPS' },
              { time:  '10.50 - 11.40', subject: 'Istirahat' },
              { time: '11.40 - 12.20', subject: 'IPS' },
              { time:  '12.20 - 13.00', subject: 'IPS' },
              { time:  '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'SELASA': [
              { time:  '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time:  '07.30 - 08.10', subject: 'IPA' },
              { time: '08.10 - 08.50', subject: 'IPA' },
              { time:  '08.50 - 09.30', subject: 'PKN' },
              { time:  '09.30 - 10.10', subject: 'PKN' },
              { time:  '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'MATEMATIKA' },
              { time:  '11.40 - 12.20', subject: 'MATEMATIKA' },
              { time:  '12.20 - 13.00', subject: 'IPA' },
              { time:  '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'RABU': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'Mulok' },
              { time:  '08.10 - 08.50', subject: 'MATEMATIKA' },
              { time: '08.50 - 09.30', subject: 'PJOK' },
              { time: '09.30 - 10.10', subject: 'PJOK' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'PJOK' },
              { time: '11.40 - 12.20', subject: 'PRAKARYA' },
              { time: '12.20 - 13.00', subject: 'PRAKARYA' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'KAMIS': [
              { time:  '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time:  '07.30 - 08.10', subject: 'MATEMATIKA' },
              { time:  '08.10 - 08.50', subject: 'MATEMATIKA' },
              { time: '08.50 - 09.30', subject: 'IPA' },
              { time:  '09.30 - 10.10', subject: 'AGAMA' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'BAHASA INDONESIA' },
              { time: '11.40 - 12.20', subject: 'BAHASA INDONESIA' },
              { time: '12.20 - 13.00', subject: 'BAHASA INGGRIS' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'JUMAT':  [
              { time: '07.00 - 08.00', subject: 'Ibadah' },
              { time:  '08.00 - 08.40', subject: 'IPA' },
              { time:  '08.40 - 09.20', subject: 'IPA' },
              { time:  '09.20 - 10.00', subject: 'TIK' },
              { time: '10.00 - 10.40', subject: 'TIK' },
              { time: '10.40 - 11.10', subject: 'Istirahat' },
              { time: '11.10 - 11.50', subject: 'Proyek' },
              { time: '11.50 - 12.30', subject: 'Proyek' }
            ]
          }
        },
        {
          id:  '8-3',
          name: 'Rombel 3',
          schedule: {
            'SENIN': [
              { time: '07.00 - 08.10', subject: 'Upacara Bendera' },
              { time: '08.10 - 08.50', subject: 'MATEMATIKA' },
              { time:  '08.50 - 09.30', subject: 'MATEMATIKA' },
              { time:  '09.30 - 10.10', subject: 'IPA' },
              { time:  '10.10 - 10.50', subject: 'IPA' },
              { time:  '10.50 - 11.40', subject: 'Istirahat' },
              { time: '11.40 - 12.20', subject: 'PKN' },
              { time:  '12.20 - 13.00', subject: 'PKN' },
              { time:  '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'SELASA': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'BAHASA INDONESIA' },
              { time: '08.10 - 08.50', subject: 'BAHASA INDONESIA' },
              { time: '08.50 - 09.30', subject: 'MATEMATIKA' },
              { time:  '09.30 - 10.10', subject: 'MATEMATIKA' },
              { time:  '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'MATEMATIKA' },
              { time:  '11.40 - 12.20', subject: 'TIK' },
              { time: '12.20 - 13.00', subject: 'TIK' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'RABU': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'PJOK' },
              { time: '08.10 - 08.50', subject: 'PRAKARYA' },
              { time: '08.50 - 09.30', subject: 'IPA' },
              { time:  '09.30 - 10.10', subject: 'IPA' },
              { time:  '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'BAHASA INGGRIS' },
              { time: '11.40 - 12.20', subject: 'Mulok' },
              { time: '12.20 - 13.00', subject: 'IPS' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time:  '13.40 - 14.20', subject: 'Proyek' }
            ],
            'KAMIS': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'AGAMA' },
              { time:  '08.10 - 08.50', subject: 'Mulok' },
              { time:  '08.50 - 09.30', subject: 'AGAMA' },
              { time: '09.30 - 10.10', subject: 'Mulok' },
              { time:  '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'IPS' },
              { time: '11.40 - 12.20', subject: 'IPS' },
              { time:  '12.20 - 13.00', subject: 'BAHASA INGGRIS' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'JUMAT': [
              { time: '07.00 - 08.00', subject: 'Ibadah' },
              { time: '08.00 - 08.40', subject: 'TIK' },
              { time: '08.40 - 09.20', subject: 'TIK' },
              { time: '09.20 - 10.00', subject: 'Mulok' },
              { time:  '10.00 - 10.40', subject: 'Mulok' },
              { time:  '10.40 - 11.10', subject: 'Istirahat' },
              { time: '11.10 - 11.50', subject: 'Proyek' },
              { time: '11.50 - 12.30', subject: 'Proyek' }
            ]
          }
        }
      ]
    },
    '9':  {
      label: 'Kelas IX',
      rombels: [
        {
          id: '9-1',
          name:  'Rombel 1',
          schedule: {
            'SENIN': [
              { time: '07.00 - 08.10', subject: 'Upacara Bendera' },
              { time:  '08.10 - 08.50', subject: 'MATEMATIKA' },
              { time: '08.50 - 09.30', subject: 'MATEMATIKA' },
              { time: '09.30 - 10.10', subject: 'TIK' },
              { time: '10.10 - 10.50', subject: 'TIK' },
              { time: '10.50 - 11.40', subject: 'Istirahat' },
              { time: '11.40 - 12.20', subject: 'PJOK' },
              { time: '12.20 - 13.00', subject: 'PJOK' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'SELASA': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'MATEMATIKA' },
              { time:  '08.10 - 08.50', subject: 'MATEMATIKA' },
              { time: '08.50 - 09.30', subject: 'PJOK' },
              { time: '09.30 - 10.10', subject: 'TIK' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'BAHASA INGGRIS' },
              { time: '11.40 - 12.20', subject: 'BAHASA INGGRIS' },
              { time: '12.20 - 13.00', subject: 'IPS' },
              { time:  '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'RABU': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'PKN' },
              { time:  '08.10 - 08.50', subject: 'PKN' },
              { time:  '08.50 - 09.30', subject: 'TIK' },
              { time: '09.30 - 10.10', subject: 'TIK' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'IPA' },
              { time: '11.40 - 12.20', subject: 'IPA' },
              { time: '12.20 - 13.00', subject: 'BAHASA INDONESIA' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'KAMIS': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'MATEMATIKA' },
              { time:  '08.10 - 08.50', subject: 'MATEMATIKA' },
              { time: '08.50 - 09.30', subject: 'IPA' },
              { time: '09.30 - 10.10', subject: 'IPA' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'MATEMATIKA' },
              { time:  '11.40 - 12.20', subject: 'BAHASA INGGRIS' },
              { time: '12.20 - 13.00', subject: 'Mulok' },
              { time:  '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'JUMAT': [
              { time: '07.00 - 08.00', subject: 'Ibadah' },
              { time: '08.00 - 08.40', subject: 'AGAMA' },
              { time:  '08.40 - 09.20', subject: 'AGAMA' },
              { time: '09.20 - 10.00', subject: 'PJOK' },
              { time: '10.00 - 10.40', subject: 'PJOK' },
              { time: '10.40 - 11.10', subject: 'Istirahat' },
              { time: '11.10 - 11.50', subject: 'Proyek' },
              { time: '11.50 - 12.30', subject: 'Proyek' }
            ]
          }
        },
        {
          id: '9-2',
          name:  'Rombel 2',
          schedule: {
            'SENIN': [
              { time: '07.00 - 08.10', subject: 'Upacara Bendera' },
              { time:  '08.10 - 08.50', subject: 'IPA' },
              { time:  '08.50 - 09.30', subject: 'IPA' },
              { time:  '09.30 - 10.10', subject: 'PKN' },
              { time:  '10.10 - 10.50', subject: 'PKN' },
              { time:  '10.50 - 11.40', subject: 'Istirahat' },
              { time: '11.40 - 12.20', subject: 'MATEMATIKA' },
              { time:  '12.20 - 13.00', subject: 'MATEMATIKA' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'SELASA':  [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'IPA' },
              { time:  '08.10 - 08.50', subject: 'IPA' },
              { time:  '08.50 - 09.30', subject: 'BAHASA INDONESIA' },
              { time: '09.30 - 10.10', subject: 'BAHASA INDONESIA' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'Mulok' },
              { time:  '11.40 - 12.20', subject: 'MATEMATIKA' },
              { time:  '12.20 - 13.00', subject: 'MATEMATIKA' },
              { time:  '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'RABU': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'BAHASA INDONESIA' },
              { time: '08.10 - 08.50', subject: 'BAHASA INDONESIA' },
              { time: '08.50 - 09.30', subject: 'PRAKARYA' },
              { time: '09.30 - 10.10', subject: 'PRAKARYA' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'PRAKARYA' },
              { time: '11.40 - 12.20', subject: 'PKN' },
              { time:  '12.20 - 13.00', subject: 'PKN' },
              { time:  '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'KAMIS': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'MATEMATIKA' },
              { time:  '08.10 - 08.50', subject: 'MATEMATIKA' },
              { time: '08.50 - 09.30', subject: 'BAHASA INDONESIA' },
              { time: '09.30 - 10.10', subject: 'BAHASA INDONESIA' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time:  '11.00 - 11.40', subject: 'BAHASA INGGRIS' },
              { time: '11.40 - 12.20', subject: 'BAHASA INGGRIS' },
              { time: '12.20 - 13.00', subject: 'IPS' },
              { time:  '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'JUMAT': [
              { time: '07.00 - 08.00', subject: 'Ibadah' },
              { time: '08.00 - 08.40', subject: 'AGAMA' },
              { time:  '08.40 - 09.20', subject: 'AGAMA' },
              { time: '09.20 - 10.00', subject: 'PJOK' },
              { time: '10.00 - 10.40', subject: 'PJOK' },
              { time: '10.40 - 11.10', subject: 'Istirahat' },
              { time: '11.10 - 11.50', subject: 'Proyek' },
              { time:  '11.50 - 12.30', subject: 'Proyek' }
            ]
          }
        },
        {
          id: '9-3',
          name:  'Rombel 3',
          schedule: {
            'SENIN': [
              { time: '07.00 - 08.10', subject: 'Upacara Bendera' },
              { time:  '08.10 - 08.50', subject: 'PKN' },
              { time:  '08.50 - 09.30', subject: 'PKN' },
              { time:  '09.30 - 10.10', subject: 'AGAMA' },
              { time:  '10.10 - 10.50', subject: 'AGAMA' },
              { time: '10.50 - 11.40', subject: 'Istirahat' },
              { time: '11.40 - 12.20', subject: 'PRAKARYA' },
              { time: '12.20 - 13.00', subject: 'PRAKARYA' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'SELASA': [
              { time:  '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time:  '07.30 - 08.10', subject: 'AGAMA' },
              { time:  '08.10 - 08.50', subject: 'AGAMA' },
              { time: '08.50 - 09.30', subject: 'IPA' },
              { time: '09.30 - 10.10', subject: 'IPA' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'IPA' },
              { time:  '11.40 - 12.20', subject: 'BAHASA INDONESIA' },
              { time: '12.20 - 13.00', subject: 'BAHASA INDONESIA' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'RABU': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'IPA' },
              { time:  '08.10 - 08.50', subject: 'IPA' },
              { time:  '08.50 - 09.30', subject: 'PKN' },
              { time:  '09.30 - 10.10', subject: 'PKN' },
              { time:  '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'Mulok' },
              { time: '11.40 - 12.20', subject: 'TIK' },
              { time: '12.20 - 13.00', subject: 'TIK' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'KAMIS': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'IPA' },
              { time:  '08.10 - 08.50', subject: 'IPA' },
              { time:  '08.50 - 09.30', subject: 'Mulok' },
              { time:  '09.30 - 10.10', subject: 'Mulok' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'BAHASA INGGRIS' },
              { time: '11.40 - 12.20', subject: 'BAHASA INGGRIS' },
              { time: '12.20 - 13.00', subject: 'IPS' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'JUMAT': [
              { time: '07.00 - 08.00', subject: 'Ibadah' },
              { time: '08.00 - 08.40', subject: 'BAHASA INDONESIA' },
              { time: '08.40 - 09.20', subject: 'BAHASA INDONESIA' },
              { time: '09.20 - 10.00', subject: 'IPA' },
              { time: '10.00 - 10.40', subject: 'IPA' },
              { time: '10.40 - 11.10', subject: 'Istirahat' },
              { time: '11.10 - 11.50', subject: 'Proyek' },
              { time: '11.50 - 12.30', subject: 'Proyek' }
            ]
          }
        }
      ]
    }
  };

  // ========== FUN FACTS DATA ==========
  const FUN_FACTS = [
    {
      title: '📊 Jumlah Guru Per Mata Pelajaran',
      items: [
        'Pendidikan Agama:  9 guru (3 Kristen, 3 Islam, 2 Katolik, 1 tidak spesifik)',
        'PKn: 5 guru',
        'Bahasa Indonesia:  10 guru',
        'Matematika: 8 guru',
        'Bahasa Inggris: 8 guru',
        'IPA: 7 guru',
        'IPS: 6 guru',
        'PJOK: 7 guru',
        'Prakarya/Seni Budaya: 5 guru',
        'TIK: 4 guru'
      ]
    },
    {
      title:  '👥 Perbandingan Gender',
      items: [
        'Guru Perempuan:  Sekitar 85% (~55 dari 65)',
        'Guru Laki-laki: Sekitar 15% (~10 dari 65)',
        'Mayoritas guru adalah perempuan dengan dedikasi tinggi'
      ]
    },
    {
      title: '🎓 Guru dengan Gelar Akademik Tertinggi',
      items: [
        'John Wuisan, M. Th (Magister Theologi)',
        'Sicilia Ledy S Sambur, M. Pd (Magister Pendidikan)',
        'Hesty M.  Lontoh, S. Pd, M. Pd',
        'Marjeine Dalonto, M.Pd'
      ]
    },
    {
      title: '⏰ Jam Mengajar Terbanyak',
      items:  [
        'Abdul Wahid, S.Pd. I (Agama Islam): 36 JP',
        'Nita A. Modali, S.Kom (TIK): 42 JP',
        'Christi Tumangkeng, S.Pd (TIK): 42 JP',
        'Guru TIK memiliki beban jam tertinggi'
      ]
    }
  ];

  // ========== STATE ==========
  const state = {
    currentScreen: 'main',
    selectedGrade: null,
    selectedRombel: null,
    selectedDay: null
  };

  // ========== DOM ELEMENTS ==========
  const DOM = {
    screenMain: document.getElementById('screenMain'),
    screenGrade: document.getElementById('screenGrade'),
    screenRombel: document.getElementById('screenRombel'),
    screenDay: document. getElementById('screenDay'),
    screenSchedule: document.getElementById('screenSchedule'),
    
    gradeGrid: document.getElementById('gradeGrid'),
    rombelGrid: document.getElementById('rombelGrid'),
    dayGrid: document.getElementById('dayGrid'),
    scheduleList: document.getElementById('scheduleList'),
    
    dateDisplay: document.getElementById('dateDisplay'),
    panelFunFacts: document.getElementById('panelFunFacts'),
    factsGrid: document.getElementById('factsGrid'),
    
    btnBackGrade: document.getElementById('btnBackGrade'),
    btnBackRombel: document.getElementById('btnBackRombel'),
    btnBackDay: document.getElementById('btnBackDay'),
    btnOpenFacts: document.getElementById('btnOpenFacts'),
    btnCloseFacts: document.getElementById('btnCloseFacts')
  };

  // ========== UTILITY FUNCTIONS ==========
  function formatDate() {
    const now = new Date();
    const day = DAYS_ID[now.getDay()];
    const date = now.getDate();
    const month = MONTHS[now.getMonth()];
    const year = now.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  }

  function switchScreen(screenElement) {
    document.querySelectorAll('.screen').forEach(el => {
      el.classList.remove('active');
    });
    if (screenElement) {
      screenElement.classList. add('active');
    }
  }

  function createLevelCard(grade) {
    const card = document.createElement('button');
    card.className = 'level-card';
    card.innerHTML = `
      <div class="level-card__number">Kelas ${grade}</div>
      <div class="level-card__label">${SCHEDULE_DATA[grade].label}</div>
    `;
    card.addEventListener('click', () => showRombels(grade));
    return card;
  }

  function createRombelCard(rombel) {
    const card = document.createElement('button');
    card.className = 'rombel-card';
    card.innerHTML = `
      <h4>${rombel.name}</h4>
      <p>Lihat jadwal lengkap</p>
    `;
    card.addEventListener('click', () => showDays(rombel));
    return card;
  }

  function createDayButton(day) {
    const btn = document.createElement('button');
    btn.className = 'day-btn';
    btn.textContent = day;
    btn.addEventListener('click', () => showSchedule(day));
    return btn;
  }

  function createScheduleItem(item) {
    const div = document.createElement('div');
    div.className = 'schedule-item';
    div.innerHTML = `
      <div class="schedule-time">${item.time}</div>
      <div>
        <div class="schedule-subject">${item.subject}</div>
      </div>
    `;
    return div;
  }

  function createFactCard(fact) {
    const card = document.createElement('div');
    card.className = 'fact-card';
    card.innerHTML = `
      <h4>${fact.title}</h4>
      <ul>
        ${fact.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
    return card;
  }

  // ========== SCREEN FUNCTIONS ==========
  function showGrades() {
    state.currentScreen = 'grade';
    DOM.gradeGrid.innerHTML = '';
    
    ['7', '8', '9']. forEach(grade => {
      DOM.gradeGrid.appendChild(createLevelCard(grade));
    });
    
    switchScreen(DOM.screenGrade);
  }

  function showRombels(grade) {
    state.selectedGrade = grade;
    state.currentScreen = 'rombel';
    DOM.rombelGrid.innerHTML = '';
    
    const rombels = SCHEDULE_DATA[grade].rombels;
    rombels.forEach(rombel => {
      DOM.rombelGrid.appendChild(createRombelCard(rombel));
    });
    
    switchScreen(DOM.screenRombel);
  }

  function showDays(rombel) {
    state.selectedRombel = rombel;
    state. currentScreen = 'day';
    DOM.dayGrid.innerHTML = '';
    
    DAYS. forEach(day => {
      DOM.dayGrid.appendChild(createDayButton(day));
    });
    
    switchScreen(DOM.screenDay);
  }

  function showSchedule(day) {
    state.selectedDay = day;
    state.currentScreen = 'schedule';
    DOM.scheduleList.innerHTML = '';
    
    const schedule = state.selectedRombel. schedule[day] || [];
    
    schedule.forEach(item => {
      DOM.scheduleList. appendChild(createScheduleItem(item));
    });
    
    switchScreen(DOM.screenSchedule);
  }

  function showFunFacts() {
    DOM.factsGrid.innerHTML = '';
    FUN_FACTS.forEach(fact => {
      DOM.factsGrid.appendChild(createFactCard(fact));
    });
    DOM.panelFunFacts. classList.add('active');
  }

  function closeFunFacts() {
    DOM.panelFunFacts.classList. remove('active');
  }

  // ========== EVENT LISTENERS ==========
  function setupEventListeners() {
    DOM.btnBackGrade.addEventListener('click', () => switchScreen(DOM.screenMain));
    DOM.btnBackRombel.addEventListener('click', showGrades);
    DOM.btnBackDay.addEventListener('click', showRombels. bind(null, state.selectedGrade));
    DOM.btnOpenFacts.addEventListener('click', showFunFacts);
    DOM.btnCloseFacts.addEventListener('click', closeFunFacts);
    
    // Close panel ketika klik di luar
    DOM.panelFunFacts.addEventListener('click', (e) => {
      if (e.target === DOM.panelFunFacts) {
        closeFunFacts();
      }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeFunFacts();
      }
    });
  }

  // ========== INITIALIZATION ==========
  function init() {
    DOM.dateDisplay.textContent = formatDate();
    setupEventListeners();
    switchScreen(DOM.screenMain);
  }

  // Start app when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
