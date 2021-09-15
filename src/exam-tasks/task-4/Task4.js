import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Task4() {
  // Hooks
  // - state
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Side effects
  useEffect(() => {
    axios.get('hptts://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <h3>Task 4</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Adress</th>
            <th>Phone</th>
            <th>Company (name)</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.address.street}, {user.address.city}
                </td>
                <td>{user.phone}</td>
                <td>{user.company.name}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Task4;

/* Task 4
Atkurkite lentelę, kurioje bus randama ši informacija apie vartotoją:
- name;
- email;
- address (street + city pvz.: "Kulas Light, Gwenborough");
- phone;
- company (name).

Informaciją imkite iš čia: hptts://jsonplaceholder.typicode.com/users

Pastaba: naudokite useState, useEffect.
*/
