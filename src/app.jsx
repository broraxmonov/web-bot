import React, { useEffect } from 'react'
import './app.css'
import { getData } from './constants/db'
import Card from './components/card/card';
const courses = getData();
const telegram = window.Telegram.WebApp
export default function app() {
    useEffect(()=>{
        telegram.ready();
    })

    const onCheckout =()=>{
        telegram.MainButton.text = "Sotib olish ;)";
        telegram.MainButton.show();
    }
  return (
    <>
        <h1 className='heading'>Kurslar</h1>
        {/*Card */}
        <div className='cards_container' >
             {courses.map(course => (
               <Card key={course.id} course={course} />
             ))}
        </div>
    </>
  )
}
