import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-overlay">
      <div className="loading-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-logo">
          <img src="/logo.png" alt="Loading" />
        </div>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  )
}

export default LoadingSpinner
