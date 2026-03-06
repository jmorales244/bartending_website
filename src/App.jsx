import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Category from './pages/Category'
import DrinkPage from './pages/DrinkPage'
import Menu from "./pages/Menu"
import Book from './pages/Book'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />

        <Route path="/menu" element={<Layout><Menu /></Layout>} /> 
        
        <Route path="/book" element={<Layout><Book /></Layout>} />

        <Route path="/category/:categoryId" element={<Layout><Category /></Layout>} />

        <Route path="/drink/:drinkId" element={<Layout><DrinkPage /></Layout>} />
      </Routes>
    </div>
  )
}

export default App