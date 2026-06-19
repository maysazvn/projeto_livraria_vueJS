// Este arquivo é um módulo JavaScript que exporta uma lista de produtos, representando livros disponíveis para compra. Cada produto é um objeto com propriedades como id, título, autor, resenha, preço e capa (URL da imagem). Esta lista pode ser importada e utilizada em outros componentes do aplicativo para exibir os produtos aos usuários, permitindo que eles naveguem pelos livros disponíveis e adicionem itens ao carrinho de compras. Não se limitem a esses livros sugeridos. Fiquem a vontade para aumentar esta base de dados de livros para serem apresentados pro usuário. Com uma variedade maior, vocẽs podeao filtrar por autor, por preço, por gênero, etc. E também podem adicionar mais informações sobre os livros, como número de páginas, editora, data de publicação, etc. Quanto mais informações vocês tiverem sobre os livros, melhor será a experiência do usuário ao navegar pelos produtos e tomar decisões de compra.

export const produtos = [
  {
  id: 1,
  titulo: 'Jurassic Park',
  autor: 'Michael Crichton',
  resenha: 'dinosauro',
  preco: 58.00,
  genero: 'ficção',
  subgenero: 'ficção científica',
  capa: '/imagens/jurassic-park.jpg',
  vendas: 150
},
{
  id: 2,
  titulo: 'Orgulho e Preconceito',
  autor: 'Jane Austen',
  resenha: 'preconceito',
  preco: 51.00,
  genero: 'romance',
  subgenero: 'romance de amor',
  capa: '/imagens/orgulho-e-preconceito.jpg',
  vendas: 124
},
{
  id: 3,
  titulo: 'O morro dos ventos uivantes',
  autor: 'Emily Bronte',
  resenha: 'tornado',
  preco: 44.90,
  genero: 'romance',
  subgenero: 'romance gótico',
  capa: '/imagens/o-morro.jpg',
  vendas: 1745
},
{
  id: 4,
  titulo: 'Capitães da areia',
  autor: 'Jorge Amado',
  resenha: 'criado na bahia',
  preco: 36.70,
  genero: 'romance',
  subgenero: 'romance modernista',
  capa: '/imagens/capitaes.jpg',
  vendas: 111
},
{
  id: 5,
  titulo: "Olhos d'água",
  autor: 'Conceição Evaristo',
  resenha: 'fogo',
  preco: 24.50,
  genero: 'ficção',
  subgenero: 'ficção realista',
  capa: '/imagens/olhos.jpg',
  vendas: 126
},
{
  id: 6,
  titulo: 'Uma correnteza sufocante',
  autor: 'Allison Saft',
  resenha: 'titanic',
  preco: 27.00,
  genero: 'fantasia',
  subgenero: 'fantasia gótica',
  capa: '/imagens/correnteza.jpg',
  vendas: 1999
},
{
  id: 7,
  titulo: 'O Chamado de Cthulhu',
  autor: 'H.P Lovecraft',
  resenha: 'medo',
  preco: 62.00,
  genero: 'terror',
  subgenero: 'terror cósmico',
  capa: '/imagens/chamado.png',
  vendas: 1212
},
{
  id: 8,
  titulo: 'A hora da estrela',
  autor: 'Clarice Lispector',
  resenha: 'resenha',
  preco: 35.00,
  genero: 'romance',
  subgenero: 'romance psicológico',
  capa: '/imagens/estrela.jpg',
  vendas: 1111
},
{
  id: 9,
  titulo: 'O gato de botas',
  autor: 'Charles Perrault',
  resenha: 'gato',
  preco: 13.00,
  genero: 'fantasia',
  subgenero: 'fantasia folclórica',
  capa: '/imagens/chuviscodebosta.jpg',
  vendas: 15024352
},
{
  id: 10,
  titulo: 'Turma da mônica: o caminho indesejado',
  autor: 'Maldito de Souza',
  resenha: 'confusao',
  preco: 7.00,
  genero: 'fantasia',
  subgenero: 'fantasia infantil',
  capa: '/imagens/monica.jpg',
  vendas: 294
},
{
  id: 11,
  titulo: 'Authentic Games: Vivendo uma vida autêntica',
  autor: 'AuthenticGames',
  resenha: 'autêntico',
  preco: 67.00,
  genero: 'autobiografia',
  capa: '/imagens/authentic.jpg',
  vendas: 985
},
{
  id: 12,
  titulo: 'A arte de respirar debaixo dágua',
  autor: 'Julie Orringer',
  resenha: 'oxigenio',
  preco: 45.00,
  genero: 'autoajuda',
  capa: '/imagens/respirar.jpg',
  vendas: 1
}
,
{
  id: 13,
  titulo: 'Frankenstein',
  autor: 'Mary Shelley',
  resenha: 'oxigenio',
  preco: 49.00,
  genero: 'terror',
  subgenero: 'terror gótico',
  capa: '/imagens/frankenstein.jpg',
  vendas: 200
},
{
  id: 14,
  titulo: 'Drácula',
  autor: 'Bram Stoker',
  resenha: 'oxigenio',
  preco: 67.00,
  genero: 'terror',
  subgenero: 'terror gótico',
  capa: '/imagens/dracula.jpg',
  vendas: 1502
},
{
  id: 15,
  titulo: 'A noite das bruxas',
  autor: 'Agatha Christie',
  resenha: 'oxigenio',
  preco: 55.00,
  genero: 'romance',
  subgenero: 'romance policial',
  capa: '/imagens/noitebruxas.jpg',
  vendas: 104
},
{
  id: 16,
  titulo: 'O bebê de Rosemary',
  autor: 'Ira Levin',
  resenha: 'oxigenio',
  preco: 895.00,
  genero: 'terror',
  subgenero: 'terror sobrenatural',
  capa: '/imagens/bebe.jpg',
  vendas: 500
},
{
  id: 17,
  titulo: 'O iluminado',
  autor: 'Stephen King',
  resenha: 'oxigenio',
  preco: 65.00,
  genero: 'terror',
  subgenero: 'terror psicológico',
  capa: '/imagens/iluminado.jpg',
  vendas: 245
},
{
  id: 18,
  titulo: 'O corvo',
  autor: 'Edgar Allan Poe',
  resenha: 'oxigenio',
  preco: 35.00,
  genero: 'terror',
  subgenero: 'terror gótico',
  capa: '/imagens/corvo.jpg',
  vendas: 925
},
{
  id: 19,
  titulo: 'Dom Casmurro',
  autor: 'Machado de Assis',
  resenha: 'oxigenio',
  preco: 53.00,
  genero: 'romance',
  subgenero: 'romance psicologico',
  capa: '/imagens/domcasmurro.jpg',
  vendas: 193
},
{
  id: 20,
  titulo: 'Me chame pelo seu nome',
  autor: 'André Aciman',
  resenha: 'oxigenio',
  preco: 61.00,
  genero: 'romance',
  subgenero: 'romance melodramático',
  capa: '/imagens/chamenome.jpg',
  vendas: 942
},
{
  id: 21,
  titulo: '1984',
  autor: 'George Orwell',
  resenha: 'oxigenio',
  preco: 24.00,
  genero: 'ficção',
  subgenero: 'ficção distópica',
  capa: '/imagens/1984.jpg',
  vendas: 243
},
{
  id: 22,
  titulo: 'A metamorfose',
  autor: 'Franz Kafka',
  resenha: 'oxigenio',
  preco: 45.00,
  genero: 'ficção',
  subgenero: 'ficção surrealista',
  capa: '/imagens/metamorfose.jpg',
  vendas: 853
},
{
  id: 23,
  titulo: 'A Biblioteca da Meia-Noite',
  autor: 'Matt Haig',
  resenha: 'oxigenio',
  preco: 34.00,
  genero: 'ficção',
  subgenero: 'ficção filosófica',
  capa: '/imagens/biblioteca.jpg',
  vendas: 101
},
{
  id: 24,
  titulo: 'O Pequeno Príncipe',
  autor: 'Antoine de Saint-Exupéry',
  resenha: 'oxigenio',
  preco: 765.00,
  genero: 'ficção',
  subgenero: 'ficção fantástica',
  capa: '/imagens/pequenoprincipe.jpg',
  vendas: 332
},
{
  id: 25,
  titulo: 'O nome do vento',
  autor: 'Patrick Rothfuss',
  resenha: 'oxigenio',
  preco: 45.00,
  genero: 'fantasia',
  subgenero: 'fantasia épica',
  capa: '/imagens/nomevento.jpg',
  vendas: 126
},
{
  id: 26,
  titulo: 'Corte de espinhos e rosas',
  autor: 'Sarah J. Maas',
  resenha: 'oxigenio',
  preco: 76.00,
  genero: 'fantasia',
  subgenero: 'fantasia romântica',
  capa: '/imagens/corte.jpg',
  vendas: 11
},
{
  id: 27,
  titulo: 'O senhor dos aneis',
  autor: 'J.R.R Tolkien',
  resenha: 'oxigenio',
  preco: 36.00,
  genero: 'fantasia',
  subgenero: 'fantasia épica',
  capa: '/imagens/sociedade.jpg',
  vendas: 123
},
{
  id: 28,
  titulo: 'Harry Potter',
  autor: 'J.K Rowling',
  resenha: 'oxigenio',
  preco: 85.00,
  genero: 'fantasia',
  subgenero: 'fantasia mágica',
  capa: '/imagens/pedra.jpg',
  vendas: 2
},
{
  id: 29,
  titulo: 'Scott Pilgrim',
  autor: 'Bryan Lee OMalley',
  resenha: 'oxigenio',
  preco: 60.00,
  genero: 'fantasia',
  subgenero: 'fantasia cômica',
  capa: '/imagens/scott-pilgrim-1.jpg',
  vendas: 521
}
]
