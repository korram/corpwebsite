
import Image from "next/image"
import Link from "next/link"
import { TopHeader } from "./navbar/top-header"
import { MobileMenu } from "./navbar/mobile-menu"
import { DesktopMenu } from "./navbar/desktop-menu"

export default function Header() {
    return (
      <header className="w-full">
        <TopHeader />
        <div className="w-full border-b bg-white">
          <div className="mx-auto xl:max-w-screen-xl">
            <div className="flex h-16 items-center justify-between px-4">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="https://images.axa-contento-118412.eu/thailandgi/3a2463797bef6e467fee58596901dd37ef56e192_logo-coperate.png?auto=compress,format"
                  alt="AXA Logo"
                  width={80}
                  height={32}
                  className="h-8 w-auto sm:h-10"
                  priority
                />
              </Link>
  
              {/* Desktop Navigation */}
              <div className="flex items-center gap-4">
                <DesktopMenu />
                <button className="hidden xl:block px-6 py-2 bg-[#00008f] text-white rounded hover:bg-[#00008f]/90 transition-colors">
                  GET A QUOTE
                </button>
              </div>
  
              {/* Mobile Navigation */}
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    )
  }
  
  