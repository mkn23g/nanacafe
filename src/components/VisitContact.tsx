import type { FormEvent } from 'react'

export function VisitContact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      const first = form.querySelector(':invalid') as HTMLElement | null
      first?.focus()
      form.reportValidity()
      return
    }
    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement
    const original = btn.textContent
    btn.textContent = 'Message Noted (Demo)'
    btn.disabled = true
    setTimeout(() => {
      btn.textContent = original
      btn.disabled = false
      form.reset()
    }, 3000)
  }

  return (
    <section id="visit" className="section section-white">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Visit &amp; Connect</p>
          <h2 className="section-title">Find NANA CAFÉ in Vientiane</h2>
          <p className="section-subtitle">
            Drop by for your morning espresso, a Slow Bar tasting, or a relaxed lunch
            with colleagues and friends.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card reveal">
            <h3>Address</h3>
            <p>
              Ban Haysoke, Sisattanak District, Vientiane Capital, Laos
              <br />
              ບ້ານ ຫາຍໂສກ, ມ. ສີສັດຕະນາກ, ນະຄອນຫຼວງວຽງຈັນ
            </p>
            <p style={{ marginTop: '0.6rem' }}>
              <a
                href="https://maps.app.goo.gl/m677wdPWXWP7HRYz5?g_st=com.google.maps.preview.copy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--gold-light)', fontWeight: 700 }}
              >
                Open in Google Maps →
              </a>
            </p>

            <h3>Opening Hours</h3>
            <p>Daily · 7:00 – 19:00</p>

            <h3>Phone &amp; Email</h3>
            <p>
              Phone: <a href="tel:+8562054350888">020 5435 0888</a>
              <br />
              Email: <a href="mailto:nanacafecoffee88@gmail.com">nanacafecoffee88@gmail.com</a>
            </p>

            <h3>Social Channels</h3>
            <div className="social-row">
              <span className="social-pill">Facebook: NANA CAFÉ Coffee and space</span>
              <span className="social-pill">IG: @nana_cafe88</span>
              <span className="social-pill">TikTok: @nana_cafe_0909</span>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit} noValidate aria-label="Cafe inquiry form">
            <p className="form-note">
              <strong>Demo Form:</strong> For immediate table bookings or catering, please
              call <strong>020 5435 0888</strong> or email{' '}
              <strong>nanacafecoffee88@gmail.com</strong>.
            </p>

            <div className="form-group">
              <label htmlFor="nana-name">Full Name *</label>
              <input id="nana-name" type="text" required placeholder="Your name" />
            </div>

            <div className="form-group">
              <label htmlFor="nana-contact">Phone or Email *</label>
              <input id="nana-contact" type="text" required placeholder="020 ... or email@example.com" />
            </div>

            <div className="form-group">
              <label htmlFor="nana-topic">Inquiry Type *</label>
              <select id="nana-topic" required>
                <option value="">— Select —</option>
                <option value="table">Table Reservation</option>
                <option value="catering">Group / Office Catering</option>
                <option value="space">Event / Space Booking</option>
                <option value="feedback">General Feedback</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="nana-msg">Message *</label>
              <textarea id="nana-msg" required placeholder="Date, party size, or your message…" />
            </div>

            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
