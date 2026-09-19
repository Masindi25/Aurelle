import { useEffect, useState, type ReactNode } from 'react'
import { cartCount } from '../data/cart'

type PageShellProps = { children: ReactNode; pageClass: string }

export function PageShell({ children, pageClass }: PageShellProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bagCount, setBagCount] = useState(0)

  useEffect(() => setBagCount(cartCount()), [])

  return (
    <div className={`page-shell ${pageClass}`}>
      <div className="announcement">Free shipping on orders over R1,000 <span>♡</span> Made to feel good</div>
      <header className="site-header">
        <button className="menu-toggle" type="button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}><span /> <span /></button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="/shop.html" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="/story.html" onClick={() => setMenuOpen(false)}>Our story</a>
          <a href="/journal.html" onClick={() => setMenuOpen(false)}>Journal</a>
        </nav>
        <a className="wordmark" href="/" aria-label="Aurella home">Aurella</a>
          <div className="header-actions"><a className="account-link" href="/profile.html">Account</a><button type="button" aria-label="Search" className="icon-button">⌕</button><a className="bag-button" href="/cart.html">Bag <span>{bagCount}</span></a></div>
      </header>
      <main>{children}</main>
      <footer className="site-footer"><div><a className="wordmark footer-wordmark" href="/">Aurella</a><p>Your everyday dose of pretty.</p></div><div className="footer-links"><a href="/shop.html">Shop</a><a href="/story.html">About us</a><a href="/journal.html">Journal</a><a href="/journal.html">Contact</a></div><p className="copyright">© 2026 Aurella Beauty</p></footer>
    </div>
  )
}
