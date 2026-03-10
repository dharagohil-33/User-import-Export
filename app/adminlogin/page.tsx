"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AdminLogin() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  console.log("Form submitted");

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log("Auth response:", data);
  console.log("Auth error:", error);

  if (error) {
    console.log("Login error happened");
    setError(error.message);
    return;
  }

  const userEmail = data.user?.email;

  console.log("Logged in email:", userEmail);
  console.log("Admin email:", process.env.NEXT_PUBLIC_ADMIN_EMAIL);

  if (userEmail !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    console.log("Unauthorized user");
    await supabase.auth.signOut();
    setError("You are not authorized");
    return;
  }

  console.log("Redirecting to dashboard");

  router.push("/dashboard");
};


  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-4 w-80">

        <h1 className="text-2xl font-bold text-center">
          Admin Login
        </h1>

        {error && (
          <p className="text-red-600 text-sm">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 w-full"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>

      </form>
    </div>
  );
}