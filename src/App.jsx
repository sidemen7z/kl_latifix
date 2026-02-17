import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import EnquiryButton from './components/EnquiryButton'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'

function App() {
    const location = useLocation()

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [location.pathname])

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <ScrollToTop />
            <EnquiryButton />
        </div>
    )
}

export default App
