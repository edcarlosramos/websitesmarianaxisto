import { print01, print02, print03, print04, print05, print06, print07 } from "../assets";

export const WHATSAPP_URL = "https://api.whatsapp.com/message/WBR6VBIYU6KCN1?autoload=1&app_absent=0";

export const navLinks = [
  { id: "metodo", title: "Método" },
  { id: "resultados", title: "Resultados" },
  { id: "mariana", title: "A Mariana" },
  { id: "inclui", title: "O que inclui" },
  { id: "duvidas", title: "Dúvidas" },
];

export const socials = [
  { id: "instagram", title: "Instagram", handle: "@marianaxistobr", url: "https://www.instagram.com/marianaxistobr" },
  { id: "youtube", title: "YouTube", handle: "@marianaxistobrr", url: "https://www.youtube.com/@marianaxistobrr" },
  { id: "tiktok", title: "TikTok", handle: "@marianaxistobr", url: "https://www.tiktok.com/@marianaxistobr" },
];

export const ribbonPhrases = {
  speech: "I CAN SPEAK  ✦  NICE TO MEET YOU  ✦  LET ME ANSWER  ✦  I'M READY  ✦  ",
  skills: "SPEAKING  ✦  LISTENING  ✦  PRONUNCIATION  ✦  CONFIDENCE  ✦  ",
  next: "YOUR NEXT CHAPTER  ✦  I CAN SPEAK  ✦  LET ME ANSWER  ✦  ",
  menu: "I CAN SPEAK  ✦  LET ME ANSWER  ✦  ",
};

export const painPoints = [
  "Recusou uma entrevista por medo de travar.",
  "Ficou calada numa reunião que era sua.",
  "Adiou o processo internacional, o intercâmbio, o mestrado.",
  "Tem receio de pagar de novo — e continuar no mesmo lugar.",
];

export const pillars = [
  {
    id: "I",
    title: "Aprendizagem invertida",
    content:
      "A teoria você consome na plataforma, no seu ritmo. O encontro ao vivo fica reservado para o que importa: falar.",
  },
  {
    id: "II",
    title: "Musculatura da boca",
    content:
      "Pronúncia é músculo — e músculo se treina. Por isso a correção é diária, individual, de segunda a sexta.",
  },
  {
    id: "III",
    title: "Uma nova versão",
    content:
      "Você fala desde o primeiro encontro, em grupo, e se acostuma a se ouvir em inglês até isso virar natural.",
  },
];

export const comparison = {
  private: "Dá conforto. Mas não prepara para o executivo sem tempo ou para a entrevista sob pressão.",
  maker: "Prepara você para a conversa real: fala desde o primeiro dia, correção diária e grupo no mesmo nível.",
};

export const outcomes = [
  "Responder sem traduzir mentalmente antes.",
  "Entrar em reuniões sabendo que vai falar.",
  "Uma pronúncia que faz as pessoas te tratarem de igual para igual.",
  "Voltar a se candidatar a vagas e programas internacionais.",
  "Fazer sua apresentação final 100% em inglês — com certificado.",
];

export const featuredTestimonial = {
  tag: "Primeira reunião",
  content: "Liderei uma reunião em inglês no trabalho — e fui elogiada pelo meu chefe.",
};

export const testimonials = [
  {
    id: "visto",
    tag: "Visto aprovado",
    content:
      "Em menos de um mês eu já entendia séries com áudio e legenda em inglês. Entrei no programa Au Pair, tive o visto aprovado de primeira e hoje moro nos EUA.",
  },
  {
    id: "londres",
    tag: "Mestrado em Londres",
    content:
      "Minha compreensão do inglês falado rápido melhorou muito. Fiz mestrado sanduíche em Londres e palestrei para um grupo de pesquisa americano.",
  },
];

/* WhatsApp screenshots: width/height are the intrinsic image sizes */
export const prints = {
  p01: { id: "p01", src: print01, width: 439, height: 440, alt: "Mensagem de aluna: a comunidade ajudou a destravar a timidez e progredir no inglês." },
  p02: { id: "p02", src: print02, width: 364, height: 440, alt: "Mensagem de aluna elogiando a plataforma e as aulas, muito bem explicadas e estruturadas." },
  p03: { id: "p03", src: print03, width: 275, height: 440, alt: "Mensagem de aluna agradecendo: hoje enxerga o inglês como algo leve e gosta de estudar." },
  p04: { id: "p04", src: print04, width: 262, height: 440, alt: "Mensagem de aluna contando que se sente mais segura e confiante com o inglês." },
  p05: { id: "p05", src: print05, width: 275, height: 440, alt: "Mensagem de aluna: depois do curso passou a entender músicas e já indicou para todo mundo." },
  p06: { id: "p06", src: print06, width: 287, height: 440, alt: "Mensagens de aluna relatando evolução e facilidade para entender os diálogos." },
  p07: { id: "p07", src: print07, width: 203, height: 440, alt: "Mensagens de aluno contando que fez uma entrevista inteira em inglês para vaga de trainee." },
};

