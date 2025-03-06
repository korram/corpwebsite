"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useChangeLocale, useCurrentLocale, useI18n } from '../../../hooks/useI18nClient';

export function TopHeader() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const changeLocale = useChangeLocale(/* { preserveSearchParams: true } */);
const locale = useCurrentLocale();
  return (
    <div className="hidden xl:block w-full bg-[#fafafa] border-b border-[#cccccc]">
      <div className="mx-auto xl:max-w-screen-xl px-4">
        <div className="flex h-10 items-center justify-end gap-6">
          <Link href="/axa-academy" className="text-xs text-[#343c3d] hover:text-[#00008f] transition-colors">
            AXA ACADEMY - {locale}
          </Link>

          <div className="h-4 border-l border-[#cccccc] mx-2"></div>
          <div>
            <Image
                              src="/world.png"
                              alt="Language"
                              width={15}
                              height={15}
                              className="w-auto"
                            />
             </div>
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-1 text-xs text-[#343c3d] hover:text-[#00008f] transition-colors"
            >
              <span>ENGLISH</span>
              <svg
                className={`w-4 h-4 transition-transform ${isLanguageOpen ? "rotate-180" : ""}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLanguageOpen && (
              <div
                className="absolute top-full right-0 mt-1 w-32 bg-white shadow-lg rounded-md overflow-hidden z-50"
                onMouseLeave={() => setIsLanguageOpen(false)}
              >
                <button
                  onClick={() => {changeLocale('en'); setIsLanguageOpen(false)}}
                  className="w-full px-4 py-2 text-left text-sm text-[#343c3d] hover:bg-[#fafafa] transition-colors"
                >
                  ENGLISH
                </button>
                <button
                  onClick={() => {changeLocale('th');   setIsLanguageOpen(false)}}
                  className="w-full px-4 py-2 text-left text-sm text-[#343c3d] hover:bg-[#fafafa] transition-colors"
                >
                  ไทย
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

