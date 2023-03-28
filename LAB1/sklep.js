class Produkt {
  constructor(nazwa, cena) {
    this.nazwa = nazwa;
    this.cena = cena;
  }
}

class Sklep {
  constructor() {
    this.produkty = [];
  }

  dodajProdukt(nazwa, cena) {
    const produkt = new Produkt(nazwa, cena);
    this.produkty.push(produkt);
  }

  usunProdukt(nazwa) {
    this.produkty = this.produkty.filter((p) => p.nazwa !== nazwa);
  }

  znajdzProdukt(nazwa) {
    return this.produkty.find((p) => p.nazwa === nazwa);
  }
}

module.exports = Sklep;
