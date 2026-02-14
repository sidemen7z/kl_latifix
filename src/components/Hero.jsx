import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const scrollToProducts = () => {
        const element = document.getElementById('products')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const stats = [
        { value: '15+', label: 'Years of Excellence', color: '#2563eb' },
        { value: '11', label: 'Premium Products', color: '#0E2A47' },
        { value: '500+', label: 'Projects Completed', color: '#2563eb' },
        { value: '100%', label: 'Quality Assured', color: '#0E2A47' }
    ]

    return (
        <section className="hero">
            <div className="container">
                <div className={`hero-grid ${isVisible ? 'hero-visible' : ''}`}>
                    {/* Left Content */}
                    <div className="hero-content-left">
                        <div className="hero-badge-corporate">
                            <span className="badge-dot"></span>
                            <span>ISO 9001:2015 & ISO 14001:2018 Certified</span>
                        </div>

                        <h1 className="hero-title-corporate">
                            Building Trust with
                            <span className="hero-highlight-corporate">Premium Quality</span>
                            Construction Solutions
                        </h1>

                        <p className="hero-subtitle-corporate">
                            Since our inception, we have been strengthening bonds with our customers
                            by delivering innovative tile adhesives and construction chemical solutions
                            engineered with European technology for superior performance.
                        </p>

                        <button className="btn-corporate-primary" onClick={scrollToProducts}>
                            <span>Explore Our Products</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Stats Section */}
                        <div className="hero-stats">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-item" style={{ '--stat-color': stat.color }}>
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="hero-content-right">
                        <div className="hero-image-wrapper">
                            <img
                                src="/logo.png"
                                alt="K L LATIFIX - Premium Construction Solutions"
                                className="hero-brand-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