export const printColumns = {
  desktop: [["p07", "p02", "p06"], ["p03", "p04", "p01"], ["p05", "p06", "p01", "p02"]],
  tablet: [["p07", "p02", "p05", "p01"], ["p03", "p04", "p06", "p01"]],
  mobile: [["p07", "p03", "p04", "p02", "p05", "p06", "p01"]],
};

export const includes = [
  {
    id: "01",
    title: "Encontros ao vivo + curso gravado",
    content: "8 encontros ao vivo por mês, organizados por nível e gravados, mais o curso completo na plataforma.",
  },
  {
    id: "02",
    title: "Plano de aplicação individual",
    content: "Você conta como é a sua rotina e recebe um plano de estudo montado para ela.",
  },
  {
    id: "03",
    title: "Rotina de 20 minutos e correção diária",
    content:
      "Meta mínima de 20 minutos, 3 vezes por semana. Envie áudio ou texto e receba correção individual de segunda a sexta.",
  },
  {
    id: "04",
    title: "Suporte no WhatsApp",
    content: "De segunda a sexta, com acompanhamento semanal da equipe.",
  },
  {
    id: "05",
    title: "Bônus e certificado",
    content:
      "6 experiências extras — pronúncia, clube do livro, Business English e oratória — e apresentação final com certificado.",
    highlight: true,
  },
];

/* Perguntas e respostas copiadas da seção "Dúvidas" de marianaxisto.com.br */
export const faqs = [
  {
    id: "faq-1",
    question: "“Eu já tentei de tudo e não deu certo.”",
    answer:
      "E é exatamente por isso que você está no lugar certo. O que você nunca teve foi um método que te colocasse para falar desde o primeiro dia, com correção de pronúncia e acompanhamento de rotina.",
  },
  {
    id: "faq-2",
    question: "“Sou tímida, não vou conseguir falar na frente das outras.”",
    answer:
      "As alunas que estão com você estão no mesmo nível e com o mesmo medo. Ninguém chega confiante — a confiança é o que você constrói aqui dentro.",
  },
  {
    id: "faq-3",
    question: "“Eu não tenho tempo.”",
    answer:
      "A meta mínima é 20 minutos, 3 vezes na semana. Ao entrar, analisamos sua rotina e montamos um plano que cabe na sua vida real. Encontros ficam gravados.",
  },
  {
    id: "faq-4",
    question: "“Estou em dúvida entre isso e uma plataforma grande.”",
    answer:
      "Se conteúdo resolvesse, você já falaria inglês. O que plataformas grandes não têm é correção diária da sua pronúncia por alguém que sabe o seu nome.",
  },
  {
    id: "faq-5",
    question: "“5 meses não é pouco?”",
    answer:
      "O intensivo é direto ao ponto: conteúdo, prática e correção. Sem acúmulo de gramática. Em 20 semanas você apresenta em inglês na formatura — são mais de 400 alunas que já fizeram esse caminho.",
  },
  {
    id: "faq-6",
    question: "Serve para quem está no básico? E para quem já é intermediário?",
    answer:
      "Os encontros ao vivo são organizados por nível, então você pratica com alunas do seu momento. Quem está no básico começa falando frases curtas com correção; quem já é intermediário trabalha velocidade, pronúncia e vocabulário de trabalho.",
  },
  {
    id: "faq-7",
    question: "Como funciona o acesso e por quanto tempo ele dura?",
    answer:
      "O intensivo dura 5 meses e o seu acesso dura 1 ano. Depois do intensivo você continua praticando conversação ao vivo sem pagar de novo.",
  },
  {
    id: "faq-8",
    question: "Como é a correção das minhas tarefas?",
    answer:
      "Você envia áudio, vídeo ou texto por e-mail e recebe correção individual de segunda a sexta, com o que exatamente precisa melhorar na sua pronúncia e construção de frase.",
  },
  {
    id: "faq-9",
    question: "Recebo certificado?",
    answer:
      "Sim. No fim dos 5 meses você faz uma apresentação 100% em inglês na formatura e recebe o certificado de conclusão.",
  },
];
