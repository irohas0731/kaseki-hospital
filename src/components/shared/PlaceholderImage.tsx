const gradients = [
  'from-primary/15 to-primary-light/10',
  'from-secondary/15 to-primary/10',
  'from-primary-light/15 to-primary/10',
  'from-primary-dark/15 to-primary/10',
  'from-accent-green/15 to-primary-light/10',
  'from-accent-red/10 to-secondary/10',
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
  const gradient = gradients[colorIndex % gradients.length];

  return (
    <div
      className={`bg-gradient-to-br ${gradient} flex flex-col items-center justify-center text-center ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      <svg className="h-8 w-8 text-text-muted/30 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
      <p className="text-xs text-text-muted/30">
        {width}×{height}
      </p>
    </div>
  );
}
