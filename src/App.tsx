import { Outlet } from 'react-router'

import './App.css'
import ThemeProvider from './contexts/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  )
}

export default App
