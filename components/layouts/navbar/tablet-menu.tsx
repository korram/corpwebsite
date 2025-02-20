"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { NavigationLinks } from "./nav-links"

export function TabletMenu() {
  const [open, setOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  return (
    <div className="hidden sm:flex xl:hidden items-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-[#00008f]">
            <Image
              src="https://images.axa-contento-118412.eu/thailandgi/3a2463797bef6e467fee58596901dd37ef56e192_logo-coperate.png?auto=compress,format"
              alt="Menu"
              width={24}
              height={24}
            />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full p-0 border-0 data-[state=open]:duration-300">
          <div className="flex flex-col h-full bg-white">
            <SheetHeader className="flex flex-row items-center justify-between p-4 border-b">
              <Link href="/" onClick={() => setOpen(false)}>
                <Image
                  src="https://images.axa-contento-118412.eu/thailandgi/3a2463797bef6e467fee58596901dd37ef56e192_logo-coperate.png?auto=compress,format"
                  alt="AXA Logo"
                  width={80}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#00008f]">
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </SheetTrigger>
            </SheetHeader>

            <div className="flex-1 overflow-y-auto">
              <nav className="flex flex-col">
                {NavigationLinks.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className="w-full justify-between px-4 py-6 text-base font-medium text-[#343c3d] hover:text-[#00008f] hover:bg-transparent"
                    onClick={() => {
                      if (item.subLinks) {
                        setActiveSubmenu(activeSubmenu === item.href ? null : item.href)
                      } else {
                        setOpen(false)
                      }
                    }}
                  >
                    {item.label}
                    {item.subLinks && <ChevronRight className="h-5 w-5 text-[#00008f]" />}
                  </Button>
                ))}
              </nav>

              <div className="p-4 mt-auto">
                <Button
                  className="w-full bg-[#00008f] text-white hover:bg-[#00008f]/90 py-6"
                  onClick={() => setOpen(false)}
                >
                  GET A QUOTE
                </Button>

                <Link
                  href="/axa-academy"
                  className="block text-base text-[#343c3d] hover:text-[#00008f] mt-6 px-4"
                  onClick={() => setOpen(false)}
                >
                  AXA ACADEMY
                </Link>

                <div className="flex items-center justify-between mt-6 px-4 py-2 border-t">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-base font-normal hover:text-[#00008f] flex items-center gap-2"
                  >
                    <span>ENGLISH</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Submenu Panel */}
          {NavigationLinks.map(
            (item) =>
              item.subLinks && (
                <div
                  key={item.href}
                  className={`absolute inset-0 bg-white transform transition-transform duration-300 ${
                    activeSubmenu === item.href ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <div className="flex flex-col h-full">
                    <SheetHeader className="flex flex-row items-center justify-between p-4 border-b">
                      <Button variant="ghost" className="text-[#00008f]" onClick={() => setActiveSubmenu(null)}>
                        <ChevronRight className="h-5 w-5 rotate-180" />
                        <span className="ml-2">{item.label}</span>
                      </Button>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-[#00008f]">
                          <X className="h-6 w-6" />
                          <span className="sr-only">Close menu</span>
                        </Button>
                      </SheetTrigger>
                    </SheetHeader>

                    <div className="flex-1 overflow-y-auto">
                      <nav className="flex flex-col p-4">
                        {item.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className="py-4 text-base text-[#343c3d] hover:text-[#00008f]"
                            onClick={() => setOpen(false)}
                          >
                            {subLink.title}
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              ),
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}

