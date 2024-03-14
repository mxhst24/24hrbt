import React, {useEffect, useState} from 'react'

import { btnData } from '../data/btnData'

const BtnsContainer = () => {
  const [customMargin, setCustomMargin] = useState(0);

  useEffect(() => {
    const imgHeight = document.querySelector('.titles').clientHeight;
    setCustomMargin(imgHeight);
    console.log('1312312')
    window.addEventListener('resize', () => {
      const resizedHeight = document.querySelector('.titles').clientHeight;
      setCustomMargin(resizedHeight);
      console.log('asdas')
    })
  },[])

  return (
    <div className='botonera' style={{marginTop: `${customMargin}px`}}>

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