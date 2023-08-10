import React from 'react'
import "../../assets/style/home.css"
import Slider from '../../components/slider/Slider'
import SliderBox from '../../components/slider__box/SliderBox'
import Popular from '../../components/popular/Popular'
import Services from '../../components/services/Services'
import Student from '../../components/student/Student'
import Events from '../../components/events/Events'



function Home() {
  return (
    <>
        <div className="super_container">
        <Slider/>
        <SliderBox/>
        <Popular/>
        <Services/>
        <Student/>
        <Events/>
        </div>
    </>
  )
}

export default Home