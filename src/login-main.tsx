import { StrictMode, useState, type FormEvent } from 'react'
import { createRoot } from 'react-dom/client'
import { loginUser } from './data/auth'
import './pages/login.css'

function LoginPage() {
  const [error, setError] = useState('')

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const success = loginUser(String(form.get('email')), String(form.get('password')))
    if (success) window.location.href = '/profile.html'
    else setError('We could not find that account. Register first or check your details.')
  }

  return <main className="auth-page login-page"><section className="auth-art" aria-label="Aurella floral artwork"><div className="auth-flower">✿</div><div className="auth-art-copy"><strong>Come back<br />to pretty.</strong><span>Your everyday dose of pretty.</span></div></section><section className="auth-panel"><a className="auth-wordmark" href="/">Aurella</a><p className="eyebrow">Welcome back</p><h1>Good to see<br /><em>you again.</em></h1><p className="auth-lead">Sign in to keep your favourite rituals close.</p><form className="auth-form" onSubmit={submit}><div className="field"><label htmlFor="login-email">Email address</label><input id="login-email" name="email" type="email" autoComplete="email" required /></div><div className="field"><label htmlFor="login-password">Password</label><input id="login-password" name="password" type="password" autoComplete="current-password" required /></div><button className="auth-button" type="submit">Sign in</button>{error && <p className="form-note auth-error" role="alert">{error}</p>}</form><p className="auth-switch">New to Aurella? <a href="/register.html">Create an account</a></p><a className="back-home" href="/">Back to home</a></section></main>
}

createRoot(document.getElementById('root')!).render(<StrictMode><LoginPage /></StrictMode>)
