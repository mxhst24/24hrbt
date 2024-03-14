import React, {useEffect, useState} from 'react'

import { btnData } from '../data/btnData'

const BtnsContainer = () => {
  const [customMargin, setCustomMargin] = useState(500);

  useEffect(() => {
    const imgHeight = document.querySelector('.titles').clientHeight;
    setCustomMargin(imgHeight);
    console.log(customMargin)
    window.addEventListener('resize', () => {
      const resizedHeight = document.querySelector('.titles').clientHeight;
      setCustomMargin(resizedHeight);
      console.log('assd')
      console.log(customMargin)
    })
  },[])

  return (
    <div className='botonera' style={{marginTop: `${customMargin}px`}}>
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