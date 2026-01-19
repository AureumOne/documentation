// i18n/es/docusaurus-plugin-content-pages/index.js

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Aureum One — Documentación Institucional"
      description="Documentación institucional pública para contrapartes profesionales, reguladores y auditores."
    >
      <main>
        <section className="aureum-hero">
          <div className="aureum-hero-badge">
            DOCUMENTACIÓN INSTITUCIONAL
          </div>
          <h1 className="aureum-hero-title">
            Aureum One
          </h1>
          <p className="aureum-hero-subtitle">
            <span className="aureum-hero-highlight">Infraestructura institucional no custodial</span> para oro físico. Diseñada para <span className="aureum-hero-highlight">contrapartes profesionales</span>, reguladores y socios institucionales.
          </p>
          <p className="aureum-hero-description">
            Esta documentación define el alcance institucional, límites arquitectónicos, postura de gobernanza y posicionamiento de cumplimiento de Aureum One. No es material de marketing.
          </p>

          <div className="aureum-hero-buttons">
            <Link className="aureum-button-primary" to="/docs">
              Leer Documentación
            </Link>
            <Link className="aureum-button-ghost" to="/docs/what_aureum_is">
              Qué es Aureum One
            </Link>
          </div>
        </section>

        <div className="aureum-section-title">
          MODELO INSTITUCIONAL DE CUATRO CAPAS
        </div>
        <section className="aureum-pillars">
          <Link to="/docs/four_layer_model" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">CAPA 01</div>
              <div className="aureum-pillar-heading">Capa de Custodia</div>
              <p className="aureum-pillar-body">
                Oro físico mantenido por <span style={{color: '#917F6E', fontWeight: 600}}>custodios profesionales terceros</span> bajo sus propios marcos regulatorios.
              </p>
            </div>
          </Link>

          <Link to="/docs/four_layer_model" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">CAPA 02</div>
              <div className="aureum-pillar-heading">Capa de Ejecución</div>
              <p className="aureum-pillar-body">
                Operaciones ejecutadas por <span style={{color: '#917F6E', fontWeight: 600}}>casas de bullion independientes</span> en sus propias plataformas.
              </p>
            </div>
          </Link>

          <Link to="/docs/governance_framework" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">CAPA 03</div>
              <div className="aureum-pillar-heading">Capa de Gobernanza</div>
              <p className="aureum-pillar-body">
                <span style={{color: '#917F6E', fontWeight: 600}}>Gobernanza no discrecional</span> con control dual, principio de 4 ojos y separación de funciones.
              </p>
            </div>
          </Link>

          <Link to="/docs/evidence_philosophy" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">CAPA 04</div>
              <div className="aureum-pillar-heading">Capa de Evidencia</div>
              <p className="aureum-pillar-body">
                Evidencia <span style={{color: '#917F6E', fontWeight: 600}}>inmutable, solo-anexión</span> diseñada para auditoría externa y revisión regulatoria.
              </p>
            </div>
          </Link>
        </section>

        <div className="aureum-section-title">
          PRINCIPIOS INSTITUCIONALES
        </div>
        <section className="aureum-pillars">
          <Link to="/docs/what_aureum_is_not" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">POSICIONAMIENTO</div>
              <div className="aureum-pillar-heading">No-Intermediación</div>
              <p className="aureum-pillar-body">
                Aureum One <span style={{color: '#917F6E', fontWeight: 600}}>no es custodio, corredor, marketplace o plataforma de inversión</span>. Sin agregación de activos o pooling de saldos.
              </p>
            </div>
          </Link>

          <Link to="/docs/architecture_principle" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">RESTRICCIÓN DE DISEÑO</div>
              <div className="aureum-pillar-heading">Separación de Control</div>
              <p className="aureum-pillar-body">
                <span style={{color: '#917F6E', fontWeight: 600}}>Ninguna parte puede controlar más de una capa crítica</span> para eliminar riesgo de concentración.
              </p>
            </div>
          </Link>

          <Link to="/docs/compliance_position" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">POSTURA REGULATORIA</div>
              <div className="aureum-pillar-heading">Agnóstico de Jurisdicción</div>
              <p className="aureum-pillar-body">
                <span style={{color: '#917F6E', fontWeight: 600}}>Las obligaciones de cumplimiento permanecen con custodios y lugares de ejecución</span>. Aureum One gobierna, no intermedia.
              </p>
            </div>
          </Link>
        </section>

        <section className="aureum-cta-section">
          <div className="aureum-cta-container">
            <h2 className="aureum-cta-title">
              Diseñado para <span style={{color: '#917F6E'}}>Rigor Institucional</span>
            </h2>
            <p className="aureum-cta-subtitle">
              Esta documentación está destinada a contrapartes profesionales, custodios, lugares de ejecución, auditores, reguladores y socios institucionales.
            </p>
            <div className="aureum-hero-buttons">
              <Link className="aureum-button-primary" to="/docs">
                Acceder a Documentación Completa
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
