import { useEffect, useRef, useState } from 'react'
import './About.css'

const About = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const highlights = [
        {
            icon: '⭐',
            title: 'Premium Quality Standards',
            description: 'Strict quality control measures ensuring superior product performance'
        },
        {
            icon: '💰',
            title: 'Cost-Optimized Solutions',
            description: 'Competitive pricing without compromising on quality'
        },
        {
            icon: '🚚',
            title: 'Timely & Reliable Delivery',
            description: 'Efficient logistics ensuring on-time project completion'
        }
    ]

    return (
        <section
            id="about"
            ref={sectionRef}
            className={`section section-white about-section ${isVisible ? 'about-visible' : ''}`}
        >
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="about-title">About K L Latifix Pvt. Ltd.</h2>
                        <div className="about-text">
                            <p>
                                K L Latifix Pvt. Ltd. is a professionally managed manufacturing company
                                engaged in the production of high-quality tiles and tile adhesive solutions.
                            </p>
                            <p>
                                With a strong focus on innovation, consistency, and performance, we manufacture
                                products that meet modern construction standards and site requirements.
                            </p>
                            <p>
                                Our manufacturing process follows strict quality control measures to ensure
                                durability, reliability, and long-lasting results.
                            </p>
                            <p>
                                We are committed to delivering cost-effective and dependable solutions while
                                maintaining customer satisfaction as our top priority.
                            </p>
                        </div>
                    </div>

                    <div className="about-highlights">
                        {highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="highlight-card"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="highlight-icon">{highlight.icon}</div>
                                <div className="highlight-content">
                                    <h3 className="highlight-title">{highlight.title}</h3>
                                    <p className="highlight-description">{highlight.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
