import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { productsData, categories } from '../data/products'
import './Products.css'

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('All Products')
    const [visibleProducts, setVisibleProducts] = useState(new Set())
    const productRefs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.dataset.index
                        setVisibleProducts((prev) => new Set([...prev, index]))
                    }
                })
            },
            { threshold: 0.1 }
        )

        productRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref)
        })

        return () => observer.disconnect()
    }, [selectedCategory])

    const filteredProducts = Object.values(productsData).filter(
        (product) =>
            selectedCategory === 'All Products' || product.category === selectedCategory
    )

    return (
        <section id="products" className="section section-light products-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Premium Products</h2>
                    <p className="section-subtitle">
                        Comprehensive range of construction chemical solutions engineered with European technology
                    </p>
                </div>

                <div className="category-filter">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`category-btn ${selectedCategory === category ? 'category-btn-active' : ''
                                }`}
                            onClick={() => {
                                setSelectedCategory(category)
                                setVisibleProducts(new Set())
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="products-grid">
                    {filteredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            ref={(el) => (productRefs.current[index] = el)}
                            data-index={index}
                            className={`product-card ${visibleProducts.has(String(index)) ? 'product-card-visible' : ''
                                }`}
                            style={{ animationDelay: `${(index % 3) * 0.1}s` }}
                        >
                            <div className="product-image-wrapper">
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-image"
                                        onError={(e) => {
                                            e.target.style.display = 'none'
                                            e.target.nextSibling.style.display = 'flex'
                                        }}
                                    />
                                ) : null}
                                <div className="product-image-placeholder" style={product.image ? { display: 'none' } : {}}>
                                    <div className="product-icon">📦</div>
                                </div>
                                <span className="product-category-badge">{product.category}</span>
                            </div>

                            <div className="product-content">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-short-desc">{product.shortDesc}</p>

                                <div className="product-features-preview">
                                    {product.features.slice(0, 3).map((feature, idx) => (
                                        <div key={idx} className="feature-tag">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path
                                                    d="M13.3333 4L6 11.3333L2.66667 8"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link to={`/product/${product.id}`} className="btn btn-outline btn-product">
                                    View Details
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M7.5 15L12.5 10L7.5 5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products
