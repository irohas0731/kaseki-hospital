import Link from 'next/link';

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
  const bgColors = ['bg-primary/10', 'bg-secondary/10', 'bg-primary-light/10', 'bg-accent-green/10', 'bg-primary-dark/10', 'bg-accent-red/10'];
  const bgColor = bgColors[colorIndex % bgColors.length];

  return (
    <Link href={href} className="group block">
      <div className="overflow-hidden rounded-lg shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
        <div className={`${bgColor} flex h-36 items-center justify-center border-b border-dashed border-border`}>
          <p className="text-xs text-text-muted">IMAGE</p>
        </div>
        <div className="bg-bg p-4">
          <h3 className="text-sm font-bold">{title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-text-light line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}
