export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="rounded-lg bg-white p-8 shadow">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <p className="mt-2 text-gray-600">This is a minimal Next.js + Tailwind app.</p>
        <p className="mt-4 text-sm text-gray-500">
          API route: <code className="rounded bg-gray-100 px-2 py-1">/api/hello</code>
        </p>
      </div>
    </main>
  );
}
