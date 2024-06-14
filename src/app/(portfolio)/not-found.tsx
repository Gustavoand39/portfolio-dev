import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-600 bg-gray-100">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-3 text-xl">
        Lo sentimos, la página que buscas no se encuentra disponible.
      </p>
      <Link href="/" className="mt-6 text-indigo-500 underline">
        Volver al inicio
      </Link>
    </div>
  );
}
