import React from 'react'
import Navbar from '../../components/Navbar'
import Announcment from '../../components/Announcment'
import Slider from '../../components/Slider'
import Categories from '../../components/Categories'
import Products from '../../components/Products'
import News from '../../components/News'

const Home = () => {
  return (
    <div>
        <Announcment/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <News/>
    </div>
  )
}

export default Home
