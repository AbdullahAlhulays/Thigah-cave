import { useEffect, useRef, useState } from 'react'
import { contactLinks, copy, games, heroImage, hours, moments } from './content'
import logo from './assets/logo.svg'
import thursdayPoster from './assets/photos/thursday-poster.jpg'
import thursdayVideo from './assets/video/thursday-nights.mp4'
import './App.css'

const sections = ['home', 'games', 'hours', 'events', 'moments', 'contact']

function currentHash() {
  const hash = window.location.hash.slice(1)
  return [...sections, 'privacy', 'terms'].includes(hash) ? hash : 'home'
}

function Brand({ language }) {
  return <span className="brand"><img src={logo} alt="" width="45" height="45" /><span><strong>{language === 'ar' ? 'كهف ثقة' : 'Thigah Cave'}</strong><small>{language === 'ar' ? 'للعب والوناسة' : 'PLAY • GATHER'}</small></span></span>
}

function Header({ language, setLanguage, section, t }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="site-header">
    <div className="shell header-inner">
      <a className="brand-link" href="#home" aria-label={t.brandHome} onClick={() => setMenuOpen(false)}><Brand language={language} /></a>
      <nav id="main-navigation" className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`} aria-label={t.mainNav}>
        {sections.map((item) => <a key={item} className={section === item ? 'is-active' : ''} href={`#${item}`} onClick={() => setMenuOpen(false)}>{t.nav[item]}</a>)}
      </nav>
      <div className="header-actions">
        <div className="language-switch" role="group" aria-label={t.languageLabel}>
          <button type="button" className={language === 'ar' ? 'selected' : ''} aria-pressed={language === 'ar'} onClick={() => setLanguage('ar')}>العربية</button><span aria-hidden="true">/</span><button type="button" className={language === 'en' ? 'selected' : ''} aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>English</button>
        </div>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? t.closeMenu : t.openMenu} onClick={() => setMenuOpen((open) => !open)}><span /><span /><span /></button>
      </div>
    </div>
  </header>
}

function SectionHeading({ number, kicker, title, text, id }) {
  return <div className="section-heading"><span className="section-number" aria-hidden="true">{number}</span><div><p className="eyebrow">{kicker}</p><h2 id={id}>{title}</h2>{text && <p className="section-intro">{text}</p>}</div></div>
}

function GameCard({ game, language }) {
  return <li className="game-card" dir={language === 'ar' ? 'rtl' : 'ltr'}>
    <img src={game.image} alt={game.alt[language]} decoding="async" />
    <div className="game-card__shade" />
    <h3>{game.name[language]}</h3>
  </li>
}

function ContactActions({ kind, t }) {
  if (kind === 'location') return <a href={contactLinks.maps} target="_blank" rel="noopener noreferrer">{t.mapAction}<span aria-hidden="true">↗</span></a>
  if (kind === 'phone') return <span className="contact-item__actions"><a href={contactLinks.phone}><bdi dir="ltr">+966 55 557 7457</bdi></a><a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer">{t.whatsappAction}<span aria-hidden="true">↗</span></a></span>
  return null
}

function EventVideo({ t }) {
  const videoRef = useRef(null)
  const [needsSoundTap, setNeedsSoundTap] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined

    let inView = false
    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting && entry.intersectionRatio >= 0.55
      if (visible === inView) return
      inView = visible

      if (!visible) {
        video.pause()
        return
      }

      video.muted = false
      video.play().then(() => {
        if (inView) setNeedsSoundTap(false)
      }).catch(async (error) => {
        if (!inView) return
        if (error.name === 'NotAllowedError') {
          video.muted = true
          try { await video.play() } catch { /* A tap can start playback if autoplay is fully blocked. */ }
        }
        setNeedsSoundTap(true)
      })
    }, { threshold: [0, 0.55, 1] })

    observer.observe(video)
    return () => { inView = false; observer.disconnect(); video.pause() }
  }, [])

  function enableSound() {
    const video = videoRef.current
    if (!video) return
    video.muted = false
    video.play().then(() => setNeedsSoundTap(false)).catch(() => setNeedsSoundTap(true))
  }

  return <div className="event-art">
    <video ref={videoRef} className="event-art__media" src={thursdayVideo} poster={thursdayPoster} aria-label={t.eventVideoLabel} playsInline preload="metadata" controls loop onVolumeChange={(event) => setNeedsSoundTap(event.currentTarget.muted)} />
    {needsSoundTap && <button className="event-art__sound" type="button" onClick={enableSound}>{t.eventSoundAction}</button>}
  </div>
}

