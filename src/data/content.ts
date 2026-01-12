// Tipos de dados
export interface Article {
  id: number;
  category: string;
  categoryName: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  tags?: string[];
  content: string;
  featured?: boolean;
  position?: number;
}

// Dados das reflexões
export const reflexoes: Article[] = [
  {
    id: 101,
    category: "reflexoes",
    categoryName: "Reflexão",
    date: "05 de setembro de 2025",
    readTime: "5 min de leitura",
    title: "INTELIGÊNCIA",
    excerpt: "Reflexão sobre a inteligência como capacidade de aprender com os erros e recomeçar com mais sabedoria",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
    author: "Redação",
    tags: ["Objetivo", "Estratégia", "Habilidade", "Compreensão", "Recomeçar"],
    content: `<p><strong>INTELIGÊNCIA</strong></p>
<p>&nbsp;</p>
<div style="margin: 20px 0; padding: 15px; background: #f0f0f0; border-radius: 8px;">
  <p><strong>🎧 Áudio da Reflexão</strong></p>
  <audio controls style="width: 100%; margin-top: 10px;">
    <source src="inteligencia.mp3" type="audio/mpeg">
    Seu navegador não suporta o elemento de áudio.
  </audio>
</div>
<p>&nbsp;</p>
<p><strong>&ldquo;O insucesso é apenas uma oportunidade para recomeçar com mais inteligência&rdquo;. </strong></p>
<p><strong style="color: DARKGOLDENROD">Henry Ford</strong></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Em outras palavras, é respeitável para si mesmo quando deparamos com o insucesso na obtenção de algo que desejávamos muito em nossa jornada de vida, ou de um objetivo que não foi satisfeito naquele momento, digo porque não sabemos do dia seguinte, pois que no momento devemos parar, respirar e analisar analiticamente os possíveis erros que foram cometidos na busca do objetivo e o que fazer para identificar os possíveis acertos, assim se recomeça a jornada.&nbsp;</span></p>
<p><span style="font-weight: 400;">Todavia, ao delinear novas estratégias para a consecução dos objetivos propostos extinguindo os possíveis erros e visando os possíveis acertos, estaremos buscando mais </span><span style="font-weight: 400;">hances de estudar e aprender, avaliar e ajustar as estratégias, e como consequência melhorar os resultados.</span></p>
<p><span style="font-weight: 400;">Em consequência, estaremos utilizando a inteligência com a habilidade necessária para solucionar as adversidades e contornar os desafios, aceitando e entendendo que novas estratégias serão necessárias para a conquista dos objetivos propostos.</span></p>
<p><strong>Inteligência</strong><span style="font-weight: 400;">, segundo o dicionário</span><strong>,</strong><span style="font-weight: 400;"> significa: &ldquo;habilidade para entender e solucionar adversidades ou problemas, adaptando-se as circunstâncias novas&rdquo;.&nbsp;</span></p>
<p><span style="font-weight: 400;">A palavra </span><strong>inteligência</strong><span style="font-weight: 400;"> parece simplesmente algo corriqueiro e normal, porque estamos acostumados a falar sobre ela, sem muitas vezes nos atermos ao real significado e importância da qual possui.&nbsp;</span></p>
<p><span style="font-weight: 400;">Já paramos para pensar que precisamos de água para beber e fazer as demais necessidades, mas</span> <span style="font-weight: 400;">precisamos muito de</span><strong> inteligência</strong><span style="font-weight: 400;"> para compreender </span><span style="font-weight: 400;">o quanto a água é importante para o nosso organismo, bem como todo o bem que ela traz a nossa vida.</span></p>
<p><span style="font-weight: 400;">E, para desenvolver a inteligência de forma eficaz, necessitamos dar a ela o verdadeiro valor, e para isso precisamos usar melhor o nosso cérebro o qual é o maior e verdadeiro computador natural.</span></p>
<p><span style="font-weight: 400;">Todavia, as faculdades de conhecer, compreender, raciocinar e pensar formam o bojo das características inerentes a inteligência. E por meio dos cinco sentidos tais como visão, olfato, audição, paladar e tato nos conectamos com o mundo e com as pessoas a nossa volta.&nbsp;</span></p>
<p><span style="font-weight: 400;">Quando estamos estudando ou aprendendo algo, precisamos verdadeiramente conhecer, compreender, raciocinar e pensar usando nossos cinco sentidos com a finalidade de assimilar o conteúdo.</span></p>
<p><span style="font-weight: 400;">Como exemplo disso, não basta tirar notas boas na escola, primordial é entender o conteúdo e estudá-lo, </span><strong>dando o real valor ao estudo e consequentemente a inteligência.</strong></p>
<p><strong>No dicionário de psicologia</strong><span style="font-weight: 400;"> (Associação Psicológica Americana, 2010, p. 521), pode-se encontrar a definição de inteligência como sendo a </span><span style="font-weight: 400;">capacidade de:&nbsp;</span><span style="font-weight: 400;">&ldquo;extrair informações, aprender com a experiência, adaptar-se ao ambiente, compreender e utilizar corretamente o pensamento e a razão&rdquo;.</span></p>
<p><span style="font-weight: 400;">Inclusive, na</span> <strong>Bíblia</strong><span style="font-weight: 400;">, a inteligência </span><span style="font-weight: 400;">está relacionada com a capacidade de compreender, processar informações e resolver problemas.&nbsp;</span></p>
<p><span style="font-weight: 400;">&nbsp;</span></p>
<p><strong>Vejamos</strong><strong>:</strong></p>
<p>&nbsp;</p>
<ul>
<li><strong>Provérbios 2:6</strong><span style="font-weight: 400;">, afirma que a sabedoria vem da boca do Senhor, e que daí vem também a </span><strong>inteligência e o entendimento.</strong></li>
<li><strong>Provérbios 24:3-6,</strong><span style="font-weight: 400;"> afirma que com a </span><strong>sabedoria se edifica a casa, e com a inteligência ela se firma, ou seja,</strong><span style="font-weight: 400;"> inteligência é o que firma a casa, mesmo que a sabedoria seja a base para edificá-la. A inteligência não é apenas o acúmulo de conhecimento, mas também sua aplicação prática.</span></li>
<li><strong>Provérbios 2:3-5,</strong><span style="font-weight: 400;"> afirma que é preciso clamar por inteligência, pedir por entendimento, buscar a sabedoria como a prata e cavar por ela como por um tesouro escondido.</span></li>
<li><strong>O livro de Jó, como exemplo, afirma que</strong><span style="font-weight: 400;"> "o temor do Senhor é a sabedoria, e apartar-se do mal é a inteligência" (Jó 28:28). Isso indica que a inteligência verdadeira está ligada ao respeito e obediência a Deus e a uma vida que se afasta do mal.</span></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Jesus ensina os discípulos a agir com inteligência, a serem espertos no que diz respeito às coisas do Reino. </span><span style="font-weight: 400;">(Marcos 4, Lucas 9</span><span style="font-weight: 400;">).</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Porém é importante saber que a&nbsp;</span><span style="font-weight: 400;">inteligência</span><span style="font-weight: 400;">&nbsp;está relacionada à capacidade de pensar e raciocinar de maneira eficiente (cognitiva e socioemocionalmente), enquanto a&nbsp;</span><span style="font-weight: 400;">sabedoria</span><span style="font-weight: 400;">&nbsp;envolve uma compreensão e aplicação sensata do conhecimento para viver bem e tomar decisões ponderadas.</span></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Haveria muito assunto para falar sobre o tema, mas no momento fico por aqui.</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Até breve!!!</span></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>OBS</strong><strong>:</strong></p>
<p><span style="font-weight: 400;">*Este artigo foi inspirado no conteúdo do livro aprendendo inteligência </span><strong>(prof. PIER),</strong><span style="font-weight: 400;"> ou </span><strong>PIERLUIGI PIAZZI</strong><span style="font-weight: 400;">. Um Manual de instruções do cérebro para estudantes em geral.&nbsp; 3ª ed. rev. São Paulo, Aleph, 2014.</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">*Também inspirado em algumas passagens da Bíblia.</span></p>`
  },
  {
    id: 102,
    category: "reflexoes",
    categoryName: "Reflexão",
    date: "05 de outubro de 2025",
    readTime: "7 min de leitura",
    title: "ORGANIZAÇÃO",
    excerpt: "Análise sobre como vivemos em uma sociedade organizacional e a importância da competência nos sistemas",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
    author: "Redação",
    tags: ["Sociedade", "Competência", "Produtividade", "Eficácia", "Poder"],
    content: `<p><strong>ORGANIZAÇÃO</strong></p><p>&nbsp;</p><p><strong>Breve comentário.</strong></p><p>&nbsp;</p><p>Você se considera que vive dentro de uma sociedade eminentemente organizacional?</p><p>&nbsp;</p><p>Pois bem, podemos dizer que vivemos em um sistema controlado por uma sociedade organizacional onde o homem em todas as etapas de sua vida, desde a concepção até a morte, depende desse sistema organizacional.&nbsp;</p><p>A competência e eficácia são primordiais para o sucesso desses sistemas organizacionais.</p>`
  },
  {
    id: 103,
    category: "reflexoes",
    categoryName: "Reflexão",
    date: "05 de novembro de 2025",
    readTime: "6 min de leitura",
    title: "PENSAMENTOS",
    excerpt: "Reflexão sobre a relação entre pensamentos e sentimentos e a importância da auto-responsabilidade.",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800",
    author: "Redação",
    tags: ["Sentimentos", "Vibração", "Autorresponsabilidade", "lapidar", "Alegria"],
    content: `<p><strong>PENSAMENTOS</strong></p><p>&nbsp;</p><p><strong>O que vem antes, o pensamento ou o sentimento?</strong></p><p><strong>Quando você pensa, sente e quando você sente, pensa! Porque tudo isso, parece confuso?</strong></p><p>&nbsp;</p><p>Os pensamentos são formas de lidar com os sentimentos e vice-versa, porque ao pensar dependendo dos pensamentos vão surgir sentimentos que serão necessários lapidá-los a fim de direcioná-los para a melhor consecução dos objetivos.</p>`
  }
];

