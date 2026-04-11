import Link from 'next/link';

export default function PickupItem({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link href={href} className="group block border-b border-border last:border-b-0">
      <div className="flex items-center gap-4 py-5">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold group-hover:text-primary transition-colors">{title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-text-light line-clamp-1">{description}</p>
        </div>
        <svg className="h-4 w-4 shrink-0 text-text-muted transition-colors group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
