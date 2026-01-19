// @ts-check

/**
 * Aureum One Documentation Sidebar Configuration
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Aureum One',
      items: [
        'what_aureum_is',
        'what_aureum_is_not',
        'scope_and_boundaries',
        'non_intermediation',
      ],
    },
    {
      type: 'category',
      label: 'Architecture & Governance',
      items: [
        'architecture_principle',
        'four_layer_model',
        'governance_framework',
        'decision_authority',
      ],
    },
    {
      type: 'category',
      label: 'Evidence & Auditability',
      items: [
        'evidence_philosophy',
        'aiel',
        'audit_access',
      ],
    },
    {
      type: 'category',
      label: 'Compliance & Risk',
      items: [
        'compliance_position',
        'kyc_aml',
        'risk_factors',
        'liability_accountability',
        'incident_exception_handling',
      ],
    },
    {
      type: 'category',
      label: 'Entity Governance',
      items: [
        'entity_governance',
        'org_separation_control',
        'jurisdictional_anchoring',
      ],
    },
    {
      type: 'category',
      label: 'Continuity & Scale',
      items: [
        'business_continuity',
        'counterparty_independence',
        'scalability_systemic_risk',
        'growth_regulatory_posture',
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      items: [
        'disclaimer',
        'terms_of_use',
        'privacy_policy',
      ],
    },
  ],
};

export default sidebars;
