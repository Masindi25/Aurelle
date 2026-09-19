import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PageShell } from './pages/pageShell'
import './pages/journal.css'

function JournalPage() {
  return <PageShell pageClass="journal-page"><section className="journal-hero"><p className="eyebrow">The Aurella journal</p><h1>Notes on<br /><em>feeling pretty.</em></h1><p>Small thoughts for softer days, sweeter rituals, and finding the lovely in the everyday.</p></section><section className="journal-grid"><article><div className="journal-art journal-art-one">♡</div><p className="eyebrow">Rituals</p><h2>The beauty of taking your time</h2><p>A reminder that a slow morning can be its own kind of luxury.</p></article><article><div className="journal-art journal-art-two">✦</div><p className="eyebrow">Mood</p><h2>A little scent can change everything</h2><p>On choosing a fragrance that feels like you, only softer.</p></article><article><div className="journal-art journal-art-three">✧</div><p className="eyebrow">Aurella notes</p><h2>Pretty things worth keeping close</h2><p>The details that make an ordinary day feel special.</p></article></section></PageShell>
}

createRoot(document.getElementById('root')!).render(<StrictMode><JournalPage /></StrictMode>)
