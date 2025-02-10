export type SubLink = {
  title: string
  href: string
  description?: string
}

export type NavigationItem = {
  label: string
  href: string
  subLinks?: SubLink[]
}

export const NavigationLinks: NavigationItem[] = [
  {
    href: "/buy-online",
    label: "BUY ONLINE",
    subLinks: [
      {
        title: "Health Insurance Online",
        href: "/buy-online/health-insurance",
        description: "Protect your health with comprehensive coverage",
      },
      {
        title: "Travel Insurance Online",
        href: "/buy-online/travel-insurance",
        description: "Stay protected during your travels",
      },
      {
        title: "Motor Insurance Online",
        href: "/buy-online/motor-insurance",
        description: "Comprehensive auto coverage",
      },
    ],
  },
  {
    href: "/personal-insurance",
    label: "PERSONAL INSURANCE",
    subLinks: [
      {
        title: "Life and Health Insurance",
        href: "/personal/life-health",
        description: "Protection for you and your family",
      },
      {
        title: "Investment Solutions",
        href: "/personal/investment",
        description: "Grow your wealth securely",
      },
      {
        title: "Property Insurance",
        href: "/personal/property",
        description: "Protect your valuable assets",
      },
    ],
  },
  {
    href: "/business-insurance",
    label: "BUSINESS INSURANCE",
    subLinks: [
      {
        title: "SME Insurance",
        href: "/business/sme",
        description: "Complete coverage for small businesses",
      },
      {
        title: "Corporate Solutions",
        href: "/business/corporate",
        description: "Enterprise-level protection",
      },
      {
        title: "Employee Benefits",
        href: "/business/employee-benefits",
        description: "Comprehensive staff coverage",
      },
    ],
  },
  {
    href: "/customer-service",
    label: "CUSTOMER SERVICE",
    subLinks: [
      {
        title: "File a Claim",
        href: "/service/claims",
        description: "Quick and easy claims process",
      },
      {
        title: "Contact Support",
        href: "/service/support",
        description: "24/7 customer assistance",
      },
      {
        title: "Policy Management",
        href: "/service/policy",
        description: "Manage your insurance policies",
      },
    ],
  },
  {
    href: "/about",
    label: "ABOUT AXA",
    subLinks: [
      {
        title: "Our Story",
        href: "/about/story",
        description: "Learn about AXA's history",
      },
      {
        title: "Leadership",
        href: "/about/leadership",
        description: "Meet our management team",
      },
      {
        title: "Sustainability",
        href: "/about/sustainability",
        description: "Our commitment to the future",
      },
    ],
  },
  {
    href: "/careers",
    label: "CAREERS",
  },
]

