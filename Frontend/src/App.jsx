import './App.css'
import { Routes, Route } from 'react-router-dom'
import AuthLayout from './components/auth/layout'

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/auth' element={<AuthLayout />} />
      </Routes>
    </div>
  )
}

export default App
