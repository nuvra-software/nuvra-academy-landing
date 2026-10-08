"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, CheckCheck, ChevronDown, FileText, GraduationCap, LayoutGrid, MessageCircle, Pause, Play, Plus, Search, ShieldCheck, Users } from "lucide-react";
import type { ModuleId, SchoolModule, SiteCopy } from "@/lib/site-content";

export function ModuleInterface({ id, text }: { id: ModuleId; text: SiteCopy }) {
  const ui = text.ui;
  if (id === "attendance") return <div className="demo-attendance">
    <div className="demo-toolbar"><span>{ui.course} A <ChevronDown size={12} /></span><span>{ui.today}</span></div>
    <div className="attendance-head"><span>{ui.student}</span><span>{ui.attendance}</span></div>
    {["A", "B", "C"].map((letter, index) => <div className="attendance-row" key={letter}><span className="student-line"><span className="avatar-shape" /><span>{ui.student} {letter}</span></span><span className={index === 2 ? "attendance-status absent" : "attendance-status"}>{index === 2 ? ui.absent : ui.present}{index !== 2 && <Check size={12} />}</span></div>)}
  </div>;
  if (id === "communication") return <div className="demo-message">
    <span className="message-route"><MessageCircle size={16} />{ui.sent}</span>
    <h4>{ui.messageTitle}</h4><p>{ui.messageText}</p>
    <div className="message-footer"><span>{ui.message}</span><CheckCheck size={18} /></div>
  </div>;
  if (id === "students") return <div className="demo-students">
    <div className="demo-search"><Search size={14} />{ui.records}</div>
    {["A", "B", "C"].map(letter => <div className="student-record" key={letter}><GraduationCap size={20} /><div><strong>{ui.student} {letter}</strong><span>{ui.profile}</span></div><span className="record-line" /></div>)}
  </div>;
  if (id === "reports") return <div className="demo-report"><span className="report-heading"><FileText size={17} />{ui.report}</span><div className="report-bars" aria-hidden="true">{[48, 68, 57, 86, 76, 96, 88].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div><p>{ui.reportSub}</p></div>;
  if (id === "permissions") return <div className="demo-permission"><ShieldCheck size={28} /><h4>{ui.request}</h4><div className="permission-line"><span className="process-dot done" />{ui.sentRequest}<Check size={13} /></div><div className="permission-line"><span className="process-dot" />{ui.review}<span className="waiting-pulse" /></div><div className="permission-line muted"><span className="process-dot" />{ui.approved}</div></div>;
  if (id === "roles") return <ul className="demo-roles">{[ui.students, ui.family, ui.teachers, ui.staff].map((role, index) => <li key={role}><Users size={17} /><span>{role}</span><span className="role-permissions" aria-hidden="true">{[0, 1, 2].map(item => <i key={item} className={item <= index ? "enabled" : ""} />)}</span></li>)}</ul>;
  return <ul className="demo-workflows">{[ui.task, ui.assigned, ui.finished].map((task, index) => <li key={task}><span className="workflow-check">{index === 0 ? <Check size={14} /> : <span />}</span><span>{task}</span><span className="workflow-line" /></li>)}</ul>;
}

export function ModuleScreen({ module, text, compact = false }: { module: SchoolModule; text: SiteCopy; compact?: boolean }) {
  return <div className={`module-screen module-${module.id}${compact ? " compact" : ""}`}>
    <div className="screen-bar"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>NUVRA / {module.name}</span><LayoutGrid size={12} /></div>
    <div className="screen-body"><div className="screen-copy"><span className="screen-kicker">NUVRA</span><h3>{module.name}</h3><p>{module.headline}</p><span className="screen-caption">{text.ui.example}</span></div><div className="screen-app"><div className="screen-app-heading"><span>{text.ui.school}</span><span className="small-mark">N</span></div><ModuleInterface id={module.id} text={text} /></div></div>
  </div>;
}

export function ModuleShowcase({ text }: { text: SiteCopy }) {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const count = text.modules.length;
  const current = ((step % count) + count) % count;

  useEffect(() => {
    const update = () => setIsVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  useEffect(() => {
    if (paused || hovered || focused || reducedMotion || !isVisible) return;
    const timer = window.setInterval(() => setStep(value => value + 1), 4800);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, reducedMotion, isVisible]);

  function select(index: number) {
    let distance = index - current;
    if (distance > count / 2) distance -= count;
    if (distance < -count / 2) distance += count;
    setStep(value => value + distance);
  }
  return <div className="showcase" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <div className="showcase-stage" role="region" aria-label={text.product.detail} aria-roledescription="carousel" onKeyDown={event => { if (event.key === "ArrowLeft") { event.preventDefault(); setStep(value => value - 1); } if (event.key === "ArrowRight") { event.preventDefault(); setStep(value => value + 1); } }}>
      <ul className="showcase-rotor" style={{ "--rotation": `${step * -(360 / count)}deg` } as CSSProperties}>
        {text.modules.map((module, index) => <li className={`showcase-slide${index === current ? " is-active" : ""}`} key={module.id} aria-hidden={index !== current} style={{ "--angle": `${index * (360 / count)}deg` } as CSSProperties}><ModuleScreen module={module} text={text} /></li>)}
      </ul>
    </div>
    <div className="showcase-controls"><button type="button" onClick={() => setStep(value => value - 1)} aria-label={text.hero.previous}><ArrowLeft size={18} /></button><p>{text.modules[current].name}</p><button type="button" onClick={() => setStep(value => value + 1)} aria-label={text.hero.next}><ArrowRight size={18} /></button><button className="play-control" type="button" disabled={!!reducedMotion} onClick={() => setPaused(value => !value)} aria-label={paused || reducedMotion ? text.hero.play : text.hero.pause}>{paused || reducedMotion ? <Play size={14} /> : <Pause size={14} />}</button></div>
    <div className="module-dots" aria-label={text.product.detail}>{text.modules.map((module, index) => <button key={module.id} type="button" onClick={() => select(index)} className={index === current ? "active" : ""} aria-label={module.name} aria-pressed={index === current}><span /></button>)}</div>
    <p className="illustration-note">{text.hero.preview}</p>
  </div>;
}

export function ModuleExplorer({ text }: { text: SiteCopy }) {
  const [selected, setSelected] = useState<ModuleId>("attendance");
  const selectedModule = text.modules.find(item => item.id === selected) ?? text.modules[0];
  return <div className="module-explorer"><div className="explorer-visual"><div className="explorer-screen" key={selected}><ModuleScreen module={selectedModule} text={text} compact /></div><p>{text.hero.preview}</p></div><div className="explorer-details"><ul className="module-list">{text.modules.map(item => <li key={item.id} className={selected === item.id ? "expanded" : ""}><button type="button" id={`module-${item.id}`} aria-expanded={selected === item.id} aria-controls={`module-info-${item.id}`} onClick={() => setSelected(item.id)}><span>{item.name}</span><Plus size={19} /></button><div className="module-info" id={`module-info-${item.id}`} role="region" aria-labelledby={`module-${item.id}`} hidden={selected !== item.id}><p>{item.description}</p><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></div></li>)}</ul></div></div>;
}

export function SchoolIdentity({ text }: { text: SiteCopy }) {
  const [theme, setTheme] = useState(0);
  const colors = ["#c7d9a1", "#a6bbf3", "#e5bda8"];
  return <div className="identity-example" style={{ "--identity": colors[theme] } as CSSProperties}><div className="identity-window"><div className="identity-top"><span className="identity-symbol"><GraduationCap size={19} /></span><strong>{text.approach.identity}</strong><span className="identity-powered">NUVRA</span></div><div className="identity-content"><p>{text.ui.morning}</p><h3>{text.ui.greeting}</h3><div className="identity-modules">{[text.ui.attendance, text.modules[1].name, text.modules[3].name].map((item, index) => <div key={item}>{index === 0 ? <CheckCheck size={23} /> : index === 1 ? <MessageCircle size={23} /> : <FileText size={23} />}<span>{item}</span></div>)}</div><div className="identity-bottom"><span>{text.ui.staff}</span><span>{text.ui.teachers}</span><span>{text.ui.family}</span></div></div></div><div className="theme-selector"><span>{text.approach.choose}</span><div>{colors.map((color, index) => <button key={color} type="button" onClick={() => setTheme(index)} style={{ background: color }} aria-label={text.approach.themes[index]} aria-pressed={theme === index}>{theme === index && <Check size={16} />}</button>)}</div></div><p className="identity-note">{text.approach.note}</p></div>;
}
