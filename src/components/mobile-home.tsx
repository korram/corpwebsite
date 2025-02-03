import Image from "next/image"
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

export default function MobileHome() {
  return (
    <div className="md:hidden">
      {/* Insurance Products Grid */}
      <div className="grid grid-cols-3 gap-4 p-4">
        {insuranceProducts.map((product) => (
          <Link
            key={product.name}
            href={product.href}
            className={`${product.color} p-4 rounded-lg text-white flex flex-col items-center text-center`}
          >
            <span className="text-2xl mb-2">{product.icon}</span>
            <span className="text-xs">{product.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

