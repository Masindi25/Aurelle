import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { cartLinesWithProducts, updateCartLine } from './data/cart'
import { formatPrice } from './data/products'
import './pages/flow.css'

function CartPage() {
  const [, refresh] = useState(0)
  const lines = cartLinesWithProducts()
  const subtotal = lines.reduce((total, line) => total + line.product.price * line.quantity, 0)
  const shipping = subtotal === 0 || subtotal >= 1000 ? 0 : 75
  return <div className="flow-page"><header className="flow-header"><a className="wordmark" href="/">Aurella</a><a href="/shop.html">Continue shopping</a></header><main className="flow-main"><p className="flow-eyebrow">Your pretty picks</p><h1 className="flow-title">Your <em>bag.</em></h1>{lines.length === 0 ? <div className="empty-cart"><span>♡</span><h2>Your bag is waiting.</h2><p>Fill it with something that makes an ordinary day feel lovely.</p><a className="flow-button" href="/shop.html">Explore the collection</a></div> : <div className="cart-layout"><section>{lines.map((line, index) => <article className="cart-line" key={`${line.productId}-${line.size}`}><img src={line.product.image} alt={line.product.name} /><div><h3>{line.product.name}</h3><p>{line.product.type} · {line.size}</p><div className="quantity"><button type="button" onClick={() => { updateCartLine(index, line.quantity - 1); refresh((value) => value + 1) }}>−</button><span>{line.quantity}</span><button type="button" onClick={() => { updateCartLine(index, line.quantity + 1); refresh((value) => value + 1) }}>+</button></div></div><div className="cart-line-price"><strong>{formatPrice(line.product.price * line.quantity)}</strong><br /><button className="text-button" type="button" onClick={() => { updateCartLine(index, 0); refresh((value) => value + 1) }}>Remove</button></div></article>)}</section><aside className="summary cart-summary"><h2>Summary</h2><div className="summary-row"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div><div className="summary-row"><span>Shipping</span><strong>{shipping === 0 ? 'Free' : formatPrice(shipping)}</strong></div><div className="promo"><input placeholder="Promo code" aria-label="Promo code" /><button type="button">Apply</button></div><div className="summary-row summary-total"><span>Estimated total</span><strong>{formatPrice(subtotal + shipping)}</strong></div><a className="flow-button" href="/checkout.html">Checkout</a></aside></div>}</main></div>
}
createRoot(document.getElementById('root')!).render(<StrictMode><CartPage /></StrictMode>)
