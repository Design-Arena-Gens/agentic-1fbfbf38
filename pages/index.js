import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>STARLINK | Fast, Reliable Internet</title>
        <meta name="description" content="High-speed, low-latency broadband internet across the globe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main-container">
        <header className="header">
          <div className="logo">STARLINK</div>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a href="#residential">RESIDENTIAL</a>
            <a href="#business">BUSINESS</a>
            <a href="#roam">ROAM</a>
            <a href="#maritime">MARITIME</a>
            <a href="#aviation">AVIATION</a>
            <a href="#support">SUPPORT</a>
            <a href="#account" className="account-btn">SIGN IN</a>
            <a href="#order" className="order-btn">ORDER NOW</a>
          </nav>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </header>

        <section className="hero-section">
          <div className="hero-content">
            <h1>HIGH-SPEED INTERNET</h1>
            <h2>AVAILABLE ALMOST ANYWHERE ON EARTH</h2>
            <button className="cta-button">ORDER NOW</button>
          </div>
          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
          </div>
        </section>

        <section className="features-section">
          <div className="feature-card">
            <div className="feature-image residential"></div>
            <div className="feature-content">
              <h3>RESIDENTIAL</h3>
              <p>High-speed, low-latency broadband internet in remote and rural locations across the globe.</p>
              <button className="learn-more">LEARN MORE</button>
            </div>
          </div>

          <div className="feature-card reverse">
            <div className="feature-content">
              <h3>BUSINESS</h3>
              <p>Reliable connectivity for businesses and enterprises with priority support and higher speeds.</p>
              <button className="learn-more">LEARN MORE</button>
            </div>
            <div className="feature-image business"></div>
          </div>

          <div className="feature-card">
            <div className="feature-image roam"></div>
            <div className="feature-content">
              <h3>ROAM</h3>
              <p>Stay connected while traveling on land with Starlink's portable, high-speed internet.</p>
              <button className="learn-more">LEARN MORE</button>
            </div>
          </div>

          <div className="feature-card reverse">
            <div className="feature-content">
              <h3>MARITIME</h3>
              <p>High-speed internet connectivity at sea for commercial shipping and maritime operations.</p>
              <button className="learn-more">LEARN MORE</button>
            </div>
            <div className="feature-image maritime"></div>
          </div>

          <div className="feature-card">
            <div className="feature-image aviation"></div>
            <div className="feature-content">
              <h3>AVIATION</h3>
              <p>Low-latency, high-throughput connectivity while in flight for aviation customers.</p>
              <button className="learn-more">LEARN MORE</button>
            </div>
          </div>
        </section>

        <section className="specs-section">
          <h2>TECHNICAL SPECIFICATIONS</h2>
          <div className="specs-grid">
            <div className="spec-item">
              <div className="spec-number">100+ Mbps</div>
              <div className="spec-label">Download Speed</div>
            </div>
            <div className="spec-item">
              <div className="spec-number">20ms</div>
              <div className="spec-label">Latency</div>
            </div>
            <div className="spec-item">
              <div className="spec-number">5,000+</div>
              <div className="spec-label">Satellites</div>
            </div>
            <div className="spec-item">
              <div className="spec-number">60+</div>
              <div className="spec-label">Countries</div>
            </div>
          </div>
        </section>

        <section className="coverage-section">
          <h2>GLOBAL COVERAGE</h2>
          <p>Starlink is ideally suited for areas where connectivity has been unreliable or completely unavailable.</p>
          <div className="coverage-map"></div>
          <button className="cta-button">CHECK AVAILABILITY</button>
        </section>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-column">
              <h4>STARLINK</h4>
              <a href="#about">About</a>
              <a href="#coverage">Coverage</a>
              <a href="#specs">Specifications</a>
            </div>
            <div className="footer-column">
              <h4>PRODUCTS</h4>
              <a href="#residential">Residential</a>
              <a href="#business">Business</a>
              <a href="#roam">Roam</a>
              <a href="#maritime">Maritime</a>
              <a href="#aviation">Aviation</a>
            </div>
            <div className="footer-column">
              <h4>SUPPORT</h4>
              <a href="#help">Help Center</a>
              <a href="#contact">Contact Us</a>
              <a href="#install">Installation</a>
            </div>
            <div className="footer-column">
              <h4>LEGAL</h4>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 STARLINK CLONE</p>
          </div>
        </footer>
      </div>
    </>
  )
}
