// @ts-check

/**
 * Aureum One Documentation Sidebar Configuration
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'White Paper',
      items: [
        'whitepaper-executive-summary',
        'whitepaper-introduction',
        'whitepaper-value-proposition',
        'whitepaper-architecture',
        'whitepaper-governance',
        'whitepaper-financial-flows',
        'whitepaper-tokenomics',
        'whitepaper-technology',
        'whitepaper-banks-partners',
        'whitepaper-transparency-reporting',
        'whitepaper-conclusion',
      ],
    },
    {
      type: 'category',
      label: 'Institutional Framework',
      items: [
        'institutional-overview',
        'institutional-auditor-role',
      ],
    },
    {
      type: 'category',
      label: 'Technology',
      items: [
        'technical-architecture',
        'technical-security',
      ],
    },
    {
      type: 'category',
      label: 'Compliance',
      items: [
        'compliance-overview',
        'compliance-aml-kyc',
      ],
    },
  ],
};

export default sidebars;
