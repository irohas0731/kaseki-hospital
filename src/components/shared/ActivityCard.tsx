import Link from 'next/link';

const gradients = [
  'from-primary/12 to-primary-light/8',
  'from-secondary/12 to-primary/8',
  'from-primary-light/12 to-accent-green/8',
  'from-accent-green/12 to-primary/8',
];

export default function ActivityCard({
  href,
  tag,
  title,
  date,
  colorIndex = 0,
}: {
  href: string;
  tag: string;
  title: string;
  date: string;
  colorIndex?: number;
}) {
  const gradient = gradients[colorIndex % gradients.length];

  return (
    <Link href={href} className="group block">
      <div className="overflow-hidden rounded-lg border border-border/60 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-primary/30">
        <div className={`bg-gradient-to-br ${gradient} flex h-40 items-center justify-center`}>
          <svg className="h-8 w-8 text-text-muted/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
          </svg>
        </div>
        <div className="bg-bg p-4">
          <span className="inline-block rounded bg-primary/10 px-2 py-0.5 text-xs text-primary">
            {tag}
          </span>
          <h3 className="mt-2 text-sm font-bold leading-snug line-clamp-2">{title}</h3>
          <p className="mt-2 text-xs text-text-muted">{date}</p>
        </div>
      </div>
    </Link>
  );
}
