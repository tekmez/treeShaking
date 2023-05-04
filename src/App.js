import React, { useState } from 'react';
import './styles/test.scss';
import Tree from './components/Tree';
import './styles/app.scss';
function App() {
  const [isShake, setIsShake] = useState(false);
  return (
    <main className="app">
      <div className="container">
        <Tree isShake={isShake} />
        <button className="shakeBtn" onClick={() => setIsShake(!isShake)}>
          SHAKE
        </button>
      </div>
    </main>
  );
}

export default App;
