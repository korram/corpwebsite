import Header from "@/components/layouts/header";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {

  return (
    <div>
     <Header/>
     <div className="p-6">
  {/* ใช้ฟอนต์ Publico */}
  <h1 className="text-h1">This is an English Display</h1>
      <h2  className="text-h2">Large Heading EN</h2>

      {/* Display ภาษาไทย ใช้ DB HelvethaicaX */}
      <h1 className="text-h1">นี่คือ Display ภาษาไทย</h1>
      <h2 className="text-h2" >หัวข้อใหญ่ ภาษาไทย</h2>

  {/* ใช้ฟอนต์ SansSerifPro */}
  <p className="text-5xl font-bold">Display 1</p>
  <p className="text-4xl">Display 2</p>

  {/* ใช้ฟอนต์ DB Helvethaica X สำหรับภาษาไทย */}
  <p className="text-xl">สวัสดีครับ นี่คือข้อความภาษาไทย</p>
</div>
    </div>
  );
}
