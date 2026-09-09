"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.message ?? "Something went wrong. Try again.");
      return;
    }

    window.location.href = "/login";
  }

  return (
    <>
      <Navbar />
      <main className="max-w-sm mx-auto px-6 py-20">
        <h1 className="font-display font-bold text-2xl text-ink">Get started</h1>
        <p className="mt-2 text-sm text-muted">Create your account.</p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <Field label="Name" type="text" value={name} onChange={setName} />
          <Field label="Email" type="email" value={email} onChange={setEmail} />
          <Field label="Password" type="password" value={password} onChange={setPassword} />

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 px-5 py-3 rounded-sm bg-gold-gradient text-black font-medium disabled:opacity-60"
          >
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-sm text-muted">
          Already have an account?{" "}
          <Link href="/login" className="text-gold hover:underline">
            Log in
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