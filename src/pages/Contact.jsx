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

        // Format the message for WhatsApp
        const whatsappMessage = `*New Enquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`
        
        // WhatsApp number (without + and spaces)
        const whatsappNumber = '917350996738'
        
        // Open WhatsApp with pre-filled message
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
        
        setTimeout(() => {
            window.open(whatsappURL, '_blank')
            setFormData({ name: '', phone: '', email: '', message: '' })
            setIsSubmitting(false)
        }, 500)
    }

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
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.0!2d73.7!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzAwLjAiTiA3M8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="K L LATIFIX Location"
                ></iframe>
            </section>
        </div>
    )
}

export default Contact
