export function Story() {
  return (
    <>
      <div className="pattern-strip" aria-hidden="true" />
      <section id="story" className="section section-white">
        <div className="container story-grid">
          <div className="story-photo reveal">
            <img
              src="/images/nana-13.jpg"
              alt="Fiorenzato espresso grinders with Lao Premium Arabica 100% origin cards at Nana Café"
            />
          </div>

          <div className="reveal">
            <p className="section-label">Our Coffee &amp; Vision</p>
            <h2 className="section-title">Crafted from Paksong Highlands to Vientiane</h2>
            <p className="section-subtitle" style={{ marginBottom: '1.25rem' }}>
              Nana Café serves drinks, baked goods, and fresh meals with friendly,
              attentive service. Our house espresso is brewed with high-quality Arabica
              beans from Phuluang Village, Paksong District, Champasak Province (1,100–1,200 m
              above sea level), alongside single-origin selections from Ethiopia, Costa Rica,
              and Guatemala at our Slow Bar.
            </p>

            <div className="roast-cards">
              <div className="roast-card">
                <h4>Dark Roast Profile</h4>
                <p>Bold, chocolatey body tailored for classic iced lattes, espressos, and signature house drinks.</p>
              </div>
              <div className="roast-card">
                <h4>Medium-Dark Roast</h4>
                <p>Balanced sweetness and bright aromatics crafted for smooth Americanos and filter brews.</p>
              </div>
              <div className="roast-card">
                <h4>Slow Bar Origins</h4>
                <p>Pour Over, Aeropress, and 8–12 hr Cold Drip featuring Ethiopia, Costa Rica &amp; Guatemala.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
