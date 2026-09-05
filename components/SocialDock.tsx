export const socialLinks = [
  {
    href: "https://www.instagram.com/kalamasala_nagpur/",
    label: "Instagram",
    color: "#E1306C",
    icon: InstagramIcon,
  },
  {
    href: "https://www.facebook.com/people/Kala-Massala-Lata-Special/61593596295304/",
    label: "Facebook",
    color: "#1877F2",
    icon: FacebookIcon,
  },
  {
    href: "https://wa.me/918484911196",
    label: "WhatsApp",
    color: "#25D366",
    icon: WhatsAppIcon,
  },
];

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
            className="grid h-10 w-10 place-items-center rounded-full text-white transition-opacity hover:opacity-90"
            style={{ background: item.color }}
          >
            <item.icon />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function SocialDock() {
  return (
    <nav
      aria-label="Social"
      className="fixed top-1/2 left-0 z-30 hidden -translate-y-1/2 rounded-r-md bg-white/95 shadow-[2px_2px_8px_rgba(15,17,17,0.18)] md:block"
    >
      <ul className="flex flex-col">
        {socialLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              title={item.label}
              className="grid h-11 w-11 place-items-center text-white transition-opacity hover:opacity-90 md:h-12 md:w-12"
              style={{ background: item.color }}
            >
              <item.icon />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1zm5.35-8.85a1.15 1.15 0 1 0 1.15 1.15 1.15 1.15 0 0 0-1.15-1.15z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14.5 22v-8.2h2.75l.41-3.2H14.5V8.55c0-.93.26-1.56 1.59-1.56H18V4.14A21.3 21.3 0 0 0 15.36 4C12.7 4 10.9 5.62 10.9 8.2v2.4H8.2v3.2h2.7V22z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2zm5.76 14.05c-.24.68-1.4 1.25-1.93 1.33-.5.07-1.12.1-1.81-.11a18.4 18.4 0 0 1-1.62-.6 9.9 9.9 0 0 1-3.72-3.4 4.4 4.4 0 0 1-.9-2.32c0-.7.37-1.31.73-1.5.18-.1.4-.08.64-.07.2 0 .47-.08.73.56.27.66.9 2.28.98 2.45.08.17.13.37 0 .58-.12.22-.18.36-.36.55-.18.2-.37.44-.53.59-.18.17-.36.35-.16.69.2.33.9 1.48 1.93 2.4 1.33 1.18 2.45 1.55 2.8 1.73.34.17.54.14.74-.08.2-.23.84-.98 1.07-1.32.22-.33.45-.28.75-.17.3.11 1.9.9 2.23 1.06.33.17.55.25.63.39.08.14.08.82-.16 1.5z" />
    </svg>
  );
}
