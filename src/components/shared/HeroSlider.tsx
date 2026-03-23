'use client';

import { useState, useEffect, useCallback } from 'react';
import { siteConfig } from '@/lib/siteConfig';

const slides = [
  { id: 1, label: 'HERO IMAGE 1', from: 'from-primary/20', to: 'to-primary-light/10' },
  { id: 2, label: 'HERO IMAGE 2', from: 'from-secondary/20', to: 'to-primary/10' },
  { id: 3, label: 'HERO IMAGE 3', from: 'from-primary-light/20', to: 'to-accent-green/10' },
  { id: 4, label: 'HERO IMAGE 4', from: 'from-accent-green/15', to: 'to-primary-light/10' },
  { id: 5, label: 'HERO IMAGE 5', from: 'from-primary-dark/20', to: 'to-primary/10' },
  { id: 6, label: 'HERO IMAGE 6', from: 'from-primary/15', to: 'to-secondary/10' },
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
    <section className="relative w-full overflow-hidden aspect-[1920/700]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 bg-gradient-to-br ${slide.from} ${slide.to} ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <p className="text-xs md:text-sm text-text-muted/30 mb-2 md:mb-4">{slide.label} — 1920×700</p>
            <h2 className="text-lg md:text-4xl lg:text-5xl font-bold font-serif text-text text-center px-4">
              {siteConfig.catchcopy}
            </h2>
            <p className="mt-1.5 md:mt-3 text-xs md:text-base text-text-light text-center px-4">
              地域の皆さまの健康と安心を支える総合医療
            </p>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-3 md:bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 md:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
              index === current ? 'w-5 md:w-8 bg-primary' : 'w-2 md:w-2.5 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`スライド${index + 1}へ`}
          />
        ))}
      </div>
    </section>
  );
}
