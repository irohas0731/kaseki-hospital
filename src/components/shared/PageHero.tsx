export default function PageHero({
  title,
  enTitle,
}: {
  title: string;
  enTitle: string;
}) {
  return (
    <section className="relative bg-primary-bg py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="font-en text-sm tracking-[0.2em] uppercase text-primary mb-2">
          {enTitle}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <div className="mt-4 mx-auto h-0.5 w-16 bg-primary" />
      </div>
    </section>
  );
}
