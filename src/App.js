import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Tasks imports
import Task1 from './exam-tasks/task-1/Task1';
import Task2 from './exam-tasks/task-2/Task2';
import Task3 from './exam-tasks/task-3/Task3';
import Task4 from './exam-tasks/task-4/Task4';
import Task5 from './exam-tasks/task-5/Task5';
import Task6 from './exam-tasks/task-6/Task6';
import Task7 from './exam-tasks/task-7/Task7';

// Screens
import AboutUs from './exam-tasks/task-1/Pages/AboutUs';
import Contacts from './exam-tasks/task-1/Pages/Contacts';

function App() {
  return (
    <div className='App'>
      <Router>
        <Task1 />
        <Switch>
          <Route exact path='/' component={AboutUs} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
      </Router>
      <hr />

      <Task2 />
      <hr />

      <Task3 />
      <hr />

      <Task4 />
      <hr />

      <Task5 />
      <hr />

      <Task6 />
      <hr />

      {/* <Task7 />
      <hr /> */}
    </div>
  );
}

export default App;
