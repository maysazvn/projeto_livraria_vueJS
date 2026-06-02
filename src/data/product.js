// Este arquivo é um módulo JavaScript que exporta uma lista de produtos, representando livros disponíveis para compra. Cada produto é um objeto com propriedades como id, título, autor, resenha, preço e capa (URL da imagem). Esta lista pode ser importada e utilizada em outros componentes do aplicativo para exibir os produtos aos usuários, permitindo que eles naveguem pelos livros disponíveis e adicionem itens ao carrinho de compras. Não se limitem a esses livros sugeridos. Fiquem a vontade para aumentar esta base de dados de livros para serem apresentados pro usuário. Com uma variedade maior, vocẽs podeao filtrar por autor, por preço, por gênero, etc. E também podem adicionar mais informações sobre os livros, como número de páginas, editora, data de publicação, etc. Quanto mais informações vocês tiverem sobre os livros, melhor será a experiência do usuário ao navegar pelos produtos e tomar decisões de compra.

export const produtos = [
  {
  id: 1,
  titulo: 'Jurassic Park',
  autor: 'Michael Crichton',
  resenha: 'dinosauro',
  preco: 58.00,
  genero: 'ficção científica',
  capa: '/imagens/jurassic-park.jpg'
}, 
{
  id: 2,
  titulo: 'Orgulho e Preconceito',
  autor: 'Jane Austen',
  resenha: 'preconceito',
  preco: 51.00,
  genero: 'romance',
  capa: '/imagens/orgulho-e-preconceito.jpg'
},
{
  id: 3,
  titulo: 'O morro dos ventos uivantes',
  autor: 'Emily Bronte',
  resenha: 'tornado',
  preco: 44.90,
  genero: 'romance gótico',
  capa: '/imagens/o-morro.jpg'
},
{
  id: 4,
  titulo: 'Capitães de areia',
  autor: 'Jorge Amado',
  resenha: 'criado na bahia',
  preco: 36.70,
  genero: 'romance',
  capa: '/imagens/capitaes.jpg'
},
{
  id: 5,
  titulo: "Olhos d'água",
  autor: 'Conceição Evaristo',
  resenha: 'fogo',
  preco: 24.50,
  genero: 'ficção',
  capa: '/imagens/olhos.jpg'
},
{
  id: 6,
  titulo: 'Uma correnteza sufocante',
  autor: 'Allison Saft',
  resenha: 'titanic',
  preco: 27.00,
  genero: 'fantasia gótica',
  capa: '/imagens/correnteza.jpg'
},
{
  id: 7,
  titulo: 'O Chamado de Cthulhu',
  autor: 'H.P Lovecraft',
  resenha: 'medo',
  preco: 62.00,
  genero: 'terror',
  capa: '/imagens/chamado.png'
},
{
  id: 8,
  titulo: 'A hora da estrela',
  autor: 'Clarice Lispector',
  resenha: 'resenha',
  preco: 35.00,
  genero: 'romance psicológico',
  capa: '/imagens/estrela.jpg'
},
{
  id: 9,
  titulo: 'O gato de botas',
  autor: 'Charles Perrault',
  resenha: 'gato',
  preco: 13.00,
  genero: 'fantasia',
  capa: '/imagens/chuviscodebosta.jpg'
},
{
  id: 10,
  titulo: 'Turma da mônica: o caminho indesejado',
  autor: 'Maldito de Souza',
  resenha: 'confusao',
  preco: 7.00,
  genero: 'gibi',
  capa: '/imagens/monica.jpg'
},
{
  id: 11,
  titulo: 'Authentic Games: Vivendo uma vida autêntica',
  autor: 'AuthenticGames',
  resenha: 'autêntico',
  preco: 67.00,
  genero: 'autobiografia',
  capa: '/imagens/authentic.jpg'
},
{
  id: 12,
  titulo: 'A arte de respirar debaixo dágua',
  autor: 'Julie Orringer',
  resenha: 'oxigenio',
  preco: 45.00,
  genero: 'autoajuda',
  capa: '/imagens/respirar.jpg'
}
]
