import React, { useState } from 'react';
import Tree from './components/Tree';
import Button from './components/Button';
import Cloud from './components/Cloud';
import Apple from './components/Apple';
import basket from './assets/basket2.png';
import './styles/app.scss';
function App() {
  const [isShake, setIsShake] = useState(false);
  const [animationFinishedList, setAnimationFinishedList] = useState([]);
  const appleClipPathStyle = [
    'polygon(0% 0%, 100% 0%, 98% 58%, 39% 40%)',
    'polygon(0% 0%, 100% 0%, 99% 62%, 0% 62%)',
    'polygon(0% 0%, 100% 0%, 99% 62%, 0% 62%)',
    'polygon(0% 0%, 100% 0%, 94% 50%, 0% 59%)',
    'polygon(0% 0%, 100% 0%, 99% 62%, 0% 54%)'
  ];
  const clouds = ['cloud', 'cloud2', 'cloud3'];
  const applePositions = [
    { left: '30%', top: '15%' },
    { left: '40%', top: '25%' },
    { left: '37%', top: '35%' },
    { left: '45%', top: '41%' },
    { left: '33%', top: '40%' }
  ];
  const handleClickShake = () => {
    setIsShake(!isShake);
    setAnimationFinishedList([]);
  };
  const onAnimationEnd = (index) => {
    setAnimationFinishedList((prevList) => {
      const newList = [...prevList];
      newList[index] = true;
      return newList;
    });
  };
  return (
    <main className="app">
      {clouds.map((cloud, i) => (
        <Cloud className={cloud} key={i} />
      ))}
      <div className="container">
        {applePositions.map((apple, i) => (
          <Apple
            onAnimationEnd={() => onAnimationEnd(i)}
            isShake={isShake}
            style={{
              left: apple.left,
              top: apple.top,
              clipPath: animationFinishedList[i] ? appleClipPathStyle[i] : ''
            }}
            key={i}
          />
        ))}
        <Tree isShake={isShake} />
        <Button isShake={isShake} onClick={handleClickShake} />
        <img src={basket} className="basket" />
      </div>
    </main>
  );
}

export default App;
