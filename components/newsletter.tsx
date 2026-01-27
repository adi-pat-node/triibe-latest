"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export default function Newsletter() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const modalShown = sessionStorage.getItem("newsletter-shown");

    if (modalShown) {
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 300 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("newsletter-shown", "true");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
      <div className="bg-white rounded-lg shadow-2xl p-8 md:p-10 max-w-md w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-8">
          <Image
            src="/images/TriibeHero.svg"
            alt="TRIIBE"
            width={64}
            height={64}
            className="h-16 w-auto mx-auto mb-6"
          />
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Subscribe to the TRIIBUNE!
          </h3>
          <p className="text-base text-gray-700">
            Monthly updates on our impact, new projects, and ways to get
            involved!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Your email addresss"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-base"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 text-base font-medium text-white bg-[#004d40] hover:bg-[#00352a] transition-colors rounded-lg"
          >
            Subscribe!
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="w-full text-base text-gray-600 hover:text-gray-900 transition-colors"
          >
            No, thank you
          </button>
        </form>
      </div>
    </div>
  );
}
