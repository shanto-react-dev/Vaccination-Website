import React from 'react'
import Logo from '../Components/Company-Logo/Logo'
import Check from '../Components/Check/Check'
import Vaccinated from '../Components/Vaccinated/Vaccinated'
import Registration from '../Components/Registration/Registration'
import Symtoms from '../Components/Symtoms/Symtoms'
import Feedback from '../Components/Feedback/Feedback'

const Home = () => {
  return (
    <>
      <Logo />
      <Check />
      <Vaccinated />
      <Registration />
      <Symtoms />
      <Feedback />
    </>
  )
}

export default Home