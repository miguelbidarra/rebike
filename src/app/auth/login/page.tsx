"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res && res.error) {
      setError(res.error);
    } else {
      router.push('/bikes');
      router.refresh();
    }
  });

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <form onSubmit={onSubmit} className="w-full max-w-md p-8 rounded-lg border border-secondary">
        {error && (
          <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">{error}</p>
        )}

        <h1 className="text-primary font-bold text-4xl mb-4 text-center">Login</h1>

        <label htmlFor="email" className="text-black mb-2 block text-sm">
          Email:
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-white text-black w-full"
          placeholder="user@email.com"
        />
        {typeof errors.email?.message === 'string' && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}

        <label htmlFor="password" className="text-black mb-2 block text-sm">
          Password:
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-white text-black w-full"
          placeholder="******"
        />
        {typeof errors.password?.message === 'string' && (
          <span className="text-red-500 text-xs">{errors.password.message}</span>
        )}

        <button className="w-full bg-accent text-white p-3 rounded-lg mt-2 hover:bg-primary transition-colors">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;