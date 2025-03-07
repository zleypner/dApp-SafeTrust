"use client";

import { DashboardFooter } from "@/layouts/Footer";
import ThemeToggle from "@/layouts/ThemeToggle";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className={`h-screen flex flex-col`}>
      <header className="flex justify-between items-center p-6 bg-white dark:bg-background text-black dark:text-gray-100 shadow-md">
        <ThemeToggle/>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-blue-600 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={() => router.push("/auth/login")}
        >
          Sign Up
        </button>
      </header>
      <main className=" p-8 md:p-8 flex-1 flex flex-col sm:flex-row justify-center items-center bg-white dark:bg-background text-black dark:text-gray-100 gap-16 md:px-20 lg:px-32 xl:px-48">
        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left text-black dark:text-gray-100 leading-tight">
          Welcome to <br /> SafeTrust
        </h1>
        <hr className="hidden md:block bg-gray-300 dark:bg-gray-600 w-0.5 h-96" />
        <p className="text-lg md:text-xl md:w-1/2 text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-left">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 font-bold">
            SafeTrust is a decentralized and secure platform
          </span>{" "}
          designed to transform the <strong>P2P transaction</strong> experience,
          safeguarding deposits and payments between parties. Leveraging
          <strong> blockchain and trustless technologies</strong>, SafeTrust
          addresses key challenges to build trust among users, especially in
          transactions involving <strong>cryptocurrency</strong>, providing
          <strong> transparency and security</strong> in every peer-to-peer
          operation.
        </p>
      </main>
      <DashboardFooter />
    </div>
  );
}