import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ThemeToggle from '@/components/ThemeToggle';
import MainMenu from '@/components/MainMenu';
import RombelSelection from '@/components/RombelSelection';
import DaySelection from '@/components/DaySelection';
import ScheduleDisplay from '@/components/ScheduleDisplay';
import FunFactsDisplay from '@/components/FunFactsDisplay';

type Screen = 'main' | 'rombel' | 'day' | 'schedule' | 'funfacts';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('main');
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [selectedRombel, setSelectedRombel] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<string>('');

  const handleSelectClass = (classNum: string) => {
    setSelectedClass(classNum);
    setCurrentScreen('rombel');
  };

  const handleSelectRombel = (rombel: string) => {
    setSelectedRombel(rombel);
    setCurrentScreen('day');
  };

  const handleSelectDay = (day: string) => {
    setSelectedDay(day);
    setCurrentScreen('schedule');
  };

  const handleShowFunFacts = () => {
    setCurrentScreen('funfacts');
  };

  const handleBackToMain = () => {
    setCurrentScreen('main');
    setSelectedClass('');
    setSelectedRombel('');
    setSelectedDay('');
  };

  const handleBackToRombel = () => {
    setCurrentScreen('rombel');
    setSelectedRombel('');
    setSelectedDay('');
  };

  const handleBackToDay = () => {
    setCurrentScreen('day');
    setSelectedDay('');
  };

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      <div className="app-container">
        {currentScreen === 'main' && (
          <MainMenu 
            onSelectClass={handleSelectClass} 
            onShowFunFacts={handleShowFunFacts}
          />
        )}

        {currentScreen === 'rombel' && (
          <RombelSelection
            selectedClass={selectedClass}
            onBack={handleBackToMain}
            onSelectRombel={handleSelectRombel}
          />
        )}

        {currentScreen === 'day' && (
          <DaySelection
            selectedClass={selectedClass}
            selectedRombel={selectedRombel}
            onBack={handleBackToRombel}
            onSelectDay={handleSelectDay}
          />
        )}

        {currentScreen === 'schedule' && (
          <ScheduleDisplay
            selectedClass={selectedClass}
            selectedRombel={selectedRombel}
            selectedDay={selectedDay}
            onBack={handleBackToDay}
          />
        )}

        {currentScreen === 'funfacts' && (
          <FunFactsDisplay onBack={handleBackToMain} />
        )}
      </div>
    </div>
  );
};

export default Index;
