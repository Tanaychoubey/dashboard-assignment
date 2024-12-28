import React from 'react';
import Dashboard from './components/Dashboard.tsx';
import { Sidebar } from './components/Sidebar.tsx';
import { Header } from './components/Header.tsx';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <main className="flex-1 lg:ml-16">
        <Header />
        <Dashboard />
      </main>
    </div>
  );
};

export default App;