import React from 'react';
import './App.css';
import BtnsContainer from './components/BtnsContainer';

function App() {
  return (
    <div className='landpage'>
      <div className='titles'>
        <img className='img-logo' src={require('./assets/landpage.png')} alt='img'/>
        <h2>ATENCIÓN 24HS</h2>
      </div>
      <BtnsContainer/>
    </div>
    );
}

export default App;
