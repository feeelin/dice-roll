import './App.css';
import React, {useState} from 'react';
import DiceList from './components/diceList/diceList';
import Button from './components/button/button';
import Modal from './components/modal/modal'

function App() {
  const [dices, setDices] = useState({k20: 0, k12: 0, k10: 0, k100: 0, k8: 0, k6: 0, k4: 0, k2: 0})
  const [modal, setModal] = useState(false)
  const [modalValue, setModalValue] = useState('')
  const [modalKeys, setModalKeys] = useState('')

  function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  function clear(){
    setDices({k20: 0, k12: 0, k10: 0, k100: 0, k8: 0, k6: 0, k4: 0, k2: 0})
  }

  function roll(){
    let keys = Object.keys(dices);
    let newKeys = []

    for(let i=0; i<keys.length; i++){
      newKeys.push(Number(keys[i].slice(1)))
    }

    let output = ''

    for(let i=0; i<newKeys.length; i++){
      if(dices[keys[i]]){
        output += '('
        for(let j=0; j<dices[keys[i]]; j++){
            output += getRandomArbitrary(1, newKeys[i]+1) + ' + '
        }
        output = output.slice(0, -3)
        output += ') + '
      }
    }

    output = output.slice(0, -2)

    let keyString = ''
    for(let i=0; i<keys.length; i++){
      if(dices[keys[i]]){
        keyString += dices[keys[i]] + keys[i] + ' + '
      }else if(dices[keys[i]] === 1){
        keyString += dices[keys[i]] + keys[i] + ' + '
      }
    }

    keyString = keyString.slice(0, -3)

    output = output ? output : 'None'
    
    console.log(output)
    setModalValue(output)
    setModal(true)
    setModalKeys(keyString)
  }

  return (
    <div className='container'>
            <DiceList dices={dices} setDices={setDices}/>
            <div>
              <Button onClick={clear}>Clear</Button>
              <Button onClick={roll}>Roll</Button>
            </div>
            <Modal visible={modal} setVisible={setModal} value={modalValue} keys={modalKeys}></Modal>
    </div>
  );
}

export default App;
