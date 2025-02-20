"use client"

import { useState } from "react"
import Link from "next/link"
import { NavigationLinks } from "./nav-links"
import { MobileSubmenu } from "./mobile-submenu"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSubmenu, setShowSubmenu] = useState(false)

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
      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-full sm:w-[340px] bg-white shadow-lg z-50">
            {showSubmenu ? (
              <MobileSubmenu onBack={() => setShowSubmenu(false)} />
            ) : (
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="text-lg font-medium">Menu</span>
                  <button onClick={() => setIsOpen(false)} className="p-2 text-[#343c3d] hover:text-[#00008f]">
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

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="p-4">
                    {NavigationLinks.map((item) => (
                      <button
                        key={item.href}
                        className="flex items-center justify-between w-full py-4 text-left text-[#343c3d] hover:text-[#00008f] border-b last:border-0"
                        onClick={() => {
                          if (item.href === "/buy-online") {
                            setShowSubmenu(true)
                          }
                        }}
                      >
                        <span>{item.label}</span>
                        {item.subLinks && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Bottom Actions */}
                <div className="p-4 border-t">
                  <Link href="/axa-academy" className="block py-2 text-sm text-[#343c3d] hover:text-[#00008f]">
                    AXA ACADEMY
                  </Link>
                  <button className="w-full mt-4 px-4 py-2 bg-[#00008f] text-white rounded hover:bg-[#00008f]/90 transition-colors">
                    GET A QUOTE
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
