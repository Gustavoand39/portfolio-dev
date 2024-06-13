import { About, Projects, Timeline } from "@/components";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <About />

      <Projects />

      <Timeline />
    </main>
  );
}
