---
id: whitepaper-technology
title: 7. Tecnología y Seguridad
sidebar_label: Tecnología
---

Aureum One está construido utilizando una arquitectura institucional ágil:

- AWS VPC con subredes segregadas,
- ECS Fargate para backend containerizado,
- RDS PostgreSQL para integridad de datos institucionales,
- S3 para almacenamiento seguro de informes y registros,
- Secrets Manager para aislamiento de credenciales,
- XRPL para acuñación/quema y liquidación,
- CloudTrail y CloudWatch para registro de auditoría,
- WAF opcional para seguridad perimetral mejorada.

Principios fundamentales de seguridad:

- Acceso de privilegio mínimo,
- MFA obligatorio,
- Registros inmutables,
- Pruebas regulares de respaldo y restauración.
