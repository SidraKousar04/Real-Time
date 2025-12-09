
import { Route, Routes } from 'react-router'
import './App.css'
import LandingPage from './pages/LandingPage'
import AdminPage from './pages/AdminPage'
import { Navigate } from 'react-router'
import LearnMore from './components/LearnMore'


function App() {
 

  return (
    <>
    
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path='/admin' element={<AdminPage/>} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/learn-more" element={<LearnMore/>} />
    </Routes>
     
    </>
  )
}

export default App
