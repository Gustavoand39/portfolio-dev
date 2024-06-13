import { Footer, Header } from "@/components";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <main className="flex flex-col">
      <Header />

      {children}

      <Footer />
    </main>
  );
}