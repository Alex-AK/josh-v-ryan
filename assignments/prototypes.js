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
    alert(`${this.name} was removed from the game.`);
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
    alert(`${this.name}: OUCH!`);
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
    if (opponent.healthPoints === 0) {
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
    opponent.takeDamage();
    --opponent.healthPoints;
    if (opponent.healthPoints === 0) {
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
  healthPoints: 5,
  name: 'Ryan',
  team: 'Death to Josh',
  weapons: [
    'Ginger'
  ],
  language: 'SASS',
});

const josh = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 7,
  },
  healthPoints: 5,
  name: 'Josh',
  team: 'Banjo for Life',
  weapons: [
    'Banjo'
  ],
  language: 'LESS',
});

// =================HTML ELEMENT SELECTORS ====================

// button actions 
const joshButton = document.getElementById('josh-attack');
const ryanButton = document.getElementById('ryan-attack');

//health bar variables
let joshHealth = document.getElementById('josh-health');
let ryanHealth = document.getElementById('ryan-health');

//weapons 
const banjo = document.getElementById('banjo');
const ginger = document.getElementById('ginger');


joshButton.addEventListener('click', function () {
  //trigger banjo by changing class
  banjo.style.display = 'block';
  //decrease ryan's health
  josh.banjoBomb(ryan);
  ryanHealth.textContent = `${ryan.healthPoints}`;

  //alert ryan pain message
});



// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!