import Link from 'next/link';

const gradients = [
  'from-primary/10 to-primary-light/5',
  'from-secondary/10 to-primary/5',
  'from-primary-light/10 to-primary/5',
  'from-accent-green/10 to-primary-light/5',
  'from-primary-dark/10 to-primary/5',
  'from-primary/8 to-secondary/5',
];

export default function PickupCard({
  href,
  title,
  description,
  colorIndex = 0,
}: {
  href: string;
  title: string;
  description: string;
  colorIndex?: number;
}) {
  const gradient = gradients[colorIndex % gradients.length];

  return (
    <Link href={href} className="group block">
      <div className="overflow-hidden rounded-lg border border-border/60 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:border-secondary/40">
        <div className={`bg-gradient-to-br ${gradient} flex h-36 items-center justify-center`}>
          <svg className="h-8 w-8 text-text-muted/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
          </svg>
        </div>
        <div className="bg-bg p-4">
          <h3 className="text-sm font-bold">{title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-text-light line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}
