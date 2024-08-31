import React, { useEffect } from 'react'
import TopNavBar from '../components/TopNavBar'
import HeaderBrand from '../components/HeaderBrand'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import DisplayCategory from '../components/DisplayCategory'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/features/productSlice'
import FeaturedProducts from '../components/FeaturedProducts'

function Home() {
  
 
  return (
   <>
   <TopNavBar/>  
   <NavBar/>
   <HeroSection/>
   <DisplayCategory/>
   <FeaturedProducts/>
   </>
  )
}

export default Home