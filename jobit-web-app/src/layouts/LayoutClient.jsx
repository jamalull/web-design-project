import React from 'react'
import NavbarClients from '../components/clients/NavbarClients'
import { Outlet } from 'react-router-dom'
import Footer from '../components/clients/Footer'

export default function LayoutClient() {
  return (
    <>
      <NavbarClients/>
      <Outlet/>
      <Footer/>
    </>
  )
}
