import React, { useState, useContext } from 'react';
import { ButtonsContext } from './Task6';

function CompA1() {
  // hooks
  // - state
  // -- global
  const clicksContext = useContext(ButtonsContext);
  const { dispatch } = clicksContext;

  // -- local
  const [buttonClicks, setButtonClicks] = useState(0);

  // custom functions
  const clickHandlerPlus = () => {
    // changing global state
    dispatch({ type: 'INCREMENT' });
    // changing local state
    setButtonClicks(buttonClicks + 1);
  };

  const clickHandlerMinus = () => {
    // changing global state
    dispatch({ type: 'DECREMENT' });
    // changing local state
    setButtonClicks(buttonClicks - 1);
  };

  return (
    <div>
      <h5>CompA1</h5>
      <p>{buttonClicks}</p>
      <button onClick={clickHandlerMinus}>-</button>
      <button onClick={clickHandlerPlus}>+</button>
    </div>
  );
}

export default CompA1;
