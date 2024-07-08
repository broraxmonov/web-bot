import React from 'react'
import '../card/card.css'
export default function card(props) {
  const {course} = props;
    return (
    <div className='card'>
        <span className='card_badge'>
             1
        </span>
        <div className='image_container'>
               <img src={course.image} alt={course.title} width={'100%'} height={'230px'} />
        </div>
        <div className='card_body'>
            <h2 className='card_title'>{course.title}</h2>
            <div className='card_price'>
                    {course.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })}
            </div>
        </div>
        <div className='hr'>

        </div>
        <div className='btn_container'>
             <button>+</button>
             <button>-</button>
        </div>
    </div>
  )
}
