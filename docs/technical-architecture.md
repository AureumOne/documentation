---
id: technical-architecture
title: Technical Architecture
sidebar_label: Architecture
---

Aureum One uses a lean, secure institutional architecture:

- AWS VPC with segregated networks,
- ECS Fargate for backend compute,
- RDS PostgreSQL for institutional data,
- S3 for secure storage,
- Secrets Manager for sensitive credentials,
- XRPL for token issuance and settlement.

This structure provides resilience, security, and audit-ready operation.
