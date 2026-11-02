#!/usr/bin/env bash
# Exemplos com a chave demo pública (só leitura, dados sintéticos).
set -euo pipefail
KEY="${RPG_API_KEY:-rpg_test_0000000000000000_demo_public_read_only_sandbox_key_xxxxx}"
BASE="https://www.rpgcapital.com.br/api/connecta/v1"
CONN="${RPG_CONNECTION_ID:-00000000-0000-4000-8000-0000000000c1}"

# Resumo de caixa por mês
curl -s -H "Authorization: Bearer $KEY" "$BASE/connections/$CONN/summary?group_by=month"
# Boletos pagos (saídas)
curl -s -H "Authorization: Bearer $KEY" "$BASE/connections/$CONN/transactions?operation_type=boleto&direction=debit&limit=20"
# Contas e saldos
curl -s -H "Authorization: Bearer $KEY" "$BASE/connections/$CONN/accounts"
