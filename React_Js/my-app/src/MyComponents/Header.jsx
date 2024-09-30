import React from "react";

export default function Header() {
  return (
    <div>
      <header className="flex items-center justify-between gap-3 w-full bg-slate-400 p-6">
        <div className="logo md:text-3xl text-black sm:text-xl sm:hidden">
          Logo
        </div>
        <nav className="flex gap-3 md:text-2xl sm:text-xs">
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
        </nav>
      </header>
      <div className="container !bg-black  border-s-black mx-auto hover:bg-sky-700 hover:h-screen">
        <h1>Container</h1>
      </div>
    </div>
  );
}
