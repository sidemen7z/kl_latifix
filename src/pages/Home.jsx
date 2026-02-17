import Hero from '../components/Hero'
import About from '../components/About'
import VisionMission from '../components/VisionMission'
import Products from '../components/Products'
import VideoShowcase from '../components/VideoShowcase'
import WhyChooseUs from '../components/WhyChooseUs'
import ApplicationAreas from '../components/ApplicationAreas'
import CallToAction from '../components/CallToAction'

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <VisionMission />
            <Products />
            <VideoShowcase />
            <WhyChooseUs />
            <ApplicationAreas />
            <CallToAction />
        </main>
    )
}

export default Home
