export default function SectionHeader({
  enLabel,
  jaLabel,
  align = 'center',
}: {
  enLabel: string;
  jaLabel: string;
  align?: 'center' | 'left';
}) {
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
