"use client"

import { useState } from "react"
import Link from "next/link"
import { NavigationLinks } from "@/components/layouts/navbar/nav-links"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  return (
    <div className="xl:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#343c3d] hover:text-[#00008f]"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}>
          <div
            className="fixed inset-y-0 right-0 w-full sm:w-[340px] bg-white shadow-lg z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-medium">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-[#343c3d] hover:text-[#00008f]"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Content */}
            <div className="overflow-y-auto h-[calc(100vh-64px)]">
              <nav className="p-4">
                {NavigationLinks.map((item) => (
                  <div key={item.href} className="border-b last:border-0">
                    <button
                      onClick={() => {
                        if (item.subLinks) {
                          setActiveSubmenu(activeSubmenu === item.href ? null : item.href)
                        } else {
                          setIsOpen(false)
                        }
                      }}
                      className="flex items-center justify-between w-full py-4 text-left text-[#343c3d] hover:text-[#00008f]"
                    >
                      <span>{item.label}</span>
                      {item.subLinks && (
                        <svg
                          className={`w-4 h-4 transition-transform ${activeSubmenu === item.href ? "rotate-180" : ""}`}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                    {item.subLinks && activeSubmenu === item.href && (
                      <div className="pl-4 pb-4">
                        {item.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-sm text-[#343c3d] hover:text-[#00008f]"
                          >
                            {subLink.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Bottom Actions */}
              <div className="p-4 border-t">
                <Link
                  href="/axa-academy"
                  className="block py-2 text-sm text-[#343c3d] hover:text-[#00008f]"
                  onClick={() => setIsOpen(false)}
                >
                  AXA ACADEMY
                </Link>
                <div className="flex items-center gap-2 py-2">
                  <span className="text-sm text-[#343c3d]">Language:</span>
                  <select className="text-sm text-[#343c3d] bg-transparent">
                    <option value="en">English</option>
                    <option value="th">ไทย</option>
                    <option value="zh">中文</option>
                  </select>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full mt-4 px-4 py-2 bg-[#00008f] text-white rounded hover:bg-[#00008f]/90 transition-colors"
                >
                  GET A QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

