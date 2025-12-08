// i18n/pt-BR/docusaurus-plugin-content-pages/index.js

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Documentação Aureum One"
      description="Tokenização de ouro de padrão suíço, governança institucional e documentação de infraestrutura técnica."
    >
      <main>
        <section className="aureum-hero">
          <div className="aureum-hero-badge">
            DOCUMENTAÇÃO INSTITUCIONAL · AUREUM ONE
          </div>
          <h1 className="aureum-hero-title">
            Tokenização de Ouro de Padrão Suíço,<br />
            <span className="aureum-hero-highlight">
              Documentada com Clareza Institucional.
            </span>
          </h1>
          <p className="aureum-hero-subtitle">
            Este portal consolida a documentação central da Aureum One: uma
            infraestrutura multijurisdicional que conecta ouro físico custodiado
            na Suíça com uma camada de liquidação digital transparente e preparada
            para auditorias no XRPL, sob governança conservadora e supervisão
            externa independente.
          </p>

          <div className="aureum-hero-buttons">
            <Link
              className="aureum-button-primary"
              to="/docs/whitepaper-executive-summary"
            >
              Ler o White Paper
            </Link>
            <Link
              className="aureum-button-ghost"
              to="/docs/institutional-overview"
            >
              Ver Framework Institucional
            </Link>
          </div>
        </section>

        <div className="aureum-section-title">
          PILARES FUNDAMENTAIS
        </div>
        <section className="aureum-pillars">
          <div className="aureum-pillar-card">
            <div className="aureum-pillar-title">Camada de Ativos Reais</div>
            <div className="aureum-pillar-heading">Ouro Físico Custodiado na Suíça</div>
            <p className="aureum-pillar-body">
              Ouro 100% alocado, armazenado sob custódia profissional na Suíça,
              com propriedade segregada, documentação formal e uma postura de
              risco conservadora alinhada com a preservação de valor a longo prazo.
            </p>
          </div>

          <div className="aureum-pillar-card">
            <div className="aureum-pillar-title">Governança & Compliance</div>
            <div className="aureum-pillar-heading">Supervisão Institucional</div>
            <p className="aureum-pillar-body">
              Uma entidade operacional dedicada gerencia o onboarding, o ciclo de
              vida do ouro e a contabilidade, sob a supervisão de um Auditor
              Externo Independente que revisa controles, reconciliações e
              eventos críticos de tokenização.
            </p>
          </div>

          <div className="aureum-pillar-card">
            <div className="aureum-pillar-title">Camada de Liquidação Digital</div>
            <div className="aureum-pillar-heading">Liquidez Baseada em XRPL</div>
            <p className="aureum-pillar-body">
              Uma representação transparente 1:1 do ouro alocado é emitida e
              resgatada no XRPL, permitindo liquidação global instantânea enquanto
              preserva a auditabilidade, transparência do supply e governança
              estrita sobre operações de mint e burn.
            </p>
          </div>
        </section>

        <div className="aureum-section-title">
          NAVEGAÇÃO
        </div>
        <section className="aureum-pillars">
          <div className="aureum-pillar-card">
            <div className="aureum-pillar-heading">White Paper</div>
            <p className="aureum-pillar-body">
              Visão conceitual e institucional da Aureum One, incluindo
              arquitetura, modelo de governança, fluxos financeiros, tokenomics
              e o posicionamento de longo prazo como infraestrutura conservadora
              de tokenização de ouro preparada para auditorias.
            </p>
            <Link to="/docs/whitepaper-executive-summary" className="aureum-button-ghost" style={{marginTop: '0.9rem', display: 'inline-block'}}>
              Abrir White Paper
            </Link>
          </div>

          <div className="aureum-pillar-card">
            <div className="aureum-pillar-heading">Framework Institucional</div>
            <p className="aureum-pillar-body">
              Documentação focada em postura legal, separação de papéis e as
              responsabilidades da entidade operacional e do Auditor Externo
              Independente, incluindo escopo de reconciliação e expectativas
              de relatórios.
            </p>
            <Link to="/docs/institutional-overview" className="aureum-button-ghost" style={{marginTop: '0.9rem', display: 'inline-block'}}>
              Ver Docs Institucionais
            </Link>
          </div>

          <div className="aureum-pillar-card">
            <div className="aureum-pillar-heading">Tecnologia & Compliance</div>
            <p className="aureum-pillar-body">
              Arquitetura técnica em AWS, modelo de segurança e uma visão de
              alto nível do framework AML/KYC, permitindo que bancos, parceiros e
              auditores entendam como a infraestrutura e o compliance são
              implementados de ponta a ponta.
            </p>
            <Link to="/docs/technical-architecture" className="aureum-button-ghost" style={{marginTop: '0.9rem', display: 'inline-block'}}>
              Explorar Tech & Compliance
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
