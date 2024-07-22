class Movie {
    constructor(name, yearOfRelease, boxOfficeCollection, cast) {
        this.name = name;
        this.yearOfRelease = yearOfRelease;
        this.boxOfficeCollection = boxOfficeCollection;
        this.cast = cast;
    }

    addToCast(member) {
        this.cast.push(member);
    }

    addToCollection(amount) {
        this.boxOfficeCollection += amount;
    }
}

const kalki = new Movie('Kalki', 2024, 300, ['Amitabh', 'Prabhas']);
kalki.addToCast('Shobhna');
kalki.addToCollection(200);

console.log(kalki);