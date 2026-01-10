import { useMemo } from 'react';

interface MainMenuProps {
  onSelectClass: (classNum: string) => void;
  onShowFunFacts: () => void;
}

const MainMenu = ({ onSelectClass, onShowFunFacts }: MainMenuProps) => {
  const currentDate = useMemo(() => {
    const date = new Date();
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                   'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    return `${date.getFullYear()}, ${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
  }, []);

  const classes = [
    { num: '7', label: 'Kelas 7', roman: 'VII', className: 'class-btn-7' },
    { num: '8', label: 'Kelas 8', roman: 'VIII', className: 'class-btn-8' },
    { num: '9', label: 'Kelas 9', roman: 'IX', className: 'class-btn-9' },
  ];

  return (
    <div className="screen active">
      <div className="title-container">
        <h1 className="main-title">
          <i className="fas fa-calendar-alt text-primary" /> Jadwal Pelajaran
        </h1>
        <h2 className="subtitle-main">SMP Negeri 2 Bitung</h2>
        <h3 className="current-date">{currentDate}</h3>
      </div>

      <div className="class-selection">
        <h3 className="selection-title">Pilih Kelas</h3>
        <div className="class-buttons">
          {classes.map((cls) => (
            <button
              key={cls.num}
              className={`class-btn ${cls.className}`}
              onClick={() => onSelectClass(cls.num)}
            >
              <span className="class-number">{cls.roman}</span>
              <span className="class-label">{cls.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button className="fun-facts-btn" onClick={onShowFunFacts}>
          <i className="fas fa-lightbulb" /> Fun Facts Sekolah
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
