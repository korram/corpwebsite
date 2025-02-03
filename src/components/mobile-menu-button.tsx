"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import MobileMenu from "./mobile-menu"

export default function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="text-gray-600">
        <Menu size={24} />
      </button>
      {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
    </>
  )
}

