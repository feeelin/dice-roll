import classes from './App.module.css'
import DicesList from "./components/dicesList/dicesList.jsx";
import Popup from "./components/popup/popup.jsx";
import {useState} from "react";

function App() {

    const [visible, setVisible] = useState(false)

  return (
      <div>
          <div className={classes.container}>
              <DicesList setVisible={setVisible}/>
          </div>
          <Popup visible={visible} setVisible={setVisible}/>
      </div>
  )
}

export default App
