import type { Metadata } from "next";
import "./globals.css";
import { Funnel_Sans} from 'next/font/google'
 
const funnel_sans = Funnel_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-funnel_sans',
})

export const metadata: Metadata = {
  title: "GoodFood",
  description: "Find your prefer recet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnel_sans.variable} font-funnel_sans bg-fondo`}
      >
        {children}
      </body>
    </html>
  );
}
