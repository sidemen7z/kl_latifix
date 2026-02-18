import { useState } from 'react'
import './VideoShowcase.css'

const VideoShowcase = () => {
    const [activeVideo, setActiveVideo] = useState(0)

    const videos = [
        {
            id: 1,
            title: 'LATIFIX 525 - Premium Tile Adhesive',
            description: 'See how our LATIFIX 525 tile adhesive delivers superior performance on every project.',
            thumbnail: '/logo.png',
            videoUrl: '/videos/5.mp4',
            category: 'Product Showcase'
        }
    ]

    return (
        <section className="video-showcase section" id="videos">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        See Our Solutions in Action
                    </h2>
                    <p className="section-subtitle">
                        Watch how K L LATIFIX products deliver exceptional results in real-world applications
                    </p>
                </div>

                <div className="video-showcase-grid">
                    {/* Main Video Player */}
                    <div className="main-video-container">
                        <div className="video-player-wrapper">
                            <video
                                key={activeVideo}
                                className="main-video-player"
                                controls
                                autoPlay
                                muted
                                loop
                            >
                                <source src={videos[activeVideo].videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="video-info">
                            <span className="video-category">{videos[activeVideo].category}</span>
                            <h3 className="video-title">{videos[activeVideo].title}</h3>
                            <p className="video-description">{videos[activeVideo].description}</p>
                        </div>
                    </div>

                    {/* Video Thumbnails */}
                    <div className="video-thumbnails">
                        {videos.map((video, index) => (
                            <div
                                key={video.id}
                                className={`video-thumbnail ${activeVideo === index ? 'active' : ''}`}
                                onClick={() => setActiveVideo(index)}
                            >
                                <div className="thumbnail-image">
                                    <img src={video.thumbnail} alt={video.title} />
                                    <div className="play-overlay">
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                            <circle cx="24" cy="24" r="24" fill="white" fillOpacity="0.9" />
                                            <path d="M20 16L32 24L20 32V16Z" fill="#2563eb" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="thumbnail-info">
                                    <span className="thumbnail-category">{video.category}</span>
                                    <h4 className="thumbnail-title">{video.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoShowcase
