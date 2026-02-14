import { useEffect, useRef, useState } from 'react'
import './ApplicationAreas.css'

const ApplicationAreas = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const applications = [
        { icon: '🏠', title: 'Residential Construction', color: '#3b82f6' },
        { icon: '🏢', title: 'Commercial Projects', color: '#2563eb' },
        { icon: '🏊', title: 'Swimming Pools', color: '#1d4ed8' },
        { icon: '🚿', title: 'Bathrooms', color: '#60a5fa' },
        { icon: '🌆', title: 'Balconies', color: '#93c5fd' },
        { icon: '🧱', title: 'Exterior Walls', color: '#0e2a47' }
    ]

    return (
        <section
            id="applications"
            ref={sectionRef}
            className={`section section-light applications-section ${isVisible ? 'applications-visible' : ''}`}
        >
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Application Areas</h2>
                    <p className="section-subtitle">
                        Versatile solutions for diverse construction and renovation projects
                    </p>
                </div>

                <div className="applications-grid">
                    {applications.map((app, index) => (
                        <div
                            key={index}
                            className="application-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="application-icon-bg" style={{ background: `${app.color}15` }}>
                                <div className="application-icon" style={{ color: app.color }}>
                                    {app.icon}
                                </div>
                            </div>
                            <h3 className="application-title">{app.title}</h3>
                            <div className="application-shine"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ApplicationAreas
