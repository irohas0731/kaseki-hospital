const colors = [
  'bg-primary/20',
  'bg-secondary/20',
  'bg-primary-light/20',
  'bg-primary-dark/20',
  'bg-accent-green/20',
  'bg-accent-red/20',
];

export default function PlaceholderImage({
  width,
  height,
  label,
  className = '',
  colorIndex = 0,
}: {
  width: number;
  height: number;
  label: string;
  className?: string;
  colorIndex?: number;
}) {
  const bgColor = colors[colorIndex % colors.length];

  return (
    <div
      className={`${bgColor} flex flex-col items-center justify-center border-2 border-dashed border-border text-center ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      <p className="text-sm font-bold text-text-light">{label}</p>
      <p className="mt-1 text-xs text-text-muted">
        {width}×{height} 推奨
      </p>
    </div>
  );
}
