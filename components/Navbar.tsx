import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Entagl
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Feed
            </Link>
            <Link href="/profile" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Profile
            </Link>
            <Link href="/create-post" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Create Post
            </Link>
            <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}