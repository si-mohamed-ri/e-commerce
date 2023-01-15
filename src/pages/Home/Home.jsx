import React from 'react'
import Navbar from '../../components/Navbar'
import Announcment from '../../components/Announcment'
import Slider from '../../components/Slider'
import Categories from '../../components/Categories'
import Products from '../../components/Products'
import News from '../../components/News'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
        <Announcment/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <News/>
        <Footer/>
    </div>
  )
}

export default Home
