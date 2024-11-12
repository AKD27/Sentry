import React from 'react';
import Home from './pages/Home';
function App() {
  const handleError = () => {
    throw new Error("This is a test error for Sentry!");
  };

  return (
    <div className="App">
      <Home />
      <button onClick={handleError} className="bg-red-500 text-white p-2 rounded">
        Trigger Error
      </button>
    </div>
  );
}

export default App;
