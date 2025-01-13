import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { BottomBar } from './components/layout/BottomBar';
import { TopBar } from './components/layout/TopBar';
import { InfoModal } from './components/InfoModal';
import { useSearch } from './hooks/useSearch';
import { useModal } from './hooks/useModal';

// Import pages directly to avoid dynamic import issues
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

function App() {
  const { searchQuery, handleSearch } = useSearch();
  const { isOpen: isInfoOpen, openModal: openInfo, closeModal: closeInfo } = useModal();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <TopBar
          onInfoClick={openInfo}
          onTogglePortal={() => console.log('Toggle portal')}
          searchProps={{ onSearch: handleSearch }}
        />
        
        <main className="max-w-screen-xl mx-auto px-4 pb-24">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home searchQuery={searchQuery} />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </main>

        <BottomBar />
        <InfoModal isOpen={isInfoOpen} onClose={closeInfo} />
      </div>
    </Router>
  );
}

export default App;