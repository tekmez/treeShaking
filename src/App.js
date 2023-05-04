import React, { useState } from 'react';
import './styles/test.scss';
import Tree from './components/Tree';
import './styles/app.scss';
import Button from './components/Button';
function App() {
  const [isShake, setIsShake] = useState(false);
  return (
    <main className="app">
      <div className="container">
        <Tree isShake={isShake} />
        <Button isShake={isShake} setIsShake={setIsShake} />
      </div>
    </main>
  );
}

export default App;
