export default class Player {
    constructor (name) {
        this.name = name;
        this.heros = []
    }
    addHero (hero) {
        this.heros.push(hero)
    }
}