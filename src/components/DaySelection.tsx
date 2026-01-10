interface DaySelectionProps {
  selectedClass: string;
  selectedRombel: string;
  onBack: () => void;
  onSelectDay: (day: string) => void;
}

const DaySelection = ({ selectedClass, selectedRombel, onBack, onSelectDay }: DaySelectionProps) => {
  const days = [
    { name: 'SENIN', label: 'Senin', icon: 'fa-sun' },
    { name: 'SELASA', label: 'Selasa', icon: 'fa-cloud' },
    { name: 'RABU', label: 'Rabu', icon: 'fa-cloud-sun' },
    { name: 'KAMIS', label: 'Kamis', icon: 'fa-cloud-rain' },
    { name: 'JUMAT', label: 'Jumat', icon: 'fa-star' },
  ];

  return (
    <div className="screen active">
      <div className="back-nav">
        <button className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left" /> Kembali
        </button>
      </div>
      
      <h1 className="section-title">
        <i className="fas fa-calendar-day text-primary" /> Kelas {selectedClass} - Rombel {selectedRombel}
      </h1>
      
      <div className="day-grid">
        {days.map((day) => (
          <button
            key={day.name}
            className="day-btn"
            onClick={() => onSelectDay(day.name)}
          >
            <i className={`fas ${day.icon}`} />
            {day.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaySelection;
