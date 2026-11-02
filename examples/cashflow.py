"""Python 3.9+: resumo de caixa por mês. Rode: python examples/cashflow.py"""
import json, os, urllib.request

KEY = os.environ.get("RPG_API_KEY", "rpg_test_0000000000000000_demo_public_read_only_sandbox_key_xxxxx")
CONN = os.environ.get("RPG_CONNECTION_ID", "00000000-0000-4000-8000-0000000000c1")
BASE = "https://www.rpgcapital.com.br/api/connecta/v1"

req = urllib.request.Request(f"{BASE}/connections/{CONN}/summary?group_by=month", headers={"Authorization": f"Bearer {KEY}"})
with urllib.request.urlopen(req, timeout=30) as r:
    data = json.load(r)["data"]
for g in data["groups"]:
    print(g["key"], "entradas", g["inflow_minor"] / 100, "saídas", g["outflow_minor"] / 100, "saldo", g["net_minor"] / 100)
