---
id: whitepaper-technology
title: 7. Technologie und Sicherheit
sidebar_label: Technologie
---

Aureum One ist auf einer schlanken institutionellen Architektur aufgebaut:

- AWS VPC mit getrennten Subnetzen,
- ECS Fargate für containerisiertes Backend,
- RDS PostgreSQL für institutionelle Datenintegrität,
- S3 für sichere Berichts- und Protokollspeicherung,
- Secrets Manager für Credential-Isolation,
- XRPL für Mint/Burn und Abwicklung,
- CloudTrail und CloudWatch für Audit-Protokollierung,
- Optionale WAF für erweiterte Perimeter-Sicherheit.

Grundlegende Sicherheitsprinzipien:

- Zugang nach dem Prinzip der geringsten Berechtigung,
- Obligatorische MFA,
- Unveränderliche Protokolle,
- Regelmäßige Backup- und Wiederherstellungstests.
