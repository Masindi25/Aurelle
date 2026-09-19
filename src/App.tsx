import { useState } from 'react'
import './App.css'

function App() {
  const [bagCount, setBagCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <div className="announcement">Free shipping on orders over R1,000 <span>♡</span> Made to feel good</div>
      <header className="site-header">
        <button className="menu-toggle" type="button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}><span /> <span /></button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}><a href="/shop.html" onClick={() => setMenuOpen(false)}>Shop</a><a href="/story.html" onClick={() => setMenuOpen(false)}>Our story</a><a href="/journal.html" onClick={() => setMenuOpen(false)}>Journal</a></nav>
        <a className="wordmark" href="#top" aria-label="Aurella home">Aurella</a>
          <div className="header-actions"><a className="account-link" href="/profile.html">Account</a><button type="button" aria-label="Search" className="icon-button">⌕</button><button type="button" aria-label={`Shopping bag with ${bagCount} items`} className="bag-button" onClick={() => setBagCount(bagCount + 1)}>Bag <span>{bagCount}</span></button></div>
      </header>

      <main id="top">
        <section className="hero-section"><div className="hero-copy"><p className="eyebrow">Aurella fragrance, 01</p><h1>SMELL PRETTY.<br /><em>FEEL PRETTIER.</em></h1><p className="hero-description">Everyday fragrances and body care made for your prettiest rituals.</p><div className="hero-actions"><a className="button button-dark" href="/shop.html">Shop the collection</a><a className="text-link hero-story-link" href="/shop.html">Find your scent</a></div></div><div className="hero-art" aria-label="Aurella perfume bottle" role="img"><div className="art-caption">The pretty ritual <span>01</span></div><div className="sparkle sparkle-one">✦</div><div className="sparkle sparkle-two">✦</div><div className="hero-ribbon">Aurella <span>♡</span> Aurella <span>♡</span> Aurella</div><div className="hero-orbit" /><div className="hero-sun" /><div className="hero-flower"><span className="flower-petal flower-petal-top" /><span className="flower-petal flower-petal-right" /><span className="flower-petal flower-petal-bottom" /><span className="flower-petal flower-petal-left" /><span className="flower-center">♡</span></div><div className="hero-petal hero-petal-one" /><div className="hero-petal hero-petal-two" /></div></section>

        <section className="welcome-section"><div className="welcome-copy"><p className="eyebrow">Beauty for the everyday</p><h2>Make room for<br /><em>little luxuries.</em></h2><p>Aurella is a soft place to land. Thoughtful body care and fragrance for slow mornings, getting ready moments, and feeling like yourself again.</p><a className="text-link" href="/story.html">Meet Aurella</a></div><div className="welcome-art"><span className="welcome-sun" /><span className="welcome-stem">✿</span><span className="welcome-note">A little<br />something<br /><em>pretty</em></span></div></section>

        <section className="promise-strip" aria-label="The Aurella promise"><div><span>✦</span><strong>Soft on skin</strong><small>Thoughtful everyday formulas</small></div><div><span>♡</span><strong>Made to linger</strong><small>Beautiful, never overpowering</small></div><div><span>✧</span><strong>Always a little pretty</strong><small>Small rituals, big feeling</small></div></section>

        <section className="story-section" id="story"><div className="story-art"><div className="story-disc" /><div className="story-bow">୨୧</div></div><div className="story-copy"><p className="eyebrow">Aurella is coming soon</p><h2>Your everyday<br /><em>dose of pretty.</em></h2><p>We are creating a collection of body care and fragrance designed to make ordinary moments feel a little more yours.</p><a className="button button-dark" href="/shop.html">Explore the collection</a></div></section>

        <section className="quote-section" id="journal"><span className="quote-mark">“</span><blockquote>Feel good beauty for the<br /><em>soft hearted.</em></blockquote><p><a href="/journal.html">The Aurella journal</a></p></section>
      </main>

      <footer className="site-footer"><div><a className="wordmark footer-wordmark" href="/">Aurella</a><p>Your everyday dose of pretty.</p></div><div className="footer-links"><a href="/shop.html">Shop</a><a href="/story.html">About us</a><a href="/journal.html">Contact</a><a href="/journal.html">Instagram</a></div><p className="copyright">© 2026 Aurella Beauty</p></footer>
    </div>
  )
}

export default App
