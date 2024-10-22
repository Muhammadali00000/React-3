import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Section from './components/Section/Section'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import Button from './components/Button/Button'
import Wrapper from './components/Wrapper/Wrapper'
import About from './components/About/About'

const App = () => {
  return (
    <>
    <Header/>
    <Footer/>
    <Section/>
    <Hero/>
    <About/>
    <Card/>
    <Button/>
    <Wrapper/>
    </>
  )
}

export default App