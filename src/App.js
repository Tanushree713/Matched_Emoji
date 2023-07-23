import Icon from './Icon';
import React  ,{useState}from 'react' ;
import './App.css';
import Emoji from './Changemoji';

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * Emoji.length);
  return Emoji[randomIndex];
}
function getRandomDifferentEmoji(currentEmoji) {
  let randomEmoji = getRandomEmoji();
  while (randomEmoji === currentEmoji) {
    randomEmoji = getRandomEmoji();
  }
  return randomEmoji;
}

function App() {
  const [emojiY, setEmojiY] = useState(Emoji[0]);
  const [emojiX, setEmojiX] = useState(Emoji[0]);
  const [emojiZ, setEmojiZ] = useState(Emoji[0]);

  function handleButtonClick() {
    setEmojiY(getRandomEmoji());
    setEmojiX(getRandomDifferentEmoji(emojiY));
    setEmojiZ(getRandomDifferentEmoji(getRandomEmoji(emojiX)));
  }

  return (
    <>
    <div className="App">
      <h1>
        🎰🎰 Welcome to <span style ={{fontWeight:"bold"}}>Slot-Machine </span>🎰🎰  
      </h1>
      <hr/>
       
      <hr/>
      <div className="Slot">
        <Icon x= {emojiX} y={emojiY}  z={emojiZ}/>
       
      </div>
      <button onClick={handleButtonClick} style={{padding:"6px 20px" , fontWeight:"bold" , borderRadius:"12px"}}>Onclick</button>
    </div>
    </>
  );
}

export default App;
