import React from 'react'
import classes from './Result.module.css';

export const result = ({result}) => {
  const showResult = () => {
    let res;
    switch (result) {
      case 'Win':
        res = <div className={classes.Result}>You <span className={classes.Win}>Win</span> ;)</div>;
        break;
      case 'Lose':
        res = <div className={classes.Result}>You <span className={classes.Lose}>Lose</span> !!!!</div>
        break;
      default:
        res = null;
        break;
    }
    return res;
  } 
  
  return (
    <div>
      {showResult()}
    </div>
  )
}

export default result;
