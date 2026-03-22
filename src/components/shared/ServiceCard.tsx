import Link from 'next/link';

const pastelThemes = [
  {
    bg: 'bg-[#fce4ec]',
    hoverBg: 'group-hover:bg-[#f8bbd0]',
    accent: 'text-[#c06078]',
    iconBg: 'bg-[#f8bbd0]',
    label: '#c06078',
  },
  {
    bg: 'bg-[#e8f5e9]',
    hoverBg: 'group-hover:bg-[#c8e6c9]',
    accent: 'text-[#5a9a68]',
    iconBg: 'bg-[#c8e6c9]',
    label: '#5a9a68',
  },
  {
    bg: 'bg-[#fff3e0]',
    hoverBg: 'group-hover:bg-[#ffe0b2]',
    accent: 'text-[#c08850]',
    iconBg: 'bg-[#ffe0b2]',
    label: '#c08850',
  },
  {
    bg: 'bg-[#e3f2fd]',
    hoverBg: 'group-hover:bg-[#bbdefb]',
    accent: 'text-[#5088b0]',
    iconBg: 'bg-[#bbdefb]',
    label: '#5088b0',
  },
  {
    bg: 'bg-[#f3e5f5]',
    hoverBg: 'group-hover:bg-[#e1bee7]',
    accent: 'text-[#9060a0]',
    iconBg: 'bg-[#e1bee7]',
    label: '#9060a0',
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
  const theme = pastelThemes[colorIndex % pastelThemes.length];

  return (
    <Link href={href} className="group block h-full">
      <div className={`relative h-full overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-xl`}>
        {/* Image area */}
        <div
          className={`relative flex h-44 items-center justify-center border-b border-dashed border-border/80 transition-colors duration-500 ${theme.bg} ${theme.hoverBg}`}
        >
          <div className="text-center">
            <div className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full ${theme.iconBg} transition-transform duration-500 group-hover:scale-110`}>
              <svg className={`h-5 w-5 ${theme.accent}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
            </div>
            <p className="text-xs text-text-muted">IMAGE</p>
            <p className="mt-0.5 text-[10px] text-text-muted/70">640×440 推奨</p>
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
