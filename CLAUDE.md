# CLAUDE.md

Instruções persistentes para Claude Code neste projeto. Leia antes de qualquer ação.

## Contexto do projeto

Portfólio pessoal de Juan. Skill `ui-ux-pro-max` instalada em `.claude/skills/` — usar para decisões de design, paletas, tipografia e componentes antes de codar UI.

## Princípios inegociáveis

- Direto ao ponto. Sem preâmbulo, sem explicar o que vai fazer antes de fazer.
- Se faltar informação crítica, pergunte antes de assumir. Não invente.
- Nunca invente APIs, bibliotecas, parâmetros ou comportamentos. Se não tem certeza, verifique ou pergunte.
- Código deve rodar sem edição manual depois de gerado.
- Não adicione features não solicitadas. Não refatore código fora do escopo da tarefa atual.

## Stack do projeto

> Preencher com o stack real quando definido.
- Linguagem:
- Framework:
- Estilização:
- Gerenciador de dependências:
- Build tool:

## Comandos do projeto

> Preencher quando definido.
- Dev:
- Build:
- Preview:
- Lint:

## Convenções de código

- Nomes em inglês para código, português para comentários de domínio quando ajudar clareza.
- camelCase para JS/TS, kebab-case para arquivos CSS/HTML, PascalCase para componentes.
- Um arquivo = uma responsabilidade.
- Funções puras quando possível. Side effects isolados em camadas específicas.

## Estrutura de arquivos

- Definir explicitamente onde cada arquivo novo vai antes de criar.
- Seguir a estrutura existente. Não inventar pastas novas sem necessidade.
- Nomes descritivos: `contact-form.ts`, não `handler.ts`.

## Restrições técnicas obrigatórias

### Sem hardcode
- Tokens, URLs de API, keys → variáveis de ambiente (`.env`).
- Configurações de negócio → arquivo de config dedicado.
- Valores fixos com significado → constantes nomeadas no topo do módulo.

### Tratamento de erros
- Erros explícitos, nunca silenciados.
- Capture exceções específicas, não genéricas.
- Logs estruturados em pontos de falha.

### Segurança
- Validação de entrada sempre no server-side, mesmo se já validar no client.
- Sanitização contra XSS em qualquer dado vindo do usuário renderizado em HTML.
- Secrets em env vars, nunca commitados. Verificar `.gitignore` antes de commitar.

## Frontend

- Mobile-first. Testar em viewport pequeno antes de desktop.
- Semântica HTML correta: `<button>` para ações, `<a>` para navegação.
- Labels associados a inputs. Contraste mínimo WCAG AA.
- Sem dependências desnecessárias. Avaliar custo/benefício antes de instalar qualquer lib.
- Acessibilidade não é opcional: foco visível, alt em imagens, aria quando necessário.
- Performance: imagens otimizadas, lazy load, sem bloquear render crítico.

## Uso da skill ui-ux-pro-max

Antes de implementar qualquer componente de UI novo:
1. Consultar a skill para estilo, paleta e tipografia coerentes com o portfólio.
2. Usar o comando de busca disponível na skill para encontrar referências.
3. Só então codar — design decidido antes, não durante.

## Antes de finalizar qualquer tarefa

- O código roda sem erro?
- Imports não usados foram removidos?
- Variáveis sensíveis estão em env vars?
- Lint passa?
- A mudança está dentro do escopo pedido?

## Formato de saída

- Código primeiro. Explicação só se solicitada.
- Comentários apenas onde a intenção não é óbvia pelo nome.
- Sem markdown decorativo, sem emojis.
- Ao terminar, listar arquivos criados/modificados, um por linha.

## O que NÃO fazer

- Não gerar README, CHANGELOG ou docs a menos que solicitado.
- Não adicionar testes a menos que solicitado (mas escrever código testável).
- Não fazer commits automaticamente.
- Não rodar comandos destrutivos sem confirmação explícita.
- Não instalar dependências novas sem justificar por que não resolve com o que já existe.
