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
    '7': {
      label: 'Kelas VII',
      rombels: [
        {
          id: '7-1',
          name: 'Rombel 1',
          schedule: {
            'SENIN': [
              { time: '07.00 - 08.10', subject: 'Upacara Bendera' },
              { time: '08.10 - 08.50', subject: 'Matematika' },
              { time: '08.50 - 09.30', subject: 'Matematika' },
              { time: '09.30 - 10.10', subject: 'Agama' },
              { time: '10.10 - 10.50', subject: 'Agama' },
              { time: '10.50 - 11.40', subject: 'Istirahat' },
              { time: '11.40 - 12.20', subject: 'Prakarya' },
              { time: '12.20 - 13.00', subject: 'Prakarya' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'SELASA': [
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
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'RABU': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'Mulok' },
              { time: '08.10 - 08.50', subject: 'TIK' },
              { time: '08.50 - 09.30', subject: 'TIK' },
              { time: '09.30 - 10.10', subject: 'IPA' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'IPA' },
              { time: '11.40 - 12.20', subject: 'Bahasa Indonesia' },
              { time: '12.20 - 13.00', subject: 'Bahasa Indonesia' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'KAMIS': [
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
              { time: '10.40 - 11.10', subject: 'Istirahat' },
              { time: '11.10 - 11.50', subject: 'Proyek' },
              { time: '11.50 - 12.30', subject: 'Proyek' },
            ],
          }
        },
        {
          id: '7-2',
          name: 'Rombel 2',
          schedule: {
            'SENIN': [
              { time: '07.00 - 08.10', subject: 'Upacara Bendera' },
              { time: '08.10 - 08.50', subject: 'Mulok' },
              { time: '08.50 - 09.30', subject: 'Bahasa Indonesia' },
              { time: '09.30 - 10.10', subject: 'Bahasa Indonesia' },
              { time: '10.10 - 10.50', subject: 'Bahasa Indonesia' },
              { time: '10.50 - 11.40', subject: 'Istirahat' },
              { time: '11.40 - 12.20', subject: 'IPA' },
              { time: '12.20 - 13.00', subject: 'IPA' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'SELASA': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'Bahasa Indonesia' },
              { time: '08.10 - 08.50', subject: 'Bahasa Indonesia' },
              { time: '08.50 - 09.30', subject: 'Matematika' },
              { time: '09.30 - 10.10', subject: 'Matematika' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'Bahasa Inggris' },
              { time: '11.40 - 12.20', subject: 'Bahasa Inggris' },
              { time: '12.20 - 13.00', subject: 'PKn' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'RABU': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'PKn' },
              { time: '08.10 - 08.50', subject: 'PKn' },
              { time: '08.50 - 09.30', subject: 'Matematika' },
              { time: '09.30 - 10.10', subject: 'Matematika' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'Agama' },
              { time: '11.40 - 12.20', subject: 'Agama' },
              { time: '12.20 - 13.00', subject: 'Mulok' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'KAMIS': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'IPS' },
              { time: '08.10 - 08.50', subject: 'IPS' },
              { time: '08.50 - 09.30', subject: 'IPS' },
              { time: '09.30 - 10.10', subject: 'Matematika' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'Matematika' },
              { time: '11.40 - 12.20', subject: 'PJOK' },
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
              { time: '12.20 - 13.00', subject: 'Matematika' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'SELASA': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'Agama' },
              { time: '08.10 - 08.50', subject: 'Agama' },
              { time: '08.50 - 09.30', subject: 'Bahasa Indonesia' },
              { time: '09.30 - 10.10', subject: 'Bahasa Indonesia' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'Bahasa Indonesia' },
              { time: '11.40 - 12.20', subject: 'PKn' },
              { time: '12.20 - 13.00', subject: 'PKn' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
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
              { time: '11.40 - 12.20', subject: 'IPA' },
              { time: '12.20 - 13.00', subject: 'IPA' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' },
            ],
            'KAMIS': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'IPS' },
              { time: '08.10 - 08.50', subject: 'IPS' },
              { time: '08.50 - 09.30', subject: 'IPS' },
              { time: '09.30 - 10.10', subject: 'Matematika' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'Matematika' },
              { time: '11.40 - 12.20', subject: 'PJOK' },
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
    '8': {
      label: 'Kelas VIII',
      rombels: [
        {
          id: '8-1',
          name: 'Rombel 1',
          schedule: {
            'SENIN': [
              { time: '07.00 - 08.10', subject: 'Upacara Bendera' },
              { time: '08.10 - 08.50', subject: 'IPA' },
              { time: '08.50 - 09.30', subject: 'IPA' },
              { time: '09.30 - 10.10', subject: 'PKN' },
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
              { time: '12.20 - 13.00', subject: 'MATEMATIKA' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'RABU': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'MATEMATIKA' },
              { time: '08.10 - 08.50', subject: 'MATEMATIKA' },
              { time: '08.50 - 09.30', subject: 'AGAMA' },
              { time: '09.30 - 10.10', subject: 'AGAMA' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'BAHASA INDONESIA' },
              { time: '11.40 - 12.20', subject: 'PRAKARYA' },
              { time: '12.20 - 13.00', subject: 'PRAKARYA' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'KAMIS': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'Mulok' },
              { time: '08.10 - 08.50', subject: 'MATEMATIKA' },
              { time: '08.50 - 09.30', subject: 'AGAMA' },
              { time: '09.30 - 10.10', subject: 'Mulok' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'BAHASA INGGRIS' },
              { time: '11.40 - 12.20', subject: 'BAHASA INDONESIA' },
              { time: '12.20 - 13.00', subject: 'IPS' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
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
              { time: '10.50 - 11.40', subject: 'Istirahat' },
              { time: '11.40 - 12.20', subject: 'IPS' },
              { time: '12.20 - 13.00', subject: 'IPS' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'SELASA': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'IPA' },
              { time: '08.10 - 08.50', subject: 'IPA' },
              { time: '08.50 - 09.30', subject: 'PKN' },
              { time: '09.30 - 10.10', subject: 'PKN' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'MATEMATIKA' },
              { time: '11.40 - 12.20', subject: 'MATEMATIKA' },
              { time: '12.20 - 13.00', subject: 'IPA' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'RABU': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'Mulok' },
              { time: '08.10 - 08.50', subject: 'MATEMATIKA' },
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
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'MATEMATIKA' },
              { time: '08.10 - 08.50', subject: 'MATEMATIKA' },
              { time: '08.50 - 09.30', subject: 'IPA' },
              { time: '09.30 - 10.10', subject: 'AGAMA' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'BAHASA INDONESIA' },
              { time: '11.40 - 12.20', subject: 'BAHASA INDONESIA' },
              { time: '12.20 - 13.00', subject: 'BAHASA INGGRIS' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'JUMAT': [
              { time: '07.00 - 08.00', subject: 'Ibadah' },
              { time: '08.00 - 08.40', subject: 'IPA' },
              { time: '08.40 - 09.20', subject: 'IPA' },
              { time: '09.20 - 10.00', subject: 'TIK' },
              { time: '10.00 - 10.40', subject: 'TIK' },
              { time: '10.40 - 11.10', subject: 'Istirahat' },
              { time: '11.10 - 11.50', subject: 'Proyek' },
              { time: '11.50 - 12.30', subject: 'Proyek' }
            ]
          }
        },
        {
          id: '8-3',
          name: 'Rombel 3',
          schedule: {
            'SENIN': [
              { time: '07.00 - 08.10', subject: 'Upacara Bendera' },
              { time: '08.10 - 08.50', subject: 'MATEMATIKA' },
              { time: '08.50 - 09.30', subject: 'MATEMATIKA' },
              { time: '09.30 - 10.10', subject: 'IPA' },
              { time: '10.10 - 10.50', subject: 'IPA' },
              { time: '10.50 - 11.40', subject: 'Istirahat' },
              { time: '11.40 - 12.20', subject: 'PKN' },
              { time: '12.20 - 13.00', subject: 'PKN' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'SELASA': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'BAHASA INDONESIA' },
              { time: '08.10 - 08.50', subject: 'BAHASA INDONESIA' },
              { time: '08.50 - 09.30', subject: 'MATEMATIKA' },
              { time: '09.30 - 10.10', subject: 'MATEMATIKA' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'MATEMATIKA' },
              { time: '11.40 - 12.20', subject: 'TIK' },
              { time: '12.20 - 13.00', subject: 'TIK' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'RABU': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'PJOK' },
              { time: '08.10 - 08.50', subject: 'PRAKARYA' },
              { time: '08.50 - 09.30', subject: 'IPA' },
              { time: '09.30 - 10.10', subject: 'IPA' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'BAHASA INGGRIS' },
              { time: '11.40 - 12.20', subject: 'Mulok' },
              { time: '12.20 - 13.00', subject: 'IPS' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'KAMIS': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'AGAMA' },
              { time: '08.10 - 08.50', subject: 'Mulok' },
              { time: '08.50 - 09.30', subject: 'AGAMA' },
              { time: '09.30 - 10.10', subject: 'Mulok' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'IPS' },
              { time: '11.40 - 12.20', subject: 'IPS' },
              { time: '12.20 - 13.00', subject: 'BAHASA INGGRIS' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'JUMAT': [
              { time: '07.00 - 08.00', subject: 'Ibadah' },
              { time: '08.00 - 08.40', subject: 'TIK' },
              { time: '08.40 - 09.20', subject: 'TIK' },
              { time: '09.20 - 10.00', subject: 'Mulok' },
              { time: '10.00 - 10.40', subject: 'Mulok' },
              { time: '10.40 - 11.10', subject: 'Istirahat' },
              { time: '11.10 - 11.50', subject: 'Proyek' },
              { time: '11.50 - 12.30', subject: 'Proyek' }
            ]
          }
        }
      ]
    },
    '9': {
      label: 'Kelas IX',
      rombels: [
        {
          id: '9-1',
          name: 'Rombel 1',
          schedule: {
            'SENIN': [
              { time: '07.00 - 08.10', subject: 'Upacara Bendera' },
              { time: '08.10 - 08.50', subject: 'MATEMATIKA' },
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
              { time: '08.10 - 08.50', subject: 'MATEMATIKA' },
              { time: '08.50 - 09.30', subject: 'PJOK' },
              { time: '09.30 - 10.10', subject: 'TIK' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'BAHASA INGGRIS' },
              { time: '11.40 - 12.20', subject: 'BAHASA INGGRIS' },
              { time: '12.20 - 13.00', subject: 'IPS' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'RABU': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'PKN' },
              { time: '08.10 - 08.50', subject: 'PKN' },
              { time: '08.50 - 09.30', subject: 'TIK' },
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
              { time: '08.10 - 08.50', subject: 'MATEMATIKA' },
              { time: '08.50 - 09.30', subject: 'IPA' },
              { time: '09.30 - 10.10', subject: 'IPA' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'MATEMATIKA' },
              { time: '11.40 - 12.20', subject: 'BAHASA INGGRIS' },
              { time: '12.20 - 13.00', subject: 'Mulok' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'JUMAT': [
              { time: '07.00 - 08.00', subject: 'Ibadah' },
              { time: '08.00 - 08.40', subject: 'AGAMA' },
              { time: '08.40 - 09.20', subject: 'AGAMA' },
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
          name: 'Rombel 2',
          schedule: {
            'SENIN': [
              { time: '07.00 - 08.10', subject: 'Upacara Bendera' },
              { time: '08.10 - 08.50', subject: 'IPA' },
              { time: '08.50 - 09.30', subject: 'IPA' },
              { time: '09.30 - 10.10', subject: 'PKN' },
              { time: '10.10 - 10.50', subject: 'PKN' },
              { time: '10.50 - 11.40', subject: 'Istirahat' },
              { time: '11.40 - 12.20', subject: 'MATEMATIKA' },
              { time: '12.20 - 13.00', subject: 'MATEMATIKA' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'SELASA': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'IPA' },
              { time: '08.10 - 08.50', subject: 'IPA' },
              { time: '08.50 - 09.30', subject: 'BAHASA INDONESIA' },
              { time: '09.30 - 10.10', subject: 'BAHASA INDONESIA' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'Mulok' },
              { time: '11.40 - 12.20', subject: 'MATEMATIKA' },
              { time: '12.20 - 13.00', subject: 'MATEMATIKA' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
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
              { time: '12.20 - 13.00', subject: 'PKN' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'KAMIS': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'MATEMATIKA' },
              { time: '08.10 - 08.50', subject: 'MATEMATIKA' },
              { time: '08.50 - 09.30', subject: 'BAHASA INDONESIA' },
              { time: '09.30 - 10.10', subject: 'BAHASA INDONESIA' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'BAHASA INGGRIS' },
              { time: '11.40 - 12.20', subject: 'BAHASA INGGRIS' },
              { time: '12.20 - 13.00', subject: 'IPS' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'JUMAT': [
              { time: '07.00 - 08.00', subject: 'Ibadah' },
              { time: '08.00 - 08.40', subject: 'AGAMA' },
              { time: '08.40 - 09.20', subject: 'AGAMA' },
              { time: '09.20 - 10.00', subject: 'PJOK' },
              { time: '10.00 - 10.40', subject: 'PJOK' },
              { time: '10.40 - 11.10', subject: 'Istirahat' },
              { time: '11.10 - 11.50', subject: 'Proyek' },
              { time: '11.50 - 12.30', subject: 'Proyek' }
            ]
          }
        },
        {
          id: '9-3',
          name: 'Rombel 3',
          schedule: {
            'SENIN': [
              { time: '07.00 - 08.10', subject: 'Upacara Bendera' },
              { time: '08.10 - 08.50', subject: 'PKN' },
              { time: '08.50 - 09.30', subject: 'PKN' },
              { time: '09.30 - 10.10', subject: 'AGAMA' },
              { time: '10.10 - 10.50', subject: 'AGAMA' },
              { time: '10.50 - 11.40', subject: 'Istirahat' },
              { time: '11.40 - 12.20', subject: 'PRAKARYA' },
              { time: '12.20 - 13.00', subject: 'PRAKARYA' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'SELASA': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'AGAMA' },
              { time: '08.10 - 08.50', subject: 'AGAMA' },
              { time: '08.50 - 09.30', subject: 'IPA' },
              { time: '09.30 - 10.10', subject: 'IPA' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'IPA' },
              { time: '11.40 - 12.20', subject: 'BAHASA INDONESIA' },
              { time: '12.20 - 13.00', subject: 'BAHASA INDONESIA' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'RABU': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'IPA' },
              { time: '08.10 - 08.50', subject: 'IPA' },
              { time: '08.50 - 09.30', subject: 'PKN' },
              { time: '09.30 - 10.10', subject: 'PKN' },
              { time: '10.10 - 11.00', subject: 'Istirahat' },
              { time: '11.00 - 11.40', subject: 'Mulok' },
              { time: '11.40 - 12.20', subject: 'TIK' },
              { time: '12.20 - 13.00', subject: 'TIK' },
              { time: '13.00 - 13.40', subject: 'Proyek' },
              { time: '13.40 - 14.20', subject: 'Proyek' }
            ],
            'KAMIS': [
              { time: '07.00 - 07.30', subject: 'Apel/Literasi Kelas' },
              { time: '07.30 - 08.10', subject: 'IPA' },
              { time: '08.10 - 08.50', subject: 'IPA' },
              { time: '08.50 - 09.30', subject: 'Mulok' },
              { time: '09.30 - 10.10', subject: 'Mulok' },
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
        'Pendidikan Agama: 9 guru (3 Kristen, 3 Islam, 2 Katolik, 1 tidak spesifik)',
        'PKn: 5 guru',
        'Bahasa Indonesia: 10 guru',
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
      title: '👥 Perbandingan Gender',
      items: [
        'Guru Perempuan: Sekitar 85% (~55 dari 65)',
        'Guru Laki-laki: Sekitar 15% (~10 dari 65)',
        'Mayoritas guru adalah perempuan dengan dedikasi tinggi'
      ]
    },
    {
      title: '🎓 Guru dengan Gelar Akademik Tertinggi',
      items: [
        'John Wuisan, M. Th (Magister Theologi)',
        'Sicilia Ledy S Sambur, M. Pd (Magister Pendidikan)',
        'Hesty M. Lontoh, S. Pd, M. Pd',
        'Marjeine Dalonto, M.Pd'
      ]
    },
    {
      title: '⏰ Jam Mengajar Terbanyak',
      items: [
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
    // Screens
    screenMain: document.getElementById('screenMain'),
    screenGrade: document.getElementById('screenGrade'),
    screenRombel: document.getElementById('screenRombel'),
    screenDay: document.getElementById('screenDay'),
    
    // Grids and lists
    gradeGrid: document.getElementById('gradeGrid'),
    rombelGrid: document.getElementById('rombelGrid'),
    scheduleList: document.getElementById('scheduleList'),
    
    // Date display
    dateDisplay: document.getElementById('dateDisplay'),
    
    // Fun Facts panel
    panelFunFacts: document.getElementById('panelFunFacts'),
    factsGrid: document.getElementById('factsGrid'),
    
    // Buttons
    btnBackGrade: document.getElementById('btnBackGrade'),
    btnBackRombel: document.getElementById('btnBackRombel'),
    btnBackDay: document.getElementById('btnBackDay'),
    btnOpenFacts: document.getElementById('btnOpenFacts'),
    btnCloseFacts: document.getElementById('btnCloseFacts'),
    themeToggle: document.getElementById('themeToggle')
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

  function switchScreen(screenId) {
    // Hide all screens
    [DOM.screenMain, DOM.screenGrade, DOM.screenRombel, DOM.screenDay].forEach(screen => {
      screen.classList.remove('active');
    });
    
    // Show the selected screen
    if (screenId === 'main') DOM.screenMain.classList.add('active');
    if (screenId === 'grade') DOM.screenGrade.classList.add('active');
    if (screenId === 'rombel') DOM.screenRombel.classList.add('active');
    if (screenId === 'day') DOM.screenDay.classList.add('active');
    
    // Update state
    state.currentScreen = screenId;
  }

  function createRombelCard(rombel) {
    const card = document.createElement('button');
    card.className = 'rombel-card';
    card.innerHTML = `
      <h4>${rombel.name}</h4>
      <p>Lihat jadwal lengkap</p>
    `;
    card.addEventListener('click', () => {
      state.selectedRombel = rombel;
      showDays();
    });
    return card;
  }

  function createDayButton(day) {
    const btn = document.createElement('button');
    btn.className = 'day-btn';
    btn.textContent = day.charAt(0) + day.slice(1).toLowerCase();
    btn.dataset.day = day;
    btn.addEventListener('click', () => {
      state.selectedDay = day;
      showSchedule();
    });
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

  function showRombels(grade) {
    state.selectedGrade = grade;
    state.selectedRombel = null;
    
    // Update title
    const gradeTitle = document.getElementById('gradeTitle');
    if (gradeTitle) {
      gradeTitle.textContent = `Pilih Rombel - ${SCHEDULE_DATA[grade].label}`;
    }
    
    // Clear and populate rombel grid
    DOM.gradeGrid.innerHTML = '';
    SCHEDULE_DATA[grade].rombels.forEach(rombel => {
      DOM.gradeGrid.appendChild(createRombelCard(rombel));
    });
    
    switchScreen('grade');
  }

  function showDays() {
    // Update title
    const rombelTitle = document.getElementById('rombelTitle');
    if (rombelTitle) {
      rombelTitle.textContent = `Pilih Hari - ${state.selectedRombel.name}`;
    }
    
    // Clear and populate day grid
    DOM.rombelGrid.innerHTML = '';
    DAYS.forEach(day => {
      DOM.rombelGrid.appendChild(createDayButton(day));
    });
    
    switchScreen('rombel');
  }

  function showSchedule() {
    // Update title
    const dayTitle = document.getElementById('dayTitle');
    if (dayTitle) {
      const dayName = state.selectedDay.charAt(0) + state.selectedDay.slice(1).toLowerCase();
      dayTitle.textContent = `Jadwal ${dayName} - ${state.selectedRombel.name}`;
    }
    
    // Clear and populate schedule list
    DOM.scheduleList.innerHTML = '';
    
    const schedule = state.selectedRombel.schedule[state.selectedDay];
    if (schedule && schedule.length > 0) {
      schedule.forEach(item => {
        DOM.scheduleList.appendChild(createScheduleItem(item));
      });
    } else {
      const emptyMsg = document.createElement('div');
      emptyMsg.className = 'schedule-item';
      emptyMsg.innerHTML = `
        <div class="schedule-time">-</div>
        <div>
          <div class="schedule-subject">Tidak ada jadwal untuk hari ini</div>
        </div>
      `;
      DOM.scheduleList.appendChild(emptyMsg);
    }
    
    switchScreen('day');
  }

  function showFunFacts() {
    DOM.factsGrid.innerHTML = '';
    FUN_FACTS.forEach(fact => {
      DOM.factsGrid.appendChild(createFactCard(fact));
    });
    DOM.panelFunFacts.classList.add('active');
  }

  function closeFunFacts() {
    DOM.panelFunFacts.classList.remove('active');
  }

  function toggleTheme() {
    const body = document.body;
    const icon = DOM.themeToggle.querySelector('i');
    
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      DOM.themeToggle.setAttribute('aria-pressed', 'false');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      DOM.themeToggle.setAttribute('aria-pressed', 'true');
      localStorage.setItem('theme', 'dark');
    }
  }

  // ========== EVENT LISTENERS ==========
  function setupEventListeners() {
    // Level cards (Kelas VII, VIII, IX)
    document.querySelectorAll('.level-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const grade = e.currentTarget.dataset.grade;
        showRombels(grade);
      });
    });
    
    // Back buttons
    DOM.btnBackGrade.addEventListener('click', () => switchScreen('main'));
    DOM.btnBackRombel.addEventListener('click', () => {
      if (state.selectedGrade) {
        showRombels(state.selectedGrade);
      }
    });
    DOM.btnBackDay.addEventListener('click', () => {
      if (state.selectedRombel) {
        showDays();
      }
    });
    
    // Fun Facts
    DOM.btnOpenFacts.addEventListener('click', showFunFacts);
    DOM.btnCloseFacts.addEventListener('click', closeFunFacts);
    
    // Theme toggle
    DOM.themeToggle.addEventListener('click', toggleTheme);
    
    // Close panel when clicking outside
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
    // Set current date
    DOM.dateDisplay.textContent = formatDate();
    
    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      const icon = DOM.themeToggle.querySelector('i');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      DOM.themeToggle.setAttribute('aria-pressed', 'true');
    } else {
      document.body.classList.add('light-theme');
      DOM.themeToggle.setAttribute('aria-pressed', 'false');
    }
    
    // Setup event listeners
    setupEventListeners();
    
    // Show main screen
    switchScreen('main');
  }

  // Start app when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
