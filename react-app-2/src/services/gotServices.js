export default class GotService {

    constructor() {
      this._apiBase = "https://www.anapioficeandfire.com/api";
    }

    getResource = async url => {
      const res = await fetch(`${this._apiBase}${url}`);

      if (!res.ok) {
        throw new Error(`Could no fetch ${url} status: ${res.status}`);
      }

      return await res.json();
    };

    getCharacter = async id => {
      const character = await this.getResource(`/characters/${id}`);

      return this._transformCharacters(character);
    };

    getBook = async id => {
      const book = await this.getResource(`/books/${id}`);

      return this._transformBooks(book);
    };

    getHouse = async id => {
      const house = await this.getResource(`/houses/${id}`);

      return this._transformHouses(house);
    };
  
    getAllCharacters = async () => {
      const res = await this.getResource("/characters?page=2&pageSize=10");

      return res.map(this._transformCharacters);
    };

    getAllBooks = async () => {
      const res = await this.getResource("/books?page=1&pageSize=9");

      return res.map(this._transformBooks);
    };

    getAllHouses = async () => {
      const res = await this.getResource("/houses?page=2");

      return res.map(this._transformHouses);
    };

    _transformCharacters(char) {
      const index = char.url.length - 2;
      
      return {
        name: char.name,
        gender: char.gender,
        born: char.born,
        died: char.died,
        culture: char.culture,
        id: char.url.slice(index)
      };
    }
    _transformBooks(book) {
      const index = book.url.length - 1;
      return {
        name: book.name,
        numberOfPages: book.numberOfPages,
        publiser: book.publiser,
        released: book.released,
        country: book.country,
        id: book.url.slice(index)
      };
    }
  
    _transformHouses(house) {
      const index = house.url.length - 2;
      return {
        name: house.name,
        region: house.region,
        words: house.words,
        titles: house.titles,
        overload: house.overload,
        ancestralWeapons: house.ancestralWeapons,
        id: house.url.slice(index)
      };
    }
  }