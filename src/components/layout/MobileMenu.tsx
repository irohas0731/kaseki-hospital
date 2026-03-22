'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig, navigationItems } from '@/lib/siteConfig';

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (href: string) => {
    setExpandedItem(expandedItem === href ? null : href);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-80 max-w-[85vw] bg-bg shadow-2xl transition-transform duration-300 lg:hidden overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="モバイルメニュー"
      >
        {/* Close button */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="text-sm font-bold text-primary">{siteConfig.hospitalName}</span>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10"
            aria-label="メニューを閉じる"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Info bar */}
        <div className="p-4 bg-primary-bg text-xs text-text-light">
          <p>診察受付：午前 {siteConfig.hours.morning} ／ 午後 {siteConfig.hours.afternoon}</p>
          <p className="mt-1">休診日：{siteConfig.hours.closedDays}</p>
          <a href={`tel:${siteConfig.phone}`} className="mt-2 flex items-center gap-1 text-sm font-bold text-primary">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            {siteConfig.phone}
          </a>
        </div>

        {/* Navigation */}
        <nav className="py-2" aria-label="モバイルナビゲーション">
          {navigationItems.map((item) => (
            <div key={item.href} className="border-b border-border">
              <div className="flex items-center">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex-1 px-4 py-3 text-sm font-medium"
                >
                  {item.label}
                </Link>
                {item.children.length > 0 && (
                  <button
                    onClick={() => toggleItem(item.href)}
                    className="px-4 py-3"
                    aria-label={`${item.label}のサブメニューを${expandedItem === item.href ? '閉じる' : '開く'}`}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedItem === item.href ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              {item.children.length > 0 && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedItem === item.href ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="bg-bg-off py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block px-8 py-2.5 text-sm text-text-light hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            href="/news"
            onClick={onClose}
            className="block px-4 py-3 text-sm font-medium border-b border-border"
          >
            新着情報
          </Link>
        </nav>

        {/* Bottom buttons */}
        <div className="p-4 space-y-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full text-center rounded bg-primary py-3 text-sm font-medium text-white"
          >
            お問い合わせ
          </Link>
          <Link
            href="/about/access"
            onClick={onClose}
            className="block w-full text-center rounded border border-primary py-3 text-sm font-medium text-primary"
          >
            アクセスマップ
          </Link>
        </div>
      </div>
    </>
  );
}
