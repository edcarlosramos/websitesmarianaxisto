import { logo } from "../assets";
import styles from "../style";

// Site home, with the GitHub Pages base path in production ("/websitesmarianaxisto/").
const HOME_URL = import.meta.env.BASE_URL;

const linkBase =
  "inline-flex h-[52px] items-center justify-center rounded-full px-7 font-sans text-[15px] font-semibold leading-[1.2] whitespace-nowrap transition-colors duration-200 focus-visible:outline-[3px] focus-visible:outline-offset-2";

const variants = {
  primary: "bg-green text-white hover:bg-green-hover active:bg-green-active focus-visible:outline-green",
  secondary: "border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-lavender focus-visible:outline-navy-800",
};

// Plain links (no Motion, no Lenis): this screen also shows when the rest of the app has crashed.
const StatusAction = ({ label, href, onClick, variant = "primary", external = false }) => {
  const className = `${linkBase} ${variants[variant]}`;
  if (onClick)
    return (
      <button type="button" onClick={onClick} className={`${className} cursor-pointer`}>
        {label}
      </button>
    );
  return (
    <a href={href} className={className} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {label}
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  );
};

// Shared layout for the 404 page and the error screen.
const StatusPage = ({ code, overline, title, highlight, text, actions }) => (
  <div className="flex min-h-svh flex-col bg-lavender text-navy-800">
    <header className={`${styles.container} pt-8 md:pt-10`}>
      <a href={HOME_URL} aria-label="Comunidade Maker — voltar ao início" className="inline-block">
        <img src={logo} alt="Comunidade Maker" width="720" height="251" className="h-[44px] w-auto md:h-[56px]" />
      </a>
    </header>

    <main className={`${styles.container} flex flex-1 flex-col justify-center py-16`}>
      <p aria-hidden="true" className="font-display text-[120px] leading-none tracking-[-0.03em] text-wine italic md:text-[200px] lg:text-[240px]">
        {code}
      </p>
      <p className={`${styles.overline} mt-6 text-muted md:mt-8`}>{overline}</p>
      <h1 className={`${styles.heading2Sm} mt-4 max-w-[760px] text-navy-800`}>
        {title} <em className="text-wine">{highlight}</em>
      </h1>
      <p className={`${styles.lead} mt-5 max-w-[520px] text-navy-700 md:mt-6`}>{text}</p>
      <div className="mt-9 flex flex-wrap gap-3 md:mt-11 md:gap-4">
        {actions.map((action) => (
          <StatusAction key={action.label} {...action} />
        ))}
      </div>
    </main>

    <footer className={`${styles.container} border-t border-rule-soft py-6`}>
      <p className="font-sans text-[13px] leading-[1.5] text-muted">© 2026 Comunidade Maker · Mariana Xisto.</p>
    </footer>
  </div>
);

export default StatusPage;
