import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { products, formatPrice } from './data/products'
import { addToCart } from './data/cart'
import { getWishlist, removeFromWishlist } from './data/wishlist'
import './pages/wishlist.css'

function WishlistPage() {
  const [saved, setSaved] = useState(getWishlist())
  const items = products.filter((product) => saved.includes(product.id))
  const remove = (id: string) => { removeFromWishlist(id); setSaved(getWishlist()) }

  return <div className="flow-page"><header className="flow-header"><a className="wordmark" href="/">Aurella</a><a href="/shop.html">Continue shopping</a></header><main className="flow-main"><div className="wishlist-heading"><div><p className="flow-eyebrow">Saved for later</p><h1>Your <em>favourites.</em></h1></div><span className="wishlist-count">{items.length} saved {items.length === 1 ? 'piece' : 'pieces'}</span></div>{items.length === 0 ? <section className="wishlist-empty"><span>♡</span><h2>Nothing saved yet.</h2><p>Keep the pieces that make you feel pretty close by.</p><a className="flow-button" href="/shop.html">Explore the collection</a></section> : <div className="wishlist-grid">{items.map((product) => <article className="wishlist-card" key={product.id}><div className="wishlist-image"><img src={product.image} alt={product.name} /><button className="remove-wishlist" type="button" aria-label={`Remove ${product.name}`} onClick={() => remove(product.id)}>×</button></div><div className="wishlist-info"><h2>{product.name}</h2><p>{product.type} · {formatPrice(product.price)}</p><div className="wishlist-actions"><a href={`/product.html?id=${product.id}`}>View details</a><button type="button" onClick={() => addToCart(product)}>Add to bag</button></div></div></article>)}</div>}</main></div>
}

createRoot(document.getElementById('root')!).render(<StrictMode><WishlistPage /></StrictMode>)
