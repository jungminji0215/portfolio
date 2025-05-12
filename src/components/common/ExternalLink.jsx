import Link from 'next/link';

export default function ExternalLink({ href, className = '', children }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="새 창에서 열기"
    >
      {children}
      <span className="sr-only">(새 창에서 열림)</span>
    </Link>
  );
}
