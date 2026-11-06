import { useState } from "react";

import { track } from "../analytics";
import { faqs } from "../constants";
import { Button, FaqItem, Overline, Reveal } from "../components";
import styles from "../style";

const Contact = ({ className }) => (
  <div className={className}>
    <p className="max-w-[360px] font-sans text-[15px] leading-[1.6] text-navy-700 md:text-[17px] lg:text-[18px]">
      Ficou alguma pergunta? Fale direto com a equipe no WhatsApp.
    </p>
    <Button location="faq" label="Entrar em contato" size="md" className="mt-6 lg:mt-8" />
  </div>
);

const Faq = () => {
  const [openId, setOpenId] = useState(faqs[0].id);

  return (
    <section id="duvidas" aria-labelledby="faq-title" className="bg-lavender pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-[140px] lg:pb-[150px]">
      <div className={`${styles.container} lg:grid lg:grid-cols-[minmax(0,420px)_minmax(0,700px)] lg:justify-between`}>
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <Overline>08 — Dúvidas</Overline>
          <h2 id="faq-title" className="font-display mt-5 text-[42px] leading-[1.05] tracking-[-0.02em] text-navy-800 italic md:mt-6 md:text-[56px] lg:mt-7 lg:text-[64px]">
            Antes de você decidir.
          </h2>
          <Contact className="mt-12 hidden lg:block" />
        </Reveal>

        <div className="mt-10 md:mt-12 lg:mt-[10px]">
          <div className="border-b border-navy-800">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.id}
                {...faq}
                isOpen={openId === faq.id}
                onToggle={() => {
                  // Only openings count: closing a question says nothing about interest.
                  if (openId !== faq.id) {
                    track("faq_open", {
                      faq_question: faq.question.replace(/[“”"]/g, ""),
                      faq_position: index + 1,
                    });
                  }
                  setOpenId((current) => (current === faq.id ? null : faq.id));
                }}
              />
            ))}
          </div>
          <Contact className="mt-12 lg:hidden" />
        </div>
      </div>
    </section>
  );
};

export default Faq;
