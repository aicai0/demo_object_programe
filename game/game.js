import Player from "./player.js";
import Yase from "./hero/yase.js";
import Luban from "./hero/luban.js";

export default class Game {
    construtor(){
        this.player = null;
    }
    login (userName) {
        this.player = new Player(userName);
        this.player.addHero(new Yase())
        this.player.addHero(new Luban())
    }
}