import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Category from './pages/Category'
import DrinkPage from './pages/DrinkPage'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/category/:categoryId" element={<Layout><Category /></Layout>} />
        <Route path="/drink/:drinkId" element={<Layout><DrinkPage /></Layout>} />
      </Routes>
    </div>
  )
}

export default App