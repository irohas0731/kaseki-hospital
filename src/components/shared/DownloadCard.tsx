export default function DownloadCard({
  title,
  fileType,
}: {
  title: string;
  fileType: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-bg p-4 transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-red/10">
        <svg className="h-6 w-6 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <div>
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="mt-0.5 text-xs text-text-muted">{fileType}</p>
      </div>
    </div>
  );
}
