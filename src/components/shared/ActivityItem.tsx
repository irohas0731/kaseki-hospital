import Link from 'next/link';

export default function ActivityItem({
  href,
  tag,
  title,
  date,
}: {
  href: string;
  tag: string;
  title: string;
  date: string;
}) {
  return (
    <Link href={href} className="group block border-b border-border last:border-b-0">
      <div className="flex items-center gap-4 py-4">
        <p className="shrink-0 text-xs text-text-muted tabular-nums w-20">{date}</p>
        <span className="shrink-0 inline-block border border-primary/30 px-2 py-0.5 text-xs text-primary">
          {tag}
        </span>
        <h3 className="flex-1 min-w-0 text-sm leading-snug truncate group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  );
}
