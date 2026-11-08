// Copy for the "Desafio Fale Inglês em 14 Dias" sales page (/desafio14d/).
import depoimento1 from "../assets/desafio/depoimento-1.webp";
import depoimento2 from "../assets/desafio/depoimento-2.webp";
import depoimento3 from "../assets/desafio/depoimento-3.webp";
import mural01 from "../assets/desafio/mural-01.webp";
import mural02 from "../assets/desafio/mural-02.webp";
import mural03 from "../assets/desafio/mural-03.webp";
import mural04 from "../assets/desafio/mural-04.webp";
import mural05 from "../assets/desafio/mural-05.webp";
import mural06 from "../assets/desafio/mural-06.webp";

// Hubla checkout for the challenge: every button on this page leads here.
export const CHECKOUT_URL = "https://pay.hub.la/85MBkSqzf35OCQwZLNa0";

// End of sign-ups (sábado, 14/11, 23h59 in Brasília). Drives the hero countdown, which hides itself afterwards.
export const SIGNUP_DEADLINE = "2026-11-14T23:59:59-03:00";

export const navLinks = [
  { id: "como-funciona", title: "Como funciona" },
  { id: "jornada", title: "Jornada" },
  { id: "mariana", title: "A Mariana" },
  { id: "oferta", title: "Oferta" },
  { id: "duvidas", title: "Dúvidas" },
];

export const cta = {
  label: "Quero minha vaga por R$ 97",
  short: "Garantir minha vaga",
  href: CHECKOUT_URL,
  note: "Acesso imediato · 12x de R$ 9,86 · Apenas 20 vagas",
  pulse: true,
};

export const ribbonPhrase = "14 DAYS  ✦  I CAN SPEAK  ✦  PRACTICE EVERY DAY  ✦  I'M READY  ✦  ";
export const finalRibbonPhrase = "DAY 1  ✦  DAY 14  ✦  I CAN SPEAK  ✦  MAKE IT HAPPEN  ✦  ";

export const painPoints = [
  "Você entende um pouco, mas trava na hora de responder.",
  "Você monta a frase na cabeça e, quando termina, a conversa já passou.",
  "Você tem vergonha do seu sotaque e prefere ficar calada.",
  "Você já começou vários cursos e sente que nunca sai do lugar.",
  "Você assiste a séries com legenda e não entende quase nada sem ela.",
  "Você sabe que o inglês faz falta no trabalho e nas viagens, mas não sabe por onde recomeçar.",
];

export const steps = [
  {
    id: "I",
    title: "O desafio é liberado",
    content: "Às 4h (horário de Brasília), o desafio do dia é liberado na plataforma. Às 9h, você recebe um lembrete no grupo.",
  },
  {
    id: "II",
    title: "Você estuda e grava",
    content: "Você estuda em 20 minutos e grava o seu áudio.",
  },
  {
    id: "III",
    title: "Sua professora corrige",
    content: "Envia até às 21h e recebe a correção individual da sua professora antes do próximo desafio.",
  },
];

export const journey = [
  "Corrigir a pronúncia dos sons mais difíceis do inglês",
  "Entender a lógica de formação de frases em inglês",
  "Formar frases sobre a sua rotina, usar o Present Simple e treinar a escuta com um diálogo real",
  "Falar sobre a sua rotina em um diálogo completo",
  "Entender um diálogo completo do dia a dia",
  "Usar verbos frasais para falar com mais naturalidade",
  "Entender o primeiro episódio de Friends",
  "Acelerar a sua pronúncia com diálogos de nativos",
  "Entender diferentes sotaques e planejar uma mala de viagem em inglês",
  "Discutir um problema social com argumentos e dados",
  "Falar sobre o futuro",
  "Falar sobre o passado e ouvir a evolução da sua pronúncia",
  "Descrever outra pessoa com detalhes",
  "Falar sobre a sua evolução e os seus próximos objetivos",
];

