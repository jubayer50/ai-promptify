import Link from "next/link";
import { Lock } from "@gravity-ui/icons";

const Unauthorized = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl text-center bg-white rounded-md shadow-sm border border-gray-200 p-8 md:p-12">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto rounded-full bg-red-100 text-red-500 flex items-center justify-center mb-6">
          <Lock className="w-10 h-10" />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Unauthorized Access
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 leading-relaxed max-w-xl mx-auto">
          Sorry, you don&apos;t have permission to access this page. Please log
          in with the correct account or return to the homepage.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signin">
            <button className="px-6 py-3 rounded-md bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold shadow hover:scale-103 transition-all duration-300">
              Login Now
            </button>
          </Link>

          <Link href="/">
            <button className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 font-semibold hover:scale-103 transition-all duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Unauthorized;
