import './App.css';
import React, {useState} from 'react';
import DiceList from './components/diceList/diceList';
import Button from './components/button/button';

function App() {
  const [dices, setDices] = useState({k20: 0, k12: 0, k10: 0, k100: 0, k8: 0, k6: 0, k4: 0, k2: 0})

  function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  function roll(){
    let keys = Object.keys(dices);
    let newKeys = []

    for(let i=0; i<keys.length; i++){
      newKeys.push(Number(keys[i].slice(1)))
    }

    let output = []

    for(let i=0; i<newKeys.length; i++){
      for(let j=0; j<dices[keys[i]]; j++){
        output.push(getRandomArbitrary(1, newKeys[i]+1))
      }
    }

    console.log(output)
  }

  return (
    <div className='container'>
            <DiceList dices={dices} setDices={setDices}/>
            <Button onClick={roll}>Roll</Button>
    </div>
  );
}

export default App;
