"use client";

import { useMediaQuery } from "utils";
import { MobileMenu } from "@/components/MobileMenu";
import { Menu } from "@/components/Menu";
import { ConnectMedia } from "@/components/ConnectMedia";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { Logo } from "@/components/Logo";

export function AppHeader() {
  const isMobile = useMediaQuery();

  return (
    <header className="pt-5 pb-5 sticky top-0 z-10 bg-inherit shadow-sm">
      <div className="container-md">
        <div className="flex justify-between items-center gap-3">
          <Logo />
          {isMobile ? <MobileMenu /> : <Menu />}
          <div className="flex items-center gap-5">
            {!isMobile && <ConnectMedia />}
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </header>
  );
}
