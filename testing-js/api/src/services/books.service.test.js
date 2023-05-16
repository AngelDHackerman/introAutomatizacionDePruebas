const BooksService = require('./books.service');

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });

  describe('Test for getBooks', () => {
    test('Should return a list book', async () => { // async hace la funcion asincrona
      // arragen
      // act
      const books = await service.getBooks({}); // espera que termine la peticion para poder seguir
      console.log(books);
      // assert
      expect(books.length).toEqual(2);
    });
  });
});
