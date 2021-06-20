import './App.css';
import Card from './components/Card'
import Header from './components/Header'
import Nav from './components/Nav';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <Nav />
        <Card />
      </div>
    </div>
  );
}

export default App;
