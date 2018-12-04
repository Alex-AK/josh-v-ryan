
// function GameObject(gameAttributes) {
//   this.createdAt = new Date('November 28, 2018 03:24:00');
//   this.dimensions = gameAttributes.dimensions;
//   this.destroy = function () {
//     alert(`${this.name} was removed from the game.`);
//   }
// }

class GameObject {
  constructor(gameAttributes) {
    this.createdAt = new Date('November 28, 2018 03:24:00');
    this.dimensions = gameAttributes.dimensions;
  }
  destroy() {
    alert (`${this.name} was removed from the game.`);

  }
}

// function CharacterStats(characterAttibutes) {
//   GameObject.call(this, characterAttibutes);
//   this.healthPoints = characterAttibutes.healthPoints;
//   this.name = characterAttibutes.name;
//   this.takeDamage = function () {
//     alert(`${this.name}: OUCH!`);
//   }
//   this.death = function () {
//     if (this.healthPoints === 0) {
//       return `TEST`;
//     }
//   }
// }


class CharacterStats extends GameObject {
  constructor(characterAttibutes) {
    super(characterAttibutes);
    this.healthPoints = characterAttibutes.healthPoints;
    this.name = characterAttibutes.name;
  }
  takeDamage() {
    return (`${this.name} says: OUCH!`);

  }
  death() {
    if (this.healthPoints === 0) {
        return `TEST`;
    }
  }// death()
}// CharacterStats

// function Humanoid(humanoidAttributes) {
//   CharacterStats.call(this, humanoidAttributes);
//   this.team = humanoidAttributes.team;
//   this.weapons = humanoidAttributes.weapons;
//   this.language = humanoidAttributes.language;
//   this.greet = function () {
//     return `${this.name} offers a greeting in ${this.language}.`
//   }
// }


class Humanoid extends CharacterStats {
  constructor(humanoidAttributes) {
    super(humanoidAttributes);
    this.team = humanoidAttributes.team;
    this.weapons = humanoidAttributes.weapons;
    this.language = humanoidAttributes.language;
  }
  greet() {
    return (`${this.name} offers a greeting in ${this.language}.`);

  }
}

// const damage = function (opponent) {
//   opponent.takeDamage();
//   --opponent.healthPoints;
//   if (opponent.healthPoints === 0) {
//     opponent.destroy();
//   }
// }


// function Villain(villainAttributes) {
//   Humanoid.call(this, villainAttributes);
//   this.gingerBomb = function (opponent) {
//     opponent.takeDamage();
//     --opponent.healthPoints;
//     if (opponent.healthPoints === 0) {
//       opponent.destroy();
//     }
//   }
//   //this.gingerBomb = damage();
// }

class Villain extends Humanoid {
  constructor(villainAttributes) {
    super(villainAttributes);
  }
  gingerBomb(opponent) {
    opponent.takeDamage();
    --opponent.healthPoints;
    if (opponent.healthPoints <= 0) {
      opponent.destroy();
    }
  }
}

// function Hero(heroAttributes) {
//   Humanoid.call(this, heroAttributes);
//   this.banjoBomb = function (opponent) {
//     opponent.takeDamage();
//     --opponent.healthPoints;
//     if (opponent.healthPoints === 0) {
//       opponent.destroy();
//     }
//   }
//   // this.banjoBomb = damage();
// }

class Hero extends Humanoid {
  constructor(heroAttributes) {
    super(heroAttributes);
  }
  banjoBomb(opponent) {
    //opponent.takeDamage();
    --opponent.healthPoints;
    if (opponent.healthPoints <= 0) {
      opponent.destroy();
    }// no health conditional statement
  }// banjoBomb
}

const ryan = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 7,
  },
      textBox.textContent = "Game Over!";
    }
  }
  // this.banjoBomb = damage();
}

const josh = new Hero({

  healthPoints: 5,
  name: 'Josh',
  team: 'Banjo for Life',
  weapons: [
    'Banjo'
  ],
});

// =================HTML ELEMENT SELECTORS ====================

// button actions 
const joshButton = document.querySelector('#josh-attack');
const ryanButton = document.querySelector('#ryan-attack');
const textBox = document.querySelector('#dialog-box')

// health bar variables
let joshHealth = document.getElementById('josh-health');
let ryanHealth = document.getElementById('ryan-health');

// weapons 
const banjo = document.getElementById('banjo');
const ginger = document.getElementById('ginger');

// dialog box
const dialogue = document.getElementById('dialogue-box');

joshButton.addEventListener('click', function () {
  banjo.style.opacity = '1';
  josh.banjoBomb(ryan);
  dialogue.textContent = `${ryan.name}: OUCH!`;
  ryanHealth.textContent = `${ryan.healthPoints}`;  
  //alert ryan pain message

  josh.banjoBomb(ryan);
  ryanHealth.textContent = `${ryan.healthPoints}`;
  textBox.textContent = "Josh hits Ryan for 1 damage.";
});

ryanButton.addEventListener('click', function () {
  ryan.gingerBomb(josh);
  joshHealth.textContent = `${josh.healthPoints}`;

});


// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!