// Dados dos artigos
export const posts: Article[] = [
  {
    id: 1,
    category: "civil",
    categoryName: "Direito Civil",
    date: "01 de Fevereiro de 2025",
    readTime: "10 min de leitura",
    title: "Curatela: Instrumento de Proteção e Cuidado no Ordenamento Jurídico Brasileiro",
    excerpt: "Análise do instrumento da curatela como forma de proteção da pessoa com incapacidade.",
    image: "https://res.cloudinary.com/dqewxdbfx/image/upload/v1762624801/maos-dadas-umas-as-outras-para-apoio_page-0001_n0v2bn.jpg",
    author: "Redação",
    tags: ["Curatela", "Direito Civil", "Proteção", "Incapacidade"],
    content: `<ul>
<li><strong>Breve Introdução</strong></li>
</ul>
<p><span style="font-weight: 400;">A Curatela no ordenamento jurídico brasileiro está prevista</span> <span style="font-weight: 400;">no</span><strong> Código Civil, Lei </strong><strong>nº</strong><strong> 10.406 de 10 de janeiro de 2002</strong><span style="font-weight: 400;">,</span><span style="font-weight: 400;"> mais precisamente nos artigos n.ºs </span><strong>1.767 a 1.783, </strong><span style="font-weight: 400;">o qual define</span> <span style="font-weight: 400;">quais pessoas são abrangidas por ela, e que possuam incapacidade parcial ou total, além de estabelecer as regras para a nomeação de curadores, se for o caso.&nbsp;</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">E, da mesma forma o</span><strong> Código de Processo Civil, Lei nº 13.105 de 16 de março de 2015, </strong><span style="font-weight: 400;">mais precisamente nos artigos n.ºs </span><strong>747 ao 763</strong><span style="font-weight: 400;">, estabelecem as regras do processo de interdição e de curatela, assim como definem os procedimentos para a avaliação da incapacidade, nomeação do curador e prestação de contas.</span><strong>&nbsp;</strong></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Inclusive, no ordenamento jurídico existe a </span><span style="font-weight: 400;">lei Brasileira de Inclusão da Pessoa com Deficiência, </span><strong>Lei nº 13.146 de 06 de julho de 2015</strong><span style="font-weight: 400;">, especialmente quanto a sua </span><span style="font-weight: 400;">inclusão na sociedade</span><span style="font-weight: 400;">, onde </span><span style="font-weight: 400;">define toda a classe de deficiência não se limitando somente as condições físicas, mas também abrange as </span><strong>deficiências mentais, intelectuais e sensoriais, mesmo que as deficiências causem limitações na participação social.</strong></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">De qualquer forma, a lei visa a garantia </span><strong>das medidas de proteção,</strong><span style="font-weight: 400;"> e que sejam adequadas a gravidade das circunstâncias da enfermidade.&nbsp;</span><strong><br /><br /></strong></p>
<p><strong>►</strong><strong>Importância da Curatela na Constituição Federal/88</strong><strong>:</strong></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">A Constituição Federal de 1988, não dispõe de um artigo específico que trata da curatela, no entanto dispõe de princípios e garantias fundamentais que embasam a curatela, assegurando a todos os indivíduos e </span><strong>também aos mais incapazes</strong><span style="font-weight: 400;"> que tenham seus direitos preservados e as necessidades protegidas por lei, além de proporcionar que a pessoa curatelada tenha uma vida incluída na sociedade.</span></p>`
  },
  {
    id: 2,
    category: "civil",
    categoryName: "Direito Civil",
    date: "01 de março de 2025",
    readTime: "30 min de leitura",
    title: "Tutela: Proteção Integral de Menores no Ordenamento Jurídico Brasileiro",
    excerpt: "Análise do instrumento da tutela como forma de proteção do menor.",
    image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    author: "Redação",
    tags: ["Tutela", "Direito Civil", "Menores", "Proteção"],
    content: `<p><strong>Breve Introdução</strong></p><p>A Tutela de menores no ordenamento jurídico brasileiro está prevista no Código Civil, Lei nº 10.406 de 10 de janeiro de 2002, mais precisamente nos artigos n.ºs 1.728 a 1.766, o qual define quais pessoas são abrangidas por ela, as condições para o encargo, além de estabelecer as regras para a nomeação de tutores, se for o caso.&nbsp;</p><p>A tutela é um instituto jurídico que serve para proteger os direitos e interesses de menores que não conseguem exercer seus direitos sozinhos.</p>`
  },
  {
    id: 3,
    category: "constitucional",
    categoryName: "Direito Constitucional",
    date: "15 de março de 2025",
    readTime: "15 min de leitura",
    title: "Princípios Fundamentais da Constituição Federal",
    excerpt: "Análise dos princípios fundamentais que regem o ordenamento jurídico brasileiro.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    author: "Redação",
    tags: ["Constituição", "Princípios", "Direitos Fundamentais"],
    content: `<p><strong>Princípios Fundamentais</strong></p><p>A Constituição Federal de 1988 estabelece os princípios fundamentais que regem o Estado Democrático de Direito brasileiro. Entre eles, destacam-se a dignidade da pessoa humana, a cidadania, os valores sociais do trabalho e da livre iniciativa.</p><p>Esses princípios servem como base para todo o ordenamento jurídico nacional.</p>`
  }
];

