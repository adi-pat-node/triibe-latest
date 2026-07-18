"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full max-w-[100vw] overflow-hidden bg-[#002c19] border-b border-[#002c19]">
      <div className="w-full px-4 md:px-25 lg:px-50">
        <nav className="flex h-16 items-center justify-between w-full max-w-[1200px] mx-auto">
          {/* Logo */}
          <div className="font-normal text-[#ffffff] text-xl tracking-[0.50px] leading-7">
            <a href="/">
              <Image
                src="/images/home/header1.png"
                alt="TRIIBE"
                width={50}
                height={50}
                priority
                className="w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            {[
              { name: "Home", href: "/" },
              { name: "TRIIBE Talk", href: "/talk" },
              { name: "Fellowship", href: "/fellowship" },
              { name: "TRIIBE I00", href: "/100" },
              { name: "Summit", href: "/summit" },
              { name: "TRIIBE Index", href: "/index" },
              { name: "About us", href: "/about" },
              // { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={` ${
                  isActive(link.href)
                    ? "font-black text-white"
                    : "font-normal text-white/80"
                } text-[#fffefecc] text-sm tracking-[0] leading-5 cursor-pointer hover:text-white transition-colors`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden xl:flex items-center gap-4">
            <a
              href="https://donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-4 py-2 bg-white font-normal text-black text-sm text-center rounded hover:bg-gray-100 transition-colors inline-flex items-center cursor-pointer"
            >
              Donate
            </a>
            <a
              href="/apply"
              className="h-9 px-4 py-2 bg-[#ffffff] font-normal text-black text-sm text-center tracking-[0] leading-5 hover:bg-[#f0f0f0] transition-colors rounded inline-flex items-center"
            >
              Apply
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden relative">
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
      </div>

      <div
        className={`xl:hidden px-4 py-4 bg-[#002c19] ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-1">
          {[
            { name: "Home", href: "/" },
            { name: "TRIIBE Talk", href: "/talk" },
            { name: "Fellowship", href: "/fellowship" },
            { name: "TRIIBE I00", href: "/100" },
            { name: "Summit", href: "/summit" },
            { name: "TRIIBE Index", href: "/index" },
            { name: "About us", href: "/about" },
            // { name: "Contact us", href: "/contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-lg text-base transition-colors ${
                isActive(link.href)
                  ? "bg-white/10 text-white font-semibold"
                  : "text-white/80 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}

          <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-white/20">
            <a
              href="https://donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 text-center text-sm font-semibold text-black bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              Donate
            </a>
            <a
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 text-center text-sm font-semibold text-black bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
