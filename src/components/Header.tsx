import { useState, useEffect, useCallback } from 'react'

export function Header() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) {
        setOpen(false)
        document.getElementById('nana-nav-toggle')?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="header" role="banner">
      <div className="header-inner">
        <a href="#hero" className="brand" onClick={close} aria-label="NANA CAFÉ — Home">
          {/* Official NANA CAFÉ emblem motif */}
          <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
            <circle cx="18" cy="18" r="16.5" fill="none" stroke="#d9a74a" strokeWidth="1.6" />
            <circle cx="18" cy="18" r="13.5" fill="none" stroke="#d9a74a" strokeWidth="0.9" />
            <path d="M12 16h12v3a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5v-3z" fill="none" stroke="#d9a74a" strokeWidth="1.6" />
            <path d="M15 11c0-1.5 1-2 1-3M18 11c0-1.5 1-2 1-3M21 11c0-1.5 1-2 1-3" fill="none" stroke="#d9a74a" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M11 26c3-2 5-2 7 0 2-2 4-2 7 0" fill="none" stroke="#d9a74a" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span className="brand-text">
            <span className="brand-name">NANA CAFÉ</span>
            <span className="brand-sub">Coffee &amp; Space</span>
          </span>
        </a>

        <button
          id="nana-nav-toggle"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nana-nav"
          onClick={() => setOpen(v => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        <nav>
          <ul id="nana-nav" className={`nav${open ? ' open' : ''}`} role="list">
            <li><a href="#story" onClick={close}>Our Story</a></li>
            <li><a href="#menu" onClick={close}>Menu</a></li>
            <li><a href="#space" onClick={close}>Space &amp; Team</a></li>
            <li><a href="#visit" onClick={close}>Visit Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
