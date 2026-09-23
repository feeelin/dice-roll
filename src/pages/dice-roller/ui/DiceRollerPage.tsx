import classes from "./DiceRollerPage.module.css";
import { DiceBoard } from "@/widgets/dice-board";
import { Popup } from "@/entities/roll-result";

const DiceRollerPage = () => {
  return (
    <div>
      <div className={classes.container}>
        <DiceBoard />
      </div>
      <Popup />
    </div>
  );
};

export default DiceRollerPage;
