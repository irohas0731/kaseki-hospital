'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';

const slides = [
  { id: 1, src: '/images/hero-1.jpg', alt: '病院の廊下を歩く医師たち' },
  { id: 2, src: '/images/hero-2.jpg', alt: '患者との診察風景' },
  { id: 3, src: '/images/hero-3.jpg', alt: '医師の診療デスク' },
  { id: 4, src: '/images/hero-4.jpg', alt: '医療チームの連携' },
  { id: 5, src: '/images/hero-5.jpg', alt: '清潔な病院の廊下' },
  { id: 6, src: '/images/hero-6.jpg', alt: '看護スタッフの活動' },
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
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <h2 className="text-lg md:text-4xl lg:text-5xl font-bold font-serif text-white text-center px-4 drop-shadow-lg">
              {siteConfig.catchcopy}
            </h2>
            <p className="mt-1.5 md:mt-3 text-xs md:text-base text-white/90 text-center px-4 drop-shadow-md">
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
              index === current ? 'w-5 md:w-8 bg-white' : 'w-2 md:w-2.5 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`スライド${index + 1}へ`}
          />
        ))}
      </div>
    </section>
  );
}
