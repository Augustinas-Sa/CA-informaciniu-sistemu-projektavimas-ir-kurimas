import React, { useReducer } from 'react';
import CompA from './CompA';
import CompB from './CompB';

export const ButtonsContext = React.createContext();

// useReducer initialState
let initialState = { count: 0, message: '' };
// useReducer reducer function (describes how state should change)
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (state.count < 10) return { ...state, count: state.count + 1 };
      return { ...state, message: 'Reached max: 10' };
    case 'DECREMENT':
      if (state.count === 10) return { count: state.count - 1, message: '' };
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

function Task6() {
  // hooks
  // - state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Task 6</h3>
      <ButtonsContext.Provider value={{ dispatch }}>
        <h1>
          Buttons clicked <u>{state.clicks}</u>
        </h1>
        <CompA />
        <CompB />
        <p>{state.message}</p>
      </ButtonsContext.Provider>
    </div>
  );
}

export default Task6;

/* Task 6
task-6 aplanke rasite kelis komponetus. Task6 komponente, turi būti atvaizduojami
šie kompoentai: CompA (viduje turi <h2>CompA</h2> ir CompA1 (su tekstu <h3>CompA1</h3>)) 
ir CompB (viduje turi <h2>CompB</h2>).

Task6 komponentų medis
- CompA
-- CompA1
- CompB

Task6 viduje bus sukurtas Counter state'as, kuri bus galima valdyti iš CompA1 ir CompB
State'as bus valdomas su mygtkais, kurie leis state'ą padidinti 10 taškų arba pamažinti 10.
State'ui pasiekus 10, bus draudžiama didinti state'ą ir pasirodys pranešimas "Didinti nebegalima"

Pastaba: naudokite useState, useContext (Context API).

*/
