'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/shared/PageHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrollFadeIn from '@/components/shared/ScrollFadeIn';

const categories = [
  { id: 'all', label: 'すべて' },
  { id: 'closed', label: '休診のお知らせ' },
  { id: 'hospital', label: '病院からのお知らせ' },
  { id: 'important', label: '重要なお知らせ' },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
      <PageHero title="新着情報一覧" enTitle="News" />
      <Breadcrumb items={[{ label: '新着情報一覧' }]} />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-border pb-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-text-light hover:text-text'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Empty State */}
          <ScrollFadeIn>
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-b-lg bg-bg-off p-8">
              <svg
                className="h-16 w-16 text-text-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <p className="mt-4 text-sm text-text-muted">
                現在、お知らせはありません
              </p>
              <p className="mt-2 text-xs text-text-muted">
                {siteConfig.hospitalName}からの最新情報はこちらに掲載いたします。
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
