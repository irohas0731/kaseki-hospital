'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { siteConfig, navigationItems } from '@/lib/siteConfig';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/95 shadow-md backdrop-blur-md'
            : 'bg-bg'
        }`}
      >
        {/* Top bar */}
        <div className="hidden lg:block border-b border-border">
          <div className="mx-auto max-w-7xl px-4 flex items-center justify-between py-2">
            <div className="flex items-center gap-6 text-xs text-text-light">
              <span>診察受付時間：午前 {siteConfig.hours.morning} ／ 午後 {siteConfig.hours.afternoon}</span>
              <span>休診日：{siteConfig.hours.closedDays}</span>
            </div>
            <div className="flex items-center gap-4">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1 text-sm font-bold text-primary">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {siteConfig.phone}
              </a>
              <Link href="/contact" className="rounded bg-primary px-4 py-1.5 text-xs font-medium text-white hover:bg-primary-dark transition-colors">
                お問い合わせ
              </Link>
              <Link href="/about/access" className="rounded border border-primary px-4 py-1.5 text-xs font-medium text-primary hover:bg-primary hover:text-white transition-colors">
                アクセス
              </Link>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <Link href="/" className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold text-primary font-serif">
                {siteConfig.hospitalName}
              </span>
              <span className="font-en text-[10px] tracking-wider text-text-muted">
                {siteConfig.hospitalNameEn}
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0" aria-label="メインナビゲーション">
              {navigationItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setHoveredNav(item.href)}
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  <Link
                    href={item.href}
                    className="flex flex-col items-center px-4 py-2 text-sm font-medium text-text hover:text-primary transition-colors"
                  >
                    <span className="font-en text-[10px] text-text-muted">{item.labelEn}</span>
                    <span>{item.label}</span>
                  </Link>
                  {item.children.length > 0 && hoveredNav === item.href && (
                    <div className="absolute left-0 top-full w-56 rounded-b-lg bg-bg shadow-lg border border-border py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-text-light hover:bg-primary-bg hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10"
              onClick={() => setMobileOpen(true)}
              aria-label="メニューを開く"
            >
              <span className="block w-6 h-0.5 bg-text mb-1.5" />
              <span className="block w-6 h-0.5 bg-text mb-1.5" />
              <span className="block w-6 h-0.5 bg-text" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16 lg:h-[calc(theme(spacing.18)+41px)]" />

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
