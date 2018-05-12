class Computer {
    constructor (name,health) {
      this.name=name;
      this.health=health;
    }
    generateAttackDamage (max) {
      return Math.floor(Math.random()*max)+1;
    }
}

class Character extends Computer {
 constructor(name,health,healsRemaining,wins) {
  super(name,health);
  this.healsRemaining=healsRemaining;
  this.wins=wins;
  }
  heal () {
    this.health=this.health+(Math.floor(Math.random()*10)+1);
    this.healsRemaining--;
  }
}
var classyUser=new Character("user",40,2,0);
var classyGrant=new Computer('Grant',10);

var startButton=document.getElementById("startButton");
startButton.onclick=function () {
  document.getElementById("game-wrapper").style.display="block";
  document.getElementById("start-wrapper").style.display="none";
  startGame ();
}
var playerName=document.getElementById("playerName");
function player(name) {
  playerName.innerText = name;
}
var attackButton=document.getElementById("attackButton");
attackButton.onclick = attack;
function attack () {
    classyUser.health-=classyUser.generateAttackDamage(5);
    classyGrant.health-=classyGrant.generateAttackDamage(3);
    var status=document.getElementById("updateArea");
    function updateArea(theUpdate) {
      status.innerText=theUpdate;
    }

    var playerHealthBar=document.getElementsByClassName("player")[0];
    playerHealthBar.value=classyUser.health;
    var grantHealthBar=document.getElementsByClassName("computer")[0];
    grantHealthBar.value=classyGrant.health;
    theUpdate=(`The user has ${classyUser.health} health left. Grant has ${classyGrant.health} health left.`);
    updateArea(theUpdate);
    if (classyGrant.health<=0) {
          classyUser.wins++;
          classyGrant.health=10;
          console.log(`user wins are ${classyUser.wins}`);
          var playerWinBar=document.getElementsByClassName("player")[2];
          playerWinBar.value=classyUser.wins;
          var grantHealthBar=document.getElementsByClassName("computer")[0];
          grantHealthBar.value=classyGrant.health;
        }
  }
var quitButton=document.getElementById("quitButton");
quitButton.onclick=quit;
function quit () {
  console.log(`user decided to quit.`);
  return;
}
var healButton=document.getElementById("healButton")
healButton.onclick=heal;
function heal () {
  classyUser.heal();
   console.log(`user has healed`);
   console.log(`user has ${classyUser.health} health left.`);
   console.log(`Grant has ${classyGrant.health} health left`);
   console.log(`You have ${classyUser.healsRemaining} heals left`);
   var playerHealBar=document.getElementsByClassName("player")[1];
   playerHealBar.value=classyUser.healsRemaining;
   var playerHealthBar=document.getElementsByClassName("player")[0];
   playerHealthBar.value=classyUser.health;
}

function startGame(){
    var userName = prompt("What is your name?");
    player (userName);
  }

// function startCombat (userName) {
//   var classyUser=new Character(userName,40,2,0);
//   var classyGrant=new Computer('Grant',10);
//   while (classyUser.wins<5 && classyUser.health >0) {
//     var fight=prompt`Do you want to attack, heal or quit?`;
//     if (fight.toLowerCase()===`quit`) {
//       console.log(`${userName} decided to quit.`);
//       return;
//     }
//     if (fight.toLowerCase()===`attack`) {
//       classyUser.health-=classyUser.generateAttackDamage(5);
//       classyGrant.health-=classyGrant.generateAttackDamage(3);
//       console.log(`${userName} has ${classyUser.health} health left.`);
//       console.log(`Grant has ${classyGrant.health} health left`);
//     }
//       if (fight.toLowerCase()==='heal' && classyUser.healsRemaining>0) {
//         classyUser.heal();
//         console.log(`${userName} has healed`);
//         console.log(`${userName} has ${classyUser.health} health left.`);
//         console.log(`Grant has ${classyGrant.health} health left`);
//         console.log(`You have ${classyUser.healsRemaining} heals left`);
//       }
//     if (classyGrant.health<=0) {
//       classyUser.wins++;
//       classyGrant.health=10;
//       console.log(`${userName}\'s wins are ${classyUser.wins}`);
//     }
//     if (classyUser.healsRemaining===0) {
//       classyUser.health-=classyUser.generateAttackDamage(5);
//       classyGrant.health-=classyGrant.generateAttackDamage(3);
//       console.log(`${userName} has ${classyUser.health} health left.`);
//       console.log(`Grant has ${classyGrant.health} health left`);
//     }
//    }
//    if (classyUser.wins>4) {
//   console.log(`The winner is ${userName}.`);
//   } else {
//   console.log(`The winner is Grant.`);
//   }
// }
