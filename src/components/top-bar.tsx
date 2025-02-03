import Link from "next/link"

export default function TopBar() {
  return (
    <div className="bg-white border-b hidden md:flex">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end h-10  space-x-2 text-sm text-gray-500">
          <Link href="#" className="hover:text-gray-700">
            อบรมและพัฒนาตัวแทน
          </Link>
          
          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-900">TH</span>
            <span>|</span>
            <Link href="#" className="hover:text-gray-700">
              EN
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

