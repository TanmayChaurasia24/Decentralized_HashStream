import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/logo_hashstream.jpg" height={200} width={200} alt="logo" />
      <p>hello</p>
    </div>
  )
}
