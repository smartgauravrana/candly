import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="shadow-md py-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center">
          <img src="/Logo.png" className="h-12 mr-2" />
          <p className="text-orange-400 font-bold text-3xl">Chart Bell</p>
        </div>

        <div>Login</div>
      </div>
    </header>
  );
}
