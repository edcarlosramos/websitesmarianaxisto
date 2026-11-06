import { Button } from "../components";
import { cta } from "./content";

// The page's main call to action: checkout button (smaller on phones) plus the payment line under it.
const CtaBlock = ({ location, label = cta.label, note = cta.note, surface = "light", className = "" }) => (
  <div className={className}>
    <Button location={location} label={label} href={cta.href} surface={surface} size="md" className="md:hidden" />
    <Button location={location} label={label} href={cta.href} surface={surface} className="hidden md:inline-flex" />
    <p className={`mt-4 font-sans text-[13px] leading-[1.5] md:mt-5 md:text-[14px] ${surface === "dark" ? "text-muted-dark" : "text-muted"}`}>
      {note}
    </p>
  </div>
);

export default CtaBlock;
