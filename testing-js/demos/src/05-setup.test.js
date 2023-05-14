describe('Set or suite of test', () => { // Describe() organiza la suite o conjunto de pruebas
  beforeAll(() => { // beforeAll corre codigo antes de hacer las pruebas
    // up DataBase
    console.log('beforeAll');
  });

  afterAll(() => { // afterAll corre codigo despues de hacer las pruebas
    // down DataBase
    console.log('afterAll');
  });

  beforeEach(() => { // corre antes de cada prueba
    console.log('beforeEach');
  });

  afterEach(() => { // corre despues de cada prueba
    console.log('afterEach');
  });

  test('Case 1', () => {
    console.log('Case 1');
    expect(1 + 1).toBe(2);
  });

  test('Case 2', () => {
    console.log('Case 2');
    expect(1 + 2).toBe(3);
  });

  describe('Another suite of test', () => {
    test('Case 3', () => {
      console.log('Case 3');
      expect(2 * 2).toBe(4);
    });

    test('Case 4', () => {
      console.log('Case 4');
      expect(2 * 3).toBe(6);
    });
  });
});
