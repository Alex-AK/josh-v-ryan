function GameObject(gameAttributes) {
  this.createdAt = new Date('November 28, 2018 03:24:00');
  this.dimensions = gameAttributes.dimensions;
  this.destroy = function () {
    return `${this.name} was removed from the game.`;
  }
}



function CharacterStats(characterAttibutes) {
  GameObject.call(this, characterAttibutes);
  this.healthPoints = characterAttibutes.healthPoints;
  this.name = characterAttibutes.name;
  this.takeDamage = function () {
    return `${this.name} took damage.`
  }
  this.death = function () {
    if (this.healthPoints === 0) {
      return `TEST`;
    }
  }
}


function Humanoid(humanoidAttributes) {
  CharacterStats.call(this, humanoidAttributes);
  this.team = humanoidAttributes.team;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
  this.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});






// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.

function Villian(villianAttributes) {
  Humanoid.call(this, villianAttributes);
  this.fireBomb = function (opponent) {
    console.log(opponent.takeDamage());
    --opponent.healthPoints;
    if (opponent.healthPoints === 0) {
      console.log(opponent.destroy());
    }
  }
}

function Hero(heroAttributes) {
  Humanoid.call(this, heroAttributes);
  this.banjo = function (opponent) {
    console.log(opponent.takeDamage());
    --opponent.healthPoints;
    if (opponent.healthPoints === 0) {
      console.log(opponent.destroy());
    }
  }
}

const ryan = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 7,
  },
  healthPoints: 25,
  name: 'Ryan',
  team: 'Death to Hero',
  weapons: [
    'Fire'
  ],
  language: 'EvilAF',
});

const josh = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 7,
  },
  healthPoints: 25,
  name: 'Josh',
  team: 'Banjo for Life',
  weapons: [
    'Fire'
  ],
  language: 'EvilAF',
});

// =================HTML ELEMENT SELECTORS ====================
const joshButton = document.getElementById('josh-attack');
const ryanButton = document.getElementById('ryan-attack');



// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!