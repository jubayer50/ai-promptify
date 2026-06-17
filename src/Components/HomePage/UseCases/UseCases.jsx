import Image from "next/image";
import UseCase from "@/assets/images/useCase.jpg";

import {
  FaPenNib,
  FaCode,
  FaBullhorn,
  FaPalette,
  FaBriefcase,
  FaBookOpen,
} from "react-icons/fa";

const UseCases = () => {
  const useCases = [
    {
      icon: <FaPenNib />,
      title: "Content Creation",
    },
    {
      icon: <FaCode />,
      title: "Coding & Development",
    },
    {
      icon: <FaBullhorn />,
      title: "Marketing & SEO",
    },
    {
      icon: <FaPalette />,
      title: "Design & Creativity",
    },
    {
      icon: <FaBriefcase />,
      title: "Business Automation",
    },
    {
      icon: <FaBookOpen />,
      title: "Learning & Research",
    },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">
            Real-World{" "}
            <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Use Cases
            </span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Discover how powerful AI prompts can transform the way you work,
            create, learn, and automate daily tasks.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side Image */}
          <div className="order-1">
            <Image
              src={UseCase}
              alt="AI Illustrator image"
              width={1200}
              height={1200}
              className="w-full object-cover"
            ></Image>
          </div>

          {/* Right Side Content */}
          <div className="order-2">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              One Platform, Endless{" "}
              <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Possibilities
              </span>{" "}
              with AI Prompts
            </h3>

            <p className="mt-5 leading-relaxed">
              From content creation to software development, marketing, design,
              and automation, AIPromptify provides high-quality prompts for
              every workflow. No matter your profession or goal, the right
              prompt helps you save time, improve results, and maximize AI
              productivity.
            </p>

            {/* Use Cases List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {useCases.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-md bg-white p-4 shadow border border-purple-200"
                >
                  <div className="w-10 h-10 rounded-md bg-linear-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center">
                    {item.icon}
                  </div>

                  <span className="font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
