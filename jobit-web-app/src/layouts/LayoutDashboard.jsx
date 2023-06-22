import React from 'react'
import NavigationSideDashboard from '../components/admin/NavigationSideDashboard'
import NavbarDashboard from '../components/admin/NavbarDashboard'
import AddNewJob from '../components/admin/AddNewJob'

export default function LayoutDashboard() {
  return (
    <>
      <div className="flex">
        <div className="flex-none w-72">
          <NavigationSideDashboard/>
        </div>
        <div className="grow">
          <NavbarDashboard/>
          <AddNewJob/>
        </div>
      </div>
    </>
  )
}
