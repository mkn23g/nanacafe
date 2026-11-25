export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="hero-badge">A Pathoumvanh Group Business · Est. 09/09/2024</span>
          <h1>
            Warm Hospitality,
            <br />
            <span className="accent">Lao Premium</span> Coffee.
          </h1>
          <p className="hero-lead">
            NANA CAFÉ Coffee &amp; Space brings together 100% Lao Premium Arabica from
            Paksong, specialty Slow Bar brews, and comforting all-day dining in the
            heart of Ban Haysoke, Vientiane.
          </p>
          <p className="hero-lao">
            “ເປັນຮ້ານທີ່ໃຫ້ຄວາມຮູ້ສຶກອົບອຸ່ນ, ເປັນກັນເອງ, ມີລົດຊາດກາເຟ ແລະ ອາຫານທີ່ແຊບ, ຄຸ້ມຄ່າ, ຄຸ້ມລາຄາສາມາດຈັບຕ້ອງໄດ້ງ່າຍ”
          </p>
          <div className="hero-cta">
            <a href="#menu" className="btn btn-primary">Explore the Menu</a>
            <a href="#visit" className="btn btn-ghost">Visit Our Space</a>
          </div>
          <div className="hero-meta">
            <div>
              <strong>Open Daily</strong>
              <span>7:00 – 19:00</span>
            </div>
            <div>
              <strong>Location</strong>
              <span>Ban Haysoke, Sisattanak, Vientiane</span>
            </div>
            <div>
              <strong>Hotline</strong>
              <span>020 5435 0888</span>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-photo-frame">
            <img
              src="/images/nana-11.jpg"
              alt="Signature iced coffee drinks from NANA CAFÉ Coffee and Space"
            />
          </div>
          <div className="hero-floating-card">
            <strong>Phuluang Village, Paksong</strong>
            <span>100% Lao Arabica · 1,100–1,200m altitude</span>
          </div>
        </div>
      </div>
    </section>
  )
}
