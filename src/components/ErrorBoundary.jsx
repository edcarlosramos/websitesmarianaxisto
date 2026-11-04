import { Component } from "react";

import { WHATSAPP_URL } from "../constants";
import StatusPage from "./StatusPage";

// If any part of the page throws while rendering, show a friendly screen instead of a blank page.
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Erro ao exibir a página:", error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <StatusPage
        code="Oops"
        overline="Algo deu errado"
        title="A página não carregou como deveria."
        highlight="Já já ela volta."
        text="Tente recarregar a página. Se o problema continuar, fale com a equipe no WhatsApp — a gente te atende por lá."
        actions={[
          // Drop "?simular-erro" so the reload doesn't trigger the test error again.
          { label: "Recarregar a página", onClick: () => window.location.replace(window.location.pathname + window.location.hash) },
          { label: "Falar com a equipe", href: WHATSAPP_URL, variant: "secondary", external: true },
        ]}
      />
    );
  }
}

export default ErrorBoundary;
