import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="container-fluid dictionary-app">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <Main />
      </div>
    </div>
  );
}

export default App;
