import NavBar from "../pages/NavBar";
import SocialLinkLeft from "../components/SocialLinkLeft";
import SocialLinkRight from "../components/SocialLinkRight";
import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <NavBar />
      <SocialLinkRight />
      {children}
      <SocialLinkLeft />
      <footer className="text-center py-2 text-slate-400 border-t border-slate-700 bg-slate-900/95">
  © {new Date().getFullYear()} Joy Amamah. All rights reserved.
</footer>

    </>
  );
}
