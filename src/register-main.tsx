import { StrictMode, useState, type FormEvent } from 'react'
import { createRoot } from 'react-dom/client'
import { registerUser } from './data/auth'
import './pages/register.css'

function RegisterPage() {
  const [error, setError] = useState('')

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const password = String(form.get('password'))
    if (password.length < 8) { setError('Use at least 8 characters for your password.'); return }
    registerUser({ name: String(form.get('name')), email: String(form.get('email')), password })
    window.location.href = '/profile.html'
  }

  return <main className="auth-page register-page"><section className="auth-art" aria-label="Aurella floral artwork"><div className="auth-flower">✿</div><div className="auth-art-copy"><strong>Make room<br />for pretty.</strong><span>Your everyday dose of pretty.</span></div></section><section className="auth-panel"><a className="auth-wordmark" href="/">Aurella</a><p className="eyebrow">Join Aurella</p><h1>Your pretty<br /><em>starts here.</em></h1><p className="auth-lead">Create an account for softer rituals and first access to what is coming next.</p><form className="auth-form" onSubmit={submit}><div className="field"><label htmlFor="register-name">Your name</label><input id="register-name" name="name" type="text" autoComplete="name" required /></div><div className="field"><label htmlFor="register-email">Email address</label><input id="register-email" name="email" type="email" autoComplete="email" required /></div><div className="field"><label htmlFor="register-password">Create a password</label><input id="register-password" name="password" type="password" autoComplete="new-password" minLength={8} required /></div><button className="auth-button" type="submit">Create account</button>{error && <p className="form-note auth-error" role="alert">{error}</p>}</form><p className="auth-switch">Already have an account? <a href="/login.html">Sign in</a></p><a className="back-home" href="/">Back to home</a></section></main>
}

createRoot(document.getElementById('root')!).render(<StrictMode><RegisterPage /></StrictMode>)
