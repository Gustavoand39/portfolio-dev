import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Dev",
  description:
    "Portfolio Dev de un desarrollador webBienvenido a mi portafolio personal. Aquí encontrarás algunos de mis proyectos en los que he trabajado y cómo contactarme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
