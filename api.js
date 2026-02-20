import express from 'express';

const app = express();
const PORT = 3000;
app.use(express.json()); 

const cafes = [
  {
    nome: "French Press (Prensa Francesa)",
    descricao: "Método simples que extrai todo o sabor dos grãos",
    tempo: "6 minutos",
    dificuldade: "Fácil",
    ingredientes: [
      "60g de café moído grosso",
      "1 litro de água a 93°C",
      "Prensa francesa"
    ],
    preparo: [
      "Aqueça a prensa com água quente, depois descarte",
      "Adicione o café moído grosso",
      "Despeje água quente sobre o café",
      "Mexa suavemente com uma colher",
      "Coloque a tampa (sem pressionar) e aguarde 4 minutos",
      "Pressione o êmbolo lentamente",
      "Sirva imediatamente para evitar extração excessiva"
    ]
  },
  {
    nome: "Cappuccino Cremoso",
    descricao: "Equilíbrio perfeito entre café, leite e espuma",
    tempo: "5 minutos",
    dificuldade: "Fácil",
    ingredientes: [
      "30ml de espresso (ou 50ml de café forte)",
      "60ml de leite vaporizado",
      "60ml de espuma de leite",
      "Cacau em pó para finalizar (opcional)"
    ],
    preparo: [
      "Prepare um espresso ou café forte em xícara grande",
      "Aqueça o leite e bata com mixer ou liquidificador",
      "Despeje o leite aquecido sobre o café",
      "Adicione a espuma por cima",
      "Finalize com cacau em pó se desejar",
      "Sirva imediatamente"
    ]
  },
  {
    nome: "Café Latte",
    descricao: "Suave e aveludado, perfeito para qualquer hora",
    tempo: "5 minutos",
    dificuldade: "Fácil",
    ingredientes: [
      "30ml de espresso (ou café forte)",
      "200ml de leite vaporizado",
      "1cm de espuma de leite"
    ],
    preparo: [
      "Prepare um espresso ou café forte em copo alto",
      "Aqueça o leite",
      "Bata o leite para criar textura cremosa",
      "Despeje o leite lentamente sobre o café",
      "Finalize com espuma",
      "Opcional: crie desenhos na espuma"
    ]
  },
  {
    nome: "Dalgona Coffee",
    descricao: "Café batido viral, cremoso e instagramável",
    tempo: "7 minutos",
    dificuldade: "Fácil",
    ingredientes: [
      "2 colheres de sopa de café solúvel",
      "2 colheres de sopa de açúcar",
      "2 colheres de sopa de água quente",
      "200ml de leite gelado",
      "Gelo"
    ],
    preparo: [
      "Misture café solúvel, açúcar e água quente",
      "Bata por 3-5 minutos até formar picos",
      "Encha um copo com gelo",
      "Adicione o leite gelado",
      "Coloque o creme de café por cima",
      "Sirva e misture antes de beber"
    ]
  },
  {
    nome: "Mocha Caseiro",
    descricao: "A união perfeita de café e chocolate",
    tempo: "6 minutos",
    dificuldade: "Fácil",
    ingredientes: [
      "30ml de café forte",
      "2 colheres de sopa de chocolate em pó ou Nutella",
      "150ml de leite",
      "Chantilly (opcional)",
      "Raspas de chocolate"
    ],
    preparo: [
      "Misture o chocolate com leite quente",
      "Prepare o café forte",
      "Aqueça o leite restante",
      "Misture café, chocolate e leite",
      "Bata se quiser espuma",
      "Finalize com chantilly e raspas"
    ]
  },
  {
    nome: "Cold Brew",
    descricao: "Café extraído a frio por 12-24 horas",
    tempo: "12-24 horas",
    dificuldade: "Fácil",
    ingredientes: [
      "100g de café moído grosso",
      "1 litro de água filtrada fria",
      "Jarra",
      "Coador ou filtro de papel",
      "Gelo"
    ],
    preparo: [
      "Misture café e água fria",
      "Mexa bem",
      "Deixe na geladeira por 12-24h",
      "Coe bem (pode coar 2 vezes)",
      "Dilua 1:1 se desejar",
      "Sirva com gelo"
    ]
  },
  {
    nome: "Espresso Clássico",
    descricao: "O café puro e intenso que é a base de tudo",
    tempo: "2-3 minutos",
    dificuldade: "Intermediário",
    ingredientes: [
      "7-9g de café moído fino",
      "25-30ml de água a 90-96°C",
      "Pressão de 9 bars"
    ],
    preparo: [
      "Aqueça a xícara",
      "Moa o café na hora",
      "Distribua no porta-filtro",
      "Pressione firmemente",
      "Extraia por 25-30 segundos",
      "Sirva com crema dourada"
    ]
  },

  {
  nome: "Café Árabe (Qahwa)",
  descricao: "Tradicional café com cardamomo, exótico e aromático",
  tempo: "8 minutos",
  dificuldade: "Intermediário",
  ingredientes: [
    "2 colheres de sopa de café moído fino",
    "2 xícaras de água",
    "4-6 sementes de cardamomo (levemente esmagadas)",
    "Açúcar (opcional)",
    "1 gota de água de rosas (opcional)"
  ],
  preparo: [
    "Ferva a água em uma panela pequena",
    "Adicione as sementes de cardamomo esmagadas",
    "Deixe ferver por 1 minuto",
    "Retire do fogo e adicione o café moído",
    "Mexa e deixe repousar por 3-4 minutos",
    "Coe em coador fino ou deixe o pó assentar",
    "Sirva em xícaras pequenas sem mexer o fundo"
  ]
},

  {
    nome: "Café com Leite Caseiro",
    descricao: "O conforto em uma xícara",
    tempo: "5 minutos",
    dificuldade: "Muito Fácil",
    ingredientes: [
      "100ml de café forte",
      "100ml de leite",
      "Açúcar a gosto"
    ],
    preparo: [
      "Prepare o café",
      "Aqueça o leite",
      "Misture café e leite",
      "Adoce a gosto",
      "Sirva imediatamente"
    ]
  },
  {
    nome: "Affogato",
    descricao: "Sobremesa italiana: sorvete com café quente",
    tempo: "3 minutos",
    dificuldade: "Muito Fácil",
    ingredientes: [
      "1 bola de sorvete de creme",
      "50ml de espresso quente",
      "Raspas de chocolate (opcional)"
    ],
    preparo: [
      "Coloque o sorvete na taça",
      "Prepare o café quente",
      "Despeje sobre o sorvete",
      "Sirva imediatamente"
    ]
  }
];


app.get("/", (req, res) => {
  res.json(cafes); // Só os dados crus!
});

// Demais rotas permanecem iguais
app.get("/cafes", (req, res) => {
  const { dificuldade } = req.query;
  let resultado = cafes;
  if (dificuldade) {
    resultado = resultado.filter(c => c.dificuldade === dificuldade);
  }
  res.json({
    total: resultado.length,
    dados: resultado
  });
});

app.get("/cafes/:id", (req, res) => {
  const cafe = cafes.find(c => c.id === parseInt(req.params.id));
  if (!cafe) {
    return res.status(404).json({ erro: "Café não encontrado" });
  }
  res.json(cafe);
});

app.get("/receita/:nome", (req, res) => {
  const cafe = cafes.find(c => 
    c.nome.toLowerCase().includes(req.params.nome.toLowerCase())
  );
  if (!cafe) {
    return res.status(404).json({ erro: "Receita não encontrada" });
  }
  res.json(cafe);
});

app.listen(PORT, () => {
  console.log(`☕ API rodando: http://localhost:${PORT}`);
});