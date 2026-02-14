import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            if (isMobileMenuOpen) return // Don't hide navbar if menu is open

            const currentScrollY = window.scrollY

            // Determine visibility (Hide when scrolling down > 50px, Show when scrolling up)
            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setIsVisible(true)
            } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false)
            }

            // Determine if sticky style should apply
            setIsScrolled(currentScrollY > 50)

            lastScrollY = currentScrollY
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isMobileMenuOpen])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${!isVisible ? 'navbar-hidden' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <div className="logo-content">
                        <img src="/logo.png" alt="K L LATIFIX" className="logo-image" />
                        <div className="logo-text">
                            <h2 className="logo-title">K L LATIFIX</h2>
                            <p className="logo-tagline">With European Technology</p>
                        </div>
                    </div>
                </Link>

                <button
                    className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navbar-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                    <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a href="#products" onClick={() => scrollToSection('products')}>Products</a></li>
                    <li><a href="#videos" onClick={() => scrollToSection('videos')}>Videos</a></li>
                    <li><a href="#why-choose-us" onClick={() => scrollToSection('why-choose-us')}>Why Choose Us</a></li>
                    <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary btn-nav">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
