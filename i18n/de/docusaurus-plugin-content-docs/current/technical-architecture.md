---
id: technical-architecture
title: Technische Architektur
sidebar_label: Architektur
---

Aureum One verwendet eine schlanke, sichere institutionelle Architektur:

- AWS VPC mit getrennten Netzwerken,
- ECS Fargate für Backend-Computing,
- RDS PostgreSQL für institutionelle Daten,
- S3 für sichere Speicherung,
- Secrets Manager für sensible Anmeldedaten,
- XRPL für Token-Ausgabe und Abwicklung.

Diese Struktur bietet Resilienz, Sicherheit und prüfungsfähigen Betrieb.
