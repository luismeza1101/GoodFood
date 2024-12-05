import Image from "next/image";
import Link from "next/link";
import Button_Register from "@/components/Button_Register";

export default function pageRoot() {
  return (
    <div className="flex flex-col justify-between items-center w-full min-h-screen p-5 gap-4 desktop:h-screen">
      <header className="flex justify-between items-center w-full desktop:w-[80%]">
        <Image src="/imgs/logo.png" alt="Logo" width={80} height={80} />
        <nav className="flex gap-5">
          <Button_Register href="/login" text="Log In" />
          <Button_Register href="/signup" text="Sign Up" />
        </nav>
      </header>
      <main className="grid gap-10 desktop:grid-cols-2 desktop:grid-rows-[1fr_2fr] desktop:w-[90%] desktop:mx-auto desktop:gap-0 xl:w-[80%]">
        <h1 className="font-bold text-4xl desktop:place-content-end desktop:text-5xl">
        Find the perfect recipe for every day
        </h1>
        <div className="flex justify-center desktop:row-span-2">
          <Image src='/imgs/hero.png' alt="Hero" width={300} height={300} className="w-[80%] rounded-3xl h-auto desktop:w-full max-w-[500px]"/>
        </div>
        <div className="desktop:row-start-2 desktop:place-content-center">
          <p className="desktop:text-lg ">Explore endless culinary possibilities with our recipe app! Whether you&#39;re searching for a dish by name or using filters to match your preferences, we make it easy to find the perfect recipe for every day. From quick meals to gourmet creations, let us inspire your cooking journey!</p>
          <Link
            href="/home"
            className="block bg-main py-4 w-full rounded-full text-lg text-center mt-3 desktop:w-[180px] desktop:mt-8 text-white"
          >
            Go find recipes
          </Link>
        </div>
      </main>
      <footer className="font-semibold">
        &copy; Ednilson Luis Meza Corilla
      </footer>
    </div>
  );
}
