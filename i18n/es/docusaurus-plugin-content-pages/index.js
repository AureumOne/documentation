// i18n/es/docusaurus-plugin-content-pages/index.js

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Documentación Aureum One"
      description="Tokenización de oro de grado suizo, gobernanza institucional y documentación de infraestructura técnica."
    >
      <main>
        <section className="aureum-hero">
          <div className="aureum-hero-badge">
            DOCUMENTACIÓN INSTITUCIONAL · AUREUM ONE
          </div>
          <h1 className="aureum-hero-title">
            Tokenización de Oro de Grado Suizo,<br />
            <span className="aureum-hero-highlight">
              Documentada con Claridad Institucional.
            </span>
          </h1>
          <p className="aureum-hero-subtitle">
            Este portal consolida la documentación central de Aureum One: una
            infraestructura multijurisdiccional que conecta oro físico custodiado
            en Suiza con una capa de liquidación digital transparente y preparada
            para auditorías en XRPL, bajo gobernanza conservadora y supervisión
            externa independiente.
          </p>

          <div className="aureum-hero-buttons">
            <Link
              className="aureum-button-primary"
              to="/docs/whitepaper-executive-summary"
            >
              Leer el White Paper
            </Link>
            <Link
              className="aureum-button-ghost"
              to="/docs/institutional-overview"
            >
              Ver Marco Institucional
            </Link>
          </div>
        </section>

        <div className="aureum-section-title">
          PILARES FUNDAMENTALES
        </div>
        <section className="aureum-pillars">
          <div className="aureum-pillar-card">
            <div className="aureum-pillar-title">Capa de Activos Reales</div>
            <div className="aureum-pillar-heading">Oro Físico Custodiado en Suiza</div>
            <p className="aureum-pillar-body">
              Oro 100% asignado, almacenado bajo custodia profesional en Suiza,
              con propiedad segregada, documentación formal y una postura de
              riesgo conservadora alineada con la preservación de valor a largo plazo.
            </p>
          </div>

          <div className="aureum-pillar-card">
            <div className="aureum-pillar-title">Gobernanza & Cumplimiento</div>
            <div className="aureum-pillar-heading">Supervisión Institucional</div>
            <p className="aureum-pillar-body">
              Una entidad operativa dedicada gestiona el onboarding, el ciclo de
              vida del oro y la contabilidad, bajo la supervisión de un Auditor
              Externo Independiente que revisa controles, reconciliaciones y
              eventos críticos de tokenización.
            </p>
          </div>

          <div className="aureum-pillar-card">
            <div className="aureum-pillar-title">Capa de Liquidación Digital</div>
            <div className="aureum-pillar-heading">Liquidez Basada en XRPL</div>
            <p className="aureum-pillar-body">
              Una representación transparente 1:1 del oro asignado se emite y
              rescata en XRPL, permitiendo liquidación global instantánea mientras
              se preserva la auditabilidad, transparencia del supply y gobernanza
              estricta sobre operaciones de mint y burn.
            </p>
          </div>
        </section>

        <div className="aureum-section-title">
          NAVEGACIÓN
        </div>
        <section className="aureum-pillars">
          <div className="aureum-pillar-card">
            <div className="aureum-pillar-heading">White Paper</div>
            <p className="aureum-pillar-body">
              Visión conceptual e institucional de Aureum One, incluyendo
              arquitectura, modelo de gobernanza, flujos financieros, tokenomics
              y el posicionamiento a largo plazo como infraestructura conservadora
              de tokenización de oro preparada para auditorías.
            </p>
            <Link to="/docs/whitepaper-executive-summary" className="aureum-button-ghost" style={{marginTop: '0.9rem', display: 'inline-block'}}>
              Abrir White Paper
            </Link>
          </div>

          <div className="aureum-pillar-card">
            <div className="aureum-pillar-heading">Marco Institucional</div>
            <p className="aureum-pillar-body">
              Documentación enfocada en postura legal, separación de roles y las
              responsabilidades de la entidad operativa y el Auditor Externo
              Independiente, incluyendo alcance de reconciliación y expectativas
              de reportes.
            </p>
            <Link to="/docs/institutional-overview" className="aureum-button-ghost" style={{marginTop: '0.9rem', display: 'inline-block'}}>
              Ver Docs Institucionales
            </Link>
          </div>

          <div className="aureum-pillar-card">
            <div className="aureum-pillar-heading">Tecnología & Cumplimiento</div>
            <p className="aureum-pillar-body">
              Arquitectura técnica en AWS, modelo de seguridad y una visión de
              alto nivel del marco AML/KYC, permitiendo a bancos, socios y
              auditores entender cómo se implementa la infraestructura y el
              cumplimiento de extremo a extremo.
            </p>
            <Link to="/docs/technical-architecture" className="aureum-button-ghost" style={{marginTop: '0.9rem', display: 'inline-block'}}>
              Explorar Tech & Cumplimiento
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
