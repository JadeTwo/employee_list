import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import EmployeePage from './pages/EmployeePage'

function App() {

  return (
    <>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/employee/:id" element={<EmployeePage />}  />
    </Routes>
      
    </>
  )
}

export default App
