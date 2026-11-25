import { useState } from 'react'
import { menuCategories, menuItems, type MenuCategory } from '../data/cafeData'

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<'All' | MenuCategory>('All')
  const [search, setSearch] = useState('')

  const filtered = menuItems.filter(item => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory
    const q = search.trim().toLowerCase()
    const matchesQuery =
      !q ||
      item.name.toLowerCase().includes(q) ||
      (item.laoName && item.laoName.toLowerCase().includes(q)) ||
      (item.note && item.note.toLowerCase().includes(q))
    return matchesCat && matchesQuery
  })

  return (
    <section id="menu" className="section section-cream">
      <div className="container">
        <div className="reveal">
          <p className="section-label">The Menu</p>
          <h2 className="section-title">Coffee, Slow Bar &amp; All-Day Kitchen</h2>
          <p className="section-subtitle">
            From 35K espresso classics and 59K single-origin Slow Bar brews to fresh
            sandwiches, pastas, salads, and Lao-Thai favorites. Prices in LAK (K).
          </p>
        </div>

        <div className="menu-controls">
          <div className="menu-tabs" role="tablist" aria-label="Menu categories">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'All'}
              className={`menu-tab${activeCategory === 'All' ? ' active' : ''}`}
              onClick={() => setActiveCategory('All')}
            >
              All ({menuItems.length})
            </button>
            {menuCategories.map(cat => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`menu-tab${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <input
            type="search"
            className="menu-search"
            aria-label="Search menu items"
            placeholder="Search coffee, matcha, pasta…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="menu-grid">
          {filtered.map((item, idx) => (
            <article className="menu-item" key={`${item.name}-${idx}`}>
              <div className="menu-thumb-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="menu-thumb"
                />
                {item.badge && <span className="menu-badge">{item.badge}</span>}
              </div>
              <div className="menu-item-body">
                <div className="menu-item-top">
                  <h3>{item.name}</h3>
                  <span className="menu-price">{item.price}</span>
                </div>
                {item.laoName && <p className="menu-lao">{item.laoName}</p>}
                {item.note && <p className="menu-note">{item.note}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
