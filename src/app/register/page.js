"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if(response.ok){
      setUserCreated(true)
    }else{
      setError(true);
    }
    setCreatingUser(false);
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      {userCreated && (
        <div className="my-4 text-center">
          User Created. Now you can{" "}
          <Link className="underline" href={"/login"}>
            Login &raquo;
          </Link>{" "}
        </div>
      )}
      {error && (
        <div className="my-4 text-center text-red-600">
          An error has occurred. <br />
          Please try again.
        </div>
      )}
      <form className="block max-w-xs mx-auto mb-4" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="enter first name"
          value={firstName}
          disabled={creatingUser}
          onChange={(ev) => setFirstName(ev.target.value)}
        />

        <input
          type="text"
          placeholder="enter last name"
          value={lastName}
          disabled={creatingUser}
          onChange={(ev) => setLastName(ev.target.value)}
        />

        <input
          type="email"
          placeholder="email"
          value={email}
          disabled={creatingUser}
          onChange={(ev) => setEmail(ev.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          disabled={creatingUser}
          onChange={(ev) => setPassword(ev.target.value)}
        />

        <button type="submit" disabled={creatingUser}>
          Register
        </button>
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
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Already have account {' '}
          <Link className="underline" href={'/login'}>Login here &raquo;</Link>
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
