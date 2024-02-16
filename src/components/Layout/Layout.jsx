import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Filters from '../Filters/Filters'

const Layout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 col-12 bg-black position-fixed" style={{ height: '100vh', overflowY: 'auto' }}>
          <Sidebar />
        </div>
        <div className="col-md-10 col-sm-12 offset-md-2">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <Outlet />
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <Filters />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout