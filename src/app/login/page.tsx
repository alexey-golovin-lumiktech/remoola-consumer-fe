"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginPage(){
  const [email,setEmail] = useState("client1@example.com");
  const [password,setPassword] = useState("password1");
  const [err,setErr] = useState<string>();
  const router = useRouter();
  const next = useSearchParams().get("next") || "/dashboard";

  async function submit(e: React.FormEvent){
    e.preventDefault(); setErr(undefined);
    const r = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
      method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!r.ok) { setErr('Login failed'); return; }
    router.push(next);
  }

  return (
    <div className="mx-auto max-w-md p-8">
      <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
      <form onSubmit={submit} className="space-y-3">
        <input className="w-full rounded-lg border px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full rounded-lg border px-3 py-2" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        {err && <p className="text-rose-600 text-sm">{err}</p>}
        <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white">Login</button>
      </form>
    </div>
  );
}


// // apps/web/src/app/login/page.tsx
// import LoginForm from "./LoginForm";

// export default function LoginPage({
//   searchParams,
// }: {
//   searchParams: { [k: string]: string | string[] | undefined };
// }) {
//   const next =
//     (Array.isArray(searchParams?.next) ? searchParams.next[0] : searchParams?.next) || "/dashboard";
//   return <LoginForm nextPath={next} />;
// }
