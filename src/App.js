import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {

  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState('');
  const [category, setCategory] = useState('en');

  // get data from API
  const getData = async () => {
    try {
      axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      .then(response => setMeanings(response.data));
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect( () => {
    getData();
  }, [word,category])

  return (
    <div className="container-fluid dictionary-app">
      <div className="row">
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} />
      </div>
      <div className="row">
        <Main category={category} word={word} meanings={meanings} />
      </div>
    </div>
  );
}

export default App;
