class superhero {
	superHeroName = "Silver Surfer";
	location = "Earth";
	constructor(location) {
		location ? (this.location = location) : location;
	}
	getName() {
		return this.superHeroName;
	}
	getLocation() {
		return this.location;
	}
}
const hero = new superhero("Jupiter");
let heroFromEarth = new superhero();
console.log(hero.getLocation());
console.log(heroFromEarth.getLocation());