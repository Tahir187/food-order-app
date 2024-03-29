"use client";
import Image from "next/image";
import React, { useState } from "react";
import {signIn} from "next-auth/react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handleFormSubmit(ev){
    ev.preventDefault();
    setLoginInProgress(true);

    await signIn('credentials', {email, password, callbackUrl: '/'});

    setLoginInProgress(false);
  }


  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          disabled={loginInProgress}
          onChange={(ev) => setEmail(ev.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          disabled={loginInProgress}
          onChange={(ev) => setPassword(ev.target.value)}
        />

        <button type="submit" disabled={loginInProgress} >Login</button>

        <div className="my-4 text-center text-gray-500">
          or login with provider
          <button className="flex gap-4 justify-center hover:bg-gray-300">
            <Image
              src={"/google.png"}
              alt="google logo"
              width={24}
              height={24}
            />
            Login with google
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
