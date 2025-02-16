"use client"

import { useState } from "react"

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
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
        <span>ENGLISH</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
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

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden">
          <a
            href="#"
            className="block px-4 py-2 text-[#4976ba] hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            ENGLISH
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-[#4976ba] hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            ไทย
          </a>
        </div>
      )}
    </div>
  )
}

