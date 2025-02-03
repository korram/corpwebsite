"use client"
import Link from "next/link"
import { ChevronRight, X } from "lucide-react"

interface MobileMenuProps {
  onClose: () => void
}

interface MenuItem {
  title: string
  href: string
}

const menuItems: MenuItem[] = [
  { title: "ซื้อประกันออนไลน์", href: "/online" },
  { title: "ประกันภัยรายบุคคล", href: "/personal" },
  { title: "ประกันภัยธุรกิจ", href: "/business" },
  { title: "บริการลูกค้า", href: "/service" },
  { title: "รู้จักเรา", href: "/about" },
  { title: "ร่วมงานกับเรา", href: "/careers" },
]
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
  return (
    <div className="fixed inset-0 bg-[#4154F1] z-50">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-blue-400">
        <button onClick={onClose} className="text-white p-2">
          <X size={24} />
        </button>
        <div className="text-white">
          <span className="font-medium">THAI</span>
          <span className="mx-2 text-blue-200">|</span>
          <span className="text-blue-200">ENGLISH</span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center justify-between text-white p-4 hover:bg-blue-600 transition-colors border-b border-blue-400"
          >
            <span className="text-lg">{item.title}</span>
            <ChevronRight className="h-5 w-5" />
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full border-t border-blue-400">
        <div className="flex justify-between p-4">
          <button className="text-white text-sm">เมนู</button>
          <button className="text-white text-sm">อบรมและพัฒนาตัวแทน</button>
        </div>
      </div>
    </div>
  )
}

