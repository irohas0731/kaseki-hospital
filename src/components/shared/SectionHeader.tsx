export default function SectionHeader({
  enLabel,
  jaLabel,
  align = 'center',
  variant = 'default',
}: {
  enLabel: string;
  jaLabel: string;
  align?: 'center' | 'left';
  variant?: 'default' | 'large' | 'accent' | 'minimal';
}) {
  if (variant === 'large') {
    return (
      <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        <p className="font-en text-xs tracking-[0.25em] uppercase text-primary/70 mb-2">
          {enLabel}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">{jaLabel}</h2>
      </div>
    );
  }

  if (variant === 'accent') {
    return (
      <div className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <div className="w-1 h-8 bg-primary rounded-full" />
          <div>
            <p className="font-en text-[11px] tracking-[0.2em] uppercase text-text-muted">
              {enLabel}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">{jaLabel}</h2>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`mb-8 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        <h2 className="text-xl md:text-2xl font-bold text-text">{jaLabel}</h2>
        <p className="font-en text-[11px] tracking-[0.2em] uppercase text-text-muted mt-1">
          {enLabel}
        </p>
      </div>
    );
  }

  // default
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-1">
        {enLabel}
      </p>
      <h2 className="text-2xl md:text-3xl font-bold">{jaLabel}</h2>
      <div
        className={`mt-3 h-0.5 w-12 bg-primary ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
