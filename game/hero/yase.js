import s16610 from "../skills/yase/s16610.js";
import s16620 from "../skills/yase/s16620.js";

export default class Yase {
    constructor () {
        this.name = '亚瑟';
        this.icon = '';
        this.skills = [new s16610,new s16620];
        this.skins = [];
    }
}