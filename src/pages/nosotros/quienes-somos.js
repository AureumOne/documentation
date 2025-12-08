// src/pages/nosotros/quienes-somos.js

import React from 'react';
import Layout from '@theme/Layout';

export default function QuienesSomos() {
  return (
    <Layout
      title="Quiénes Somos"
      description="Página institucional 'Quiénes Somos' de Aureum One."
    >
      <main className="container margin-vert--lg">
        <h1>Quiénes Somos</h1>

        <section>
          <h2>Introducción Institucional</h2>
          <p>
            Aureum One es una infraestructura institucional de tokenización de oro físico suizo, construida sobre tres pilares innegociables: custodia profesional, gobernanza independiente y transparencia verificable.
          </p>
          <p>
            Nuestra misión es ofrecer una conexión segura, sólida y auditable entre oro físico 100% asignado y mecanismos modernos de liquidación digital.
          </p>
          <p>No somos un exchange.</p>
          <p>No somos un producto especulativo.</p>
          <p>No intermediamos oro ajeno.</p>
          <p>
            Somos una infraestructura diseñada para preservar valor, reducir riesgo operativo y proporcionar claridad institucional.
          </p>
        </section>

        <section>
          <h2>Qué es Aureum One</h2>
          <p>
            Aureum One es una capa institucional que une tres mundos con estricta segregación operacional:
          </p>
          <h3>1. Oro físico custodiado en Suiza</h3>
          <p>100% asignado</p>
          <p>Reportes institucionales</p>
          <p>Custodia profesional</p>
          <p>Sin exposición, sin instrumentos derivados</p>

          <h3>2. Operación y gobernanza desde una entidad regulada en Paraguay</h3>
          <p>Cumplimiento AML/KYC</p>
          <p>Controles documentados</p>
          <p>Procesos supervisados por un Auditor Externo Independiente</p>
          <p>Contabilidad, reconciliaciones y trazabilidad</p>

          <h3>3. Liquidación digital a través de XRPL</h3>
          <p>Token 1:1 respaldado por oro físico</p>
          <p>Transparencia total del supply</p>
          <p>Eventos de gobernanza trazables</p>
          <p>Liquidación estable, rápida y verificable</p>
        </section>

        <section>
          <h2>Lo que Defendemos</h2>
          <p>Aureum One existe para resolver tres problemas fundamentales del mercado moderno:</p>
          <h3>Claridad institucional</h3>
          <p>
            Muchas infraestructuras digitales carecen de gobernanza, auditoría o evidencia verificable.
          </p>
          <p>
            Nosotros hacemos lo contrario: todo está documentado, segregado y supervisado.
          </p>

          <h3>Transparencia verificable</h3>
          <p>
            El supply no es una promesa: es auditable, on-chain, y siempre igual al oro físico custodiado.
          </p>

          <h3>Seguridad y disciplina suiza</h3>
          <p>Procesos estandarizados, controles robustos, enfoque conservador.</p>
          <p>Sin leverage.</p>
          <p>Sin rehypothecation.</p>
          <p>Sin riesgos ocultos.</p>
        </section>

        <section>
          <h2>Nuestra Filosofía Institucional</h2>
          <p>Aureum One opera según principios inspirados en la infraestructura financiera suiza:</p>
          <p>Precisión: nada es ambigüo, todo está documentado.</p>
          <p>Neutralidad: decisiones basadas en gobernanza, no en oportunidades comerciales.</p>
          <p>Transparencia: supply, procesos y controles verificables en múltiples capas.</p>
          <p>Seguridad: arquitectura AWS protegida, ledger interno, supervisión independiente.</p>
          <p>Conservadurismo operativo: cada proceso prioriza la reducción de riesgo.</p>
        </section>

        <section>
          <h2>Nuestro Rol en el Ecosistema</h2>
          <h3>Lo que hacemos:</h3>
          <p>Tokenizamos oro físico custodiado en Suiza.</p>
          <p>Mantenemos gobernanza y control.</p>
          <p>Garantizamos reconciliaciones.</p>
          <p>Supervisamos mint/burn bajo auditoría.</p>
          <p>Ofrecemos infraestructura para clientes y socios institucionales.</p>

          <h3>Lo que NO hacemos:</h3>
          <p>No prestamos ni apalancamos oro.</p>
          <p>No utilizamos instrumentos derivados.</p>
          <p>No operamos como un broker.</p>
          <p>No especulamos ni administramos riesgo de mercado.</p>
          <p>No creamos tokens sin respaldo físico confirmado.</p>
        </section>

        <section>
          <h2>Declaración Institucional Final</h2>
          <p>
            Aureum One es una infraestructura diseñada con mentalidad de largo plazo: sólida, trazable, auditable y construida para diálogo con bancos, custodios, auditores y oficinas institucionales.
          </p>
          <p>Nuestro compromiso es simple:</p>
          <p>Oro 100% asignado.</p>
          <p>Gobernanza real.</p>
          <p>Transparencia verificable.</p>
          <p>Infraestructura estable.</p>
        </section>
      </main>
    </Layout>
  );
}
