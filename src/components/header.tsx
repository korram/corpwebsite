export default function Header() {
    return (

        <header className="border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <a href="/" className="flex items-center">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL || ""}/placeholder.svg`}
                  alt="AXA Logo"
                  className="h-12 w-auto"
                />
              </a>

              {/* Main Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  ซื้อประกันออนไลน์
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  ประกันภัยรถบุคคล
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  ประกันภัยธุรกิจ
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  บริหารลูกค้า
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  รู้จักเรา
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  ร่วมงานกับเรา
                </a>
              </nav>

              {/* Right Section */}
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-700 hover:text-blue-600">
                  <span className="mr-2">🔍</span>
                  ค้นหาศูนย์บริการและสาขา
                </button>
                <div className="flex items-center space-x-2 text-sm">
                  <a href="#" className="font-medium">
                    TH
                  </a>
                  <span>|</span>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    EN
                  </a>
                </div>
              </div>
            </div>
          </div>
      
    <div className="bg-[#4339CA] text-white">
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
    </div>
        </header>

    );
}