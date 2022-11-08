import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import CONFIG from "../../../../config";
import Popover from "@mui/material/Popover";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useUserStore } from "../../../../zustand";

type Props = {};

export default function Header({}: Props) {
  const { loading, data: user } = useUserStore();
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);

  const handlePopover = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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

        {!loading && !user && <Link href={`/api/auth/google`}>Login</Link>}

        {!loading && user && (
          <>
            <div className="flex items-center">
              <div className="text-sm mr-2">{user.name}</div>
              <img
                className="h-10 rounded-full mr-4"
                referrerPolicy="no-referrer"
                src={user.profilePic}
              />

              <ChevronDownIcon
                className="h-6 w-6 text-blue-500"
                onClick={handlePopover}
              />
            </div>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <div>
                <ul>
                  <li className="px-3 py-2">
                    <Link href="/api/auth/signout">Log out</Link>
                  </li>
                </ul>
              </div>
            </Popover>
          </>
        )}
      </div>
    </header>
  );
}
