import Link from 'next/link';

const themes = [
  {
    gradient: 'from-primary/12 to-primary-light/8',
    accent: 'text-primary',
    iconBg: 'bg-primary/15',
    label: 'var(--color-primary)',
    hoverBorder: 'group-hover:border-primary/40',
  },
  {
    gradient: 'from-primary-light/12 to-primary/8',
    accent: 'text-primary-light',
    iconBg: 'bg-primary-light/15',
    label: 'var(--color-primary-light)',
    hoverBorder: 'group-hover:border-primary-light/40',
  },
  {
    gradient: 'from-primary-dark/12 to-primary/8',
    accent: 'text-primary-dark',
    iconBg: 'bg-primary-dark/15',
    label: 'var(--color-primary-dark)',
    hoverBorder: 'group-hover:border-primary-dark/40',
  },
  {
    gradient: 'from-accent-green/12 to-primary-light/8',
    accent: 'text-accent-green',
    iconBg: 'bg-accent-green/15',
    label: 'var(--color-accent-green)',
    hoverBorder: 'group-hover:border-accent-green/40',
  },
  {
    gradient: 'from-secondary/12 to-primary/8',
    accent: 'text-secondary',
    iconBg: 'bg-secondary/15',
    label: 'var(--color-secondary)',
    hoverBorder: 'group-hover:border-secondary/40',
  },
];

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
  const theme = themes[colorIndex % themes.length];

  return (
    <Link href={href} className="group block h-full">
      <div className={`relative h-full overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm transition-all duration-300 ease-out group-hover:shadow-lg ${theme.hoverBorder}`}>
        {/* Image area */}
        <div
          className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${theme.gradient}`}
        >
          <div className="text-center">
            <div className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full ${theme.iconBg} transition-transform duration-500 group-hover:scale-110`}>
              <svg className={`h-5 w-5 ${theme.accent}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
            </div>
            <p className="text-xs text-text-muted/30">IMAGE</p>
            <p className="mt-0.5 text-[10px] text-text-muted/20">640×440</p>
          </div>
        </div>

        {/* Text area */}
        <div className="p-5">
          <p
            className="font-en text-[11px] font-semibold tracking-[0.15em] uppercase"
            style={{ color: theme.label }}
          >
            {enTitle}
          </p>
          <h3 className="mt-1.5 text-lg font-bold leading-tight">{jaTitle}</h3>
          <p className="mt-2.5 text-[13px] leading-[1.8] text-text-light">
            {description}
          </p>
          <div className="mt-4 flex items-center gap-1 text-sm font-medium transition-all duration-300 group-hover:gap-2" style={{ color: theme.label }}>
            <span>詳しく見る</span>
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
