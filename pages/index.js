import Link from "next/link";
import Map from "./component/Map";

export default function Home() {
  return (
    <>
      <header className="fixed w-full z-50 bg-white shadow-sm shadow-gray-400">
        <div className="py-1 md:py-2 px-4 max-w-screen-xl mx-auto flex flex-row justify-between items-center md:max-w-3xl xl:max-w-7xl">
          <div>
            <Link href="/" className="flex items-center py-2 space-x-2 md:space-x-4">
                <img src="logo-uin.png" alt="logo uin" className="w-6 md:w-9" />
                <span>
                  <p className="leading-3 md:leading-5 font-medium text-[6px] md:text-[10px]">Lembaga Penelitian dan Pengabdian Kepada Masyarakat</p>
                  <p className="md:leading-4 font-semibold text-[10px] md:text-base">UIN SUNAN GUNUNG DJATI BANDUNG</p>
                </span>
            </Link>
          </div>
          <div className="flex flex-row space-x-10">
            <ul className="flex flex-row items-center space-x-5">
              <li><Link href="/">Beranda</Link></li>
              <li><Link href="/sebaran">Peta Sebaran</Link></li>
            </ul>
            <Link href="/mahasiswa/login" className="text-[8px] text-white bg-green-600 md:text-sm py-2 md:py-3 px-5 md:px-8 rounded-full md:rounded-xl">Login</Link>
          </div>
        </div>
      </header>

      <main className="py-12 px-4">
        {/* Atas */}
        <section className="mt-[-50px] mx-[-16px]">
          <div className="text-left p-4 md:text-center pt-32 md:pt-60 bg-home">
            <h1 className="font-light text-4xl md:text-8xl">Kuliah Kerja Nyata</h1>
            <h3 className="flex flex-col text-[10px] md:text-lg leading-4 md:leading-7 mt-4 md:mt-9 pb-4 md:pb-64 font-light">
              <span>Assalamu'alaikum</span>
              <span>Selamat Datang di Situs Resmi Kuliah Kerja Nyata (KKN)</span>
              <span>Universitas Islam Negeri Sunan Gunung Djati Bandung</span>
            </h3>
          </div>
        </section>

        {/* Tengah */}
        <section className="mt-4 md:mt-10">
          <div className="text-left md:text-center">
            <h1 className="font-medium text-base md:text-5xl">Peta Sebaran Lokasi</h1>
            <div className=" mt-2 md:mt-7">
              <Map />
            </div>
          </div>
        </section>


        {/* Bawah */}
        <section>
          <div>
            
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 w">
        <div>
          <h3 className="font-medium text-[8px] md:text-xs text-white text-center py-3 md:py-5">KKN UIN SUNAN GUNUNG DJATI BANDUNG 2024</h3>
        </div>
      </footer>
    </>
  )
}
