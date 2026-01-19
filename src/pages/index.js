// src/pages/index.js

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Aureum One — Institutional Documentation"
      description="Public institutional documentation for professional counterparties, regulators, and auditors."
    >
      <main>
        <section className="aureum-hero">
          <div className="aureum-hero-badge">
            INSTITUTIONAL DOCUMENTATION
          </div>
          <h1 className="aureum-hero-title">
            Aureum One
          </h1>
          <p className="aureum-hero-subtitle">
            <span className="aureum-hero-highlight">Non-custodial institutional infrastructure</span> for physical gold. Designed for <span className="aureum-hero-highlight">professional counterparties</span>, regulators, and institutional partners.
          </p>
          <p className="aureum-hero-description">
            This documentation defines Aureum One's institutional scope, architectural boundaries, governance posture, and compliance positioning. It is not marketing material.
          </p>

          <div className="aureum-hero-buttons">
            <Link className="aureum-button-primary" to="/docs">
              Read Documentation
            </Link>
            <Link className="aureum-button-ghost" to="/docs/what_aureum_is">
              What Aureum One Is
            </Link>
          </div>
        </section>

        <div className="aureum-section-title">
          FOUR-LAYER INSTITUTIONAL MODEL
        </div>
        <section className="aureum-pillars">
          <Link to="/docs/four_layer_model" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">LAYER 01</div>
              <div className="aureum-pillar-heading">Custody Layer</div>
              <p className="aureum-pillar-body">
                Physical gold held by <span style={{color: '#917F6E', fontWeight: 600}}>professional third-party custodians</span> under their own regulatory frameworks.
              </p>
            </div>
          </Link>

          <Link to="/docs/four_layer_model" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">LAYER 02</div>
              <div className="aureum-pillar-heading">Execution Layer</div>
              <p className="aureum-pillar-body">
                Trades executed by <span style={{color: '#917F6E', fontWeight: 600}}>independent bullion houses</span> on their own platforms.
              </p>
            </div>
          </Link>

          <Link to="/docs/governance_framework" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">LAYER 03</div>
              <div className="aureum-pillar-heading">Governance Layer</div>
              <p className="aureum-pillar-body">
                <span style={{color: '#917F6E', fontWeight: 600}}>Non-discretionary governance</span> with dual control, 4-eyes principle, and role separation.
              </p>
            </div>
          </Link>

          <Link to="/docs/evidence_philosophy" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">LAYER 04</div>
              <div className="aureum-pillar-heading">Evidence Layer</div>
              <p className="aureum-pillar-body">
                <span style={{color: '#917F6E', fontWeight: 600}}>Immutable, append-only</span> evidence designed for external audit and regulatory review.
              </p>
            </div>
          </Link>
        </section>

        <div className="aureum-section-title">
          INSTITUTIONAL PRINCIPLES
        </div>
        <section className="aureum-pillars">
          <Link to="/docs/what_aureum_is_not" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">POSITIONING</div>
              <div className="aureum-pillar-heading">Non-Intermediation</div>
              <p className="aureum-pillar-body">
                Aureum One is <span style={{color: '#917F6E', fontWeight: 600}}>not a custodian, broker, marketplace, or investment platform</span>. No asset aggregation or balance pooling.
              </p>
            </div>
          </Link>

          <Link to="/docs/architecture_principle" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">DESIGN CONSTRAINT</div>
              <div className="aureum-pillar-heading">Separation of Control</div>
              <p className="aureum-pillar-body">
                <span style={{color: '#917F6E', fontWeight: 600}}>No single party may control more than one critical layer</span> to eliminate concentration risk.
              </p>
            </div>
          </Link>

          <Link to="/docs/compliance_position" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">REGULATORY POSTURE</div>
              <div className="aureum-pillar-heading">Jurisdiction-Agnostic</div>
              <p className="aureum-pillar-body">
                <span style={{color: '#917F6E', fontWeight: 600}}>Compliance obligations remain with custodians and execution venues</span>. Aureum One governs, does not intermediate.
              </p>
            </div>
          </Link>
        </section>

        <section className="aureum-cta-section">
          <div className="aureum-cta-container">
            <h2 className="aureum-cta-title">
              Designed for <span style={{color: '#917F6E'}}>Institutional Rigor</span>
            </h2>
            <p className="aureum-cta-subtitle">
              This documentation is intended for professional counterparties, custodians, execution venues, auditors, regulators, and institutional partners.
            </p>
            <div className="aureum-hero-buttons">
              <Link className="aureum-button-primary" to="/docs">
                Access Full Documentation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
