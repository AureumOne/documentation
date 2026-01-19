// i18n/pt-BR/docusaurus-plugin-content-pages/index.js

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Aureum One — Documentação Institucional"
      description="Documentação institucional pública para contrapartes profissionais, reguladores e auditores."
    >
      <main>
        <section className="aureum-hero">
          <div className="aureum-hero-badge">
            DOCUMENTAÇÃO INSTITUCIONAL
          </div>
          <h1 className="aureum-hero-title">
            Aureum One
          </h1>
          <p className="aureum-hero-subtitle">
            <span className="aureum-hero-highlight">Infraestrutura institucional não-custodial</span> para ouro físico. Projetada para <span className="aureum-hero-highlight">contrapartes profissionais</span>, reguladores e parceiros institucionais.
          </p>
          <p className="aureum-hero-description">
            Esta documentação define o escopo institucional, limites arquitetônicos, postura de governança e posicionamento de conformidade da Aureum One. Não é material de marketing.
          </p>

          <div className="aureum-hero-buttons">
            <Link className="aureum-button-primary" to="/docs">
              Ler Documentação
            </Link>
            <Link className="aureum-button-ghost" to="/docs/what_aureum_is">
              O Que é Aureum One
            </Link>
          </div>
        </section>

        <div className="aureum-section-title">
          MODELO INSTITUCIONAL DE QUATRO CAMADAS
        </div>
        <section className="aureum-pillars">
          <Link to="/docs/four_layer_model" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">CAMADA 01</div>
              <div className="aureum-pillar-heading">Camada de Custódia</div>
              <p className="aureum-pillar-body">
                Ouro físico mantido por <span style={{color: '#917F6E', fontWeight: 600}}>custodiantes profissionais terceirizados</span> sob seus próprios marcos regulatórios.
              </p>
            </div>
          </Link>

          <Link to="/docs/four_layer_model" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">CAMADA 02</div>
              <div className="aureum-pillar-heading">Camada de Execução</div>
              <p className="aureum-pillar-body">
                Negociações executadas por <span style={{color: '#917F6E', fontWeight: 600}}>casas de bullion independentes</span> em suas próprias plataformas.
              </p>
            </div>
          </Link>

          <Link to="/docs/governance_framework" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">CAMADA 03</div>
              <div className="aureum-pillar-heading">Camada de Governança</div>
              <p className="aureum-pillar-body">
                <span style={{color: '#917F6E', fontWeight: 600}}>Governança não-discricionária</span> com controle dual, princípio de 4 olhos e separação de funções.
              </p>
            </div>
          </Link>

          <Link to="/docs/evidence_philosophy" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">CAMADA 04</div>
              <div className="aureum-pillar-heading">Camada de Evidência</div>
              <p className="aureum-pillar-body">
                Evidência <span style={{color: '#917F6E', fontWeight: 600}}>imutável, somente-anexação</span> projetada para auditoria externa e revisão regulatória.
              </p>
            </div>
          </Link>
        </section>

        <div className="aureum-section-title">
          PRINCÍPIOS INSTITUCIONAIS
        </div>
        <section className="aureum-pillars">
          <Link to="/docs/what_aureum_is_not" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">POSICIONAMENTO</div>
              <div className="aureum-pillar-heading">Não-Intermediação</div>
              <p className="aureum-pillar-body">
                Aureum One <span style={{color: '#917F6E', fontWeight: 600}}>não é custodiante, corretora, marketplace ou plataforma de investimento</span>. Sem agregação de ativos ou pooling de saldos.
              </p>
            </div>
          </Link>

          <Link to="/docs/architecture_principle" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">RESTRIÇÃO DE DESIGN</div>
              <div className="aureum-pillar-heading">Separação de Controle</div>
              <p className="aureum-pillar-body">
                <span style={{color: '#917F6E', fontWeight: 600}}>Nenhuma parte pode controlar mais de uma camada crítica</span> para eliminar risco de concentração.
              </p>
            </div>
          </Link>

          <Link to="/docs/compliance_position" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="aureum-pillar-card">
              <div className="aureum-pillar-title">POSTURA REGULATÓRIA</div>
              <div className="aureum-pillar-heading">Agnóstico de Jurisdição</div>
              <p className="aureum-pillar-body">
                <span style={{color: '#917F6E', fontWeight: 600}}>Obrigações de conformidade permanecem com custodiantes e locais de execução</span>. Aureum One governa, não intermedeia.
              </p>
            </div>
          </Link>
        </section>

        <section className="aureum-cta-section">
          <div className="aureum-cta-container">
            <h2 className="aureum-cta-title">
              Projetado para <span style={{color: '#917F6E'}}>Rigor Institucional</span>
            </h2>
            <p className="aureum-cta-subtitle">
              Esta documentação é destinada a contrapartes profissionais, custodiantes, locais de execução, auditores, reguladores e parceiros institucionais.
            </p>
            <div className="aureum-hero-buttons">
              <Link className="aureum-button-primary" to="/docs">
                Acessar Documentação Completa
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
