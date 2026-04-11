export default function DownloadItem({
  title,
  fileType,
}: {
  title: string;
  fileType: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-border py-3.5 last:border-b-0 cursor-pointer transition-colors hover:text-primary">
      <svg className="h-4 w-4 shrink-0 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span className="flex-1 min-w-0 text-sm font-bold">{title}</span>
      <span className="shrink-0 text-xs text-text-muted">{fileType}</span>
    </div>
  );
}
