import React from 'react';
import './App.css';
import BtnsContainer from './components/BtnsContainer';

function App() {
  return (
    <div className='landpage'>
      <div className='titles'>
        <img className='img-logo' src={require('./assets/landpage.png')} alt='img'/>
        <div className='info-titles'>
          <p>Diversión sin límites</p>
          <p>Atención personalizada</p>
          <p>Pagos en el acto</p>
          <p>Solicitá tu usuario sin cargo</p>
        </div>
      </div>
      <BtnsContainer/>
    </div>
    );
}

export default App;
