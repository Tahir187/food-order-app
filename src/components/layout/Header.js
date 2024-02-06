"use client";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();
  console.log(session);
  const status = session.status;

  return (
    <>
      <header className="flex items-center justify-between sticky top-0 bg-gray-200 shadow-lg rounded-full pl-4 pr-4 pt-2 pb-2">
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link
            href="/"
            className="text-primary 
font-semibold text-2xl"
          >
            FOOD BIZZ
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          {status === "authenticated" && (
            <button
              onClick={() => signOut()}
              className="bg-primary rounded-full
          text-white px-8 py-2"
            >
              Logout
            </button>
          )}
          {status === "unauthenticated" && (
            <>
              <Link
                href={"/login"}
                className="bg-primary rounded-full
          text-white px-8 py-2"
              >
                Login
              </Link>
              <Link
                href={"/register"}
                className="bg-primary rounded-full
          text-white px-8 py-2"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
