// 面向对象 研究对象 =》抽象类 =》研究类之间关系 =》 组织关系
// 玩家 英雄 技能 皮肤
// 玩家类  每个英雄类 每个技能类 每个皮肤类 游戏管理类
import Game from './game/game.js';

let game = new Game();

let elements = {
    login:{
        loginView: document.querySelector('.login'),
        loginName: document.querySelector('.user-name'),
        loginButton: document.querySelector('.button')
    },
    game:{
        gameView: document.querySelector('.game'),
        nameView: document.querySelector('.game .user-info .info-row .row-name'),
        heroView: document.querySelector('.game .heros .hero-box'),
        heroshow: document.querySelector('.game .user-info .info-row .row-hero'),
        skillView: document.querySelector('.game .skills .skill-box'),
    }
}

elements.login.loginButton.onclick = function () {
    let userName = elements.login.loginName.value;
    console.log(userName)
    if(userName !== ''){
        game.login(userName)
        // 登录
        elements.login.loginView.style.display = 'none';
        elements.game.gameView.style.display = 'block';
        // 显示用户
        elements.game.nameView.innerHTML = game.player.name;
        console.log(game)
        // 显示英雄
        game.player.heros.forEach(hero => {
            let heroItem = document.createElement("div");
            heroItem.classList.add('hero-name');
            heroItem.innerHTML = `<span>${hero.name}</span`;
            elements.game.heroView.appendChild(heroItem);
            heroItem.onclick = function(){
                elements.game.heroshow.innerHTML = hero.name;
                console.log(game)
                elements.game.skillView.innerHTML = ''
                hero.skills.forEach(skill=>{
                    let skillItem = document.createElement("div");
                    skillItem.classList.add('hero-name');
                    skillItem.innerHTML = skill.name;
                    elements.game.skillView.appendChild(skillItem);
                })
            }
        });
    }
}