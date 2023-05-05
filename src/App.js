import React, { useState } from 'react';
import './styles/test.scss';
import Tree from './components/Tree';
import './styles/app.scss';
import Button from './components/Button';
import Cloud from './components/Cloud';
function App() {
  const [isShake, setIsShake] = useState(false);
  return (
    <main className="app">
      <Cloud className="cloud" />
      <Cloud className="cloud2" />
      <Cloud className="cloud3" />
      <div className="container">
        <Tree isShake={isShake} />
        <Button isShake={isShake} setIsShake={setIsShake} />
      </div>
    </main>
  );
}

export default App;
