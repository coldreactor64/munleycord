import Image from 'next/image'
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
      <>
      <Script src={'/oneko.js'} />
      <main className="flex flex-col items-center justify-center min-h-screen bg-black">
        <div className="relative w-full max-w-2xl">
          <Image
              src="/Munley.png"
              alt="Munley Image"
              layout="responsive"
              width={1200}
              height={630}
          />
        </div>
        <Link href="https://discord.gg/flysafe" className={'mt-8 px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700'}>
            Join Munleycord
        </Link>
      </main>
      </>
  )
}
