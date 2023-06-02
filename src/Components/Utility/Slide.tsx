import React, { useEffect, useState } from 'react';
import img1 from '../../images/topImg1.webp';
import img2 from '../../images/topImg2.webp';
import img3 from '../../images/topImg4.webp';

function Slide() {
    const img = [img1, img2, img3]

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        let slide = setInterval(changeCurrent, 5000)

        function changeCurrent(){
            const limit = 2
            if(current === 0 || current < limit) {
                setCurrent(old => old + 1)
            }
            else if(current === 2){
                setCurrent(0)
            }

            clearInterval(slide)
            
        }
    }, [current])


  return (
    <div className='h-[130px]'>
        <img className='h-full max-w-full w-full object-cover object-center' src={img[current]} alt="top-img" />
    </div>
  )
}

export default Slide