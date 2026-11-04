// Adding "?simular-erro" to the address throws on purpose, to preview the error screen.
const SimulatedError = () => {
  if (new URLSearchParams(window.location.search).has("simular-erro")) {
    throw new Error("Erro simulado para testar a tela de erro (?simular-erro).");
  }
  return null;
};

export default SimulatedError;
