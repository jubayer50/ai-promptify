"use client";

import { EyeClosed } from "@gravity-ui/icons";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data, "from signup page");

    reset();
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-b py-16 from-purple-100/40 to-pink-100/40 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-4 md:p-8">
          <h2 className="text-3xl font-bold text-center mb-2">
            Sign In up{" "}
            <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              AIPromtify
            </span>
          </h2>

          <p className="text-center text-gray-500 mb-6">
            Welcome back! Please enter your details.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", {
                  required: "Name is required",
                })}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-purple-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-purple-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Image URL */}
            <div>
              <label className="block mb-2 font-medium">Image URL</label>
              <input
                type="text"
                placeholder="Enter your Image URL"
                {...register("image")}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Select Role</label>

              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    defaultChecked
                    value="user"
                    {...register("role", {
                      required: "Role is required",
                    })}
                  />
                  User
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="creator"
                    {...register("role", {
                      required: "Role is required",
                    })}
                  />
                  Creator
                </label>
              </div>

              {errors.role && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.role.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-medium">Password</label>

              <div className="relative">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message:
                        "Password must contain one uppercase and one lowercase letter.",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                      message:
                        "Password must contain one uppercase and one lowercase letter.",
                    },
                  })}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-purple-500"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}

                <div
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="absolute top-[50%] right-2 translate-y-[-50%]"
                >
                  {showPassword ? (
                    <EyeClosed></EyeClosed>
                  ) : (
                    <EyeClosed></EyeClosed>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-semibold bg-linear-to-r from-purple-600 to-pink-500"
            >
              Sign In
            </button>
          </form>

          <div className="mt-5">
            <p className="text-center">
              If you have already Account |{" "}
              <Link href={"/signin"} className="font-bold text-purple-600">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
