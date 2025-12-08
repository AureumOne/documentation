// src/pages/index.js

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Aureum One Documentation"
      description="Swiss-grade gold tokenization, institutional governance, and technical infrastructure documentation."
    >
      <main>
        <section className="aureum-hero">
          <div className="aureum-hero-badge">
            INSTITUTIONAL DOCUMENTATION · AUREUM ONE
          </div>
          <h1 className="aureum-hero-title">
            Swiss-Grade Gold Tokenization,<br />
            <span className="aureum-hero-highlight">
              Documented with Institutional Clarity.
            </span>
          </h1>
          <p className="aureum-hero-subtitle">
            This portal consolidates the core documentation for Aureum One: a
            multi-jurisdictional infrastructure that connects Swiss-vaulted
            physical gold with a transparent, audit-ready digital settlement
            layer on XRPL, under conservative governance and independent
            external oversight.
          </p>

          <div className="aureum-hero-buttons">
            <Link
              className="aureum-button-primary"
              to="/docs/whitepaper-executive-summary"
            >
              Read the White Paper
            </Link>
            <Link
              className="aureum-button-ghost"
              to="/docs/institutional-overview"
            >
              View Institutional Framework
            </Link>
          </div>
        </section>

        <div className="aureum-section-title">
          CORE PILLARS
        </div>
        <section className="aureum-pillars">
          <div className="aureum-pillar-card">
            <div className="aureum-pillar-title">Real Asset Layer</div>
            <div className="aureum-pillar-heading">Swiss-Vaulted Physical Gold</div>
            <p className="aureum-pillar-body">
              Fully allocated gold, stored under professional custody in
              Switzerland, with segregated ownership, formal documentation, and
              a conservative risk posture aligned with long-term wealth
              preservation.
            </p>
          </div>

          <div className="aureum-pillar-card">
            <div className="aureum-pillar-title">Governance & Compliance</div>
            <div className="aureum-pillar-heading">Institutional Oversight</div>
            <p className="aureum-pillar-body">
              A dedicated operational entity manages onboarding, gold lifecycle,
              and accounting, under the supervision of an Independent External
              Auditor who reviews controls, reconciliations, and critical
              tokenization events.
            </p>
          </div>

          <div className="aureum-pillar-card">
            <div className="aureum-pillar-title">Digital Settlement Layer</div>
            <div className="aureum-pillar-heading">XRPL-Based Liquidity</div>
            <p className="aureum-pillar-body">
              A transparent 1:1 representation of allocated gold is issued and
              redeemed on XRPL, enabling instant global settlement while
              preserving auditability, supply transparency, and strict
              governance around mint and burn operations.
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
              Conceptual and institutional overview of Aureum One, including
              architecture, governance model, financial flows, tokenomics, and
              the long-term positioning as a conservative, audit-ready gold
              tokenization infrastructure.
            </p>
            <Link to="/docs/whitepaper-executive-summary" className="aureum-button-ghost" style={{marginTop: '0.9rem', display: 'inline-block'}}>
              Open White Paper
            </Link>
          </div>

          <div className="aureum-pillar-card">
            <div className="aureum-pillar-heading">Institutional Framework</div>
            <p className="aureum-pillar-body">
              Documentation focused on legal posture, role separation, and the
              responsibilities of the operational entity and the Independent
              External Auditor, including reconciliation scope and reporting
              expectations.
            </p>
            <Link to="/docs/institutional-overview" className="aureum-button-ghost" style={{marginTop: '0.9rem', display: 'inline-block'}}>
              View Institutional Docs
            </Link>
          </div>

          <div className="aureum-pillar-card">
            <div className="aureum-pillar-heading">Technology & Compliance</div>
            <p className="aureum-pillar-body">
              Technical architecture on AWS, security model, and a high-level
              view of the AML/KYC framework, enabling banks, partners, and
              auditors to understand how infrastructure and compliance are
              implemented end-to-end.
            </p>
            <Link to="/docs/technical-architecture" className="aureum-button-ghost" style={{marginTop: '0.9rem', display: 'inline-block'}}>
              Explore Tech & Compliance
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
