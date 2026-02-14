import { useParams, Link } from 'react-router-dom'
import { productsData } from '../data/products'
import './ProductDetail.css'

const ProductDetail = () => {
    const { productId } = useParams()
    const product = productsData[productId]

    if (!product) {
        return (
            <div className="product-not-found">
                <div className="container">
                    <h1>Product Not Found</h1>
                    <p>The product you're looking for doesn't exist.</p>
                    <Link to="/" className="btn btn-primary">Back to Home</Link>
                </div>
            </div>
        )
    }

    const handleDownloadBrochure = () => {
        alert('Brochure download will be available soon!')
    }

    const handleEnquiry = () => {
        window.location.href = '/contact'
    }

    return (
        <div className="product-detail-page">
            {/* Hero Section */}
            <section className="product-hero">
                <div className="product-hero-overlay"></div>
                <div className="container">
                    <div className="product-hero-content">
                        <div className="product-breadcrumb">
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <Link to="/#products">Products</Link>
                            <span>/</span>
                            <span>{product.name}</span>
                        </div>
                        <h1 className="product-hero-title">{product.name}</h1>
                        <p className="product-hero-subtitle">{product.shortDesc}</p>
                        <div className="product-hero-buttons">
                            <button className="btn btn-primary btn-large" onClick={handleEnquiry}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M2.5 6.66667L10 11.6667L17.5 6.66667M3.33333 15H16.6667C17.5871 15 18.3333 14.2538 18.3333 13.3333V6.66667C18.3333 5.74619 17.5871 5 16.6667 5H3.33333C2.41286 5 1.66667 5.74619 1.66667 6.66667V13.3333C1.66667 14.2538 2.41286 15 3.33333 15Z" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                                <span>Send Enquiry</span>
                            </button>
                            <button className="btn btn-secondary btn-large" onClick={handleDownloadBrochure}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 12.5L6.25 8.75M10 12.5L13.75 8.75M10 12.5V3.125M16.875 12.5V15.625C16.875 16.1223 16.4723 16.525 15.975 16.525H4.025C3.52766 16.525 3.125 16.1223 3.125 15.625V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Download Brochure</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details */}
            <section className="product-details-section section section-white">
                <div className="container">
                    <div className="product-details-grid">
                        {/* Product Image */}
                        <div className="product-image-section">
                            <div className="product-image-large">
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-detail-image"
                                        onError={(e) => {
                                            e.target.style.display = 'none'
                                            e.target.nextSibling.style.display = 'flex'
                                        }}
                                    />
                                ) : null}
                                <div className="product-image-placeholder-large" style={product.image ? { display: 'none' } : {}}>
                                    <div className="product-icon-large">📦</div>
                                </div>
                                <span className="product-category-badge-large">{product.category}</span>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="product-info-section">
                            <h2 className="product-info-title">Product Overview</h2>
                            <p className="product-full-desc">{product.fullDesc}</p>

                            {/* Features */}
                            <div className="product-features-section">
                                <h3 className="features-title">Key Features</h3>
                                <div className="features-grid">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="feature-item">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="specifications-section section section-light">
                <div className="container">
                    <h2 className="section-title">Technical Specifications</h2>
                    <div className="specifications-table">
                        {Object.entries(product.specifications).map(([key, value], index) => (
                            <div key={index} className="spec-row">
                                <div className="spec-label">{key}</div>
                                <div className="spec-value">{value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="applications-detail-section section section-white">
                <div className="container">
                    <h2 className="section-title">Applications</h2>
                    <div className="applications-list">
                        {product.applications.map((application, index) => (
                            <div key={index} className="application-item">
                                <div className="application-number">{String(index + 1).padStart(2, '0')}</div>
                                <p>{application}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="product-cta-section section section-dark">
                <div className="container">
                    <div className="product-cta-content">
                        <h2 className="product-cta-title">Interested in {product.name}?</h2>
                        <p className="product-cta-text">
                            Get in touch with our team for pricing, availability, and technical support
                        </p>
                        <div className="product-cta-buttons">
                            <button className="btn btn-primary btn-large" onClick={handleEnquiry}>
                                Send Enquiry
                            </button>
                            <Link to="/#products" className="btn btn-secondary btn-large">
                                View All Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetail
