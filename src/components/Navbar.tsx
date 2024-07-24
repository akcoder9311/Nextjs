"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
        className={cn("fixed top-20 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem
                setActive={setActive}
                active={active}
                item="Home"
                >
                </MenuItem>

                <MenuItem
                setActive={setActive}
                active={active}
                item="our courses"
                >
                    <div className="flex flex-col space-y-4 text-md   text-start">
                    <HoveredLink href="/courses">All Courses</HoveredLink>
                    <HoveredLink href="/interface-design">basic music theory</HoveredLink>
                    <HoveredLink href="/seo">Advance composition</HoveredLink>
                    <HoveredLink href="/branding">Song writing</HoveredLink>
                    <HoveredLink href="/branding">music production</HoveredLink>
                    </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Contact US">
                 <div className="flex flex-col space-y-4 text-sm">
                   <HoveredLink href="/hobby">Hobby</HoveredLink>
                   <HoveredLink href="/individual">Individual</HoveredLink>
                   <HoveredLink href="/team">Team</HoveredLink>
                   <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                 </div>
                </MenuItem>

            </Menu>
        </div>
    );
}

export default Navbar;