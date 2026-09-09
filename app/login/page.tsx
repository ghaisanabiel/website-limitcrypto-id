"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      setError("Invalid email or password.");
      return;
    }
    window.location.href = "/dashboard";
  }

  return (
    <>
      <Navbar />
      <main className="max-w-sm mx-auto px-6 py-20">
        <h1 className="font-display font-bold text-2xl text-ink">Log in</h1>
        <p className="mt-2 text-sm text-muted">Welcome back.</p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <Field label="Email" type="email" value={email} onChange={setEmail} />
          <Field label="Password" type="password" value={password} onChange={setPassword} />

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 px-5 py-3 rounded-sm bg-gold-gradient text-black font-medium disabled:opacity-60"
          >
            {loading ? "Logging in…" : "Log in"}
          </button>
        </form>

        <p className="mt-6 text-sm text-muted">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-gold hover:underline">
            Sign up
          </Link>
        </p>
      </main>
    </>
  );
}

function Field({
  label,
  type,
  value,
  onChange,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs text-muted">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="bg-surface border border-border rounded-sm px-3 py-2.5 text-ink text-sm outline-none focus:border-gold/50"
      />
    </label>
  );
}