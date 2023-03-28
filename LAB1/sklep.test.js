const Sklep = require('./sklep');

describe('Sklep', () => {
  let sklep;

  beforeEach(() => {
    sklep = new Sklep();
  });

  test('dodaj chleb do listy produktów', () => {
    sklep.dodajProdukt('Chleb', 2.5);
    expect(sklep.produkty.length).toBe(1);
    expect(sklep.produkty[0].nazwa).toBe('Chleb');
    expect(sklep.produkty[0].cena).toBe(2.5);
  });

  test('usuwa chleb z listy produktów', () => {
    sklep.dodajProdukt('Chleb', 2.5);
    sklep.dodajProdukt('Mleko', 1.5);
    sklep.usunProdukt('Chleb');
    expect(sklep.produkty.length).toBe(1);
    expect(sklep.produkty[0].nazwa).toBe('Mleko');
    expect(sklep.produkty[0].cena).toBe(1.5);
  });

  test('zwraca produkt o podanej nazwie chleb', () => {
    sklep.dodajProdukt('Chleb', 2.5);
    sklep.dodajProdukt('Mleko', 1.5);
    const produkt = sklep.znajdzProdukt('Chleb');
    expect(produkt).toBeDefined();
    expect(produkt.nazwa).toBe('Chleb');
    expect(produkt.cena).toBe(2.5);
  });

  test('zwraca undefined dla nieistniejącej nazwy', () => {
    sklep.dodajProdukt('Chleb', 2.5);
    sklep.dodajProdukt('Mleko', 1.5);
    const produkt = sklep.znajdzProdukt('Jajka');
    expect(produkt).toBeUndefined();
  });

  test('dodaje produkt o cenie 0 do listy produktów', () => {
    sklep.dodajProdukt('Chleb', 0);
    expect(sklep.produkty.length).toBe(1);
    expect(sklep.produkty[0].nazwa).toBe('Chleb');
    expect(sklep.produkty[0].cena).toBe(0);
  });

  test('nie zmienia listy produktów, gdy lista jest pusta', () => {
    sklep.usunProdukt('Chleb');
    expect(sklep.produkty.length).toBe(0);
  });

  test('nie zmienia listy produktów, gdy podana nazwa nie ma na liście', () => {
    sklep.dodajProdukt('Chleb', 2.5);
    sklep.usunProdukt('Mleko');
    expect(sklep.produkty.length).toBe(1);
    expect(sklep.produkty[0].nazwa).toBe('Chleb');
  });

  test('zwraca undefined, gdy lista produktów jest pusta', () => {
    const produkt = sklep.znajdzProdukt('Chleb');
    expect(produkt).toBeUndefined();
  });

  test('zwraca undefined, gdy podana nazwa produktu jest pusta', () => {
    sklep.dodajProdukt('Chleb', 2.5);
    const produkt = sklep.znajdzProdukt('');
    expect(produkt).toBeUndefined();
  });

  test('znajdzProdukt zwraca undefined, gdy podana nazwa produktu zawiera tylko białe znaki', () => {
    sklep.dodajProdukt('Chleb', 2.5);
    const produkt = sklep.znajdzProdukt('   ');
    expect(produkt).toBeUndefined();
  });
});
