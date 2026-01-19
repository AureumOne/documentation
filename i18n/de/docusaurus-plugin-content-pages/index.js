// i18n/de/docusaurus-plugin-content-pages/index.js

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Aureum One — Institutionelle Dokumentation"
      description="Öffentliche institutionelle Dokumentation für professionelle Gegenparteien, Regulierungsbehörden und Prüfer."
    >
      <main>
        <section className="aureum-hero">
          <div className="aureum-hero-badge">
            INSTITUTIONELLE DOKUMENTATION
          </div>
          <h1 className="aureum-hero-title">
            Aureum One
          </h1>
          <p className="aureum-hero-subtitle">
            <span className="aureum-hero-highlight">Nicht-verwahrende institutionelle Infrastruktur</span> für physisches Gold. Entwickelt für <span className="aureum-hero-highlight">professionelle Gegenparteien</span>, Regulierungsbehörden und institutionelle Partner.
          </p>
          <p className="aureum-hero-description">
            Diese Dokumentation definiert den institutionellen Umfang, die architektonischen Grenzen, die Governance-Haltung und die Compliance-Positionierung von Aureum One. Es ist kein Marketingmaterial.
          </p>

          <div className="aureum-hero-buttons">
            <Link className="aureum-button-primary" to="/docs">
              Dokumentation Lesen
            </Link>
            <Link className="aureum-button-ghost" to="/docs/what_aureum_is">
              Was Aureum One Ist
            </Link>
          </div>
        </section>

        <div className="aureum-section-title">
          VIER-SCHICHTEN INSTITUTIONELLES MODELL
        </div>
        <section className="aureum-pillars">
          <Link to="/docs/four_layer_model" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">SCHICHT 01</div>
              <div className="aureum-pillar-heading">Verwahrungsschicht</div>
              <p className="aureum-pillar-body">
                Physisches Gold wird von <span style={{color: '#917F6E', fontWeight: 600}}>professionellen Drittverwahrern</span> unter ihren eigenen regulatorischen Rahmenbedingungen gehalten.
              </p>
            </div>
          </Link>

          <Link to="/docs/four_layer_model" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">SCHICHT 02</div>
              <div className="aureum-pillar-heading">Ausführungsschicht</div>
              <p className="aureum-pillar-body">
                Geschäfte werden von <span style={{color: '#917F6E', fontWeight: 600}}>unabhängigen Bullion-Häusern</span> auf ihren eigenen Plattformen ausgeführt.
              </p>
            </div>
          </Link>

          <Link to="/docs/governance_framework" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">SCHICHT 03</div>
              <div className="aureum-pillar-heading">Governance-Schicht</div>
              <p className="aureum-pillar-body">
                <span style={{color: '#917F6E', fontWeight: 600}}>Nicht-diskretionäre Governance</span> mit dualer Kontrolle, Vier-Augen-Prinzip und Funktionstrennung.
              </p>
            </div>
          </Link>

          <Link to="/docs/evidence_philosophy" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">SCHICHT 04</div>
              <div className="aureum-pillar-heading">Evidenz-Schicht</div>
              <p className="aureum-pillar-body">
                <span style={{color: '#917F6E', fontWeight: 600}}>Unveränderliche, nur-anhängende</span> Evidenz für externe Prüfung und regulatorische Überprüfung.
              </p>
            </div>
          </Link>
        </section>

        <div className="aureum-section-title">
          INSTITUTIONELLE PRINZIPIEN
        </div>
        <section className="aureum-pillars">
          <Link to="/docs/what_aureum_is_not" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">POSITIONIERUNG</div>
              <div className="aureum-pillar-heading">Nicht-Vermittlung</div>
              <p className="aureum-pillar-body">
                Aureum One <span style={{color: '#917F6E', fontWeight: 600}}>ist kein Verwahrer, Makler, Marktplatz oder Investmentplattform</span>. Keine Vermögensaggregation oder Saldo-Pooling.
              </p>
            </div>
          </Link>

          <Link to="/docs/architecture_principle" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">DESIGN-EINSCHRÄNKUNG</div>
              <div className="aureum-pillar-heading">Kontrolltrennung</div>
              <p className="aureum-pillar-body">
                <span style={{color: '#917F6E', fontWeight: 600}}>Keine einzelne Partei darf mehr als eine kritische Schicht kontrollieren</span>, um Konzentrationsrisiko zu eliminieren.
              </p>
            </div>
          </Link>

          <Link to="/docs/compliance_position" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">REGULATORISCHE HALTUNG</div>
              <div className="aureum-pillar-heading">Jurisdiktions-Agnostisch</div>
              <p className="aureum-pillar-body">
                <span style={{color: '#917F6E', fontWeight: 600}}>Compliance-Verpflichtungen verbleiben bei Verwahrern und Ausführungsorten</span>. Aureum One regiert, vermittelt nicht.
              </p>
            </div>
          </Link>
        </section>

        <section className="aureum-cta-section">
          <div className="aureum-cta-container">
            <h2 className="aureum-cta-title">
              Entwickelt für <span style={{color: '#917F6E'}}>Institutionelle Strenge</span>
            </h2>
            <p className="aureum-cta-subtitle">
              Diese Dokumentation richtet sich an professionelle Gegenparteien, Verwahrer, Ausführungsplätze, Prüfer, Regulierungsbehörden und institutionelle Partner.
            </p>
            <div className="aureum-hero-buttons">
              <Link className="aureum-button-primary" to="/docs">
                Vollständige Dokumentation Zugreifen
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
