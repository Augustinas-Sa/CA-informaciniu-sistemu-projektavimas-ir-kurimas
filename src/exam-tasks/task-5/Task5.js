import React, { useRef } from 'react';

function Task5() {
  // Hooks

  // Refs
  const lightButtonRef = useRef();
  const darkButtonRef = useRef();

  // Custom functions
  const lighttheme = () => {
    lightButtonRef.current.style.background = '#f1f1f1';
    lightButtonRef.current.style.color = '#000000';
  };

  const darktheme = () => {
    darkButtonRef.current.style.background = '#000000';
    darkButtonRef.current.style.color = '#f1f1f1';
  };
  return (
    <div ref={(lightButtonRef, darkButtonRef)}>
      <h3>Task 5</h3>
      <p>Light theme</p>
      <p>Dark theme</p>
      <button onClick={lighttheme}>Light theme</button>
      <button onClick={darktheme}>Dark theme</button>
    </div>
  );
}

export default Task5;

/* Task 5
Task 5 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task5 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task5 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
