import React from 'react'
import Navbar from '../../components/Navbar'
import Announcment from '../../components/Announcment'
import Slider from '../../components/Slider'
import Products from '../../components/Products'
import News from '../../components/News'
import Footer from '../../components/Footer'
import FilterCategories from '../../components/FilterCategories'

const Home = () => {
  return (
    <div>
        <Announcment/>
        <Navbar/>
        <Slider/>
        <FilterCategories/>
        <Products/>
        <News/>
        <Footer/>
    </div>
  )
}

export default Home
