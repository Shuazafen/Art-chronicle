import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Category from '../components/Category'
import About from '../components/About'
import Popular from '../components/Popular'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      
      <Header/>
      <Category/>
      <About/>
      <Popular/>
      <Contact/>
    </div>
  )
}

export default Home
