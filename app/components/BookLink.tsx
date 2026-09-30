import { site } from "../site";

export default function BookLink({
  children,
  className,
  href = site.bookingUrl,
  onClick,
  role,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  role?: "menuitem";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
      role={role}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