function Home({ language, t }) {
  return <main id="main-content" tabIndex={-1}>
    <section className="hero" id="home" aria-labelledby="hero-title">
      <img className="hero__image" src={heroImage} alt={t.heroAlt} fetchPriority="high" />
      <div className="hero__overlay" />
      <div className="shell hero__inner"><div className="hero__content"><h1 id="hero-title">{t.heroTitle}</h1><p className="hero__subtitle">{t.heroSubtitle}</p><a className="primary-link" href="#games">{t.exploreGames}<span aria-hidden="true" className="link-arrow">←</span></a></div></div>
    </section>

    <section className="section games-section" id="games" aria-labelledby="games-title">
      <div className="shell"><SectionHeading number="01" kicker={t.gamesKicker} title={t.gamesTitle} text={t.gamesIntro} id="games-title" /></div>
      <div className="games-marquee">
        <div className="games-track">
          <ul className="games-list">{games.map((game) => <GameCard key={game.key} game={game} language={language} />)}</ul>
          <ul className="games-list" aria-hidden="true">{games.map((game) => <GameCard key={game.key} game={game} language={language} />)}</ul>
        </div>
      </div>
    </section>

    <section className="section hours-section" id="hours" aria-labelledby="hours-title"><div className="shell hours-layout"><div><SectionHeading number="02" kicker={t.hoursKicker} title={t.hoursTitle} text={t.hoursIntro} id="hours-title" /></div>
      <div className="hours-table" role="table" aria-label={t.hoursTitle}>{hours.map((item) => <div className={`hours-row ${item.allDay ? 'hours-row--highlight' : ''} ${item.closed ? 'hours-row--muted' : ''}`} role="row" key={item.day}><span role="cell">{t.days[item.day]}</span><strong role="cell">{item.allDay ? t.allDay : item.closed ? t.closed : t.standardHours}</strong></div>)}</div>
    </div></section>

    <section className="section events-section" id="events" aria-labelledby="events-title"><div className="shell event-layout"><div className="event-copy"><SectionHeading number="03" kicker={t.eventsKicker} title={t.eventsTitle} id="events-title" /><p className="event-description">{t.eventsText}</p><div className="event-tags">{t.eventsTags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><EventVideo t={t} /></div></section>

    <section className="section moments-section" id="moments" aria-labelledby="moments-title"><div className="shell"><SectionHeading number="04" kicker={t.momentsKicker} title={t.momentsTitle} id="moments-title" /><ul className="moments-board" aria-label={t.momentsTitle}>{moments.map((moment) => <li className="moments-photo" key={moment.key} style={{ '--photo-x': moment.x, '--photo-y': moment.y, '--photo-rotation': moment.rotation }}><img src={moment.image} alt={moment.alt[language]} loading="lazy" decoding="async" /></li>)}</ul></div></section>

    <section className="section contact-section" id="contact" aria-labelledby="contact-title"><div className="shell contact-layout"><SectionHeading number="05" kicker={t.contactKicker} title={t.contactTitle} id="contact-title" /><div className="contact-list">{t.contactItems.map((item, index) => <div className="contact-item" key={item.key}><span className="contact-item__number">0{index + 1}</span><span className="contact-item__label">{item.label}</span><span className="contact-item__value"><ContactActions kind={item.key} t={t} /></span></div>)}</div></div></section>
  </main>
}

function Legal({ page, t }) {
  const legal = t.legal[page]
  return <main id="main-content" className="legal-page" tabIndex={-1}><div className="shell legal-shell"><a href="#home" className="back-link"><span aria-hidden="true">←</span>{t.backHome}</a><p className="eyebrow">{t.legalLabel}</p><h1>{legal.title}</h1><p className="legal-lead">{legal.intro}</p><div className="legal-sections">{legal.sections.map((item, index) => <section key={item.title} className="legal-section"><span>0{index + 1}</span><div><h2>{item.title}</h2><p>{item.body}</p></div></section>)}</div></div></main>
}

function Footer({ language, t }) {
  return <footer className="site-footer"><div className="shell footer-main"><div className="footer-brand"><a href="#home" aria-label={t.brandHome}><Brand language={language} /></a><p>{t.footerTagline}</p></div><div className="footer-links"><p className="footer-label">{t.footerExplore}</p>{sections.map((item) => <a key={item} href={`#${item}`}>{t.nav[item]}</a>)}</div><div className="footer-links"><p className="footer-label">{t.footerInformation}</p><a href="#privacy">{t.legal.privacy.title}</a><a href="#terms">{t.legal.terms.title}</a><a href="#contact">{t.nav.contact}</a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} {t.heroTitle}. {t.rights}</span><span>{t.footerClosing}</span></div></footer>
}

function App() {
  const [language, setLanguage] = useState(() => { try { return localStorage.getItem('thigah-language') === 'en' ? 'en' : 'ar' } catch { return 'ar' } })
  const [section, setSection] = useState(currentHash)
  const t = copy[language]

  useEffect(() => { const update = () => setSection(currentHash()); window.addEventListener('hashchange', update); return () => window.removeEventListener('hashchange', update) }, [])
  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.title = section === 'privacy' || section === 'terms' ? `${t.legal[section].title} | ${t.heroTitle}` : `${t.heroTitle} | ${t.heroSubtitle}`
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.metaDescription)
    try { localStorage.setItem('thigah-language', language) } catch { /* Storage may be disabled. */ }
  }, [language, section, t])
  useEffect(() => {
    if (section === 'privacy' || section === 'terms' || section === 'home') window.scrollTo({ top: 0, behavior: 'instant' })
    else requestAnimationFrame(() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' }))
  }, [section])

  return <><a className="skip-link" href="#main-content" onClick={(event) => { event.preventDefault(); document.getElementById('main-content')?.focus() }}>{t.skipLink}</a><Header language={language} setLanguage={setLanguage} section={section} t={t} />{section === 'privacy' || section === 'terms' ? <Legal page={section} t={t} /> : <Home language={language} t={t} />}<Footer language={language} t={t} /></>
}

export default App
