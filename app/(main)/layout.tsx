import Header from "@/components/Header";
import Link from "next/link";

const layoutMain = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      {/* Header */}
      <Header/>
      {/* Body */}
      {children}
      {/* Footer */}
      <footer className="w-full flex flex-col gap-6 items-center py-5 bg-white">
        <p>&copy; Luis Meza | All Rights Reserved</p>
        <div className="text-center">
          <span className="text-xl">Contact :</span>
          <ul className="flex flex-col gap-3 mt-3">
            <li className="contact-footer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-link"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 15l6 -6" />
                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
              </svg>
              <Link
                href="https://luismeza11.netlify.app/"
                target="_blank"
                className="hover:underline font-bold"
              >
                luismeza.app
              </Link>
            </li>
            <li className="contact-footer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              ednilsonluis.11@gmail.com
            </li>
            <li className="contact-footer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              +51 913536441
            </li>
          </ul>
        </div>
        <p>
          Information obtained from{" "}
          <Link
            href="https://spoonacular.com/food-api"
            target="_blank"
            className="text-sky-600 hover:underline"
          >
            Spoonacular
          </Link>
        </p>
      </footer>
    </>
  );
};

export default layoutMain;
