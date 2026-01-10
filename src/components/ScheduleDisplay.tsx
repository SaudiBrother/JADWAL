import { scheduleData } from '@/data/scheduleData';

interface ScheduleDisplayProps {
  selectedClass: string;
  selectedRombel: string;
  selectedDay: string;
  onBack: () => void;
}

const ScheduleDisplay = ({ selectedClass, selectedRombel, selectedDay, onBack }: ScheduleDisplayProps) => {
  const dayData = scheduleData[selectedClass]?.[selectedRombel]?.[selectedDay];

  const dayLabels: Record<string, string> = {
    'SENIN': 'Senin',
    'SELASA': 'Selasa',
    'RABU': 'Rabu',
    'KAMIS': 'Kamis',
    'JUMAT': 'Jumat',
  };

  return (
    <div className="screen active">
      <div className="back-nav">
        <button className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left" /> Kembali
        </button>
      </div>
      
      <h1 className="section-title">
        <i className="fas fa-clipboard-list text-primary" /> {dayLabels[selectedDay]} - Rombel {selectedRombel}
      </h1>
      
      <div className="schedule-container">
        <div className="schedule-header">
          <div>
            <i className="fas fa-clock" /> Waktu
          </div>
          <div>
            <i className="fas fa-book" /> Mata Pelajaran
          </div>
        </div>
        
        <div className="schedule-list">
          {dayData && dayData.length > 0 ? (
            dayData.map((item, index) => (
              <div key={index} className="schedule-item">
                <div className="time-slot">
                  {item.time}
                </div>
                <div className="subject">
                  {item.subject}
                </div>
              </div>
            ))
          ) : (
            <div className="schedule-item">
              <div className="subject col-span-2 text-center w-full">
                Data jadwal belum diinput untuk Rombel ini.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleDisplay;
