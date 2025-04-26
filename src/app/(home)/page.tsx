import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#1A1A2E] w-full h-full">
      <Image src="/logo_hashstream.jpg" height={200} width={200} alt="logo" />
      <p>hello</p>
    </div>
  )
}
