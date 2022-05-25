import React from 'react';
import './App.css';
import PokePresenter from './views/PokePresenter';
//mport Pokeview from './views/Pokeview';


const App = () => {

  return (
        <div className='App'>
         <PokePresenter />
         {/* <Pokeview /> */}
        </div>
  );
}

export default App;
