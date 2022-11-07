import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import CONFIG from "../../../../config";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="shadow-md py-2">
      <div
        className={twMerge(
          "flex justify-between items-center mx-3",
          "md:max-w-6xl md:mx-auto"
        )}
      >
        <div className="flex items-center">
          <img src="/ChartBellv5.png" className="h-10 mr-1" />
          <p className="text-orange-400 font-bold text-3xl">Chart Bell</p>
        </div>

        <Link href={`/api/auth/google`}>Login</Link>
      </div>
    </header>
  );
}
