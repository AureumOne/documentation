---
id: whitepaper-technology
title: 7. Technology & Security
sidebar_label: Technology
---

Aureum One is built using a lean institutional architecture:

- AWS VPC with segregated subnets,
- ECS Fargate for containerized backend,
- RDS PostgreSQL for institutional data integrity,
- S3 for secure report and log storage,
- Secrets Manager for credential isolation,
- XRPL for mint/burn and settlement,
- CloudTrail and CloudWatch for audit logging,
- Optional WAF for enhanced perimeter security.

Core security principles:

- Least privilege access,
- Mandatory MFA,
- Immutable logs,
- Regular backup and restoration testing.
