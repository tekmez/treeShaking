import React, { useState } from 'react';
import './styles/test.scss';
import Tree from './components/Tree';
import './styles/app.scss';
import Button from './components/Button';
import Cloud from './components/Cloud';
import Apple from './components/Apple';
function App() {
  const [isShake, setIsShake] = useState(false);
  const clouds = ['cloud', 'cloud2', 'cloud3'];
  const applePositions = [
    // { left: 260, top: 400 },
    // { left: 400, top: 200 },
    // { left: 500, top: 300 },
    // { left: 650, top: 255 },
    // { left: 800, top: 350 }
    // { left: 260, top: 10 },
    // { left: 400, top: 100 },
    // { left: 650, top: 200 },
    // { left: 750, top: 275 },
    // { left: 850, top: 350 }
    // { left: 260, top: '0.625em' },
    // { left: 400, top: '6.25em' },
    // { left: 650, top: '12.5em' },
    // { left: 750, top: '17.19em' },
    // { left: 850, top: '21.88em' }
    { left: '30%', top: '15%' },
    { left: '40%', top: '25%' },
    { left: '37%', top: '35%' },
    { left: '45%', top: '41%' },
    { left: '33%', top: '40%' }
  ];
  const handleClickShake = () => {
    setIsShake(!isShake);
  };
  return (
    <main className="app">
      {clouds.map((cloud, i) => (
        <Cloud className={cloud} key={i} />
      ))}
      <div className="container">
        {applePositions.map((apple, i) => (
          <Apple isShake={isShake} style={{ left: apple.left, top: apple.top }} key={i} />
        ))}
        <Tree isShake={isShake} />
        <Button isShake={isShake} onClick={handleClickShake} />
      </div>
    </main>
  );
}

export default App;
