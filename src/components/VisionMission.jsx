import './VisionMission.css'

const VisionMission = () => {
    return (
        <section className="vision-mission section section-light" id="vision-mission">
            <div className="container">
                <div className="vision-mission-grid">
                    {/* Vision */}
                    <div className="vm-card">
                        <div className="vm-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M24 8C14 8 6 16 6 24C6 32 14 40 24 40C34 40 42 32 42 24C42 16 34 8 24 8Z" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18Z" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3 className="vm-title">Our Vision</h3>
                        <p className="vm-description">
                            To be the most trusted and preferred brand in construction chemical solutions across India, 
                            setting industry standards through innovation, quality, and customer satisfaction.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="vm-card">
                        <div className="vm-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M24 6L6 16L24 26L42 16L24 6Z" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 32L24 42L42 32" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 24L24 34L42 24" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3 className="vm-title">Our Mission</h3>
                        <p className="vm-description">
                            To deliver premium quality construction chemical solutions engineered with European technology, 
                            ensuring superior performance, durability, and value for our customers while maintaining the highest 
                            standards of safety and environmental responsibility.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisionMission
