import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface MobileSubmenuProps {
  onBack: () => void
}

export function TabletSubmenu({ onBack }: MobileSubmenuProps) {
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="min-h-full flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#cccccc] px-4 py-3">
          <button onClick={onBack} className="flex items-center text-[#00008f] font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            BACK
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 py-6">
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-semibold text-[#343c3d]">Online insurance</h2>
            <p className="text-[#343c3d]">Easy way to buy AXA Insurance 24/7</p>
            <Link href="/promotions" className="inline-block text-[#00008f] hover:underline">
              Exclusive Promotions and Special Rewards
            </Link>
          </div>

          <div className="space-y-8">
            <Link href="/insurance/health-visa" className="block text-[#00008f] hover:underline">
              Health Insurance for Visa
            </Link>
            <Link href="/insurance/health" className="block text-[#00008f] hover:underline">
              Health Insurance Online
            </Link>
            <Link href="/insurance/visitors" className="block text-[#00008f] hover:underline">
              Insurance for Thailand Visitors
            </Link>
            <Link href="/insurance/travel" className="block text-[#00008f] hover:underline">
              Travel Insurance Online
            </Link>
            <Link href="/insurance/motor" className="block text-[#00008f] hover:underline">
              Motor Insurance Online
            </Link>
            <Link href="/insurance/motor-compulsory" className="block text-[#00008f] hover:underline">
              Compulsory Motor Insurance Online
            </Link>
            <Link href="/insurance/personal-accident" className="block text-[#00008f] hover:underline">
              Personal Accident Insurance Online
            </Link>
            <Link href="/insurance/cancer" className="block text-[#00008f] hover:underline">
              Cancer Insurance Online
            </Link>
            <Link href="/insurance/dengue" className="block text-[#00008f] hover:underline">
              Dengue Fever Insurance Online
            </Link>
            <Link href="/insurance/home" className="block text-[#00008f] hover:underline">
              Home Insurance
            </Link>
          </div>
        </div>

        {/* Language Selector */}
        <div className="sticky bottom-0 mt-auto border-t border-[#cccccc] bg-white">
          <button className="flex items-center justify-between w-full px-4 py-4 text-[#343c3d]">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              ENGLISH
            </div>
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

