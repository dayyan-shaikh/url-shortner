import Link from "next/link";
import { Vortex } from "@/components/ui/Vortex";

export default function Home() {
  return (
    <div className="w-full mx-auto  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Simplify Your Links
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Make your URLs shorter and more shareable with our easy-to-use URL
          shortener. Perfect for businesses, marketers, and personal use.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link href="/shorten">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Try Now
          </button>
          </Link>
        </div>
      </Vortex>
    </div>
  );
}
