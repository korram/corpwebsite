import Link from "next/link"
import Image from "next/image"

export function TopHeader() {
  return (
    <div className="hidden xl:block w-full bg-[#fafafa] border-b border-[#cccccc]">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="flex h-10 items-center justify-end gap-3">
          <Link
            href="/axa-academy"
            className="flex items-center gap-1 text-xs text-[#343c3d] hover:text-[#00008f] transition-colors group"
          >
            <span>AXA ACADEMY</span>
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
          <div className="relative group">
            <button
              className="flex items-center gap-2 text-xs text-[#343c3d] hover:text-[#00008f] transition-colors"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>ENGLISH</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
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

            <div className="absolute top-full right-0 mt-1 w-32 bg-white shadow-lg rounded-md overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/en"
                className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm text-[#343c3d] hover:bg-[#fafafa] transition-colors"
              >
                ENGLISH
              </Link>
              <Link
                href="/th"
                className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm text-[#343c3d] hover:bg-[#fafafa] transition-colors"
              >
                ไทย
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

