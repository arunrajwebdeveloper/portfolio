export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-8">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <a
        href="#/"
        className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300 transition"
      >
        Go Home
      </a>
    </div>
  );
}
