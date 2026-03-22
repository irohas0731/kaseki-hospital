import Link from 'next/link';

export default function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="パンくずリスト" className="bg-bg-off py-3">
      <div className="mx-auto max-w-7xl px-4">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              ホーム
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              <span className="mx-1">&gt;</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-text">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
