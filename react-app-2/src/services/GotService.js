export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource('/characters?page=5&pageSize=10');
        //const res = await this.getResource('/chaters?page=5&pageSize=10'); // для ошибки
        return res.map(this._transformCharacter);
    }
    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    getAllBooks = async () => {
        const res = await this.getResource('/books');
        return res.map(this._transformBook);
    }
    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    }
    getAllHauses = async () => {
        const res = await this.getResource('/houses');
        return res.map(this._transformHouse)
    }
    getHause = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house)
    }

    check(data) {
        if(data) {
            return data
        } else {
            return 'no data'
        }
    }

    _extractId = (item) =>{
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }
    
    _transformCharacter = (char) => {
        return {
            name: this.check(char.name),
            gender: this.check(char.gender),
            born: this.check(char.born),
            died: this.check(char.died),
            culture: this.check(char.culture),
            id: this._extractId(char)
        }
    }

    _transformHouse = (house) => {
        return {
            name: this.check(house.name),
            region: this.check(house.region),
            words: this.check(house.words),
            titles: this.check(house.titles),
            overload: this.check(house.overload),
            ancestralWeapons: this.check(house.ancestralWeapons)
        }
    }

    _transformBook = (book) => {
        return {
            name: this.check(book.name),
            numberOfPages: this.check(book.numberOfPages),
            publisher: this.check(book.publisher),
            released: this.check(book.released)
        }
    }
}