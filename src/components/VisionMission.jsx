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
                        <ul className="vm-list">
                            <li>To be a pioneer in providing innovative and high-quality tile adhesive and construction solutions, focusing on long-lasting performance while caring for the environment and the health of users.</li>
                            <li>To promote increasingly sustainable building solutions in the name of innovation, delivering products that are mindful of both people and the planet.</li>
                        </ul>
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
                        <ul className="vm-list">
                            <li>To provide customers with cutting-edge tile and stone fixing solutions.</li>
                            <li>To combine global expertise with advanced technology in tiles, stone fixing, joint fillers, waterproofing chemicals, sealers, sealants, and construction solutions.</li>
                            <li>To deliver highly responsive and quick service while reducing carbon footprint.</li>
                            <li>To offer on-site training to contractors and applicators using advanced construction techniques.</li>
                            <li>To build close, long-lasting win-win relationships with customers.</li>
                            <li>To improve working conditions and help develop knowledge and skills within the construction industry.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisionMission
