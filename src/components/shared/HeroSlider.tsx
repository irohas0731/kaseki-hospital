'use client';

import { useState, useEffect, useCallback } from 'react';
import { siteConfig } from '@/lib/siteConfig';

const slides = [
  { id: 1, label: 'HERO IMAGE 1', color: 'bg-primary/20' },
  { id: 2, label: 'HERO IMAGE 2', color: 'bg-secondary/20' },
  { id: 3, label: 'HERO IMAGE 3', color: 'bg-primary-light/20' },
  { id: 4, label: 'HERO IMAGE 4', color: 'bg-accent-green/20' },
  { id: 5, label: 'HERO IMAGE 5', color: 'bg-primary-dark/20' },
  { id: 6, label: 'HERO IMAGE 6', color: 'bg-accent-red/20' },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full overflow-hidden h-[65vh] min-h-[400px] md:aspect-[1920/700] md:h-auto md:min-h-0">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${slide.color} ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-border w-full h-full pb-20 md:pb-16">
            <p className="text-sm text-text-muted mb-4">{slide.label} — 1920×700 推奨</p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-serif text-text text-center px-6">
              {siteConfig.catchcopy}
            </h2>
            <p className="mt-4 md:mt-3 text-sm md:text-base text-text-light text-center px-6">
              地域の皆さまの健康と安心を支える総合医療
            </p>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-10 md:bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 md:h-2.5 rounded-full transition-all duration-300 ${
              index === current ? 'w-9 md:w-8 bg-primary' : 'w-3 md:w-2.5 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`スライド${index + 1}へ`}
          />
        ))}
      </div>
    </section>
  );
}
