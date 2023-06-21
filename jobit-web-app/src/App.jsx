
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ErrorPage from './pages/ErrorPage'

import JobDetails from './components/clients/JobDetails'
import LayoutClient from './layouts/LayoutClient'
import LayoutDashboard from './layouts/LayoutDashboard'

function App() {
  return (
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutClient/>}>
            {/* index mean the first page will be displayed */}
            <Route index element={<Home/>}/>
            <Route path='/jobdetails' element={<JobDetails/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Route>

          <Route path='/dashboard' element={<LayoutDashboard/>}>
            {/* index mean the first page will be displayed */}
            {/* <Route index element={<Home/>}/>
            <Route path='/jobdetails' element={<JobDetails/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='*' element={<ErrorPage/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
