import { useEffect, useRef, useState } from 'react'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
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

    const reasons = [
        {
            icon: '🏅',
            title: 'ISO 9001:2015 Certified',
            description: 'Quality management system certified to international standards'
        },
        {
            icon: '🌍',
            title: 'ISO 14001:2018 Certified',
            description: 'Environmental management system ensuring sustainable practices'
        },
        {
            icon: '✅',
            title: 'CE Marked Products',
            description: 'Products meet European safety and quality standards'
        },
        {
            icon: '🔬',
            title: 'European Technology',
            description: 'Advanced formulations using cutting-edge European technology'
        },
        {
            icon: '💪',
            title: 'High Bond Strength',
            description: 'Superior adhesion for long-lasting and reliable installations'
        },
        {
            icon: '⏰',
            title: 'Long Lasting Performance',
            description: 'Durable solutions engineered for extended service life'
        }
    ]

    return (
        <section
            id="why-choose-us"
            ref={sectionRef}
            className={`section section-dark why-section ${isVisible ? 'why-visible' : ''}`}
        >
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title text-white">Why Choose K L Latifix?</h2>
                    <p className="section-subtitle text-white">
                        Industry-leading certifications and proven performance that sets us apart
                    </p>
                </div>

                <div className="reasons-grid">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="reason-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="reason-icon-wrapper">
                                <div className="reason-icon">{reason.icon}</div>
                            </div>
                            <h3 className="reason-title">{reason.title}</h3>
                            <p className="reason-description">{reason.description}</p>
                            <div className="reason-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
