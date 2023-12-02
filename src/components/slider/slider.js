
import React, { useEffect, useRef } from 'react';
import './slider.css'

function Slider(){

    const sliderRef = useRef(null);
    let interval = null;
  
    const start = () => {
      interval = setInterval(function () {
        
        if (sliderRef.current) {
          const newScrollLeft = sliderRef.current.scrollLeft + 1;
  
          if (newScrollLeft >= sliderRef.current.scrollWidth - sliderRef.current.clientWidth) {
            sliderRef.current.scrollLeft = 0;
          } else {
            sliderRef.current.scrollLeft = newScrollLeft ;
          }
        }
      }, 20);
    };
  
    useEffect(() => {
      start();
  
      return () => {
        clearInterval(interval);
      };
    }, []);

    return(
        <>
        <p className='prox'>Proximamente...</p>
        <div className='slider' ref={sliderRef}>
            <div className='slider-items' >
                <img src='/image/dick.jpg' alt=''></img>
            </div>
            <div className='slider-items'>
                <img src='/image/hobbit.webp' alt=''></img>
            </div>
            <div className='slider-items'>
                <img src='/image/naranja.jpg' alt=''></img>
            </div>
            <div className='slider-items'>
                <img src='/image/ola.jpg' alt=''></img>
            </div>
            <div className='slider-items'>
                <img src='/image/quijote.jpg' alt=''></img>
            </div>
            <div className='slider-items'>
                <img src='/image/it.jpg' alt=''></img>
            </div>
            <div className='slider-items'>
                <img src='/image/lupinVol2.jpg' alt=''></img>
            </div>
            <div className='slider-items'>
                <img src='/image/memory.jpg' alt=''></img>
            </div>
            <div className='slider-items'>
                <img src='/image/novel.jpg' alt=''></img>
            </div>
            <div className='slider-items'>
                <img src='/image/ordesa.jpg' alt=''></img>
            </div>
            <div className='slider-items'>
                <img src='/image/principito.webp' alt=''></img>
            </div>
            <div className='slider-items'>
                <img src='/image/lupin.jpg' alt=''></img>
            </div>
            <div className='slider-items'>
                <img src='/image/trono.jpg' alt=''></img>
            </div>
            <div className='slider-items'>
                <img src='/image/torre.jpg' alt=''></img>
            </div>
            <div className='slider-items'>
                <img src='/image/padre.webp' alt=''></img>
            </div>
        </div>
        
        
    
        </>
    )

}

export default Slider