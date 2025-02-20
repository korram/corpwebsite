interface FooterAccordionProps {
  openSection: string | null
  onSectionClick: (section: string) => void
}

export function FooterAccordion({ openSection, onSectionClick }: FooterAccordionProps) {
  return (
    <div className="space-y-1">
      <div className="border-b border-white/20">
        <button
          onClick={() => onSectionClick("personal")}
          className="w-full py-4 px-6 flex items-center justify-between hover:bg-white/10 transition-colors"
        >
          <span className="text-lg font-medium">PERSONAL INSURANCE</span>
          <svg
            className={`w-6 h-6 transition-transform ${openSection === "personal" ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        {openSection === "personal" && (
          <div className="px-6 pb-4 space-y-3">
            <a href="#" className="block hover:underline">
              Domestic and International Travel Insurance
            </a>
            <a href="#" className="block hover:underline">
              Buy Online Car Insurance - Full Coverage
            </a>
            <a href="#" className="block hover:underline">
              Home and Condo Insurance, Fire Protection
            </a>
            <a href="#" className="block hover:underline">
              AXA Health Insurance Without Life Bundle
            </a>
            <a href="#" className="block hover:underline">
              PA Accident Insurance - Buy Online Now
            </a>
          </div>
        )}
      </div>

      <div className="border-b border-white/20">
        <button
          onClick={() => onSectionClick("business")}
          className="w-full py-4 px-6 flex items-center justify-between hover:bg-white/10 transition-colors"
        >
          <span className="text-lg font-medium">BUSINESS INSURANCE</span>
          <svg
            className={`w-6 h-6 transition-transform ${openSection === "business" ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        {openSection === "business" && (
          <div className="px-6 pb-4 space-y-3">
            <a href="#" className="block hover:underline">
              SME Insurance
            </a>
            <a href="#" className="block hover:underline">
              Group Health and Personal Accident
            </a>
            <a href="#" className="block hover:underline">
              Marine Cargo Insurance
            </a>
            <a href="#" className="block hover:underline">
              Freight Forwarder Liability Insurance
            </a>
            <a href="#" className="block hover:underline">
              Trade Credit Insurance
            </a>
            <a href="#" className="block hover:underline">
              Group Travel Accident Policy for Tour Operator and Tour Guide
            </a>
          </div>
        )}
      </div>

      <div className="border-b border-white/20">
        <button
          onClick={() => onSectionClick("about")}
          className="w-full py-4 px-6 flex items-center justify-between hover:bg-white/10 transition-colors"
        >
          <span className="text-lg font-medium">ABOUT AXA</span>
          <svg
            className={`w-6 h-6 transition-transform ${openSection === "about" ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        {openSection === "about" && (
          <div className="px-6 pb-4 space-y-3">
            <a href="#" className="block hover:underline">
              The AXA Group
            </a>
            <a href="#" className="block hover:underline">
              AXA Thailand
            </a>
            <a href="#" className="block hover:underline">
              Sign Up as a Representative
            </a>
            <a href="#" className="block hover:underline">
              Financial Statement
            </a>
            <a href="#" className="block hover:underline">
              List of Agents/Brokers
            </a>
            <a href="#" className="block hover:underline">
              AXA Newsroom
            </a>
            <a href="#" className="block hover:underline">
              Recommended Article
            </a>
            <a href="#" className="block hover:underline">
              AXA Lifestyle Magazine
            </a>
            <a href="#" className="block hover:underline">
              Find locations/branches
            </a>
          </div>
        )}
      </div>

      <div className="border-b border-white/20">
        <button
          onClick={() => onSectionClick("service")}
          className="w-full py-4 px-6 flex items-center justify-between hover:bg-white/10 transition-colors"
        >
          <span className="text-lg font-medium">CUSTOMER SERVICE</span>
          <svg
            className={`w-6 h-6 transition-transform ${openSection === "service" ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        {openSection === "service" && (
          <div className="px-6 pb-4 space-y-3">
            <a href="#" className="block hover:underline">
              Tax Exemption 2023
            </a>
            <a href="#" className="block hover:underline">
              Claim Submission
            </a>
            <a href="#" className="block hover:underline">
              Garage Locator
            </a>
            <a href="#" className="block hover:underline">
              Hospital Network for Health and Personal Accident Insurance
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

