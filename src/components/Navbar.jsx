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
            if (isMobileMenuOpen) return

            const currentScrollY = window.scrollY

            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setIsVisible(true)
            } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false)
            }

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
        <>
            <div 
                className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

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
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul className={`navbar-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                        {/* Desktop Menu Items */}
                        <li className="desktop-menu-item"><Link to="/">Home</Link></li>
                        <li className="desktop-menu-item"><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
                        <li className="desktop-menu-item"><a href="#products" onClick={() => scrollToSection('products')}>Products</a></li>
                        <li className="desktop-menu-item"><a href="#videos" onClick={() => scrollToSection('videos')}>Videos</a></li>
                        <li className="desktop-menu-item"><a href="#why-choose-us" onClick={() => scrollToSection('why-choose-us')}>Why Choose Us</a></li>
                        <li className="desktop-menu-item"><Link to="/contact" className="btn btn-primary btn-nav">Contact Us</Link></li>

                        {/* Mobile Menu - Premium Sidebar */}
                        <div className="mobile-menu-header">
                            <div className="mobile-menu-logo">
                                <h3 className="mobile-menu-logo-title">KL LATIFIX</h3>
                                <p className="mobile-menu-logo-subtitle">European Technology</p>
                            </div>
                        </div>

                        <div className="mobile-menu-items">
                            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="active">Home</Link></li>
                            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
                            <li><a href="#products" onClick={() => scrollToSection('products')}>Products</a></li>
                            <li><a href="#videos" onClick={() => scrollToSection('videos')}>Videos</a></li>
                            <li><a href="#why-choose-us" onClick={() => scrollToSection('why-choose-us')}>Why Choose Us</a></li>
                        </div>

                        <div className="mobile-menu-footer">
                            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary btn-nav mobile-contact-btn">
                                Contact Us
                            </Link>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
