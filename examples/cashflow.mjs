// Node 18+: resumo de caixa por mês. Rode: node examples/cashflow.mjs
const KEY = process.env.RPG_API_KEY ?? 'rpg_test_0000000000000000_demo_public_read_only_sandbox_key_xxxxx'
const CONN = process.env.RPG_CONNECTION_ID ?? '00000000-0000-4000-8000-0000000000c1'
const BASE = 'https://www.rpgcapital.com.br/api/connecta/v1'

const res = await fetch(`${BASE}/connections/${CONN}/summary?group_by=month`, { headers: { Authorization: `Bearer ${KEY}` } })
if (!res.ok) throw new Error(`${res.status} ${await res.text()}`)
const { data } = await res.json()
const brl = (minor) => (minor / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
for (const g of data.groups) console.log(g.key, 'entradas', brl(g.inflow_minor), 'saídas', brl(g.outflow_minor), 'saldo', brl(g.net_minor))
