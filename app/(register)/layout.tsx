import Image from "next/image";

const layoutRegister = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      {/* Layout Mobile */}
      <div className="w-full min-h-screen flex flex-col bg-register bg-cover items-center gap-6 desktop:hidden py-3">
        <Image src="/imgs/logo-white.png" alt="Logo" width={160} height={160} />
        {children}
      </div>
      {/* Layout Desktop */}
      <div className="w-full h-screen hidden desktop:flex">
        <div className="w-[50%] bg-main">
          <Image
            src="/imgs/logo-white.png"
            alt="Logo"
            width={100}
            height={100}
            className="absolute top-4 left-4"
          />
          <Image
            src="/imgs/lupa.png"
            alt="Lupa"
            width={250}
            height={250}
            className="hidden absolute top-44 left-20 transform transition duration-150 hover:-translate-y-3 z-40 xl:block"
          />
        </div>
        <section className="absolute flex items-center justify-center w-full h-full">
          {children}
        </section>
        <Image
          src="/imgs/tomate.png"
          alt="Tomate"
          width={250}
          height={250}
          className="hidden absolute top-14 right-32 transform transition duration-150 hover:-translate-y-3 z-40 xl:block"
        />
        <Image
          src="/imgs/zanahoria.png"
          alt="Zanahoria"
          width={250}
          height={250}
          className=" hidden absolute bottom-10 right-14 transform transition duration-150 hover:-translate-y-3 z-40 xl:block"
        />
      </div>
    </>
  );
};

export default layoutRegister;
