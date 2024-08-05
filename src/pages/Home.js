import React from 'react'
import HeroSection from '../Components/HeroSection'
import Card from '../Components/Card'
import About from '../Components/About'
import Programs from '../Components/Programs'
import Product from '../Components/Product'
import LetsRead from '../Components/LetsRead'

const Home = () => {
  return (
    <div className='w-full flex flex-col justify-center m-0 p-0'>
      <HeroSection />
      <Programs/>
      <About />
      <Product />
      <Card />
      <LetsRead />
    </div>
  )
}
export default Home