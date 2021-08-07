import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { TasksList } from './features/Tasks/TasksList';

export default function App(props) {

  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <Nav />
        <TasksList tasks={props.tasks} /> 
      </div>
    </div>
  );
}

