import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <Image
        src="/septima-logo.png"
        alt=""
        width={1200}
        height={1200}
        priority
        className="logo"
      />
    </main>
  );
}
