interface RombelSelectionProps {
  selectedClass: string;
  onBack: () => void;
  onSelectRombel: (rombel: string) => void;
}

const RombelSelection = ({ selectedClass, onBack, onSelectRombel }: RombelSelectionProps) => {
  const rombels = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <div className="screen active">
      <div className="back-nav">
        <button className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left" /> Kembali
        </button>
      </div>
      
      <h1 className="section-title">
        <i className="fas fa-users text-primary" /> Kelas {selectedClass} - Pilih Rombel
      </h1>
      
      <div className="rombel-grid">
        {rombels.map((rombel, index) => (
          <button
            key={rombel}
            className="rombel-btn"
            onClick={() => onSelectRombel(rombel.toString())}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            Rombel {rombel}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RombelSelection;