export const benefits = [
  { title: "Você perde o medo de abrir a boca", content: "Porque fala todos os dias, num ambiente seguro." },
  { title: "Sua pronúncia melhora de verdade", content: "Com uma professora ouvindo e corrigindo cada áudio seu." },
  { title: "Você para de traduzir na cabeça", content: "Porque aprende a lógica das frases em inglês." },
  { title: "Você entende mais", content: "De diálogos do dia a dia até um episódio de Friends." },
  { title: "Você ouve a sua própria evolução", content: "Comparando o seu áudio do primeiro dia com o do último." },
  { title: "Cabe na sua rotina", content: "20 minutos por dia, no horário que você puder." },
];

// The three fixed testimonials (screenshots sent by students of the 2025 Desafio).
// A placeholder card shows instead whenever `src` is empty.
export const featuredProofs = [
  {
    id: "depoimento-1",
    tag: "Perdeu a vergonha de falar",
    src: depoimento1,
    width: 594,
    height: 869,
    alt: "E-mail de Mari Milhas: saiu da zona de conforto, passou por cima da vergonha de falar inglês e notou evolução na pronúncia e na escrita.",
  },
  {
    id: "depoimento-2",
    tag: "Evolução da pronúncia",
    src: depoimento2,
    width: 612,
    height: 869,
    alt: "Mensagem de Luciana, do Desafio: melhorou bastante a pronúncia, está entendendo mais e perdendo o medo de conversar em inglês.",
  },
  {
    id: "depoimento-3",
    tag: "Resultado em 14 dias",
    src: depoimento3,
    width: 524,
    height: 869,
    alt: "Mensagem de Beatriz, do Desafio: percebeu que consegue mais do que pensava e, na primeira aula de conversação, entendeu alunos mais avançados.",
  },
];

export const pillars = [
  { id: "I", title: "Aprendizagem invertida", content: "Você se prepara antes e usa o tempo ao vivo só para falar, praticar e corrigir." },
  { id: "II", title: "Musculatura da boca", content: "Treino consciente dos sons do inglês, para a pronúncia sair natural." },
  { id: "III", title: "Nova versão", content: "Confiança para usar o inglês em qualquer lugar, com acolhimento e prática em situações reais." },
];

export const offerItems = [
  { title: "14 desafios diários de 20 minutos", content: "Na plataforma." },
  { title: "Correção individual da sua pronúncia", content: "Todos os dias, por uma professora." },
  { title: "Grupo de WhatsApp", content: "Com lembretes e espaço para dúvidas." },
  { title: "Gravação “antes e depois”", content: "Para você ouvir a sua evolução." },
  { title: "30 dias de acesso ao material", content: "Depois do Desafio, para baixar." },
  { title: "Bônus da edição Black", content: "2 aulas de conversação ao vivo, 1 por semana (ficam gravadas).", highlight: true },
];

export const objections = [
  { question: "Mas eu não tenho tempo.", answer: "São 20 minutos por dia. Você estuda e grava o áudio no horário que puder, até as 21h." },
  {
    question: "Mas eu tenho vergonha de falar.",
    answer: "É exatamente para você. Seu áudio vai só para a sua professora, que corrige com cuidado e sem julgamento.",
  },
  {
    question: "Mas eu já tentei outros cursos e não funcionou.",
    answer: "Aqui você não fica só assistindo aula. Você fala todos os dias e recebe correção individual. É a prática que destrava.",
  },
  {
    question: "Mas eu não moro no Brasil.",
    answer: "Os desafios são liberados às 4h (horário de Brasília) justamente para atender a todos os fusos, e as aulas ao vivo ficam gravadas.",
  },
  {
    question: "Mas eu sou iniciante total.",
    answer:
      "O Desafio é para quem já estudou um pouco, na escola ou em aulas tradicionais. Se você nunca teve contato com o inglês, vai aprender o conteúdo teórico e já colocar em prática, sem decorar regras de gramática que só te deixam travada.",
  },
];

export const urgency = [
  "Apenas 20 vagas, para garantir a correção individual de cada aluna, todos os dias.",
  "Inscrições até sábado, 14/11, às 23h59, ou até as vagas acabarem.",
  "Condição da edição Black, que acontece uma vez por ano.",
  "O bônus das 2 aulas de conversação ao vivo é exclusivo desta edição.",
];

