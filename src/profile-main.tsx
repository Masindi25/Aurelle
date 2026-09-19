import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { getUser, logoutUser } from './data/auth'
import { products } from './data/products'
import './pages/profile.css'

function ProfilePage() {
  const user = getUser() ?? { name: 'Guest', email: 'Sign in to view your account' }
  const firstName = user.name.split(' ')[0]
  const wishlist = [products.find((product) => product.id === 'petal-kiss')!, products.find((product) => product.id === 'blush-hour')!]
  const signOut = () => { logoutUser(); window.location.href = '/' }

  return <div className="flow-page profile-page"><header className="flow-header"><a className="wordmark" href="/">Aurella</a><a href="/shop.html">Continue shopping</a></header><main className="flow-main"><div className="profile-top"><div><p className="flow-eyebrow">Your Aurella account</p><h1>Hello, <em>{firstName}.</em></h1></div><span className="profile-email">{user.email}</span></div><div className="profile-grid"><section className="profile-card wide"><h2>Recent orders</h2><div className="order-row"><span>#AUR 00482 · 18 Sep 2026</span><strong>R1,115.00</strong><b className="status">Delivered</b></div><div className="order-row"><span>#AUR 00421 · 02 Sep 2026</span><strong>R520.00</strong><b className="status">On its way</b></div><a className="profile-link" href="/cart.html">View order history</a></section><section className="profile-card"><h2>Your details</h2><p><strong>{user.name}</strong>{user.email}<br />Cape Town, South Africa</p><a className="profile-link" href="#details">Edit details</a></section><section className="profile-card"><h2>Saved pretty</h2><div className="wishlist-preview">{wishlist.map((product) => <img src={product.image} alt={product.name} key={product.id} />)}</div><a className="profile-link" href="/shop.html">Explore more</a></section><section className="profile-card"><h2>Ritual preferences</h2><p>Soft florals<br />Body care and fragrance<br />Early access updates</p><a className="profile-link" href="#preferences">Manage preferences</a></section><section className="profile-card wide"><h2>Make it yours</h2><p>Save your favourite scents, keep track of orders, and get first access to each new Aurella ritual.</p><div className="profile-actions"><a href="/shop.html">Shop the collection</a><a href="/cart.html">View your bag</a><button type="button" onClick={signOut}>Sign out</button></div></section></div></main></div>
}

createRoot(document.getElementById('root')!).render(<StrictMode><ProfilePage /></StrictMode>)