// Dados das notícias
export const noticias: Article[] = [
  {
    id: 201,
    category: "geral",
    categoryName: "Notícias Gerais",
    date: "08 de janeiro de 2026",
    readTime: "3 min de leitura",
    title: "Novas Atualizações no Código Civil Brasileiro",
    excerpt: "Congresso aprova alterações importantes no Código Civil que entram em vigor em 2026.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    author: "Redação",
    tags: ["Legislação", "Código Civil", "Atualização"],
    content: `<p><strong>Novas Mudanças no Código Civil</strong></p><p>O Congresso Nacional aprovou importantes alterações no Código Civil brasileiro que entram em vigor a partir de 2026. As mudanças visam modernizar o ordenamento jurídico e adequá-lo às novas demandas da sociedade.</p><p>Entre as principais alterações estão ajustes nas regras de contratos, responsabilidade civil e direito de família.</p>`
  },
  {
    id: 202,
    category: "tribunais",
    categoryName: "Tribunais",
    date: "05 de janeiro de 2026",
    readTime: "4 min de leitura",
    title: "STF Julga Importante Caso sobre Direitos Fundamentais",
    excerpt: "Supremo Tribunal Federal analisa caso que pode impactar milhões de brasileiros.",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800",
    author: "Redação",
    tags: ["STF", "Direitos Fundamentais", "Jurisprudência"],
    content: `<p><strong>STF em Sessão Histórica</strong></p><p>O Supremo Tribunal Federal iniciou o julgamento de um caso emblemático que pode redefinir a interpretação de direitos fundamentais no Brasil. A decisão é aguardada com expectativa por juristas e pela sociedade civil.</p><p>O caso envolve questões de liberdade de expressão e dignidade da pessoa humana.</p>`
  },
  {
    id: 203,
    category: "legislacao",
    categoryName: "Legislação",
    date: "02 de janeiro de 2026",
    readTime: "5 min de leitura",
    title: "Nova Lei de Proteção de Dados Pessoais é Regulamentada",
    excerpt: "Governo federal publica decreto que regulamenta a Lei Geral de Proteção de Dados.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
    author: "Redação",
    tags: ["LGPD", "Proteção de Dados", "Privacidade"],
    content: `<p><strong>LGPD Regulamentada</strong></p><p>O governo federal publicou decreto que regulamenta aspectos importantes da Lei Geral de Proteção de Dados (LGPD). A medida traz mais clareza sobre as obrigações de empresas e órgãos públicos no tratamento de dados pessoais.</p><p>As novas regras entram em vigor imediatamente e devem ser observadas por todos os agentes de tratamento de dados.</p>`
  }
];
