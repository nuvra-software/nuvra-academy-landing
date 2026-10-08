"use client";

import { useEffect, useState } from "react";
import { Check, Mail } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Logo } from "@/components/brand/Logo";
import { ModuleExplorer, ModuleShowcase, SchoolIdentity } from "@/components/product/ModuleShowcase";
import { siteCopy, type Language } from "@/lib/site-content";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const text = siteCopy[language];

  useEffect(() => { document.documentElement.lang = language; }, [language]);
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <>
    <a className="skip-link" href="#main-content">{language === "en" ? "Skip to content" : "Ir al contenido"}</a>
    <Navbar text={text} language={language} onLanguageChange={setLanguage} />
    <main id="main-content">
      <section className="hero" id="top">
        <div className="hero-copy page-width">
          <p className="overline hero-overline">{text.hero.label}</p>
          <h1>{text.hero.title.map((line, index) => <span key={index}>{line}</span>)}</h1>
          <p className="hero-description">{text.hero.description}</p>
        </div>
        <ModuleShowcase text={text} />
        <div className="hero-bottom page-width"><p>{text.hero.origin}</p><a className="button button-light" href="#product">{text.hero.cta}</a></div>
      </section>

      <section id="product" className="product-section light-section">
        <div className="page-width">
          <div className="section-intro" data-reveal><div><p className="overline">{text.product.label}</p><h2 className="section-heading">{text.product.title.map(line => <span key={line}>{line}</span>)}</h2></div><p>{text.product.description}</p></div>
          <ModuleExplorer text={text} />
        </div>
      </section>

      <section id="school" className="school-section dark-section">
        <div className="page-width school-layout">
          <div className="school-copy" data-reveal>
            <p className="overline">{text.school.label}</p>
            <h2 className="section-heading">{text.school.title.map(line => <span key={line}>{line}</span>)}</h2>
            <p>{text.school.intro}</p><p>{text.school.body}</p><p className="school-closing">{text.school.closing}</p>
          </div>
          <div className="school-poster" data-reveal>
            <div className="poster-top"><span>{text.school.schoolType}</span><span>ARG</span></div>
            <div className="poster-title"><p>{text.school.schoolNumber}</p><h3>MANUEL<br />BELGRANO</h3><span>{text.school.location}</span></div>
            <div className="poster-bottom"><span>{text.school.relationship}</span><Logo tone="dark" className="poster-logo" /></div>
          </div>
        </div>
        <ul className="school-facts page-width">{text.school.facts.map(fact => <li key={fact}><Check size={17} />{fact}</li>)}</ul>
      </section>

      <section id="approach" className="approach-section dark-section">
        <div className="page-width">
          <p className="overline" data-reveal>{text.approach.label}</p>
          <div className="approach-layout">
            <div data-reveal><h2 className="statement-heading">{text.approach.title.map(line => <span key={line}>{line}</span>)}</h2></div>
            <div className="approach-details" data-reveal><SchoolIdentity text={text} /><p className="approach-text">{text.approach.text}</p><ul className="simple-list">{text.approach.points.map(point => <li key={point}>{point}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <section id="team" className="team-section light-section">
        <div className="page-width"><div className="section-intro" data-reveal><div><p className="overline">{text.team.label}</p><h2 className="section-heading">{text.team.title[0]}</h2></div><p>{text.team.text}</p></div><ul className="team-list">{text.team.people.map((name, index) => <li key={name} data-reveal><h3>{name}</h3><p>{text.team.roles[index]}</p></li>)}</ul></div>
      </section>

      <section id="contact" className="contact-section dark-section">
        <div className="page-width">
          <p className="overline" data-reveal>{text.contact.label}</p>
          <div className="contact-layout"><h2 className="contact-heading" data-reveal>{text.contact.title.map(line => <span key={line}>{line}</span>)}</h2><div className="contact-copy" data-reveal><p>{text.contact.text}</p><a className="button button-light" href={`mailto:${text.contact.email}`}><Mail size={17} />{text.contact.cta}</a></div></div>
          <a className="email-link" href={`mailto:${text.contact.email}`}>{text.contact.email}</a>
        </div>
      </section>
    </main>
    <footer className="site-footer"><div className="page-width footer-top"><a href="#top" aria-label="Nuvra Academy"><Logo tone="light" className="footer-logo" /></a><p>{text.footer}</p><a href="#top">{text.back}</a></div><div className="page-width footer-bottom"><span>© {new Date().getFullYear()} Nuvra Academy</span><span>Buenos Aires, Argentina</span></div></footer>
  </>;
}
