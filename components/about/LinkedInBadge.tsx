export function LinkedInBadge({ url }: { url?: string }) {
  if (!url) return null;

  const isInstagram = url.includes("instagram.com");

  if (isInstagram) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram profile"
        style={{ display: "inline-flex", width: 20, height: 20, flexShrink: 0 }}
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="5%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
          </defs>
          <rect
            x="0"
            y="0"
            width="24"
            height="24"
            rx="5"
            ry="5"
            fill="url(#ig-grad)"
          />
          <rect x="0" y="0" width="24" height="24" rx="5" ry="5" fill="none" />
          <circle
            cx="12"
            cy="12"
            r="4.5"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            ry="5"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn profile"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 20,
        height: 20,
        color: "#0A66C2",
        fontFamily: '"Source Sans Pro", "Arial", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        textDecoration: "none",
        background: "none",
        border: "none",
        padding: 0,
        letterSpacing: "-0.5px",
      }}
    >
      in
    </a>
  );
}