import React from 'react';
import Dice from '../dice/dice';
import classes from './diceList.module.css'

function DiceList({dices, setDices}) {
  
    let k20Image = <svg width="33" height="33" viewBox="0 0 33 33" stroke="white" fill="none"><path d="M16.4997 1.99976L28.4997 9.95628M16.4997 1.99976L4.49969 9.95628M16.4997 1.99976V9.69541M28.4997 9.95628L16.4997 9.69541M28.4997 9.95628L23.9345 21.1737M28.4997 9.95628V22.3476M28.4997 22.3476L16.4997 30.4345M28.4997 22.3476L23.9345 21.1737M16.4997 30.4345L4.49969 22.3476M16.4997 30.4345L9.06491 21.1737M16.4997 30.4345L23.9345 21.1737M4.49969 22.3476V9.95628M4.49969 22.3476L9.06491 21.1737M4.49969 9.95628L16.4997 9.69541M4.49969 9.95628L9.06491 21.1737M16.4997 9.69541L9.06491 21.1737M16.4997 9.69541L23.9345 21.1737M9.06491 21.1737H23.9345" stroke="inherit"></path></svg>
    let k12Image = <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="white"><path d="M17 2.55005L25.2385 5.14952L30.8834 12.3363M17 2.55005L8.76157 5.14952L3.1167 12.3363M17 2.55005V10.3716M30.8834 12.3363V21.5109L25.2385 28.5448M30.8834 12.3363L23.6111 15.0115M25.2385 28.5448L17 31.45L8.76157 28.5448M25.2385 28.5448L20.9667 22.7005M8.76157 28.5448L3.1167 21.5109V12.3363M8.76157 28.5448L13.0334 22.7005M3.1167 12.3363L10.3889 15.0115M17 10.3716L23.6111 15.0115M17 10.3716L10.3889 15.0115M23.6111 15.0115L20.9667 22.7005M20.9667 22.7005H13.0334M13.0334 22.7005L10.3889 15.0115" stroke="inherit"></path></svg>
    let k10Image = <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="white"><path d="M16.8583 1.41675L31.7333 16.791M16.8583 1.41675L1.98328 16.791M16.8583 1.41675L24.0948 15.7121M16.8583 1.41675L9.62179 15.7121M31.7333 16.791L16.8583 32.3001M31.7333 16.791L24.0948 15.7121M16.8583 32.3001L1.98328 16.791M16.8583 32.3001V19.2185M1.98328 16.791L9.62179 15.7121M16.8583 19.2185L24.0948 15.7121M16.8583 19.2185L9.62179 15.7121" stroke="inherit"></path></svg>
    let k100Image = <svg width="35" height="35" viewBox="0 0 35 35" fill="none" stroke="white"><path d="M10.698 1.04761L19.9948 10.6565M10.698 1.04761L1.40112 10.6565M10.698 1.04761L15.2207 9.98216M10.698 1.04761L6.17517 9.98216M19.9948 10.6565L10.698 20.3496M19.9948 10.6565L15.2207 9.98216M10.698 20.3496L1.40112 10.6565M10.698 20.3496V12.1737M1.40112 10.6565L6.17517 9.98216M10.698 12.1737L15.2207 9.98216M10.698 12.1737L6.17517 9.98216" stroke="inherit"></path><path d="M23.4478 13.7974L32.7447 23.4062M23.4478 13.7974L14.151 23.4062M23.4478 13.7974L27.9706 22.7319M23.4478 13.7974L18.9251 22.7319M32.7447 23.4062L23.4478 33.0994M32.7447 23.4062L27.9706 22.7319M23.4478 33.0994L14.151 23.4062M23.4478 33.0994V24.9234M14.151 23.4062L18.9251 22.7319M23.4478 24.9234L27.9706 22.7319M23.4478 24.9234L18.9251 22.7319" stroke="inherit"></path></svg>
    let k8Image = <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="white"><path d="M17 2.2666L29.4667 11.4213V23.1507M17 2.2666L4.53333 11.4213V23.1507M17 2.2666L4.53333 23.1507M17 2.2666L29.4667 23.1507M29.4667 23.1507L17 31.7333L4.53333 23.1507M29.4667 23.1507H4.53333" stroke="inherit"></path></svg>
    let k6Image = <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="white"><path d="M30.6 9.3527L17.1417 1.69995L3.68335 9.3527M30.6 9.3527V24.1468L17.1417 32.0166M30.6 9.3527L17.1417 17.447M17.1417 32.0166L3.68335 24.1468V9.3527M17.1417 32.0166V17.447M3.68335 9.3527L17.1417 17.447" stroke="inherit"></path></svg>
    let k4Image = <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="white"><path d="M18.3356 4.53345L31.7334 15.8905L25.3661 29.4668M18.3356 4.53345L2.55005 23.0703L25.3661 29.4668M18.3356 4.53345L25.3661 29.4668" stroke="inherit"></path></svg>
    let k2Image = <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="white"><circle cx="17" cy="17.0003" r="10.3182" stroke="inherit"></circle><circle cx="16.9999" cy="17.0002" r="13.4091" stroke="inherit"></circle></svg>
  
    return (
      <div className={classes.container}>
        <Dice setNumber={(number) => setDices({...dices, k20: number})} number={dices['k20']} image={k20Image} title='k20'/>
        <Dice setNumber={(number) => setDices({...dices, k12: number})} number={dices['k12']} image={k12Image} title='k12'/>
        <Dice setNumber={(number) => setDices({...dices, k10: number})} number={dices['k10']} image={k10Image} title='k10'/>
        <Dice setNumber={(number) => setDices({...dices, k100: number})} number={dices['k100']} image={k100Image} title='k100'/>
        <Dice setNumber={(number) => setDices({...dices, k8: number})} number={dices['k8']} image={k8Image} title='k8'/>
        <Dice setNumber={(number) => setDices({...dices, k6: number})} number={dices['k6']} image={k6Image} title='k6'/>
        <Dice setNumber={(number) => setDices({...dices, k4: number})} number={dices['k4']} image={k4Image} title='k4'/>
        <Dice setNumber={(number) => setDices({...dices, k2: number})} number={dices['k2']} image={k2Image} title='k2'/>
      </div>
    );
  }
  
  export default DiceList;