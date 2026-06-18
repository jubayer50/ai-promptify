import { Sparkles } from "@gravity-ui/icons";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-1 md:gap-2">
      <div className="rounded-md p-1.5 bg-linear-to-t from-purple-600 to-pink-500">
        <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-white"></Sparkles>
      </div>

      <h2 className="text-[21px] md:text-3xl font-bold">
        AI
        <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Promptify
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
