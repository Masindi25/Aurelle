import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PageShell } from './pages/pageShell'
import './pages/story.css'

function StoryPage() {
  return <PageShell pageClass="story-page"><section className="story-hero"><p className="eyebrow">The Aurella feeling</p><h1>Pretty is a<br /><em>daily ritual.</em></h1><p>We believe beauty belongs in the everyday. In the mist before a coffee date, the soft glow after a shower, and the scent that becomes completely, unmistakably you.</p></section><section className="story-values"><div className="story-shape"><span>♡</span></div><div className="story-copy"><p className="eyebrow">Made for soft hearts</p><h2>Small rituals.<br /><em>Big feeling.</em></h2><p>Aurella is feminine body care and fragrance made to bring a little more delight to ordinary moments. Thoughtful, gentle, and always a little pretty.</p><a className="text-link" href="/journal.html">Read the journal</a></div></section></PageShell>
}

createRoot(document.getElementById('root')!).render(<StrictMode><StoryPage /></StrictMode>)
