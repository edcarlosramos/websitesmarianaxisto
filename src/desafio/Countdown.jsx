import { useEffect, useState } from "react";

import { SIGNUP_DEADLINE } from "./content";

const deadline = new Date(SIGNUP_DEADLINE).getTime();

const remaining = () => {
  const ms = Math.max(0, deadline - Date.now());
  return {
    done: ms === 0,
    parts: [
      { label: "dias", value: Math.floor(ms / 86400000) },
      { label: "horas", value: Math.floor(ms / 3600000) % 24 },
      { label: "min", value: Math.floor(ms / 60000) % 60 },
      { label: "seg", value: Math.floor(ms / 1000) % 60 },
    ],
  };
};

// Black Friday style countdown to the end of sign-ups. Renders nothing once the deadline has passed.
const Countdown = ({ className = "" }) => {
  const [time, setTime] = useState(remaining);

  useEffect(() => {
    const timer = setInterval(() => setTime(remaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (time.done) return null;

  return (
    <div className={className}>
      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.17em] text-lilac md:text-[12px]">As inscrições encerram em</p>
      {/* The visible digits tick every second; screen readers get one static sentence instead. */}
      <p className="sr-only">Inscrições até sábado, 14/11, às 23h59 (horário de Brasília).</p>
      <ol aria-hidden="true" className="mt-3 flex gap-2 md:gap-3">
        {time.parts.map((part) => (
          <li key={part.label} className="grid w-[62px] place-items-center rounded-[10px] border border-rule-dark bg-navy-800 py-2.5 md:w-[70px]">
            <span className="font-display text-[30px] leading-none tabular-nums text-lavender md:text-[34px]">
              {String(part.value).padStart(2, "0")}
            </span>
            <span className="mt-1 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-dark">{part.label}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 flex items-center gap-2 font-sans text-[13px] leading-[1.4] text-muted-dark md:text-[14px]">
        <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-lilac" />
        Ou antes, se as 20 vagas esgotarem.
      </p>
    </div>
  );
};

export default Countdown;
