import Link from 'next/link';

export default function ServiceCard({
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
  const bgColors = [
    'bg-primary/10',
    'bg-secondary/10',
    'bg-primary-light/10',
    'bg-accent-green/10',
    'bg-primary-dark/10',
  ];
  const bgColor = bgColors[colorIndex % bgColors.length];

  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden rounded-lg shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
        <div
          className={`${bgColor} flex h-48 items-center justify-center border-b-2 border-dashed border-border`}
        >
          <p className="text-sm text-text-muted">IMAGE</p>
        </div>
        <div className="bg-bg p-5">
          <p className="font-en text-xs tracking-wider uppercase text-primary">
            {enTitle}
          </p>
          <h3 className="mt-1 text-lg font-bold">{jaTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-light">
            {description}
          </p>
          <span className="mt-3 inline-flex items-center text-sm text-primary transition-transform duration-200 group-hover:translate-x-1">
            詳しく見る
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
