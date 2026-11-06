# Métricas de cliques — configuração no GTM e GA4

O site envia três eventos para o Google Tag Manager (contêiner `GTM-5SMS84JZ`):

| Evento        | Quando dispara                                | Parâmetros                                   |
|---------------|-----------------------------------------------|----------------------------------------------|
| `cta_click`   | Clique em qualquer botão verde do WhatsApp    | `cta_location` (seção), `cta_label` (texto)  |
| `video_play`  | Clique no play do vídeo do YouTube (Método)   | `video_location`, `video_title`              |
| `faq_open`    | Visitante abre uma pergunta do FAQ            | `faq_question` (texto), `faq_position` (1–9) |

Valores de `cta_location`: `navbar`, `mobile_menu`, `hero`, `results`, `messages`, `includes`, `faq`, `final_cta`.

O código já está pronto. Falta configurar o GTM e o GA4 (passos abaixo) e publicar a nova build.

---

## 1. Google Tag Manager (tagmanager.google.com → contêiner GTM-5SMS84JZ)

### Variáveis (Variáveis → Variáveis definidas pelo usuário → Nova → "Variável da camada de dados")
Crie uma para cada nome abaixo. Em "Nome da variável da camada de dados", use exatamente o nome da esquerda:

| Nome da variável da camada de dados | Nome sugerido no GTM |
|-------------------------------------|----------------------|
| `cta_location`                      | DLV - cta_location   |
| `cta_label`                         | DLV - cta_label      |
| `video_location`                    | DLV - video_location |
| `video_title`                       | DLV - video_title    |
| `faq_question`                      | DLV - faq_question   |
| `faq_position`                      | DLV - faq_position   |

### Acionadores (Acionadores → Novo → "Evento personalizado")
- **CE - cta_click**: nome do evento `cta_click`, disparar em "Todos os eventos personalizados".
- **CE - video_play**: nome do evento `video_play`, disparar em "Todos os eventos personalizados".
- **CE - faq_open**: nome do evento `faq_open`, disparar em "Todos os eventos personalizados".

### Tags (Tags → Nova → "Google Analytics: evento do GA4")
- **GA4 - cta_click**
  - ID de medição: o mesmo `G-...` da sua tag do Google atual
  - Nome do evento: `cta_click`
  - Parâmetros do evento: `cta_location` = `{{DLV - cta_location}}`, `cta_label` = `{{DLV - cta_label}}`
  - Acionador: CE - cta_click
- **GA4 - video_play**
  - Nome do evento: `video_play`
  - Parâmetros: `video_location` = `{{DLV - video_location}}`, `video_title` = `{{DLV - video_title}}`
  - Acionador: CE - video_play
- **GA4 - faq_open**
  - Nome do evento: `faq_open`
  - Parâmetros: `faq_question` = `{{DLV - faq_question}}`, `faq_position` = `{{DLV - faq_position}}`
  - Acionador: CE - faq_open

### Testar e publicar
1. Clique em **Visualizar** e abra o site. Clique em um botão verde: no painel do Tag Assistant deve aparecer `cta_click` com a tag "GA4 - cta_click" disparada.
2. Se estiver tudo certo, clique em **Enviar → Publicar**.

---

## 2. Google Analytics 4 (analytics.google.com)

### Registrar as dimensões personalizadas (obrigatório para ver a seção nos relatórios)
Administrador → Exibição de dados → **Definições personalizadas** → Criar dimensão personalizada (escopo: **Evento**):

| Nome da dimensão | Parâmetro do evento |
|------------------|---------------------|
| Seção do CTA     | `cta_location`      |
| Texto do CTA     | `cta_label`         |
| Local do vídeo   | `video_location`    |
| Pergunta do FAQ  | `faq_question`      |

### Onde ver os números
- **Rápido:** Relatórios → Engajamento → **Eventos** → clique em `cta_click` ou `video_play`.
- **Tabela por seção:** Explorar → Exploração livre
  - Dimensões: *Nome do evento*, *Seção do CTA*
  - Métricas: *Contagem de eventos*, *Total de usuários*
  - Linhas: Seção do CTA · Valores: Contagem de eventos · Filtro: Nome do evento = `cta_click`
- **Pergunta mais aberta:** mesma Exploração livre, com Linhas: *Pergunta do FAQ* · Valores: *Contagem de eventos* · Filtro: Nome do evento = `faq_open`.
- **Teste na hora:** Administrador → **DebugView** (com o modo Visualizar do GTM aberto).

Observações:
- Só os cliques feitos depois da publicação são contados.
- Os relatórios padrão podem levar até ~24h para mostrar dados novos.
- A primeira pergunta do FAQ já vem aberta quando a página carrega, então ela só conta quando alguém a fecha e abre de novo. Por isso o número dela tende a ser menor.
- Fechar uma pergunta não gera evento, só abrir.
- Para comparar com quem viu a página: *Taxa de cliques no CTA ≈ usuários com cta_click ÷ usuários com page_view*.
