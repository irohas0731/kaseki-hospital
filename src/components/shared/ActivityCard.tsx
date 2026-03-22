import Link from 'next/link';

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
  const bgColors = ['bg-primary/15', 'bg-secondary/15', 'bg-primary-light/15', 'bg-accent-green/15'];
  const bgColor = bgColors[colorIndex % bgColors.length];

  return (
    <Link href={href} className="group block">
      <div className="overflow-hidden rounded-lg shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
        <div className={`${bgColor} flex h-40 items-center justify-center border-b border-dashed border-border`}>
          <p className="text-xs text-text-muted">IMAGE</p>
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
