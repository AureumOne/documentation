---
id: whitepaper-technology
title: 7. Tecnologia e Segurança
sidebar_label: Tecnologia
---

Aureum One é construído utilizando uma arquitetura institucional enxuta:

- AWS VPC com sub-redes segregadas,
- ECS Fargate para backend containerizado,
- RDS PostgreSQL para integridade de dados institucionais,
- S3 para armazenamento seguro de relatórios e logs,
- Secrets Manager para isolamento de credenciais,
- XRPL para mint/burn e liquidação,
- CloudTrail e CloudWatch para logging de auditoria,
- WAF opcional para segurança de perímetro aprimorada.

Princípios fundamentais de segurança:

- Acesso de privilégio mínimo,
- MFA obrigatório,
- Logs imutáveis,
- Testes regulares de backup e restauração.
