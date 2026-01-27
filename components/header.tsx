"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // get the current path

  // helper to check if a link is active
  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full bg-[#002c19] border-b border-[#002c19]">
      <nav className="flex h-16 items-center justify-between w-full px-[200px] py-2">
        {/* Logo */}
        <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff] text-xl tracking-[0.50px] leading-7">
          <a href="/">TRIIBE</a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "Program", href: "/program" },
            { name: "Changemakers", href: "/changemakers" },
            { name: "Media", href: "/media" },
            { name: "About", href: "/about" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`[font-family:'DM_Sans',Helvetica] ${
                isActive(link.href) ? "font-semibold" : "font-normal"
              } text-[#fffefecc] text-sm tracking-[0] leading-5 cursor-pointer hover:text-white transition-colors`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/partner"
            className="h-9 px-4 py-2 [font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff] text-sm text-center tracking-[0] leading-5 hover:bg-[#003d24] transition-colors rounded inline-flex items-center"
          >
            Partner
          </a>
          <a
            href="/apply"
            className="h-9 px-4 py-2 bg-[#ffffff] [font-family:'DM_Sans',Helvetica] font-normal text-black text-sm text-center tracking-[0] leading-5 hover:bg-[#f0f0f0] transition-colors rounded inline-flex items-center"
          >
            Apply
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden pb-4 border-t border-gray-700 px-6">
          <div className="flex flex-col gap-4 pt-4">
            {[
              { name: "Home", href: "/" },
              { name: "Program", href: "/program" },
              { name: "Changemakers", href: "/changemakers" },
              { name: "Media", href: "/media" },
              { name: "About", href: "/about" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`[font-family:'DM_Sans',Helvetica] ${
                  isActive(link.href) ? "font-semibold" : "font-normal"
                } text-[#fffefecc] text-sm tracking-[0] leading-5 hover:text-white transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div className="flex flex-col gap-3 pt-4 border-t border-gray-700">
              <a
                href="/partner"
                className="h-9 px-4 py-2 [font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff] text-sm text-center tracking-[0] leading-5 hover:bg-[#003d24] transition-colors rounded inline-flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partner
              </a>
              <a
                href="/apply"
                className="h-9 px-4 py-2 bg-[#ffffff] [font-family:'DM_Sans',Helvetica] font-normal text-black text-sm text-center tracking-[0] leading-5 hover:bg-[#f0f0f0] transition-colors rounded inline-flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
