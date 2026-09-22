import classes from './App.module.css'
import DicesList from "./components/dicesList/dicesList.jsx";
import Popup from "./components/popup/popup.jsx";

function App() {

  return (
      <div>
          <div className={classes.container}>
              <DicesList/>
          </div>
          <Popup/>
      </div>
  )
}

export default App
