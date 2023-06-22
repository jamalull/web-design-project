import React from 'react'
import NavigationSideDashboard from '../components/admin/NavigationSideDashboard'
import NavbarDashboard from '../components/admin/NavbarDashboard'
import { Outlet } from "react-router"

export default function LayoutDashboard() {
  return (
    <>
      <div className="flex">
        <div className="flex-none w-72">
          <NavigationSideDashboard/>
        </div>
        <div className="grow">
          <NavbarDashboard/>
          <Outlet/>
        </div>
      </div>
    </>
  )
}
