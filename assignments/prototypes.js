function GameObject(gameAttributes) {
  this.destroy = function () {
    alert(`${this.name} was removed from the game.`);
  }
}



function CharacterStats(characterAttibutes) {
  GameObject.call(this, characterAttibutes);
  this.healthPoints = characterAttibutes.healthPoints;
  this.name = characterAttibutes.name;
  this.takeDamage = function () {
    // alert(`${this.name}: OUCH!`);
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
  this.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}


// const damage = function (opponent) {
//   opponent.takeDamage();
//   --opponent.healthPoints;
//   if (opponent.healthPoints === 0) {
//     opponent.destroy();
//   }
// }


function Villian(villianAttributes) {
  Humanoid.call(this, villianAttributes);
  this.gingerBomb = function (opponent) {
    opponent.takeDamage();
    --opponent.healthPoints;
    if (opponent.healthPoints === 0) {
      opponent.destroy();
    }
  }
  //this.gingerBomb = damage();
}

function Hero(heroAttributes) {
  Humanoid.call(this, heroAttributes);
  this.banjoBomb = function (opponent) {
    opponent.takeDamage();
    --opponent.healthPoints;
    if (opponent.healthPoints === 0) {
      opponent.destroy();
      textBox.textContent = "Game Over!";
    }
  }
  // this.banjoBomb = damage();
}

const ryan = new Villian({
  healthPoints: 5,
  name: 'Ryan',
  team: 'Death to Josh',
  weapons: [
    'Ginger'
  ],
});

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

//health bar variables
let joshHealth = document.getElementById('josh-health');
let ryanHealth = document.getElementById('ryan-health');

//weapons 
const banjo = document.getElementById('banjo');
const ginger = document.getElementById('ginger');


joshButton.addEventListener('click', function () {
  josh.banjoBomb(ryan);
  ryanHealth.textContent = `${ryan.healthPoints}`;
  textBox.textContent = "Josh hits Ryan for 1 damage.";
});

ryanButton.addEventListener('click', function () {
  ryan.gingerBomb(josh);
  joshHealth.textContent = `${josh.healthPoints}`;

});

const showBanjo = document.querySelector('#banjo');
const showGinger = document.querySelector('#ginger');
joshButton.addEventListener('mousedown', function () {
  showBanjo.classList.toggle('toggleMe');
});

joshButton.addEventListener('mouseup', function () {
  showBanjo.classList.toggle('toggleMe');
});

ryanButton.addEventListener('mousedown', function () {
  showGinger.classList.toggle('toggleMe');
});

ryanButton.addEventListener('mouseup', function () {
  showGinger.classList.toggle('toggleMe');
});


// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!