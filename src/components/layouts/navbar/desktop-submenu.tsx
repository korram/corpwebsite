import Link from "next/link"

export function DesktopSubMenu() {
  return (
    <div className="w-screen bg-white py-8 border-b border-[#cccccc]">
      <div className="mx-auto xl:max-w-screen-xl px-4">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#343c3d]">Online insurance</h2>
            <p className="text-[#343c3d]">Easy way to buy AXA Insurance 24/7</p>
            <Link href="/promotions" className="inline-block text-[#00008f] hover:underline">
              Exclusive Promotions and Special Rewards
            </Link>
          </div>

          {/* Middle Column */}
          <div className="space-y-3">
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
          </div>

          {/* Right Column */}
          <div className="space-y-3">
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
      </div>
    </div>
  )
}

