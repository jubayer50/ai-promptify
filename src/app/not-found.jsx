import { Button } from "@heroui/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 via-white to-pink-50 px-4">
      <div className="text-center max-w-2xl">
        {/* 404 */}
        <h1 className="text-7xl md:text-9xl font-bold bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 leading-relaxed">
          The page you are looking for does not exist or may have been moved.
          Let's get you back to exploring amazing AI prompts.
        </p>

        {/* Button */}
        <Link href="/">
          <Button className="mt-8 px-6 py-3 rounded-md bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold shadow hover:scale-103 transition-all duration-300">
            Back to Home
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
