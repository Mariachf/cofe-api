# ☕ Cofe API — Cardápio de Receitas de Café (JSON)

API REST simples feita com **Node.js + Express** que retorna um cardápio de receitas de café em JSON, com nome, descrição, tempo, nível de dificuldade (de **Muito Fácil** a **Intermediário**), ingredientes e modo de preparo.

Ideal pra ser consumida por qualquer front-end (Web/Mobile), bots, ou projetos de estudo.

**Inspiração (Figma Community):**  
https://www.figma.com/community/file/1578151625759551243

---

## 🚀 Tecnologias

- Node.js
- Express (v5)
- JavaScript (ESM: "type": "module")

---

## ✅ Endpoints

## GET /

Retorna a lista completa de receitas (JSON cru).

Exemplo de resposta:

```json
[
  {
    "nome": "French Press (Prensa Francesa)",
    "descricao": "Método simples que extrai todo o sabor dos grãos",
    "tempo": "6 minutos",
    "dificuldade": "Fácil",
    "ingredientes": ["..."],
    "preparo": ["..."]
  }
]
```
---

## GET /cafes

Retorna receitas com metadados (total + dados).
Aceita filtro por dificuldade via query string.

Query params:

dificuldade (opcional): "Muito Fácil" | "Fácil" | "Intermediário"

Exemplos:

```json
/cafes
/cafes?dificuldade=Fácil
/cafes?dificuldade=Muito%20Fácil
```

Exemplo de resposta:

```json
{
  "total": 3,
  "dados": [
    { "nome": "Café Latte", "tempo": "5 minutos", "dificuldade": "Fácil" }
  ]
}
```
---

## GET /receita/:nome

Busca uma receita pelo nome (parcial, case-insensitive).

Exemplos:

```json
  /receita/latte
/receita/arab
```

Exemplo de resposta:

```json
  {
  "nome": "Café Latte",
  "descricao": "Suave e aveludado, perfeito para qualquer hora",
  "tempo": "5 minutos",
  "dificuldade": "Fácil",
  "ingredientes": ["..."],
  "preparo": ["..."]
}
```

⚠️ Observação: essa rota retorna a primeira receita que bater com o termo (uso de find).
Se quiser retornar todas as receitas encontradas, troque por filter.

---

## GET /cafes/:id (atenção) ⚠️

Se você estiver usando essa rota, é importante que cada receita tenha um campo id.
Caso seus objetos ainda não tenham id, essa rota vai retornar 404 sempre.

Sugestão: adicionar id incremental em cada item do array.

---

## 🧪 Como rodar localmente

**1.** Clonar:

```bash
git clone https://github.com/SEUUSUARIO/cofe-api.git
cd cofe-api
```

**2.** Instalar dependências:

```bash
  npm install
```

**3.** Rodar:

```bash
  npm start
```

A API vai ficar disponível em:

```json
http://localhost:3000/
```
---
## 🧾 Exemplos de consumo

**cURL**

```bash
  curl http://localhost:3000/cafes
```

**Fetch (Front-end)**

```js
const res = await fetch("http://localhost:3000/cafes");
const data = await res.json();
console.log(data);
```
---

## 🌍 Deploy gratuito na Render (resumo)

**1.** Suba o projeto no GitHub

**2.** Na Render: New > Web Service

**3.** Selecione o repositório

Configure:

- Build Command: npm install

- Start Command: npm start

Depois, sua API fica com um link tipo:

```bash
  https://seuapp.onrender.com/cafes
```

---

## 📌 Estrutura sugerida

```bash
cofe-api/
├─ api.js
├─ package.json
└─ README.md
```

---

## 👩‍💻 Autora

*Eduarda Fonseca*
