import Link from 'next/link';
import Image from 'next/image';
import { type ReactNode } from 'react';

const serviceImages: Record<string, string> = {
  Ambulatory: '/images/doctor-stethoscope.jpg',
  Hospitalization: '/images/hospital-ward.jpg',
  'Check Up': '/images/medical-checkup.jpg',
  Rehabilitation: '/images/rehabilitation.jpg',
  'Home Care': '/images/consultation.jpg',
};

const icons: Record<string, ReactNode> = {
  Ambulatory: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  Hospitalization: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  'Check Up': (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
    </svg>
  ),
  Rehabilitation: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  'Home Care': (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
};

const auraColors = [
  'from-blue-200/60 via-green-100/30 to-transparent',
  'from-cyan-200/60 via-blue-100/30 to-transparent',
  'from-emerald-200/60 via-teal-100/30 to-transparent',
  'from-rose-200/40 via-orange-100/30 to-transparent',
  'from-amber-200/50 via-lime-100/30 to-transparent',
];

// ホバー時にカード全体を染めるオーバーレイ色
const hoverOverlays = [
  '#dbeafe',  // blue-100
  '#cffafe',  // cyan-100
  '#d1fae5',  // emerald-100
  '#ffe4e6',  // rose-100
  '#fef3c7',  // amber-100
];

export default function ServiceItem({
  href,
  enTitle,
  jaTitle,
  description,
  colorIndex = 0,
}: {
  href: string;
  enTitle: string;
  jaTitle: string;
  description: string;
  colorIndex?: number;
}) {
  const icon = icons[enTitle] ?? icons['Ambulatory'];
  const aura = auraColors[colorIndex % auraColors.length];
  const overlay = hoverOverlays[colorIndex % hoverOverlays.length];

  return (
    <Link href={href} className="group block">
      <div className={`relative rounded-2xl bg-gradient-to-br ${aura} p-[3px] transition-all duration-500`}>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[13px] bg-white">
          {/* Hover color overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-60"
            style={{ backgroundColor: overlay }}
          />

          {/* Photo */}
          <div className="relative z-20 h-36 overflow-hidden">
            <Image
              src={serviceImages[enTitle] || '/images/outpatient.jpg'}
              alt={`${jaTitle}のイメージ`}
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-20 flex flex-1 flex-col items-center px-4 pb-5 pt-5 text-center">
            <div className="mb-3 text-text-muted/70">
              {icon}
            </div>
            <h3 className="text-base font-bold leading-tight">{jaTitle}</h3>
            <p className="mt-0.5 font-en text-[10px] tracking-[0.15em] uppercase text-text-muted">
              {enTitle}
            </p>
            <p className="mt-2.5 text-[12px] leading-[1.8] text-text-light">
              {description}
            </p>
            <p className="mt-3 text-xs font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              詳細を見る →
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
