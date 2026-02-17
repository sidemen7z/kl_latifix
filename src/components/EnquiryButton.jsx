import './EnquiryButton.css'

const EnquiryButton = () => {
    const handleWhatsAppClick = () => {
        const whatsappMessage = `Hello! I would like to know more about your products.`
        const whatsappNumber = '917350996738'
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
        window.open(whatsappURL, '_blank')
    }

    return (
        <button 
            className="floating-whatsapp-btn"
            onClick={handleWhatsAppClick}
            aria-label="Chat on WhatsApp"
        >
            <svg viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 0C7.164 0 0 7.164 0 16c0 2.828.736 5.484 2.016 7.792L0 32l8.384-2.016A15.934 15.934 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.344c-2.476 0-4.828-.672-6.84-1.84l-.492-.292-5.096 1.224 1.224-5.096-.292-.492A13.28 13.28 0 012.656 16c0-7.364 5.98-13.344 13.344-13.344S29.344 8.636 29.344 16 23.364 29.344 16 29.344zm7.308-9.968c-.4-.2-2.368-1.168-2.736-1.3-.368-.132-.636-.2-.904.2-.268.4-1.036 1.3-1.268 1.568-.232.268-.468.3-.868.1-.4-.2-1.688-.62-3.216-1.98-1.188-1.056-1.992-2.36-2.224-2.76-.232-.4-.024-.616.176-.816.18-.18.4-.468.6-.7.2-.232.268-.4.4-.668.132-.268.068-.5-.032-.7-.1-.2-.904-2.176-1.24-2.98-.328-.784-.66-.676-.904-.688-.232-.012-.5-.016-.768-.016s-.7.1-1.068.5c-.368.4-1.404 1.372-1.404 3.344s1.436 3.88 1.636 4.148c.2.268 2.828 4.316 6.852 6.052.956.412 1.704.66 2.288.844.96.304 1.836.26 2.528.156.772-.116 2.368-.968 2.7-1.904.332-.936.332-1.74.232-1.904-.1-.164-.368-.264-.768-.464z"/>
            </svg>
        </button>
    )
}

export default EnquiryButton
