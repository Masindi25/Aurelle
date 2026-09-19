import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { cartLinesWithProducts } from './data/cart'
import { formatPrice } from './data/products'
import './pages/flow.css'

function CheckoutPage() {
  const [complete, setComplete] = useState(false)
  const lines = cartLinesWithProducts()
  const subtotal = lines.reduce((total, line) => total + line.product.price * line.quantity, 0)
  const shipping = subtotal >= 1000 ? 0 : 75
  if (complete) return <div className="flow-page success-screen"><p className="flow-eyebrow">Aurella demo checkout</p><h1>Your order is<br /><em>ready to feel pretty.</em></h1><p>This frontend demo has completed the checkout journey. No payment was processed.</p><a className="flow-button" href="/shop.html">Return to shop</a></div>
  return <div className="flow-page"><header className="flow-header"><a className="wordmark" href="/">Aurella</a><a href="/cart.html">Back to bag</a></header><main className="flow-main"><p className="flow-eyebrow">Almost there</p><h1 className="flow-title">Demo <em>checkout.</em></h1><div className="checkout-layout"><form className="checkout-form" onSubmit={(event) => { event.preventDefault(); setComplete(true) }}><h2>Delivery details</h2><label className="full">Email address<input type="email" required /></label><label>First name<input required /></label><label>Last name<input required /></label><label className="full">Address<input required /></label><label>City<input required /></label><label>Postal code<input required /></label><h2>Payment preview</h2><label className="full">Card number<input placeholder="0000 0000 0000 0000" required /></label><button className="flow-button full" type="submit">Place demo order</button></form><aside className="summary"><h2>Your order</h2>{lines.map((line) => <div className="summary-row" key={line.productId}><span>{line.product.name} × {line.quantity}</span><strong>{formatPrice(line.product.price * line.quantity)}</strong></div>)}<div className="summary-row"><span>Shipping</span><strong>{shipping === 0 ? 'Free' : formatPrice(shipping)}</strong></div><div className="summary-row summary-total"><span>Total</span><strong>{formatPrice(subtotal + shipping)}</strong></div><p className="demo-note">This is a polished frontend demo. No real payment will be taken.</p></aside></div></main></div>
}
createRoot(document.getElementById('root')!).render(<StrictMode><CheckoutPage /></StrictMode>)
