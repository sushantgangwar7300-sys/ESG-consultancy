import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type HeaderProps = {
  onOpenModal: () => void;
};

export default function Header({ onOpenModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && router.pathname === '/') return true;
    if (href !== '/' && router.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl text-[#0F3A2E] tracking-tight flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#16A34A]"></span>
          <Link href="/">KAI PRAKRITI</Link>
        </div>

        <div className="hidden md:flex space-x-8 text-[#334155] font-medium text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                isActive(link.href)
                  ? 'text-[#16A34A] font-semibold'
                  : 'hover:text-[#16A34A]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenModal}
            className="bg-[#16A34A] text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-[#0F3A2E] transition shadow-sm cursor-pointer"
          >
            Talk to an Expert
          </button>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-black focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm ${
                isActive(link.href)
                  ? 'font-semibold text-[#16A34A]'
                  : 'font-medium text-gray-700 hover:text-[#16A34A]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal();
            }}
            className="w-full mt-2 bg-[#16A34A] text-white py-2 rounded-lg font-semibold text-sm text-center block cursor-pointer"
          >
            Talk to an Expert
          </button>
        </div>
      )}
    </header>
  );
}
