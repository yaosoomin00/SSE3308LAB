import './App.css'

const apiLevels = [
  { range: '0–50', label: 'Good', tone: 'good', advice: 'Enjoy outdoor activities as usual.' },
  { range: '51–100', label: 'Moderate', tone: 'moderate', advice: 'Sensitive groups should watch for symptoms.' },
  { range: '101–200', label: 'Unhealthy', tone: 'unhealthy', advice: 'Reduce prolonged or strenuous outdoor activity.' },
  { range: '201–300', label: 'Very unhealthy', tone: 'very-unhealthy', advice: 'Avoid outdoor activity and follow official advice.' },
  { range: 'Above 300', label: 'Hazardous', tone: 'hazardous', advice: 'Stay indoors where possible and seek health advice.' },
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="HazeWise home">
          <span className="wordmark-mark" aria-hidden="true">◉</span>
          HAZEWISE
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#understand">Understand haze</a>
          <a href="#health">Health</a>
          <a href="#protect">Protect yourself</a>
          <a className="nav-cta" href="#api">Know the API <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-photo" role="img" aria-label="Kuala Lumpur skyline and the Petronas Twin Towers" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow"><span className="live-dot" /> A KLCC guide to haze awareness</p>
            <h1 id="hero-title">The sky may look different.<br /><span>Stay a step ahead.</span></h1>
            <p className="hero-copy">Know what haze means for your health, how to read Malaysia’s API, and the small steps that help protect the people around you.</p>
            <a className="button button-light" href="#understand">Get to know haze <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-caption"><span className="caption-line" /> KUALA LUMPUR · CITY IN VIEW</div>
          <div className="hero-note"><span className="note-sun" aria-hidden="true">◌</span><span><strong>Air can change through the day.</strong><br />Check an official reading before heading out.</span></div>
        </section>

        <section className="intro section-wrap" id="understand">
          <div className="section-kicker"><span>01</span> THE BASICS</div>
          <div className="intro-grid">
            <h2>Haze is more than<br />a hazy <em>horizon.</em></h2>
            <div className="intro-copy">
              <p>Haze forms when tiny particles and pollutants build up in the air, making the sky look dull and reducing visibility. In Malaysia, smoke from vegetation and peat fires can travel far; traffic, industry, and open burning also add pollution.</p>
              <p>When weather keeps the air still, these particles can linger close to the ground, right where we breathe.</p>
            </div>
          </div>
          <div className="source-strip" aria-label="Common sources of haze">
            <div className="source-item"><span className="source-number">A</span><div><strong>Land &amp; peat fires</strong><span>Smoke can drift across regions.</span></div></div>
            <div className="source-item"><span className="source-number">B</span><div><strong>Open burning</strong><span>Releases fine particles into the air.</span></div></div>
            <div className="source-item"><span className="source-number">C</span><div><strong>Everyday emissions</strong><span>Traffic and industry add pollutants.</span></div></div>
          </div>
        </section>

        <section className="health-band" id="health">
          <div className="section-wrap health-layout">
            <div className="health-heading">
              <div className="section-kicker section-kicker-light"><span>02</span> WHY IT MATTERS</div>
              <h2>What you breathe<br />can affect how<br /><em>you feel.</em></h2>
              <p>Fine particles can irritate your eyes and airways. The effects vary from person to person, and may worsen as exposure increases.</p>
            </div>
            <div className="symptom-list">
              <div className="symptom-row"><span className="symptom-icon" aria-hidden="true">01</span><div><h3>Eyes &amp; throat</h3><p>Irritation, itchiness, or a scratchy throat.</p></div><span className="symptom-arrow" aria-hidden="true">↗</span></div>
              <div className="symptom-row"><span className="symptom-icon" aria-hidden="true">02</span><div><h3>Breathing</h3><p>Coughing, wheezing, or shortness of breath.</p></div><span className="symptom-arrow" aria-hidden="true">↗</span></div>
              <div className="symptom-row"><span className="symptom-icon" aria-hidden="true">03</span><div><h3>Extra care for some</h3><p>Children, older adults, pregnant people, and those with heart or lung conditions may be more vulnerable.</p></div><span className="symptom-arrow" aria-hidden="true">↗</span></div>
              <p className="health-footnote">Seek medical care if symptoms are severe or getting worse.</p>
            </div>
          </div>
        </section>

        <section className="protect section-wrap" id="protect">
          <div className="protect-heading">
            <div className="section-kicker"><span>03</span> YOUR EVERYDAY PLAN</div>
            <h2>Make room for<br /><em>better breathing.</em></h2>
            <p>A few practical choices can help reduce the air pollution you take in.</p>
          </div>
          <div className="action-list">
            <article className="action-item"><span className="action-number">01</span><div><h3>Check before you go</h3><p>Look up the latest official API for your area before outdoor plans, especially around KLCC.</p></div></article>
            <article className="action-item"><span className="action-number">02</span><div><h3>Take it indoors</h3><p>When levels are unhealthy, avoid strenuous outdoor activity. Keep windows closed and use filtration if available.</p></div></article>
            <article className="action-item"><span className="action-number">03</span><div><h3>Choose a well-fitting respirator</h3><p>An N95-type respirator can reduce exposure to fine particles when worn correctly. Cloth and surgical masks are not equivalent.</p></div></article>
            <article className="action-item"><span className="action-number">04</span><div><h3>Look out for one another</h3><p>Help children, older adults, and anyone with a heart or lung condition follow their care plan.</p></div></article>
          </div>
        </section>

        <section className="api-section" id="api">
          <div className="section-wrap">
            <div className="api-heading">
              <div>
                <div className="section-kicker"><span>04</span> READ THE AIR</div>
                <h2>Malaysia’s API,<br /><em>at a glance.</em></h2>
              </div>
              <p>The Air Pollutant Index (API) is Malaysia’s local scale for reporting air pollution. Higher numbers mean greater concern.</p>
            </div>
            <div className="api-scale">
              {apiLevels.map((level) => (
                <article className={`api-level ${level.tone}`} key={level.label}>
                  <div className="api-range">{level.range}</div>
                  <h3>{level.label}</h3>
                  <p>{level.advice}</p>
                </article>
              ))}
            </div>
            <div className="api-bottom">
              <p><span className="info-mark" aria-hidden="true">i</span> This guide is educational, not a live monitor. Follow current advice from Malaysian authorities.</p>
              <a className="button button-dark" href="https://apims.doe.gov.my/" target="_blank" rel="noreferrer">Check official API <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark" aria-hidden="true">◉</span> HAZEWISE</a>
        <p>Clear information for the air we share.<br /><span>An educational guide. For current conditions, consult official sources.</span></p>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  )
}

export default App