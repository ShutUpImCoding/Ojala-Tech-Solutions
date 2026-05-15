import { HashRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import './App.css'

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </LanguageProvider>
  )
}
