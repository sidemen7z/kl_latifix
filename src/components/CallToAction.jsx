import { Link } from 'react-router-dom'
import './CallToAction.css'

const CallToAction = () => {
    const scrollToProducts = () => {
        const element = document.getElementById('products')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="cta-section">
            <div className="cta-overlay"></div>
            <div className="container">
                <div className="cta-content">
                    <div className="cta-badge">
                        <span className="cta-badge-dot"></span>
                        <span>Premium Quality Guaranteed</span>
                    </div>
                    
                    <h2 className="cta-title">
                        At K L Latifix Pvt. Ltd., we pride ourselves on offering the 
                        <span className="cta-highlight"> highest quality tile adhesives</span>
                    </h2>
                    
                    <p className="cta-subtitle">
                        So why wait? Browse our range today and find the perfect tile adhesive for your next project.
                    </p>
                    
                    <div className="cta-buttons">
                        <button className="btn-cta-primary" onClick={scrollToProducts}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M3 3H17V17H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7 7H13M7 10H13M7 13H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Browse Our Products</span>
                        </button>
                        
                        <Link to="/contact" className="btn-cta-secondary">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2.5 6.66667L10 11.6667L17.5 6.66667M3.33333 15H16.6667C17.5871 15 18.3333 14.2538 18.3333 13.3333V6.66667C18.3333 5.74619 17.5871 5 16.6667 5H3.33333C2.41286 5 1.66667 5.74619 1.66667 6.66667V13.3333C1.66667 14.2538 2.41286 15 3.33333 15Z" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            <span>Contact Us</span>
                        </Link>
                    </div>
                    
                    <div className="cta-features">
                        <div className="cta-feature">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>ISO Certified</span>
                        </div>
                        <div className="cta-feature">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M13 10V3L4 14H11L11 21L20 10L13 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>European Technology</span>
                        </div>
                        <div className="cta-feature">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Premium Quality</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction
