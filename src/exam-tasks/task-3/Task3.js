import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import './Task3.css';

function Task3() {
  return (
    <div>
      <h3>Task 3</h3>
      <div>
        <div>
          <FaTwitter className='twitter-icon' />
        </div>
        <h2>Happening Now</h2>
        <h4>Join Twitter today.</h4>
        <button>Sign up</button>
        <button>Log in</button>
      </div>
    </div>
  );
}

export default Task3;

/* Task 3
Atkurkite šį komponentą: https://prnt.sc/12978k7

Pastabos:
- turi būti sukurtas papildomas <Button> komponentas, kuris prims
du props: tekstas ir klasė. Remiantis jais bus atvaizduojamas
komponente nurodyti mygtukai;
- šriftas: naudokite savo parinktą;
- twitter logo, naudokite ikon'ą.
*/
