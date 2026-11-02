# RPG Connecta — API de Open Finance do Brasil para devs e agentes de IA

**Dados bancários do Brasil numa chamada.** Contas, saldos e transações com contraparte (nome e CPF/CNPJ), busca com filtros e resumo de fluxo de caixa — por **REST/OpenAPI** ou **MCP**.

- **Sandbox grátis.** Login só com Google, sem formulário e sem cartão.
- **Produção:** R$ 9,99 por conexão bancária ativa por mês · R$ 0 de setup · R$ 0 de mínimo mensal · pay as you go.
- Feito para quem constrói dashboards financeiros, SaaS, MVPs e agentes de IA.

Site: https://www.rpgcapital.com.br/integracoes · Documentação: https://www.rpgcapital.com.br/developers/connecta-docs/pt · Preço: https://www.rpgcapital.com.br/developers/pricing

> Este repositório é público e contém **exemplos prontos, configurações de MCP e links para a especificação OpenAPI canônica**. O serviço roda em https://www.rpgcapital.com.br. Mantido pela [RPG Capital & Crédito](https://www.rpgcapital.com.br).

## Teste agora (sem cadastro)

Chave demo pública, só leitura, dados sintéticos de ~90 dias de um pequeno negócio:

```bash
curl -H "Authorization: Bearer rpg_test_0000000000000000_demo_public_read_only_sandbox_key_xxxxx" \
  "https://www.rpgcapital.com.br/api/connecta/v1/connections/00000000-0000-4000-8000-0000000000c1/summary?group_by=month"
```

Mais exemplos em [`examples/`](examples) (curl, Node.js, Python).

## Chave própria em 1 clique

1. Crie a conta em https://www.rpgcapital.com.br/developers/login (só Google).
2. Gere uma chave `rpg_test_` no console e use o mesmo código.
3. **Agentes de IA** podem pedir a chave sozinhos (device login): `POST https://www.rpgcapital.com.br/api/connecta/v1/auth/device` → mostre `verification_uri_complete` ao humano → consulte `POST https://www.rpgcapital.com.br/api/connecta/v1/auth/token` a cada 5 s.

## Produção

- Um humano cadastra o cartão e ativa a produção no console (a cobrança é de R$ 9,99 por conexão ativa no mês; a mesma conta reconectada no mês conta uma vez).
- Cada cliente final autoriza o próprio banco num link de consentimento. Depois, ele volta para o **seu** app.

## Interfaces

| Interface | Para quê | Onde |
|---|---|---|
| REST + OpenAPI 3.1 | Backends e apps | [OpenAPI canônico](https://www.rpgcapital.com.br/developers/connecta-openapi.json) · https://www.rpgcapital.com.br/api/connecta/v1 |
| MCP de descoberta (público) | Perguntas sobre produto, preço e integração | `https://www.rpgcapital.com.br/api/connecta/discovery-mcp` |
| MCP operacional | Agentes que leem contas autorizadas (token `rpg_mcp_`) | `https://www.rpgcapital.com.br/api/connecta/mcp` |
| Agent Skill | Coding agents (Claude Code, Codex, Cursor) | `npx skills add https://www.rpgcapital.com.br` |
| Sandbox sem chave | Ver o formato dos dados | https://www.rpgcapital.com.br/developers/sandbox/data?scenario=retail |

Configurações prontas de MCP em [`mcp/`](mcp). Registro oficial MCP: `io.github.REYMANnN/rpg-connecta`.

## O que faz e o que não faz

**Faz:** contas e saldos (centavos inteiros, BRL); transações com sinal, status, categoria, tipo (Pix, TED, boleto, cartão) e contraparte; busca no servidor (período, valor, texto, CPF/CNPJ, tipo, direção; páginas de até 500); resumo por mês, semana, dia, categoria, contraparte ou conta; webhooks assinados (HMAC); sandbox com cenários de erro.

**Não faz:** iniciar pagamentos ou Pix; investimentos; empréstimos; faturas detalhadas de cartão; identidade/KYC; tempo real; SDK instalável. Dados reais só com consentimento do titular no banco.

Lista completa e sempre atualizada: https://www.rpgcapital.com.br/llms.txt · Guia para agentes: https://www.rpgcapital.com.br/agents.txt

---

## English

**RPG Connecta** is a Brazil Open Finance API and MCP for developers and AI agents: accounts, balances, transactions with counterparty (name and CPF/CNPJ), server-side search and cash-flow summaries. Free sandbox with Google-only sign-in (no form, no card). Production: **BRL 9.99 per active bank connection per month**, BRL 0 setup, BRL 0 minimum.

Try it now with the public demo key (read-only, synthetic data):

```bash
curl -H "Authorization: Bearer rpg_test_0000000000000000_demo_public_read_only_sandbox_key_xxxxx" "https://www.rpgcapital.com.br/api/connecta/v1/connections/00000000-0000-4000-8000-0000000000c1/summary?group_by=month"
```

Docs: https://www.rpgcapital.com.br/developers/connecta-docs/en · OpenAPI: https://www.rpgcapital.com.br/developers/connecta-openapi.json · Agents: https://www.rpgcapital.com.br/developers/agents

## Licença

Exemplos e configurações sob licença MIT. A especificação OpenAPI (publicada em https://www.rpgcapital.com.br/developers/connecta-openapi.json) descreve o serviço da RPG Capital & Crédito; o uso do serviço segue os [Termos do Connecta](https://www.rpgcapital.com.br/termos/connecta).
