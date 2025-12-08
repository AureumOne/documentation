// i18n/de/docusaurus-plugin-content-pages/index.js

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Aureum One Dokumentation"
      description="Gold-Tokenisierung nach Schweizer Standard, institutionelle Governance und technische Infrastruktur-Dokumentation."
    >
      <main>
        <section className="aureum-hero">
          <div className="aureum-hero-badge">
            INSTITUTIONELLE DOKUMENTATION · AUREUM ONE
          </div>
          <h1 className="aureum-hero-title">
            Gold-Tokenisierung nach Schweizer Standard,<br />
            <span className="aureum-hero-highlight">
              Dokumentiert mit Institutioneller Klarheit.
            </span>
          </h1>
          <p className="aureum-hero-subtitle">
            Dieses Portal konsolidiert die Kerndokumentation für Aureum One: eine
            multi-jurisdiktionale Infrastruktur, die physisches Gold in Schweizer
            Tresoren mit einer transparenten, audit-bereiten digitalen
            Abwicklungsschicht auf XRPL verbindet, unter konservativer Governance
            und unabhängiger externer Aufsicht.
          </p>

          <div className="aureum-hero-buttons">
            <Link
              className="aureum-button-primary"
              to="/docs/whitepaper-executive-summary"
            >
              White Paper Lesen
            </Link>
            <Link
              className="aureum-button-ghost"
              to="/docs/institutional-overview"
            >
              Institutionelles Framework Ansehen
            </Link>
          </div>
        </section>

        <div className="aureum-section-title">
          KERNPFEILER
        </div>
        <section className="aureum-pillars">
          <div className="aureum-pillar-card">
            <div className="aureum-pillar-title">Reale Vermögensschicht</div>
            <div className="aureum-pillar-heading">Physisches Gold in Schweizer Tresoren</div>
            <p className="aureum-pillar-body">
              Vollständig zugewiesenes Gold, unter professioneller Verwahrung in
              der Schweiz gelagert, mit segregiertem Eigentum, formaler
              Dokumentation und einer konservativen Risikoposition, die auf
              langfristige Werterhaltung ausgerichtet ist.
            </p>
          </div>

          <div className="aureum-pillar-card">
            <div className="aureum-pillar-title">Governance & Compliance</div>
            <div className="aureum-pillar-heading">Institutionelle Aufsicht</div>
            <p className="aureum-pillar-body">
              Eine dedizierte operative Einheit verwaltet Onboarding, Gold-Lebenszyklus
              und Buchhaltung unter der Aufsicht eines Unabhängigen Externen
              Prüfers, der Kontrollen, Abstimmungen und kritische
              Tokenisierungsereignisse überprüft.
            </p>
          </div>

          <div className="aureum-pillar-card">
            <div className="aureum-pillar-title">Digitale Abwicklungsschicht</div>
            <div className="aureum-pillar-heading">XRPL-basierte Liquidität</div>
            <p className="aureum-pillar-body">
              Eine transparente 1:1-Darstellung des zugewiesenen Goldes wird auf
              XRPL ausgegeben und eingelöst, was sofortige globale Abwicklung
              ermöglicht, während Prüfbarkeit, Supply-Transparenz und strenge
              Governance bei Mint- und Burn-Operationen gewahrt bleiben.
            </p>
          </div>
        </section>

        <div className="aureum-section-title">
          NAVIGATION
        </div>
        <section className="aureum-pillars">
          <div className="aureum-pillar-card">
            <div className="aureum-pillar-heading">White Paper</div>
            <p className="aureum-pillar-body">
              Konzeptioneller und institutioneller Überblick über Aureum One,
              einschließlich Architektur, Governance-Modell, Finanzflüsse,
              Tokenomics und die langfristige Positionierung als konservative,
              audit-bereite Gold-Tokenisierungs-Infrastruktur.
            </p>
            <Link to="/docs/whitepaper-executive-summary" className="aureum-button-ghost" style={{marginTop: '0.9rem', display: 'inline-block'}}>
              White Paper Öffnen
            </Link>
          </div>

          <div className="aureum-pillar-card">
            <div className="aureum-pillar-heading">Institutionelles Framework</div>
            <p className="aureum-pillar-body">
              Dokumentation mit Fokus auf rechtliche Positionierung, Rollentrennung
              und die Verantwortlichkeiten der operativen Einheit und des
              Unabhängigen Externen Prüfers, einschließlich Abstimmungsumfang
              und Berichtserwartungen.
            </p>
            <Link to="/docs/institutional-overview" className="aureum-button-ghost" style={{marginTop: '0.9rem', display: 'inline-block'}}>
              Institutionelle Docs Ansehen
            </Link>
          </div>

          <div className="aureum-pillar-card">
            <div className="aureum-pillar-heading">Technologie & Compliance</div>
            <p className="aureum-pillar-body">
              Technische Architektur auf AWS, Sicherheitsmodell und ein
              High-Level-Überblick über das AML/KYC-Framework, das Banken,
              Partnern und Prüfern ermöglicht zu verstehen, wie Infrastruktur
              und Compliance End-to-End implementiert sind.
            </p>
            <Link to="/docs/technical-architecture" className="aureum-button-ghost" style={{marginTop: '0.9rem', display: 'inline-block'}}>
              Tech & Compliance Erkunden
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
