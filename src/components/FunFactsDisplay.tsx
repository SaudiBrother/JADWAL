import { funFacts } from '@/data/scheduleData';

interface FunFactsDisplayProps {
  onBack: () => void;
}

const FunFactsDisplay = ({ onBack }: FunFactsDisplayProps) => {
  return (
    <div className="screen active">
      <div className="back-nav">
        <button className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left" /> Kembali
        </button>
      </div>
      
      <h1 className="section-title">
        <i className="fas fa-lightbulb text-primary" /> Fun Facts Sekolah
      </h1>
      
      <div className="facts-container">
        {funFacts.map((category, index) => (
          <div key={index} className="fact-category">
            <h3>
              <i className={`fas ${category.icon}`} /> {category.title}
            </h3>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="fact-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunFactsDisplay;
