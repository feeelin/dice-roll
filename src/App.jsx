import classes from './App.module.css'
import DicesList from "./components/dicesList/dicesList.jsx";

function App() {

  return (
      <div>
          <div className={classes.container}>
              <DicesList/>
          </div>
      </div>
  )
}

export default App
