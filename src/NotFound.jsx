import StatusPage from "./components/StatusPage";
import { WHATSAPP_URL } from "./constants";

// Served by Hostinger (404.html, via public/.htaccess) for any address that does not exist.
const NotFound = () => (
  <StatusPage
    code="404"
    overline="Página não encontrada"
    title="Essa página não existe —"
    highlight="mas o seu inglês ainda tem caminho."
    text="O endereço pode ter mudado ou foi digitado errado. Volte para o início ou fale direto com a equipe no WhatsApp."
    actions={[
      { label: "Voltar para o início", href: import.meta.env.BASE_URL },
      { label: "Falar com a equipe", href: WHATSAPP_URL, variant: "secondary", external: true },
    ]}
  />
);

export default NotFound;