export const faqs = [
  { id: "d14-faq-1", question: "Quanto tempo preciso por dia?", answer: "20 minutos." },
  {
    id: "d14-faq-2",
    question: "Para quem é o Desafio?",
    answer: "Para quem já estudou um pouco de inglês, na escola ou em aulas tradicionais, mas sente que não consegue falar ou tem vergonha.",
  },
  { id: "d14-faq-3", question: "Quando começa?", answer: "Segunda, 16/11. Termina domingo, 29/11." },
  {
    id: "d14-faq-4",
    question: "Como recebo o acesso?",
    answer: "Logo depois da compra. Os materiais ficam na plataforma e você entra no grupo de WhatsApp do Desafio.",
  },
  {
    id: "d14-faq-5",
    question: "Como funciona a correção?",
    answer:
      "Você envia o seu áudio para desafiofaleinglesem14dias@gmail.com até as 21h (horário de Brasília). Sua professora devolve a correção antes do próximo desafio.",
  },
  { id: "d14-faq-6", question: "As aulas ao vivo ficam gravadas?", answer: "Sim." },
  { id: "d14-faq-7", question: "E se eu perder um dia?", answer: "Sem problemas: você envia o áudio no dia seguinte e ajusta os seus estudos." },
  {
    id: "d14-faq-8",
    question: "Tem garantia?",
    answer: "Sim. Se você entregar os 14 áudios no prazo e não evoluir, devolvemos o seu investimento. O pedido pode ser feito até 29/11.",
  },
  { id: "d14-faq-9", question: "Como posso pagar?", answer: "Pix ou cartão, em até 12x de R$ 9,86. Quem mora fora do Brasil pode pagar na sua moeda local." },
  {
    id: "d14-faq-10",
    question: "Moro fora do Brasil, posso participar?",
    answer:
      "Pode sim! Os desafios são liberados às 4h (horário de Brasília) justamente para atender a todos os fusos, e as aulas ao vivo ficam gravadas. E o pagamento pode ser feito na sua moeda local.",
  },
];

// Screenshots for the scrolling wall ("Mais depoimentos de quem já participou").
export const wallPrints = {
  m01: { id: "m01", src: mural01, width: 1179, height: 765, alt: "Resposta de aluna do Desafio: gravar áudio em inglês a fez encarar o medo de errar, e ficava feliz quando a Mari elogiava." },
  m02: { id: "m02", src: mural02, width: 893, height: 844, alt: "Mensagem de Thalita, do Desafio, em inglês: os dias do desafio ajudam no inglês e na disciplina, e praticar a fala todo dia é essencial para o progresso." },
  m03: { id: "m03", src: mural03, width: 880, height: 630, alt: "Mensagem de Tamires, do Desafio, em inglês: está começando a ter menos medo de falar inglês." },
  m04: { id: "m04", src: mural04, width: 1009, height: 869, alt: "Resposta de aluna do Desafio: gostou das diferentes formas de conteúdo e descobriu que sua pronúncia é boa, algo que sempre foi uma insegurança." },
  m05: { id: "m05", src: mural05, width: 1020, height: 869, alt: "Resposta de aluna do Desafio: largou o tradutor, passou a escrever só com dicionário e percebeu que a escrita melhorou muito." },
  m06: { id: "m06", src: mural06, width: 1179, height: 793, alt: "Depoimento em inglês: em 14 dias percebeu que, com dedicação e orientação, pode chegar longe; a maior melhora foi na fala." },
};

// Every column holds all six prints (in a different order) so each loop is taller than the wall.
export const wallColumns = {
  desktop: [
    ["m01", "m04", "m02", "m05", "m03", "m06"],
    ["m05", "m02", "m06", "m03", "m01", "m04"],
    ["m03", "m06", "m04", "m01", "m05", "m02"],
  ],
  tablet: [
    ["m01", "m04", "m02", "m05", "m03", "m06"],
    ["m05", "m02", "m06", "m03", "m01", "m04"],
  ],
  mobile: [["m01", "m02", "m04", "m03", "m05", "m06"]],
};
