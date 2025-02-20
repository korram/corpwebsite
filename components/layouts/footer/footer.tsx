"use client"

import { useState } from "react"
import { FooterAccordion } from "./footer-accordion"
import { FooterDesktopMenu } from "./footer-desktop-menu"
import { SocialLinks } from "./social-links"
import { LanguageSelector } from "./language-selector"

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  return (
    <footer className="bg-[#4976ba] text-white">
      {/* Mobile and Tablet Footer */}
      <div className="xl:hidden">
        <div className="container mx-auto px-4 py-8">
          {/* Social Links */}
          <SocialLinks className="flex justify-center gap-8 mb-8" />

          {/* Call Center */}
          <div className="flex justify-center mb-8">
            <a
              href="tel:021188111"
              className="bg-white text-[#4976ba] rounded-full px-8 py-4 flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <span className="text-xl font-medium">AXA Call Center : 02 118 8111</span>
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>

          {/* Certifications */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className="text-lg font-medium">CERTIFICATIONS :</span>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AXA_Homepage__Oct_2024_-9GsdmQNfAcoKzTvu8Qy2wkzsSrwQQF.png"
              alt="DBD Registered"
              className="h-12"
            />
          </div>

          {/* Accordion Menu */}
          <div className="max-w-2xl mx-auto">
            <FooterAccordion
              openSection={openSection}
              onSectionClick={(section) => setOpenSection(openSection === section ? null : section)}
            />
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden xl:block">
        <div className="container mx-auto px-4 py-12">
          {/* Menu Grid */}
          <FooterDesktopMenu />

          {/* Social Links */}
          <div className="text-center mt-16 mb-8">
            <p className="mb-6">FOLLOW AXA :</p>
            <SocialLinks className="flex justify-center gap-8" />
          </div>

          {/* Call Center */}
          <div className="flex justify-center mb-8">
            <a
              href="tel:021188111"
              className="bg-white text-[#4976ba] rounded-full px-8 py-4 flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <span className="text-xl font-medium">AXA Call Center : 02 118 8111</span>
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>

          {/* Certifications */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className="text-lg font-medium">CERTIFICATIONS :</span>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AXA_Homepage__Oct_2024_-9GsdmQNfAcoKzTvu8Qy2wkzsSrwQQF.png"
              alt="DBD Registered"
              className="h-12"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <LanguageSelector />
              <div className="text-sm">
                <a href="/policy-privacy" className="hover:underline">
                  Policy Privacy
                </a>
                <span className="mx-2">©</span>
                <span>20XX AXA All Rights Reserved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

