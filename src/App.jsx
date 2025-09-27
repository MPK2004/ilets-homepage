import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import './index.css';

function App() {
  return (
    <div className="relative bg-gray-900 text-gray-300 font-sans">
      <div className="aurora-background" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </div>
  );
}

export default App;