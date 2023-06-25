
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ErrorPage from './pages/ErrorPage'
import RestrictedPage from "./pages/RestrictedPage"

import LayoutClient from './layouts/LayoutClient'
import LayoutDashboard from './layouts/LayoutDashboard'

import JobDetails from './components/clients/JobDetails'
import HomeDashboard from "./components/admin/HomeDashboard"
import AddNewJob from "./components/admin/AddNewJob"
import AllJobList from "./components/admin/AllJobList"
import DetailsProfileUser from "./components/admin/DetailsProfileUser"
import ChangePassword from "./components/admin/ChangePassword"

import { GlobalProvider } from "./context/GlobalContext"
import Cookies from "js-cookie"
import EploreJobs from "./components/clients/ExploreJobs"

function App() {
  
  const HasLoginRoute = (props) => {
    if (Cookies.get('token') !== undefined) {
        return <Navigate to={'/'} />
    } else if (Cookies.get('token') === undefined) {
        return props.children
    }
  }
  const HasAdminRoute = (props) => {
    if (Cookies.get('token') === undefined) {
        return <Navigate to={'/restricted-page'} />
    } else if (Cookies.get('token') !== undefined) {
        return props.children
    }
  }

  return (
      
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path='/' element={<LayoutClient/>}>
              {/* index mean the first page will be displayed */}
              <Route index element={<Home/>}/>
              <Route path='jobdetails/:idData' element={<JobDetails/>}/>
              <Route path='signup' element={<HasLoginRoute> <SignUp/> </HasLoginRoute>}/>
              <Route path='signin' element={<HasLoginRoute> <SignIn/> </HasLoginRoute>}/>
              <Route path='explore-job' element={<EploreJobs/>}/>
              <Route path='restricted-page' element={<RestrictedPage/>}/>
              <Route path='*' element={<ErrorPage/>}/>
            </Route>

            
            <Route path='/dashboard' element={<HasAdminRoute> <LayoutDashboard/> </HasAdminRoute>}>
              <Route index element={<HomeDashboard/>}/>
              <Route path='postjob/' element={<AddNewJob/>}/>
              <Route path='editjob/:idData' element={<AddNewJob/>}/>
              <Route path='alljoblist' element={<AllJobList/>}/>
              <Route path='detailsprofile' element={<DetailsProfileUser/>}/>
              <Route path='changepassword' element={<ChangePassword/>}/>
              <Route path='*' element={<ErrorPage/>}/>
            </Route>
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
  )
}

export default App
