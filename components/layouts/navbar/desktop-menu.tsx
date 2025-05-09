"use client"

import { useState } from "react"
import Link from "next/link"
import { NavigationLinks } from "./nav-links"
import { DesktopSubMenu } from "./desktop-submenu"

// export function DesktopMenu() {
//   const [activeMenu, setActiveMenu] = useState<string | null>(null)

//   return (
//     <nav className="hidden xl:block">
//       <ul className="flex items-center gap-6">
//         {NavigationLinks.map((item) => (
//           <li
//             key={item.href}
//             className="relative"
//             onMouseEnter={() => setActiveMenu(item.href)}
//             onMouseLeave={() => setActiveMenu(null)}
//           >
//             <Link
//               href={item.href}
//               className="text-sm font-medium text-[#343c3d] hover:text-[#00008f] transition-colors py-6 inline-block"
//             >
//               {item.label}
//             </Link>
//             {item.subLinks && activeMenu === item.href && (
//               <div className="absolute top-full left-0 w-[500px] bg-white shadow-lg rounded-lg mt-1 p-4 grid grid-cols-2 gap-4 z-50">
//                 {item.subLinks.map((subLink) => (
//                   <Link
//                     key={subLink.href}
//                     href={subLink.href}
//                     className="block p-3 rounded hover:bg-[#fafafa] transition-colors"
//                   >
//                     <span className="block text-sm font-medium text-[#343c3d]">{subLink.title}</span>
//                     {subLink.description && (
//                       <span className="block text-xs text-[#757575] mt-1">{subLink.description}</span>
//                     )}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }

export function DesktopMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <nav className="hidden xl:block">
      <ul className="flex items-center gap-6">
        {NavigationLinks.map((item) => (
          <li
            key={item.href}
            className="relative static xl:relative"
            onMouseEnter={() => setActiveMenu(item.href)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              href={item.href}
              className="text-sm font-medium text-[#343c3d] hover:text-[#00008f] transition-colors py-6 inline-block"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

                    <div
        className={`absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          activeMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
                <DesktopSubMenu />
              </div>
    </nav>
  )
}
