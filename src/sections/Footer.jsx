import { logo } from "../assets";
import { WHATSAPP_URL, navLinks, socials } from "../constants";
import styles from "../style";

const linkClass = "font-sans text-[15px] font-medium leading-[1.4] text-navy-800 transition-colors hover:text-wine";

const Column = ({ title, children }) => (
  <div>
    <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.17em] text-wine">{title}</p>
    <ul className="mt-4 space-y-2">{children}</ul>
  </div>
);

const DEFAULT_TAGLINE = "Intensivo de conversação em inglês para mulheres que já estudaram — e querem, enfim, falar.";

// `brand` swaps the logo for a text wordmark.
const Footer = ({ links = navLinks, tagline = DEFAULT_TAGLINE, brand }) => (
  <footer className="bg-lavender pt-16 pb-10 md:pt-[72px] lg:pt-24">
    <div className={styles.container}>
      <div className="lg:flex lg:justify-between">
        <div>
          {brand ? (
            <p className="font-display text-[34px] leading-none italic text-wine md:text-[42px] lg:text-[48px]">{brand}</p>
          ) : (
            <img src={logo} alt="Comunidade Maker" width="720" height="251" loading="lazy" className="h-[52px] w-auto md:h-[70px] lg:h-20" />
          )}
          <p className="mt-6 max-w-[320px] font-sans text-[15px] leading-[1.6] text-navy-700">
            {tagline}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:mt-1 lg:w-[720px] lg:grid-cols-[220px_300px_200px] lg:gap-0">
          <Column title="Navegação">
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className={linkClass}>
                  {link.title}
                </a>
              </li>
            ))}
          </Column>
          <Column title="Redes">
            {socials.map((social) => (
              <li key={social.id}>
                <a href={social.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {social.title}
                  <span className="hidden md:inline">  {social.handle}</span>
                </a>
              </li>
            ))}
            <li className="font-sans text-[13px] text-muted md:hidden">@marianaxistobr</li>
          </Column>
          <Column title="Contato">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                WhatsApp da equipe
              </a>
            </li>
          </Column>
        </div>
      </div>

      <div className="mt-12 border-t border-rule-soft pt-6 lg:mt-11">
        <p className="font-sans text-[13px] leading-[1.5] text-muted">
          © 2026 {brand ?? "Comunidade Maker"} · Mariana Xisto. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
