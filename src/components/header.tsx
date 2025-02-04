import Link from "next/link"
import MobileMenuButton from "./mobile-menu-button";
import MenuDesktop from "./menu-desktop";
import TopBar from "./top-bar";
import MobileMenu from "./mobile-menu";

  export default async function Header() {
  
    return (
        <header className="bg-white border-b">
    <TopBar/>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
          <img
                src="https://images.axa-contento-118412.eu/thailandgi/3a2463797bef6e467fee58596901dd37ef56e192_logo-coperate.png?auto=compress,format"
                alt="AXA Logo"
                className="h-12 w-auto"
              />
          </Link>

     <div className="hidden md:flex space-x-8">

          <MenuDesktop/>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {/* <MobileMenuButton /> */}
            <MobileMenu/>
          </div>
        </div>
      </div>
      </header>

    );
}
// สร้าง Static Params สำหรับทุกภาษา
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}