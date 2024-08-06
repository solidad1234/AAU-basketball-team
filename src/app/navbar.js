"use client";

import React, { useState } from "react";
import Link from 'next/link'; 
import { HoveredLink, Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";


export function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("fixed top-0 inset-x-0 w-full z-50 bg-teal", className)}> 
      <Menu setActive={setActive} className="flex justify-center items-center ">
        <div className="flex flex-grow justify-center space-x-10 ">
          <img src="/images/logo.jpeg" alt="Logo" className="h-10" />
          <MenuItem setActive={setActive} active={active} item="UEBL WOLVES" className="flex items-center" />
          <Link href="/"> 
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <Link href="/team">
            <MenuItem setActive={setActive} active={active} item="Team">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/team/2018">UEBL Wolves 2018</HoveredLink>
                <HoveredLink href="/team/2022">UEBL Wolves 2022</HoveredLink>
                <HoveredLink href="/team/2023">UEBL Wolves 2023</HoveredLink>
                <HoveredLink href="/team/2024">UEBL Wolves 2024</HoveredLink>
                <HoveredLink href="/team/all-star">UEBL All Star Game</HoveredLink>
              </div>
            </MenuItem>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Shop" />
          <MenuItem setActive={setActive} active={active} item="Donate" />
          <MenuItem setActive={setActive} active={active} item="About/Info">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Contact Us</HoveredLink>
              <HoveredLink href="/">About Us</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Cart" />
        </div>
      </Menu>
    </div>
  );
}
