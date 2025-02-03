"use client"
import { useState } from "react"
import Link from "next/link"

const insuranceProducts = [
  {
    name: "ประกันการเดินทาง",
    icon: "✈️",
    color: "bg-cyan-500",
    href: "#",
  },
  {
    name: "ประกันรถยนต์",
    icon: "🚗",
    color: "bg-cyan-600",
    href: "#",
  },
  {
    name: "ประกันอุบัติเหตุ PA",
    icon: "🤝",
    color: "bg-cyan-700",
    href: "#",
  },
  {
    name: "ประกันสุขภาพ AXA",
    icon: "🏥",
    color: "bg-rose-400",
    href: "#",
  },
  {
    name: "ประกันบ้าน และ",
    icon: "🏠",
    color: "bg-rose-500",
    href: "#",
  },
  {
    name: "ค้นหาศูนย์บริการ",
    icon: "🔍",
    color: "bg-rose-600",
    href: "#",
  },
]


interface SubMenuItem {
  name: string
  href: string
}

interface MenuItem {
  name: string
  href: string
  subItems?: SubMenuItem[]
}

const menuItems: MenuItem[] = [
  {
    name: "ซื้อประกันออนไลน์",
    href: "#",
    subItems: [
      { name: "ประกันการเดินทางออนไลน์", href: "#" },
      { name: "INSURANCE FOR THAILAND VISITORS", href: "#" },
      { name: "ประกันรถยนต์ออนไลน์", href: "#" },
      { name: "พ.ร.บ. รถยนต์ ออนไลน์", href: "#" },
      { name: "ประกันอุบัติเหตุออนไลน์", href: "#" },
      { name: "ประกันสุขภาพออนไลน์", href: "#" },
      { name: "ประกันมะเร็งออนไลน์", href: "#" },
      { name: "ประกันภัยโรคออกออนไลน์", href: "#" },
      { name: "ประกันบ้าน และคอนโดออนไลน์", href: "#" },
      { name: "ประกันสุขภาพ ซีเรียส จ่าย", href: "#" },
      { name: "รวมโปรโมชั่นและสิทธิพิเศษ", href: "#" },
    ],
  },
  { name: "ประกันภัยรถบุคคล", href: "#" },
  { name: "ประกันภัยธุรกิจ", href: "#" },
  { name: "บริหารลูกค้า", href: "#" },
  { name: "รู้จักเรา", href: "#" },
  { name: "ร่วมงานกับเรา", href: "#" },
]


export default function MobileMenu({ onClose }: MobileMenuProps) {


  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<MenuItem | null>(null)
  return (
    <>
    {/* Mobile Menu Button */}
    <button onClick={() => setIsOpen(true)} className="md:hidden p-2" aria-label="Open menu">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    {/* Mobile Menu Overlay */}
    {isOpen && (
      <div className="fixed inset-0 z-50 md:hidden">
        <div className="fixed inset-0 bg-black/25" onClick={() => setIsOpen(false)} />

        <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#4339CA] text-white overflow-y-auto">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <button
              onClick={() => {
                if (activeMenu) {
                  setActiveMenu(null)
                } else {
                  setIsOpen(false)
                }
              }}
              className="p-2 -m-2"
            >
              {activeMenu ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
            <div className="flex items-center space-x-2 text-sm">
              <span className="font-medium">THAI</span>
              <span className="text-white/60">|</span>
              <Link href="#" className="text-white/60 hover:text-white">
                ENGLISH
              </Link>
            </div>
          </div>

          {/* Menu Content */}
          <div className="py-2">
            {!activeMenu ? (
              // Main Menu
              menuItems.map((item) => (
                <div key={item.name} className="px-4">
                  <button
                    onClick={() => item.subItems && setActiveMenu(item)}
                    className="flex items-center justify-between w-full py-4 text-left"
                  >
                    {item.name}
                    {item.subItems && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </div>
              ))
            ) : (
              // Sub Menu
              <>
                <div className="px-4 py-4">
                  <h2 className="text-lg font-medium">{activeMenu.name}</h2>
                </div>
                {activeMenu.subItems?.map((item) => (
                  <Link key={item.name} href={item.href} className="block px-4 py-3 hover:bg-white/10">
                    {item.name}
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    )}
  </>
  )
}

