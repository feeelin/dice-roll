import { Dice, diceIcons, type DicesCount } from "@/entities/dice";
import classes from "./DiceBoard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getResult } from "@/features/roll-dice";

const DiceBoard = () => {
  const dicesCount = useSelector((state: { dices: DicesCount }) => state.dices);
  const dispatch = useDispatch();

  return (
    <div className={classes.contentContainer}>
      <div className={classes.dicesContainer}>
        <Dice image={diceIcons["20"]} title="20" />
        <Dice image={diceIcons["12"]} title="12" />
        <Dice image={diceIcons["10"]} title="10" />
        <Dice image={diceIcons["100"]} title="100" />
        <Dice image={diceIcons["8"]} title="8" />
        <Dice image={diceIcons["6"]} title="6" />
        <Dice image={diceIcons["4"]} title="4" />
        <Dice image={diceIcons["2"]} title="2" />
      </div>

      <div className={classes.buttonContainer}>
        <button
          className={classes.button}
          onClick={(event) => {
            getResult(dicesCount, dispatch);
            dispatch({ type: "SHOW_POPUP" });
          }}
        >
          Roll
        </button>
        <button
          className={classes.button}
          onClick={(event) => {
            dispatch({ type: "CLEAR_DICES_COUNT" });
          }}
        >
          Clear all
        </button>
      </div>
    </div>
  );
};

export default DiceBoard;
