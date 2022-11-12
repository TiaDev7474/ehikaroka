
import './App.css';
import MoviesList from './Components/MoviesList';
import Search from './Components/Search';
import { useState } from 'react';
function App() {
  const [searchValue , setSearchValue]= useState('')
  return (
    <div className="App">
      <header className="App-header">
        <div>Bonjour</div>
      <Search  setSearchValue={setSearchValue}/>
        
      </header>
      <MoviesList searchValue={searchValue}/>
    </div>
  );
}

export default App;
