import Link from "next/link";

export default function Home() {
  return (
    <main>
       <div className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simplify Your Links
          </h2>
          <p className="text-gray-700 mb-6">
            Make your URLs shorter and more shareable with our easy-to-use URL 
            shortener. Perfect for businesses, marketers, and personal use. 
            Start shortening your links today and track their performance.
          </p>
          <Link href="/shorten">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Try Now
          </button>
          </Link>
          
        </div>
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/flat-hand-drawn-colleagues-working-same-room_23-2148828084.jpg?t=st=1732254674~exp=1732258274~hmac=06fbf452e8f12745783386868e9d56cb83991578004297aa15ea9770087b2344&w=996"
            alt="URL Shortener Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    </main>
  );
}
