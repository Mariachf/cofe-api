import express from 'express';

const app = express();
const PORT = 3000;
app.use(express.json()); 

const cafes = [
  {
    id: "FrenchPress",
    nome: "French Press ",
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
    ],

   acompanhamento: [
      {
        name: 'Torrada com Manteiga',
        description: 'Simples e perfeito para deixar o café ser a estrela'
      },
      {
        name: 'Croissant Simples',
        description: 'Leveza e textura que não competem com o café encorpado'
      },
      {
        name: 'Geleia Caseira',
        description: 'Um toque de doçura natural'
      }
    ]
  },
  {
    id: "Cappuccino",
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
    ],
    acompanhamento: [
      {
        name: 'Muffin de Blueberry',
        description: 'A suavidade do cappuccino combina com a doçura das frutas vermelhas'
      },
      {
        name: 'Pão de Queijo',
        description: 'Contraste delicioso entre o salgado e a cremosidade do café com leite'
      },
      {
        name: 'Torta de Maçã',
        description: 'Combinação clássica que aquece o coração'
      }
    ]
  },
  {
    id: "CafeLatte",
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
    ],
    acompanhamento: [
      {
        name: 'Cookie de Chocolate',
        description: 'A doçura do cookie complementa a suavidade do latte'
      },
      {
        name: 'Scone de Frutas Vermelhas',
        description: 'Textura leve que não compete com a cremosidade do café'
      },
      {
        name: 'Banana Bread',
        description: 'Combinação reconfortante e naturalmente doce'
      }
    ]
  },
  {
    id: "DalgonaCoffee",
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
    ],
    acompanhamento: [
      {
        name: 'Palha Italiana',
        description: 'Doce e cremoso como o Dalgona'
      },
      {
        name: 'Waffle',
        description: 'Textura crocante que contrasta com a cremosidade'
      },
      {
        name: 'Churros',
        description: 'Combinação divertida e instagramável'
      }
    ]
  },
  {
    id: "MochaCaseiro",
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
    ],
    acompanhamento: [
      {
        name: 'Waffle Belga',
        description: 'Textura crocante e sabor neutro que deixam o mocha brilhar'
      },
      {
        name: 'Cheesecake de Frutas Vermelhas',
        description: 'O azedinho das frutas equilibra a doçura do chocolate'
      },
      {
        name: 'Macaron de Baunilha',
        description: 'Elegância francesa que combina com a sofisticação do mocha'
      }
    ]
  },
  {
    id: "ColdBrew",
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
    ],
    acompanhamento: [
      {
        name: 'Granola Bowl',
        description: 'Combinação refrescante e saudável para começar o dia'
      },
      {
        name: 'Sanduíche de Cream Cheese e Salmão',
        description: 'Perfeito para um brunch sofisticado'
      },
      {
        name: 'Lemon Tart',
        description: 'O frescor do limão complementa a suavidade do cold brew'
      }
    ]
  },
  {
    id: "EspressoClassico",
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
    ],
    acompanhamento: [
      {
        name: 'Croissant de Amêndoas',
        description: 'A textura amanteigada e o sabor adocicado complementam a intensidade do espresso'
      },
      {
        name: 'Brownie de Chocolate Belga',
        description: 'O amargor do café equilibra perfeitamente com o chocolate rico'
      },
      {
        name: 'Biscotti Italiano',
        description: 'Tradicional companheiro do espresso, perfeito para mergulhar'
      }
    ]
  },

  {
  id: "CafeArabe",
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
  ],
  acompanhamento: [
     {
        name: 'Tâmaras Recheadas',
        description: 'Combinação tradicional do Oriente Médio'
      },
      {
        name: 'Baklava',
        description: 'Doce de nozes e mel perfeito'
      },
      {
        name: 'Pistaches Torrados',
        description: 'Para beliscar entre os goles'
      }
    ]
},

  {
    id: "CafeComLeiteCaseiro",
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
    ],
    acompanhamento: [
      {
        name: 'Pão Francês com Manteiga',
        description: 'Combinação matinal perfeita e tradicional'
      },
      {
        name: 'Bolo Caseiro',
        description: 'Qualquer bolo simples fica perfeito'
      },
      {
        name: 'Biscoito de Polvilho',
        description: 'Leve e crocante para acompanhar'
      }
    ]
  },
  {
    id: "CafeGeladoSimples",
    nome: "Café Gelado Simples",
    descricao: "Refrescante e fácil de fazer em casa",
    tempo: "5 minutos + tempo de resfriamento",
    dificuldade: "Muito Fácil",
    ingredientes: [
      "200ml de café coado forte (resfriado)",
      "Gelo",
      "Leite ou leite vegetal (opcional)",
	"Açúcar, mel ou xarope a gosto",
	"Canela em pó (opcional)"    
],
    preparo: [
      "Prepare um café coado mais forte que o normal",
      "Deixe esfriar completamente (pode guardar na geladeira)",
      "Encha um copo alto com gelo",
      "Despeje o café gelado",
      "Adicione leite se desejar",
	"Adoce a gosto e misture bem",
	"Finalize com uma pitada de canela se quiser"
    ],
    acompanhamento: [
      {
        name: 'Sanduíche Natural',
        description: 'Refrescante e leve para dias quentes'
      },
      {
        name: 'Açaí na Tigela',
        description: 'Combinação perfeita para um lanche saudável'
      },
      {
        name: 'Cookie Americano',
        description: 'Doce e gelado, uma combinação irresistível'
      }
    ]
  },

  {
    id: "CafeComCanela",
    nome: "Café com Canela",
    descricao: "Aromático e reconfortante, com toque especial",
    tempo: "5 minutos",
    dificuldade: "Muito Fácil",
    ingredientes: [
      "10g de café moído",
      "100ml de água",
      "1 pau de canela ou 1 colher de chá de canela em pó",
	"Açúcar mascavo (opcional)",
	"Leite (opcional)"    
],
    preparo: [
      "Se usar pau de canela, quebre em pedaços pequenos",
      "Misture o café moído com a canela",
      "Prepare no coador como café tradicional",
      "Ou adicione a canela junto com o pó no coador",
      "Deixe a água passar lentamente",
	"Adoce com açúcar mascavo se desejar",
	"Sirva puro ou com um pouco de leite"
    ],
    acompanhamento: [
      {
        name: 'Bolo de Canela',
        description: 'Dupla de canela irresistível'
      },
      {
        name: 'Rabanada',
        description: 'Perfeito para café da tarde'
      },
      {
        name: 'Biscoito Amanteigado',
        description: 'Simples e delicioso'
      }
    ]
  },
  {
    id: "Affogato",
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
    ],
    acompanhamento: [
      {
        name: 'Amaretti',
        description: 'Biscoitos italianos de amêndoa que complementam perfeitamente'
      },
      {
        name: 'Cantuccini',
        description: 'Biscoitos crocantes para adicionar textura'
      },
      {
        name: 'Tiramisù',
        description: 'Dobro de café, dobro de prazer italiano'
      }
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