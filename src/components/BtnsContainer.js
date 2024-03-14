import React from 'react'

import { btnData } from '../data/btnData'

const BtnsContainer = () => {

  return (
    <div className='botonera'>
        <h2>LÍNEAS DE ATENCIÓN 24HS</h2>
        {btnData.map((btn, index) => {
            return <div key={index} className='btnData'>
                <a id={btn.name} className='icon' href={btn.url} target='_blank' rel='noopener noreferrer'>
                  {btn.icon}
                </a>
                <a href={btn.url} className='url-text' target='_blank' rel='noopener noreferrer'>
                  {btn.name}  
                </a>
            </div>
        })}
    </div>
  )
}

export default BtnsContainer