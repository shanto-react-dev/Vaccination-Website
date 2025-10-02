import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'

const Layouts1 = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layouts1