import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { addToCart } from './data/cart'
import { findProduct, formatPrice, products } from './data/products'
import { isWishlisted, toggleWishlist } from './data/wishlist'
import './pages/flow.css'

function ProductPage() {
  const product = findProduct(new URLSearchParams(location.search).get('id'))
  const [size, setSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [saved, setSaved] = useState(isWishlisted(product.id))
  const [added, setAdded] = useState(false)
  const related = products.filter((item) => item.id !== product.id && product.layerWith.includes(item.name)).slice(0, 3)
  return <div className="flow-page"><header className="flow-header"><a className="wordmark" href="/">Aurella</a><a href="/shop.html">Back to shop</a></header><main className="flow-main"><div className="detail-layout"><div className="detail-image"><img src={product.image} alt={product.name} /></div><div className="detail-copy"><p className="eyebrow">{product.type}</p><h1>{product.name}</h1><span className="stars">★★★★★</span> <small>{product.rating} · Loved by the Aurella community</small><strong className="detail-price">{formatPrice(product.price)}</strong><p className="detail-description">{product.description}</p><span className="option-label">Scent notes</span><p className="detail-type">{product.notes.join(' · ')}</p><span className="option-label">Size</span><div className="size-options">{product.sizes.map((option) => <button className={size === option ? 'active' : ''} type="button" onClick={() => setSize(option)} key={option}>{option}</button>)}</div><span className="option-label">Quantity</span><div className="quantity"><button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button><span>{quantity}</span><button type="button" onClick={() => setQuantity(quantity + 1)}>+</button></div><div className="detail-actions"><button className="flow-button" type="button" onClick={() => { addToCart(product, size, quantity); setAdded(true) }}>{added ? 'Added to bag' : 'Add to bag'}</button><button className="wishlist-button" type="button" onClick={() => setSaved(!saved)}>{saved ? '♥ Saved' : '♡ Add to wishlist'}</button></div></div></div><section className="recommendations"><p className="eyebrow">Layer it with</p><h2>You might also like</h2><div className="recommendation-grid">{related.map((item) => <a className="recommendation-card" href={`/product.html?id=${item.id}`} key={item.id}><img src={item.image} alt={item.name} /><div><h3>{item.name}</h3><p>{item.type} · {formatPrice(item.price)}</p></div></a>)}</div></section></main></div>
}
createRoot(document.getElementById('root')!).render(<StrictMode><ProductPage /></StrictMode>)
