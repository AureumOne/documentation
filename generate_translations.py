#!/usr/bin/env python3
"""Generate i18n translations for Aureum One documentation."""

import os
from pathlib import Path

# Translation mappings
translations = {
    'pt-BR': {
        '00_readme.md': '''---
title: Documentação Aureum One
sidebar_label: Visão Geral
---

# Aureum One — Documentação Institucional Pública

Esta documentação define o escopo institucional, limites arquiteturais, postura de governança e posicionamento de conformidade da Aureum One.

Destina-se a contrapartes profissionais, custodiantes, locais de execução, auditores, reguladores e parceiros institucionais.

Esta documentação não é material de marketing e não constitui oferta, solicitação ou aconselhamento financeiro.
''',
        '01_what_aureum_is.md': '''---
title: O Que é Aureum One
sidebar_label: O Que é Aureum One
---

## O Que é Aureum One — Precisamente

Aureum One é uma infraestrutura institucional não custodial para ouro físico.

Aureum One opera como uma camada neutra de orquestração e governança que fica acima dos trilhos de custódia e execução existentes no mercado de ouro físico.

Aureum One não vende ouro, custodia ouro, mantém ativos de clientes, executa negociações, intermedia transações ou toma decisões de investimento ou econômicas.

O ativo subjacente é sempre ouro físico totalmente alocado, mantido com custodiantes terceiros independentes e profissionais sob seus próprios regimes regulatórios.

Aureum One nunca toca ativos, nunca controla contas de custódia e nunca tem autoridade de assinatura sobre fundos ou metais de clientes.

Seu único papel é governar, autorizar e evidenciar fluxos de grau institucional entre contrapartes independentes.
''',
        '02_what_aureum_is_not.md': '''---
title: O Que Aureum One Não É
sidebar_label: O Que Aureum One Não É
---

## O Que Aureum One Não É

Para absoluta clareza, Aureum One não é:

- um custodiante
- uma corretora
- uma casa de ouro
- um local de negociação
- uma plataforma de investimento
- um marketplace
- um provedor de carteira
- um intermediário financeiro

Aureum One não agrega saldos, não agrupa ativos e não rehipoteca ouro.

Custodiantes e locais de execução permanecem soberanos em seus balanços em todos os momentos.
''',
        '03_scope_and_boundaries.md': '''---
title: Escopo e Limites
sidebar_label: Escopo e Limites
---

## Escopo Institucional e Limites de Responsabilidade

A responsabilidade da Aureum One é estritamente limitada à aplicação de regras de governança, fluxos de autorização, controles institucionais e geração de evidências imutáveis.

Responsabilidades explicitamente excluídas da Aureum One incluem custódia física de ouro, operações de cofre, execução de negociações, precificação, liquidação de fundos, execução de KYC/AML e decisões de onboarding de clientes.

Cada responsabilidade funcional permanece totalmente de propriedade da contraparte profissional relevante.
''',
        '04_architecture_principle.md': '''---
title: Princípio Arquitetural
sidebar_label: Princípio Arquitetural
---

## Princípio Arquitetural

Aureum One é construída sobre um único princípio arquitetural não negociável:

Nenhuma parte única pode controlar mais de uma camada crítica do sistema.

Este princípio existe para eliminar risco de concentração, abuso discricionário e pontos únicos de falha.

O sistema é intencionalmente projetado para permanecer institucionalmente previsível, auditável e não discricionário.
''',
        '05_four_layer_model.md': '''---
title: Modelo de Quatro Camadas
sidebar_label: Modelo de Quatro Camadas
---

## Modelo Institucional de Quatro Camadas

Aureum One separa o sistema em quatro camadas independentes por design.

### Camada de Custódia
Ouro físico é mantido por custodiantes terceiros profissionais sob seus próprios frameworks legais, regulatórios e de seguro.

Aureum One não tem acesso a cofres, metal ou contas de custódia.

### Camada de Execução
Negociações são executadas por casas de ouro independentes ou locais de execução em suas próprias plataformas.

Precificação, liquidez e risco de execução permanecem inteiramente fora da Aureum One.

### Camada de Governança
Aureum One aplica regras de governança não discricionárias, incluindo requisitos de aprovação, sequenciamento de autorização, separação de funções e caminhos de escalação.

### Camada de Evidência
Cada evento governado gera evidência imutável e append-only projetada para auditoria externa e revisão regulatória.
''',
        '06_governance_framework.md': '''---
title: Framework de Governança
sidebar_label: Framework de Governança
---

## Framework de Governança

Aureum One implementa controles de governança comumente encontrados em instituições financeiras reguladas.

Estes incluem controle duplo, o princípio de quatro olhos, separação de funções, autoridade de decisão explícita, trilhas de auditoria imutáveis e regras não substituíveis.

Nenhum usuário, função ou entidade única pode iniciar, aprovar, executar e evidenciar a mesma ação crítica.
''',
        '07_decision_authority.md': '''---
title: Autoridade de Decisão
sidebar_label: Autoridade de Decisão
---

## Autoridade de Decisão e Modelo de Controle

Todas as ações institucionais seguem uma separação estrita.

Solicitações são iniciadas por funções autorizadas.

Aprovações são validadas por autoridade independente.

Execução é realizada por contrapartes externas.

Evidência é selada automaticamente pelo sistema.

Aureum One nunca colapsa essas funções.
''',
        '08_evidence_philosophy.md': '''---
title: Filosofia de Evidência
sidebar_label: Filosofia de Evidência
---

## Filosofia de Evidência

Na Aureum One, evidência não é logging.

Evidência é tratada como um ativo institucional.

Cada evento crítico gera um registro selado com integridade criptográfica, estrutura determinística e compatibilidade de auditoria externa.

Evidência é append-only e não pode ser alterada ou deletada.
''',
        '09_aiel.md': '''---
title: AIEL
sidebar_label: AIEL
---

## AIEL — Camada de Evidência Imutável Aureum

A Camada de Evidência Imutável Aureum garante que todos os eventos governados sejam registrados, imutáveis na criação e reconstruíveis em qualquer ponto no tempo.

O AIEL existe para apoiar auditores externos, conformidade institucional e consultas regulatórias sem dependência de confiança no operador.
''',
        '10_audit_access.md': '''---
title: Acesso de Auditoria
sidebar_label: Acesso de Auditoria
---

## Acesso de Auditoria e Revisão Externa

Auditores recebem acesso independente somente leitura aos registros de evidência.

Aureum One não pode alterar escopo de auditoria, suprimir registros ou modificar evidência pós-criação.

O próprio sistema é o registro.
''',
        '11_compliance_position.md': '''---
title: Posição de Conformidade
sidebar_label: Posição de Conformidade
---

## Conformidade e Posicionamento Regulatório

Aureum One é agnóstica de jurisdição por design.

Não mantém fundos de clientes, custodia ativos ou intermedia transações.

Obrigações de conformidade permanecem com custodiantes, locais de execução e entidades de onboarding.

O papel da Aureum One é limitado a governança e evidência.
''',
        '12_kyc_aml.md': '''---
title: KYC / AML
sidebar_label: KYC / AML
---

## Limites de Responsabilidade KYC / AML

Aureum One não realiza verificações KYC ou AML.

Execução de KYC e AML é responsabilidade de custodiantes, locais de execução e entidades de onboarding reguladas.

Aureum One pode registrar decisões de conformidade, evidenciar aprovações e aplicar resultados de regras.
''',
        '13_risk_factors.md': '''---
title: Fatores de Risco
sidebar_label: Fatores de Risco
---

## Visão Geral de Fatores de Risco e Mitigação

Aureum One reconhece riscos operacionais, de contraparte, de interpretação regulatória e de tecnologia.

Esses riscos são mitigados através de separação estrita de camadas, arquitetura não custodial, evidência imutável e auditabilidade externa.
''',
        '14_disclaimer.md': '''---
title: Aviso Legal
sidebar_label: Aviso Legal
---

## Aviso Legal

Esta documentação é fornecida apenas para fins informativos.

Não constitui oferta, solicitação, aconselhamento de investimento ou aconselhamento jurídico.

Todas as contrapartes permanecem responsáveis por suas próprias avaliações regulatórias e legais.
''',
    },
    'es': {
        '00_readme.md': '''---
title: Documentación Aureum One
sidebar_label: Descripción General
---

# Aureum One — Documentación Institucional Pública

Esta documentación define el alcance institucional, límites arquitectónicos, postura de gobernanza y posicionamiento de cumplimiento de Aureum One.

Está destinada a contrapartes profesionales, custodios, lugares de ejecución, auditores, reguladores y socios institucionales.

Esta documentación no es material de marketing y no constituye oferta, solicitud o asesoramiento financiero.
''',
        '01_what_aureum_is.md': '''---
title: Qué es Aureum One
sidebar_label: Qué es Aureum One
---

## Qué es Aureum One — Precisamente

Aureum One es una infraestructura institucional no custodial para oro físico.

Aureum One opera como una capa neutral de orquestación y gobernanza que se sitúa por encima de los rieles de custodia y ejecución existentes en el mercado de oro físico.

Aureum One no vende oro, custodia oro, mantiene activos de clientes, ejecuta operaciones, intermedia transacciones o toma decisiones de inversión o económicas.

El activo subyacente es siempre oro físico totalmente asignado, mantenido con custodios terceros independientes y profesionales bajo sus propios regímenes regulatorios.

Aureum One nunca toca activos, nunca controla cuentas de custodia y nunca tiene autoridad de firma sobre fondos o metales de clientes.

Su único papel es gobernar, autorizar y evidenciar flujos de grado institucional entre contrapartes independientes.
''',
        '02_what_aureum_is_not.md': '''---
title: Qué No es Aureum One
sidebar_label: Qué No es Aureum One
---

## Qué No es Aureum One

Para absoluta claridad, Aureum One no es:

- un custodio
- un corredor de bolsa
- una casa de oro
- un lugar de negociación
- una plataforma de inversión
- un marketplace
- un proveedor de billetera
- un intermediario financiero

Aureum One no agrega saldos, no agrupa activos y no rehipoteca oro.

Los custodios y lugares de ejecución permanecen soberanos en sus balances en todo momento.
''',
        '03_scope_and_boundaries.md': '''---
title: Alcance y Límites
sidebar_label: Alcance y Límites
---

## Alcance Institucional y Límites de Responsabilidad

La responsabilidad de Aureum One está estrictamente limitada a la aplicación de reglas de gobernanza, flujos de autorización, controles institucionales y generación de evidencia inmutable.

Responsabilidades explícitamente excluidas de Aureum One incluyen custodia física de oro, operaciones de bóveda, ejecución de operaciones, fijación de precios, liquidación de fondos, ejecución de KYC/AML y decisiones de incorporación de clientes.

Cada responsabilidad funcional permanece totalmente propiedad de la contraparte profesional relevante.
''',
        '04_architecture_principle.md': '''---
title: Principio Arquitectónico
sidebar_label: Principio Arquitectónico
---

## Principio Arquitectónico

Aureum One está construida sobre un único principio arquitectónico no negociable:

Ninguna parte única puede controlar más de una capa crítica del sistema.

Este principio existe para eliminar el riesgo de concentración, abuso discrecional y puntos únicos de falla.

El sistema está intencionalmente diseñado para permanecer institucionalmente predecible, auditable y no discrecional.
''',
        '05_four_layer_model.md': '''---
title: Modelo de Cuatro Capas
sidebar_label: Modelo de Cuatro Capas
---

## Modelo Institucional de Cuatro Capas

Aureum One separa el sistema en cuatro capas independientes por diseño.

### Capa de Custodia
El oro físico es mantenido por custodios terceros profesionales bajo sus propios marcos legales, regulatorios y de seguros.

Aureum One no tiene acceso a bóvedas, metal o cuentas de custodia.

### Capa de Ejecución
Las operaciones son ejecutadas por casas de oro independientes o lugares de ejecución en sus propias plataformas.

Fijación de precios, liquidez y riesgo de ejecución permanecen completamente fuera de Aureum One.

### Capa de Gobernanza
Aureum One aplica reglas de gobernanza no discrecionales, incluyendo requisitos de aprobación, secuenciación de autorización, separación de funciones y rutas de escalación.

### Capa de Evidencia
Cada evento gobernado genera evidencia inmutable y de solo agregación diseñada para auditoría externa y revisión regulatoria.
''',
        '06_governance_framework.md': '''---
title: Marco de Gobernanza
sidebar_label: Marco de Gobernanza
---

## Marco de Gobernanza

Aureum One implementa controles de gobernanza comúnmente encontrados en instituciones financieras reguladas.

Estos incluyen control dual, el principio de cuatro ojos, separación de funciones, autoridad de decisión explícita, pistas de auditoría inmutables y reglas no anulables.

Ningún usuario, función o entidad única puede iniciar, aprobar, ejecutar y evidenciar la misma acción crítica.
''',
        '07_decision_authority.md': '''---
title: Autoridad de Decisión
sidebar_label: Autoridad de Decisión
---

## Autoridad de Decisión y Modelo de Control

Todas las acciones institucionales siguen una separación estricta.

Las solicitudes son iniciadas por funciones autorizadas.

Las aprobaciones son validadas por autoridad independiente.

La ejecución es realizada por contrapartes externas.

La evidencia es sellada automáticamente por el sistema.

Aureum One nunca colapsa estas funciones.
''',
        '08_evidence_philosophy.md': '''---
title: Filosofía de Evidencia
sidebar_label: Filosofía de Evidencia
---

## Filosofía de Evidencia

En Aureum One, la evidencia no es registro.

La evidencia es tratada como un activo institucional.

Cada evento crítico genera un registro sellado con integridad criptográfica, estructura determinística y compatibilidad de auditoría externa.

La evidencia es de solo agregación y no puede ser alterada o eliminada.
''',
        '09_aiel.md': '''---
title: AIEL
sidebar_label: AIEL
---

## AIEL — Capa de Evidencia Inmutable Aureum

La Capa de Evidencia Inmutable Aureum asegura que todos los eventos gobernados sean registrados, inmutables en la creación y reconstruibles en cualquier punto en el tiempo.

El AIEL existe para apoyar a auditores externos, cumplimiento institucional y consultas regulatorias sin dependencia de confianza en el operador.
''',
        '10_audit_access.md': '''---
title: Acceso de Auditoría
sidebar_label: Acceso de Auditoría
---

## Acceso de Auditoría y Revisión Externa

Los auditores reciben acceso independiente de solo lectura a los registros de evidencia.

Aureum One no puede alterar el alcance de auditoría, suprimir registros o modificar evidencia post-creación.

El sistema mismo es el registro.
''',
        '11_compliance_position.md': '''---
title: Posición de Cumplimiento
sidebar_label: Posición de Cumplimiento
---

## Cumplimiento y Posicionamiento Regulatorio

Aureum One es agnóstica de jurisdicción por diseño.

No mantiene fondos de clientes, custodia activos o intermedia transacciones.

Las obligaciones de cumplimiento permanecen con custodios, lugares de ejecución y entidades de incorporación.

El papel de Aureum One está limitado a gobernanza y evidencia.
''',
        '12_kyc_aml.md': '''---
title: KYC / AML
sidebar_label: KYC / AML
---

## Límites de Responsabilidad KYC / AML

Aureum One no realiza verificaciones KYC o AML.

La ejecución de KYC y AML es responsabilidad de custodios, lugares de ejecución y entidades de incorporación reguladas.

Aureum One puede registrar decisiones de cumplimiento, evidenciar aprobaciones y aplicar resultados de reglas.
''',
        '13_risk_factors.md': '''---
title: Factores de Riesgo
sidebar_label: Factores de Riesgo
---

## Descripción General de Factores de Riesgo y Mitigación

Aureum One reconoce riesgos operacionales, de contraparte, de interpretación regulatoria y de tecnología.

Estos riesgos son mitigados a través de separación estricta de capas, arquitectura no custodial, evidencia inmutable y auditabilidad externa.
''',
        '14_disclaimer.md': '''---
title: Aviso Legal
sidebar_label: Aviso Legal
---

## Aviso Legal

Esta documentación se proporciona solo con fines informativos.

No constituye oferta, solicitud, asesoramiento de inversión o asesoramiento legal.

Todas las contrapartes permanecen responsables de sus propias evaluaciones regulatorias y legales.
''',
    },
    'de': {
        '00_readme.md': '''---
title: Aureum One Dokumentation
sidebar_label: Übersicht
---

# Aureum One — Öffentliche Institutionelle Dokumentation

Diese Dokumentation definiert den institutionellen Umfang, architektonische Grenzen, Governance-Haltung und Compliance-Positionierung von Aureum One.

Sie richtet sich an professionelle Gegenparteien, Verwahrer, Ausführungsorte, Prüfer, Regulierungsbehörden und institutionelle Partner.

Diese Dokumentation ist kein Marketingmaterial und stellt kein Angebot, keine Aufforderung oder Finanzberatung dar.
''',
        '01_what_aureum_is.md': '''---
title: Was Aureum One Ist
sidebar_label: Was Aureum One Ist
---

## Was Aureum One Ist — Präzise

Aureum One ist eine nicht-verwahrende institutionelle Infrastruktur für physisches Gold.

Aureum One fungiert als neutrale Orchestrierungs- und Governance-Schicht, die über bestehenden Verwahrungs- und Ausführungsschienen im physischen Goldmarkt liegt.

Aureum One verkauft kein Gold, verwahrt kein Gold, hält keine Kundenvermögen, führt keine Geschäfte aus, vermittelt keine Transaktionen und trifft keine Investitions- oder Wirtschaftsentscheidungen.

Der zugrunde liegende Vermögenswert ist immer vollständig zugeordnetes physisches Gold, das bei unabhängigen, professionellen Drittverwahrern unter ihren eigenen regulatorischen Regimen gehalten wird.

Aureum One berührt niemals Vermögenswerte, kontrolliert niemals Verwahrungskonten und hat niemals Zeichnungsbefugnis über Kundengelder oder Metalle.

Seine einzige Rolle besteht darin, institutionelle Flüsse zwischen unabhängigen Gegenparteien zu regieren, zu autorisieren und zu belegen.
''',
        '02_what_aureum_is_not.md': '''---
title: Was Aureum One Nicht Ist
sidebar_label: Was Aureum One Nicht Ist
---

## Was Aureum One Nicht Ist

Zur absoluten Klarheit ist Aureum One nicht:

- ein Verwahrer
- ein Broker-Dealer
- ein Goldhaus
- ein Handelsplatz
- eine Investmentplattform
- ein Marktplatz
- ein Wallet-Anbieter
- ein Finanzintermediär

Aureum One aggregiert keine Salden, bündelt keine Vermögenswerte und rehypothetisiert kein Gold.

Verwahrer und Ausführungsorte bleiben jederzeit bilanzsouverän.
''',
        '03_scope_and_boundaries.md': '''---
title: Umfang und Grenzen
sidebar_label: Umfang und Grenzen
---

## Institutioneller Umfang und Verantwortungsgrenzen

Die Verantwortung von Aureum One ist streng auf Governance-Regeldurchsetzung, Autorisierungsabläufe, institutionelle Kontrollen und unveränderliche Beweiserzeugung beschränkt.

Verantwortlichkeiten, die ausdrücklich von Aureum One ausgeschlossen sind, umfassen physische Goldverwahrung, Tresoroperationen, Handelsausführung, Preisgestaltung, Fondsabwicklung, KYC/AML-Ausführung und Kundenonboarding-Entscheidungen.

Jede funktionale Verantwortung bleibt vollständig im Besitz der relevanten professionellen Gegenpartei.
''',
        '04_architecture_principle.md': '''---
title: Architekturprinzip
sidebar_label: Architekturprinzip
---

## Architekturprinzip

Aureum One basiert auf einem einzigen, nicht verhandelbaren Architekturprinzip:

Keine einzelne Partei darf mehr als eine kritische Schicht des Systems kontrollieren.

Dieses Prinzip existiert, um Konzentrationsrisiko, diskretionären Missbrauch und einzelne Ausfallpunkte zu eliminieren.

Das System ist absichtlich so konzipiert, dass es institutionell vorhersehbar, prüfbar und nicht diskretionär bleibt.
''',
        '05_four_layer_model.md': '''---
title: Vier-Schichten-Modell
sidebar_label: Vier-Schichten-Modell
---

## Institutionelles Vier-Schichten-Modell

Aureum One trennt das System absichtlich in vier unabhängige Schichten.

### Verwahrungsschicht
Physisches Gold wird von professionellen Drittverwahrern unter ihren eigenen rechtlichen, regulatorischen und Versicherungsrahmen gehalten.

Aureum One hat keinen Zugang zu Tresoren, Metall oder Verwahrungskonten.

### Ausführungsschicht
Geschäfte werden von unabhängigen Goldhäusern oder Ausführungsorten auf ihren eigenen Plattformen ausgeführt.

Preisgestaltung, Liquidität und Ausführungsrisiko bleiben vollständig außerhalb von Aureum One.

### Governance-Schicht
Aureum One setzt nicht-diskretionäre Governance-Regeln durch, einschließlich Genehmigungsanforderungen, Autorisierungssequenzierung, Rollentrennung und Eskalationspfaden.

### Beweisschicht
Jedes geregelte Ereignis erzeugt unveränderliche, nur-anhängende Beweise, die für externe Prüfung und regulatorische Überprüfung konzipiert sind.
''',
        '06_governance_framework.md': '''---
title: Governance-Rahmen
sidebar_label: Governance-Rahmen
---

## Governance-Rahmen

Aureum One implementiert Governance-Kontrollen, die üblicherweise in regulierten Finanzinstitutionen zu finden sind.

Dazu gehören Doppelkontrolle, das Vier-Augen-Prinzip, Funktionstrennung, explizite Entscheidungsbefugnis, unveränderliche Prüfpfade und nicht überschreibbare Regeln.

Kein einzelner Benutzer, keine Rolle oder Entität darf dieselbe kritische Aktion initiieren, genehmigen, ausführen und belegen.
''',
        '07_decision_authority.md': '''---
title: Entscheidungsbefugnis
sidebar_label: Entscheidungsbefugnis
---

## Entscheidungsbefugnis und Kontrollmodell

Alle institutionellen Aktionen folgen einer strikten Trennung.

Anfragen werden von autorisierten Rollen initiiert.

Genehmigungen werden von unabhängiger Autorität validiert.

Ausführung wird von externen Gegenparteien durchgeführt.

Beweise werden automatisch vom System versiegelt.

Aureum One kollabiert diese Rollen niemals.
''',
        '08_evidence_philosophy.md': '''---
title: Beweisphilosophie
sidebar_label: Beweisphilosophie
---

## Beweisphilosophie

Bei Aureum One ist Beweis nicht Protokollierung.

Beweis wird als institutionelles Vermögen behandelt.

Jedes kritische Ereignis erzeugt einen versiegelten Datensatz mit kryptografischer Integrität, deterministischer Struktur und externer Prüfungskompatibilität.

Beweis ist nur-anhängend und kann nicht geändert oder gelöscht werden.
''',
        '09_aiel.md': '''---
title: AIEL
sidebar_label: AIEL
---

## AIEL — Aureum Unveränderliche Beweisschicht

Die Aureum Unveränderliche Beweisschicht stellt sicher, dass alle geregelten Ereignisse aufgezeichnet, bei Erstellung unveränderlich und zu jedem Zeitpunkt rekonstruierbar sind.

Das AIEL existiert, um externe Prüfer, institutionelle Compliance und regulatorische Anfragen ohne Abhängigkeit von Betreibervertrauen zu unterstützen.
''',
        '10_audit_access.md': '''---
title: Prüfungszugang
sidebar_label: Prüfungszugang
---

## Prüfungszugang und Externe Überprüfung

Prüfer erhalten unabhängigen Nur-Lese-Zugang zu Beweisakten.

Aureum One kann den Prüfungsumfang nicht ändern, Aufzeichnungen unterdrücken oder Beweise nach der Erstellung ändern.

Das System selbst ist die Aufzeichnung.
''',
        '11_compliance_position.md': '''---
title: Compliance-Position
sidebar_label: Compliance-Position
---

## Compliance und Regulatorische Positionierung

Aureum One ist absichtlich jurisdiktionsagnostisch.

Es hält keine Kundengelder, verwahrt keine Vermögenswerte und vermittelt keine Transaktionen.

Compliance-Verpflichtungen verbleiben bei Verwahrern, Ausführungsorten und Onboarding-Entitäten.

Die Rolle von Aureum One ist auf Governance und Beweis beschränkt.
''',
        '12_kyc_aml.md': '''---
title: KYC / AML
sidebar_label: KYC / AML
---

## KYC / AML Verantwortungsgrenzen

Aureum One führt keine KYC- oder AML-Prüfungen durch.

KYC- und AML-Ausführung liegt in der Verantwortung von Verwahrern, Ausführungsorten und regulierten Onboarding-Entitäten.

Aureum One kann Compliance-Entscheidungen aufzeichnen, Genehmigungen belegen und Regelergebnisse durchsetzen.
''',
        '13_risk_factors.md': '''---
title: Risikofaktoren
sidebar_label: Risikofaktoren
---

## Übersicht über Risikofaktoren und Minderung

Aureum One erkennt operative, Gegenpartei-, regulatorische Interpretations- und Technologierisiken an.

Diese Risiken werden durch strikte Schichttrennung, nicht-verwahrende Architektur, unveränderliche Beweise und externe Prüfbarkeit gemindert.
''',
        '14_disclaimer.md': '''---
title: Rechtlicher Haftungsausschluss
sidebar_label: Haftungsausschluss
---

## Rechtlicher Haftungsausschluss

Diese Dokumentation wird nur zu Informationszwecken bereitgestellt.

Sie stellt kein Angebot, keine Aufforderung, keine Anlageberatung oder Rechtsberatung dar.

Alle Gegenparteien bleiben für ihre eigenen regulatorischen und rechtlichen Bewertungen verantwortlich.
''',
    }
}

def create_translation_files():
    """Create translation files for all locales."""
    base_path = Path(__file__).parent / 'i18n'
    
    for locale, files in translations.items():
        locale_path = base_path / locale / 'docusaurus-plugin-content-docs' / 'current'
        locale_path.mkdir(parents=True, exist_ok=True)
        
        for filename, content in files.items():
            file_path = locale_path / filename
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'Created: {file_path}')

if __name__ == '__main__':
    create_translation_files()
    print('\n✅ Translation files created successfully!')
