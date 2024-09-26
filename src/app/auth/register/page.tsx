"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{ username?: string; email?: string; password?: string; confirmPassword?: string }>({});
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newErrors: { username?: string; email?: string; password?: string; confirmPassword?: string } = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/auth/login");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 rounded-lg border border-secondary">
        <h1 className="text-primary font-bold text-4xl mb-4 text-center">Register</h1>

        <label htmlFor="username" className="text-black mb-2 block text-sm">
          Username:
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="p-3 rounded block mb-2 bg-white text-black w-full"
          placeholder="yourUser123"
        />
        {errors.username && (
          <span className="text-red-500 text-xs">{errors.username}</span>
        )}

        <label htmlFor="email" className="text-black mb-2 block text-sm">
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded block mb-2 bg-white text-black w-full"
          placeholder="user@email.com"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email}</span>
        )}

        <label htmlFor="password" className="text-black mb-2 block text-sm">
          Password:
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="p-3 rounded block mb-2 bg-white text-black w-full"
          placeholder="********"
        />
        {errors.password && (
          <span className="text-red-500 text-xs">{errors.password}</span>
        )}

        <label htmlFor="confirmPassword" className="text-black mb-2 block text-sm">
          Confirm Password:
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="p-3 rounded block mb-2 bg-white text-black w-full"
          placeholder="********"
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-xs">{errors.confirmPassword}</span>
        )}

        <button className="w-full bg-accent text-white p-3 rounded-lg mt-2 hover:bg-primary transition-colors">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
