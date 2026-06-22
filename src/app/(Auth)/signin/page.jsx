"use client";

import { authClient } from "@/lib/auth-client";
import { EyeClosed } from "@gravity-ui/icons";
import { Button, Separator, toast } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { data: authData, error } = await authClient.signIn.email({
      ...data,
    });

    if (authData) {
      router.push("/");
      toast.success("Login successful");
    }

    reset();
  };

  const handleGoogleLogIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-b py-16 from-purple-100/40 to-pink-100/40 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-4 md:p-8">
          <h2 className="text-3xl font-bold text-center mb-2">
            Sign In to{" "}
            <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              AIPromtify
            </span>
          </h2>

          <p className="text-center text-gray-500 mb-6">
            Welcome back! Please enter your details.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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

            <div className="flex gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                {...register("rememberMe")}
              />
              <label htmlFor="rememberMe" className="mt-1">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-semibold bg-linear-to-r from-purple-600 to-pink-500"
            >
              Sign In
            </button>
          </form>

          <Separator className="my-6" />

          <div className="">
            <button
              onClick={handleGoogleLogIn}
              className="w-full py-3 rounded-lg flex justify-center items-center gap-4 font-semibold border border-purple-600 "
            >
              <FcGoogle size={22}></FcGoogle> SignIn with Google
            </button>
          </div>

          <div className="mt-5">
            <p className="text-center">
              If you do not have Account |{" "}
              <Link href={"/signup"} className="font-bold text-purple-600">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
