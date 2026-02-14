import { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            alert('Thank you for your enquiry! We will get back to you soon.')
            setFormData({ name: '', phone: '', email: '', message: '' })
            setIsSubmitting(false)
        }, 1500)
    }

    const contactInfo = [
        {
            icon: '📍',
            title: 'Address',
            details: ['Gat No. 138, Kasurdi K.B,', 'Khed, Shivapur,', 'Pune - 412205']
        },
        {
            icon: '📞',
            title: 'Phone',
            details: ['+91 73509 96738', '+91 70422 60431']
        },
        {
            icon: '✉️',
            title: 'Email',
            details: ['kllatifix26@gmail.com']
        },
        {
            icon: '🌐',
            title: 'Website',
            details: ['www.kllatifix.com']
        }
    ]

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-overlay"></div>
                <div className="container">
                    <div className="contact-hero-content">
                        <h1 className="contact-hero-title">Get In Touch</h1>
                        <p className="contact-hero-subtitle">
                            Have questions about our products? We're here to help!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="contact-info-section section section-light">
                <div className="container">
                    <div className="contact-info-grid">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="contact-info-card">
                                <div className="contact-info-icon">{info.icon}</div>
                                <h3 className="contact-info-title">{info.title}</h3>
                                <div className="contact-info-details">
                                    {info.details.map((detail, idx) => (
                                        <p key={idx}>{detail}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="contact-form-section section section-white">
                <div className="container">
                    <div className="contact-form-wrapper">
                        <div className="contact-form-header">
                            <h2 className="contact-form-title">Send Us A Message</h2>
                            <p className="contact-form-subtitle">
                                Fill out the form below and our team will get back to you within 24 hours
                            </p>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    placeholder="Tell us about your requirements..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-large btn-submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner"></span>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M17.5 2.5L8.75 11.25M17.5 2.5L11.875 17.5L8.75 11.25M17.5 2.5L2.5 8.125L8.75 11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="map-placeholder">
                    <div className="map-icon">📍</div>
                    <p>Gat No. 138, Kasurdi K.B, Khed, Shivapur, Pune - 412205</p>
                </div>
            </section>
        </div>
    )
}

export default Contact
