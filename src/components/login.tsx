import React, { FormEvent } from "react";
import { NextPage } from "next";
import { supabase } from "@/utils/supabaseClient";
import { useAuth } from "@/utils/authContext";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const email = process.env.NEXT_EMAIL;
  const password = process.env.NEXT_PASS;
  const { signIn } = useAuth();
  const router = useRouter();

  const login = async (e: FormEvent) => {
    e.preventDefault();
    const { error } = await signIn({ email: email, password: password });
    if (error) {
      console.error(error);
      return;
    }
    router.push("/home");
  };

  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border border-white rounded-xl">
      <div className="card-body">
        <form onSubmit={login}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-md">Email</span>
            </label>
            <input
              type="text"
              defaultValue={email}
              placeholder="email"
              className="input input-bordered rounded-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-md">Password</span>
            </label>
            <input
              defaultValue={password}
              type="password"
              placeholder="password"
              className="input input-bordered rounded-full"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-full">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
