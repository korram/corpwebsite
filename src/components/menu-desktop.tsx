import Link from "next/link"

import { getI18n } from '@/hooks/useI18nServer';


// const getNavigations = (): Array<string => {
//   const navigations = [
//     { name: t("insurOnline"), href: "#" },
//     { name: "ประกันภัยรถบุคคล", href: "#" },
//     { name: "ประกันภัยธุรกิจ", href: "#" },
//     { name: "บริหารลูกค้า", href: "#" },
//     { name: "รู้จักเรา", href: "#" },
//     { name: "ร่วมงานกับเรา", href: "#" },
//   ]
//   return navigations;
// };



export default async function MenuDesktop() {
  const t = await getI18n();

  const navigations = [
    { name: t("insurOnline"), href: "#" },
    { name: "ประกันภัยรถบุคคล", href: "#" },
    { name: "ประกันภัยธุรกิจ", href: "#" },
    { name: "บริหารลูกค้า", href: "#" },
    { name: "รู้จักเรา", href: "#" },
    { name: "ร่วมงานกับเรา", href: "#" },
  ]

    return (
        <header className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            {/* <Link href="/" className="flex-shrink-0">
              <img
                src="https://images.axa-contento-118412.eu/thailandgi/3a2463797bef6e467fee58596901dd37ef56e192_logo-coperate.png?auto=compress,format"
                alt="AXA Logo"
                className="h-12 w-auto"
              />
            </Link> */}
  
            {/* Main Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
            {navigations.map((item, index) => (
              <Link key={index} href={item.href} className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                {item.name}
              </Link>
            ))}
              {/* <Link href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                ซื้อประกันออนไลน์
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                ประกันภัยรถบุคคล
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                ประกันภัยธุรกิจ
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                บริหารลูกค้า
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                รู้จักเรา
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                ร่วมงานกับเรา
              </Link> */}
            </nav>
  
            {/* Right Section */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="font-medium">ค้นหาศูนย์บริการและสาขา</span>
              </Link>
              <Link href="#" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 7h6m0 10H9m3 0h3M9 4h6m0 0h.01M9 20h6m0 0h.01M3 17V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
                <span className="font-medium">เช็คราคา</span>
              </Link>
            </div>
  
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* <div className="bg-[#4339CA] text-white">
            <div className="container mx-auto px-4 py-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-8">
                  <h1 className="text-4xl font-bold">รู้จักเรา</h1>
                  <p className="text-xl">รู้จักกับบริษัทของเรา เพื่อความมั่นใจที่มากขึ้น</p>

                  <nav className="space-y-4">
                    <a href="#" className="block text-white hover:text-gray-200">
                      กลุ่มแอกซ่า
                    </a>
                    <a href="#" className="block text-white hover:text-gray-200">
                      แอกซ่าประเทศไทย
                    </a>
                    <a href="#" className="block text-white hover:text-gray-200">
                      ทำไมถึงต้องเลือกแอกซ่า
                    </a>
                    <a href="#" className="block text-white hover:text-gray-200">
                      สมัครเป็นตัวแทน
                    </a>
                    <a href="#" className="block text-white hover:text-gray-200">
                      สอบถาม
                    </a>
                    <a href="#" className="block text-white hover:text-gray-200">
                      ข่าวสารแอกซ่า
                    </a>
                    <a href="#" className="block text-white hover:text-gray-200">
                      บทความแนะนำ
                    </a>
                    <a href="#" className="block text-white hover:text-gray-200">
                      ค้นหาศูนย์บริการและสาขา
                    </a>
                  </nav>
                </div>

                <div className="hidden md:block">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202568-02-01%20at%2021.30.47-MaWcu5QP79zhk4Nk4tSKLy5a3NeLBj.png"
                    alt="AXA Feature"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div> */}
      </header>

    );
}