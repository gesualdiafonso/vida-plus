import type { Metadata } from "next";
import { Archivo, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const archivo = Archivo({
  variable: "--font-archivo-sans",
  subsets: ["latin"],
  display: "swap"
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Funerária Vida Plus",
  description: "Serviço funerário com acolhimento e simplicidade.",
  icons: {
    icon: "public/assets/image/favicon_vida_plus.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      {/* <head>
        <link rel="shortcut icon" href="public/assets/images/favicon_vida_plus.svg" type="image/x-icon" />
      </head> */}
      <body
        className={`${archivo.variable} ${montserrat.variable} antialiased bg-light`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
