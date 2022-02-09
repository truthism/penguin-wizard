let wave = 0;
let waveDone = false;
// const wavesFn = () => {
//   name: 'zombie',
//   x: 0,
//   y: 0, 
//   sprite: 'zombiedown',
//   vector: [0, 1],
//   health: 3
// };

let wavesList = [
  [
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1, 25],
  ],
  [
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,1,25]
  ],
  [
    ['skeleton', 50, 50, 'skeletondown', [[0, 1], []], 4, 0]
  ],
  [
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['skeleton', 50, 50, 'skeletondown', [[0, 1], []], 4, 0]
  ],
  [['zombie', 0, 0, 'zombiedown', [0, 1], 25, 0,2,50]]
];
let wavesListCopy = _.cloneDeep(wavesList);
 
//Preload images

var fbunlocked = false;
function preload() {

  playerup = loadImage("assets/playerup.png")
  playerleft = loadImage("assets/playerleft.png")
  playerdown = loadImage("assets/playerdown.png")
  playerright = loadImage("assets/playerright.png")
  slashup = loadImage("assets/slashup.png")
  slashleft = loadImage("assets/slashleft.png")
  slashright = loadImage("assets/slashright.png")
  slashdown = loadImage("assets/slashdown.png")
  partup = loadImage("assets/particlesup.png")
  partleft = loadImage("assets/particlesleft.png")
  partright = loadImage("assets/particlesright.png")
  partdown = loadImage("assets/particlesdown.png")
  sword = loadImage("assets/sword.png")
  zombieup = loadImage('assets/zombieup.png')
  zombieright = loadImage('assets/zombieright.png')
  zombieleft = loadImage('assets/zombieleft.png')
  zombiedown = loadImage('assets/zombiedown.png')
  fireballup = loadImage('assets/fireballup.png')
  fireballleft = loadImage('assets/fireballleft.png')
  fireballright = loadImage('assets/fireballright.png')
  fireballdown = loadImage('assets/fireballdown.png')
  skeletonup = loadImage('assets/skeletonup.png')
  skeletonright = loadImage('assets/skeletonright.png')
  skeletonleft = loadImage('assets/skeletonleft.png')
  skeletondown = loadImage('assets/skeletondown.png')
  arrowup = loadImage('assets/arrowup.png')
  arrowleft = loadImage('assets/arrowleft.png')
  arrowdown = loadImage('assets/arrowdown.png')
  arrowright = loadImage('assets/arrowright.png')
  healthpotion = loadImage('assets/hpotion.png')
  zombiedamup = loadImage('assets/zombiedamageup.png')
  zombiedamright = loadImage('assets/zombiedamageright.png')
  zombiedamleft = loadImage('assets/zombiedamageleft.png')
  zombiedamdown = loadImage('assets/zombiedamagedown.png')
  backgroundimage = loadImage('assets/background.png')
}

var lives = 3;
var invis = false;
var invistimer = 0;
var timer = 0
var coins = 0
var damage = 1;
var tier = window.setInterval(() => {
  timer++;
}, 1000)
function rtf(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  var allText;
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        allText = rawFile.responseText;
      }
    }
  }
  rawFile.send(null);
  return allText;
}


function setup() {
  createCanvas(500, 500)
  background('lightgray')

}
var enemyframes = 8 // the amount of frames the enemy will be in the damaged state
let k = 0
let facing = 0
let pos = [5 * 32, 10 * 32]
let spawnpos = [5 * 32, 10 * 32]
let speeding = 3
let slash = [0, 'up', -80, -80]
let health = 5;
let xspd = 0;
let yspd = 0;
let stamina = 10;
window.setInterval(() => {
  if (stamina !== 10) {
    stamina++
  }
}, 3000)
let fireballs = [];
mobspos = [['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25]] // what are all these variables
// name posx posy sprite vector (zombie)
// name posx posy sprite aimingdir
let island = "base"
let roomdata = [5, 5]
function coldetect(ax, ay, awidth, aheight, bx, by, bwidth, bheight) {
  if (ax < bx + bwidth &&
    ax + awidth > bx &&
    ay < by + bheight &&
    ay + aheight > by) {
    return true;
  } else { return false }
}
let x = 0
let y = 0
let bgdata;
function draw() {
  
  updateWavesList();
  background('lightblue')
  image(backgroundimage,0,0,500,500)
  x = 0
  y = 0

//death system

  if (lives === 0) {
    deathscreen()
  }

  function deathscreen() {
    //document.getElementById("overlay").style.display = "block";
    alert("you died!");
    
    
  }

  function off() {
    document.getElementById("overlay").style.display = "none";
  }

  if (keyIsDown(87) || keyIsDown(38)) {
    facing = 0
  }
  // down
  else if (keyIsDown(83) || keyIsDown(40)) {
    facing = 180
  }
  // left 
  else if (keyIsDown(65) || keyIsDown(37)) {
    facing = -90
  }
  // right
  else if (keyIsDown(68) || keyIsDown(39)) {
    facing = 90
  }
  if (invistimer > 0) {
    invistimer--;
  }
  if (invistimer == 0) {
    invis = false;
  }

  if (((keyIsDown(87) || keyIsDown(38)) && (keyIsDown(83) || keyIsDown(40))) || ((keyIsDown(65) || keyIsDown(37)) && (keyIsDown(68) || keyIsDown(39)))) {
    facing = 0
  }

  if (invis == false || frameCount % 4 >= 1) {
    if (facing == 0) {
      image(playerup, pos[0], pos[1])
    }
    if (facing == 90) {
      image(playerright, pos[0], pos[1])
    }

    if (facing == 180) {
      image(playerdown, pos[0], pos[1])
    }
    if (facing == -90) {
      image(playerleft, pos[0], pos[1])
    }
  }
  


  // up
  if ((keyIsDown(87) || keyIsDown(38)) && pos[1] > 0) {
    pos[1] -= speeding
  }
  // just testing something
  // down. 
  else if ((keyIsDown(83) || keyIsDown(40)) && pos[1] < 475) {
    pos[1] += speeding
  }
  // left
  else if ((keyIsDown(65) || keyIsDown(37)) && pos[0] > 0) {
    pos[0] -= speeding
  }
  // right
  else if ((keyIsDown(68) || keyIsDown(39)) && pos[0] < 475) {
    pos[0] += speeding
  }
  
  pos[0] += xspd
  pos[1] += yspd
  if (xspd >= 1) {
    xspd--;
  }
  if (yspd >= 1) {
    yspd--;
  }
  if (xspd <= -1) {
    xspd++;
  }
  if (yspd <= -1) {
    yspd++;
  }

  mobspos.forEach((i, index) => {
    if (i[0] == 'zombie') {
      if (i[1] <= 0) {
        i[4] = [1, 0]
      }
      if (i[1] >= 475) {
        i[4] = [-1, 0]
      }
      if (i[2] <= 0) {
        i[4] = [0, 1]
      }
      if (i[2] >= 475) {
        i[4] = [0, -1]
      }
      if (i[4][0] == 0 && i[4][1] == 1) {

        i[3] = 'zombiedown'
      }
      if (i[4][0] == 0 && i[4][1] == -1) {
        i[3] = 'zombieup'
      }
      if (i[4][0] == 1 && i[4][1] == 0) {
        i[3] = 'zombieright'
      }
      if (i[4][0] == -1 && i[4][1] == 0) {
        i[3] = 'zombieleft'
      }

      i[1] += i[4][0]*i[7]
      i[2] += i[4][1]*i[7]

      if (coldetect(i[1], i[2], i[8], i[8], pos[0], pos[1], 25,25) && invis == false) {
        health--;
        invis = true

        invistimer = 50
        updateHealth()
        if (facing == 0) {
          yspd = 7
        } else if (facing == 90) {
          xspd = -7
        } else if (facing == -90) {
          xspd = 7
        } else if (facing == 180) {
          yspd = -7
        }

      }

      if (health == 0) {
        pos[0] = spawnpos[0]
        pos[1] = spawnpos[1]
        health = 5
        document.getElementById('innerhealth').innerHTML = 5
        document.getElementById('innerhealth').style.width = "80px"
        document.getElementById('innerhealth').style.background = "green"

      }
      if (i[6] > 0) {
        i[6]--;
      }

      if (coldetect(i[1], i[2], i[8], i[8], slash[2] - 10, slash[3] - 10, 45, 45) && (slash[0] !== 0) && (slash[4] !== 0)) {
        if (slash[4] == enemyframes) {

          i[5] -= damage;
          i[6] = 2

          if (i[5] <= 0) {
            mobspos.splice(index, 1)
            coins += 3
          }

        }


        if (facing == 0) {
          i[2] -= 3

        } else if (facing == 90) {
          i[1] += 3
        } else if (facing == -90) {
          i[1] -= 3
        } else if (facing == 180) {
          i[2] += 3
        }
      }
      if (frameCount % 360 === 0 &&mobspos.length===1 && i[8]===50) {
        mobspos.push(['zombie',i[1]+chance.pickone([5,10,15,-5,-10,-15]), i[2]+chance.pickone([5,10,15,-5,-10,-15]),'zombiedown',[0,1],3,0,1,25])
      }
      if (frameCount % 60 === 0) {
        i[4] = chance.pickone([[0, 1], [0, -1], [1, 0], [-1, 0]])

        if (i[4][0] == 0 && i[4][1] == 1) {

          i[3] = 'zombiedown'
        }
        if (i[4][0] == 0 && i[4][1] == -1) {
          i[3] = 'zombieup'
        }
        if (i[4][0] == 1 && i[4][1] == 0) {
          i[3] = 'zombieright'
        }
        if (i[4][0] == -1 && i[4][1] == 0) {
          i[3] = 'zombieleft'
        }
      }
      if (i[3] == 'zombieup') {

        image(zombieup, i[1], i[2],i[8],i[8])

        // translate(-i[1],-i[2])
        if (i[6] > 0) {
          image(zombiedamup, i[1], i[2],i[8],i[8])
        }
      }
      else if (i[3] == 'zombieleft') {
        // translate(width/2,height/2)
        // rotate(i[8])
        image(zombieleft, i[1], i[2],i[8],i[8])
        // rotate(-i[8])
        // translate(-width/2,-height/2)
        if (i[6] > 0) {
          image(zombiedamleft, i[1], i[2],i[8],i[8])
        }
      }
      else if (i[3] == 'zombieright') {
        // translate(width/2,height/2)
        // rotate(i[8])
        image(zombieright, i[1], i[2],i[8],i[8])
        // rotate(-i[8])
        // translate(-width/2,-height/2)
        if (i[6] > 0) {
          image(zombiedamright, i[1], i[2],i[8],i[8])
        }
      }
      else if (i[3] == 'zombiedown') {
        // translate(width/2,height/2)
        // rotate(i[8])
        image(zombiedown, i[1], i[2],i[8],i[8])
        // rotate(-i[8])
        // translate(-width/2,-height/2)
        if (i[6] > 0) {
          image(zombiedamdown, i[1], i[2],i[8],i[8])
        }
      }

    } else if (i[0] == "skeleton") {
      if (i[1] <= 0) {
        i[4][0] = [1, 0]
      }
      if (i[1] >= 475) {
        i[4][0] = [-1, 0]
      }
      if (i[2] <= 0) {
        i[4][0] = [0, 1]
      }
      if (i[2] >= 475) {
        i[4][0] = [0, -1]
      }

      if (i[4][0][0] == 0 && i[4][0][1] == 1) {

        i[3] = 'skeletondown'
      }
      if (i[4][0][0] == 0 && i[4][0][1] == -1) {
        i[3] = 'skeletonup'
      }
      if (i[4][0][0] == 1 && i[4][0][1] == 0) {
        i[3] = 'skeletonright'
      }
      if (i[4][0][0] == -1 && i[4][0][1] == 0) {
        i[3] = 'skeletonleft'
      }

      i[1] += i[4][0][0]
      i[2] += i[4][0][1]

      // if (coldetect(i[1], i[2], 25, 25, pos[0], pos[1], 25, 25) && invis == false) {
      //   health--;
      //   invis = true

      //   invistimer = 50
      //   updateHealth()
      //   if (facing == 0) {
      //     yspd = 7
      //   } else if (facing == 90) {
      //     xspd = -7
      //   } else if (facing == -90) {
      //     xspd = 7
      //   } else if (facing == 180) {
      //     yspd = -7
      //   }

      // }

      if (health == 0) {
        pos[0] = spawnpos[0]
        pos[1] = spawnpos[1]
        health = 5
        document.getElementById('innerhealth').innerHTML = 5
        document.getElementById('innerhealth').style.width = "80px"
        document.getElementById('innerhealth').style.background = "green"

      }
      if (coldetect(i[1], i[2], 25, 25, slash[2] - 10, slash[3] - 10, 45, 45) && (slash[0] !== 0) && (slash[4] !== 0)) {
        if (slash[4] == enemyframes) {

          i[5] -= damage;
          i[6] = 5
          if (i[5] <= 0) {
            mobspos.splice(index, 1)
            coins += 4
          }

        }


        if (facing == 0) {
          i[2] -= 3

        } else if (facing == 90) {
          i[1] += 3
        } else if (facing == -90) {
          i[1] -= 3
        } else if (facing == 180) {
          i[2] += 3
        }
      }

      //Arrows

      if (frameCount % 90 === 0) {
        if (i[3] === "skeletondown" || i[3] === "skeletonup") {
          if (i[1] <= pos[0]) {
            mobspos.push(['arrow', i[1], i[2], 'arrowright', [1, 0]])
          } else {
            mobspos.push(['arrow', i[1], i[2], 'arrowleft', [-1, 0]])
          }
          i[4][0] = chance.pickone([[1, 0], [-1, 0]])
        } else {
          if (i[2] >= pos[1]) {
            mobspos.push(['arrow', i[1], i[2], 'arrowup', [0, -1]])
          } else {
            mobspos.push(['arrow', i[1], i[2], 'arrowdown', [0, 1]])

          }
          i[4][0] = chance.pickone([[0, 1], [0, -1]])
        }
      }

      //Skeleton

      if (i[4][0][0] == 0 && i[4][0][1] == 1) {

        i[3] = 'skeletondown'
        if (i[2] > pos[1] + 5) {
          i[4][0] = [0, -1]
        } else if (i[2] < pos[1] - 5) {
          i[4][0] = [0, 1]
        } else {

        }
      }
      if (i[4][0][0] == 0 && i[4][0][1] == -1) {
        i[3] = 'skeletonup'
        if (i[2] > pos[1] + 5) {
          i[4][0] = [0, -1]
        } else if (i[2] < pos[1] - 5) {
          i[4][0] = [0, 1]
        } else {

        }
      }
      if (i[4][0][0] == 1 && i[4][0][1] == 0) {
        i[3] = 'skeletonright'
        if (i[1] > pos[0] + 5) {
          i[4][0] = [-1, 0]
        } else if (i[1] < pos[0] - 5) {
          i[4][0] = [1, 0]
        } else {

        }
      }
      if (i[4][0][0] == -1 && i[4][0][1] == 0) {
        i[3] = 'skeletonleft'

        if (i[1] > pos[0] + 5) {
          i[4][0] = [-1, 0]
        } else if (i[1] < pos[0] - 5) {
          i[4][0] = [1, 0]
        } else {

        }
      }

      if (i[3] == 'skeletonup') {

        image(skeletonup, i[1], i[2])

        // translate(-i[1],-i[2])
      }
      else if (i[3] == 'skeletonleft') {
        // translate(width/2,height/2)
        // rotate(i[8])
        image(skeletonleft, i[1], i[2])
        // rotate(-i[8])
        // translate(-width/2,-height/2)
      }
      else if (i[3] == 'skeletonright') {
        // translate(width/2,height/2)
        // rotate(i[8])
        image(skeletonright, i[1], i[2])
        // rotate(-i[8])
        // translate(-width/2,-height/2)
      }
      else if (i[3] == 'skeletondown') {
        // translate(width/2,height/2)
        // rotate(i[8])
        image(skeletondown, i[1], i[2])
        // rotate(-i[8])
        // translate(-width/2,-height/2)
      }
    }
    else if (i[0] == "arrow") {
      // moving
      // [arrows] [name, posx, posy, sprite, vector]
      if (i[1] <= 0) {
        mobspos.splice(index, 1)
      }
      if (i[1] >= 475) {
        mobspos.splice(index, 1)
      }
      if (i[2] <= 0) {
        mobspos.splice(index, 1)
      }
      if (i[2] >= 475) {
        mobspos.splice(index, 1)
      }
      i[1] += i[4][0]
      i[2] += i[4][1]
      i[1] += i[4][0]
      i[2] += i[4][1]
      if (coldetect(i[1], i[2], 25, 25, pos[0], pos[1], 25, 25) && invis == false) {
        health--;
        invis = true

        invistimer = 50
        updateHealth()
        if (facing == 0) {
          yspd = 7
        } else if (facing == 90) {
          xspd = -7
        } else if (facing == -90) {
          xspd = 7
        } else if (facing == 180) {
          yspd = -7
        }

      }

      if (health == 0) {
        pos[0] = spawnpos[0]
        pos[1] = spawnpos[1]
        health = 5
        document.getElementById('innerhealth').innerHTML = 5
        document.getElementById('innerhealth').style.width = "80px"
        document.getElementById('innerhealth').style.background = "green"

      }
      if (i[3] == 'arrowup') {

        image(arrowup, i[1], i[2])

        // translate(-i[1],-i[2])
      }
      else if (i[3] == 'arrowleft') {
        // translate(width/2,height/2)
        // rotate(i[8])
        image(arrowleft, i[1], i[2])
        // rotate(-i[8])
        // translate(-width/2,-height/2)
      }
      else if (i[3] == 'arrowright') {
        // translate(width/2,height/2)
        // rotate(i[8])
        image(arrowright, i[1], i[2])
        // rotate(-i[8])
        // translate(-width/2,-height/2)
      }
      else if (i[3] == 'arrowdown') {
        // translate(width/2,height/2)
        // rotate(i[8])
        image(arrowdown, i[1], i[2])
        // rotate(-i[8])
        // translate(-width/2,-height/2)
      }
    }


    //Attacking
  })
  if (slash[0] >= 1) {
    slash[0]--;
    if (slash[0] >= 15) {
      if (slash[1] == 'up') {
        image(slashup, pos[0], pos[1] - 25)
      }
      if (slash[1] == 'left') {
        image(slashleft, pos[0] - 25, pos[1])
      }
      if (slash[1] == 'down') {
        image(slashdown, pos[0], pos[1] + 25)
      }
      if (slash[1] == 'right') {
        image(slashright, pos[0] + 25, pos[1])
      }
    }
    if (slash[0] >= 3) {
      if (slash[1] == 'up') {
        image(partup, pos[0], pos[1] - 25)
      }
      if (slash[1] == 'left') {
        image(partleft, pos[0] - 25, pos[1])
      }
      if (slash[1] == 'down') {
        image(partdown, pos[0], pos[1] + 25)
      }
      if (slash[1] == 'right') {
        image(partright, pos[0] + 25, pos[1])
      }
    }
    if (slash[4] > 0) {
      slash[4]--
    }
  }

  //Waves
  if (mobspos.length === 0) {
    if (!waveDone) {
      waveDone = true;
      var nextWaveButton = document.createElement('button');
      nextWaveButton.setAttribute('onclick', 'nextWave()');
      nextWaveButton.innerText = "Next Wave";
      var restartWaveButton = document.createElement('button');
      restartWaveButton.setAttribute('onclick', 'restartWave()');
      restartWaveButton.innerText = "Restart Wave";
      nextWaveButton.setAttribute('class', 'item')
      restartWaveButton.setAttribute('class', 'item')
      var linebreak = document.createElement('br')
      document.getElementById('wavearea').appendChild(nextWaveButton);
      document.getElementById('wavearea').appendChild(linebreak)
      document.getElementById('wavearea').appendChild(restartWaveButton);
    }
  } else {
    waveDone = false;
    document.getElementById('wavearea').innerHTML = ''
  }



  if (frameCount >= 10) {
    // update coins
    document.getElementById('coins').innerHTML = '<img src="assets/coin.png" /> ' + coins
    // update health/stamina
    updateHealth()
    updateStamina()
    // update fireballs
    var fbindex = 0
    fireballs.forEach((fb) => {
      var cooldown = 0

      if (fb[0] == 'up') {
        image(fireballup, fb[1], fb[2])
        fb[2] -= 4
      }
      else if (fb[0] == 'left') {
        image(fireballleft, fb[1], fb[2])
        fb[1] -= 4
      }
      else if (fb[0] == 'right') {
        image(fireballright, fb[1], fb[2])
        fb[1] += 4
      }
      else if (fb[0] == 'down') {
        image(fireballdown, fb[1], fb[2])
        fb[2] += 4
      }
      if (fb[1] <= 0) {
        fireballs.splice(fbindex, 1)
      }
      if (fb[1] >= 500) {
        fireballs.splice(fbindex, 1)
      }
      if (fb[2] <= 0) {
        fireballs.splice(fbindex, 1)
      }
      if (fb[2] >= 500) {
        fireballs.splice(fbindex, 1)
      }
      if (cooldown > 0) {
        cooldown--;
      }
      var sus = 0;
      mobspos.forEach((t) => {
        if ((coldetect(t[1], t[2], t[8], t[8], fb[1], fb[2], 25, 25)) && cooldown === 0) {
          t[5] -= 3
          cooldown = 30
          fireballs.splice(fbindex, 1)
          if (t[5] <= 0) {
            mobspos.splice(sus, 1)
            coins += 3
          }
        }
        sus++
      })
      fbindex++
    })
  }
}
  //Lives system



  //Attacking

function keyPressed() {
  if (keyIsDown(88)) {
    if (facing == 0 && slash[0] == 0) {

      slash = [30, 'up', pos[0], pos[1] - 25, enemyframes]
    }
    if (facing == 90 && slash[0] == 0) {

      slash = [30, 'right', pos[0] + 25, pos[1], enemyframes]
    }
    if (facing == 180 && slash[0] == 0) {
      slash = [30, 'down', pos[0], pos[1] + 25, enemyframes]
    }
    if (facing == -90 && slash[0] == 0) {
      slash = [30, 'left', pos[0] - 25, pos[1], enemyframes]

    }
  }
  if (keyIsDown(90) && stamina >= 4 && fbunlocked) {
    fireball();
  }
}

//Fireball

function fireball() {
  stamina -= 4
  updateStamina();
  if (facing == 0) {
    fireballs.push(['up', pos[0], pos[1]])
  } else if (facing == 90) {
    fireballs.push(['right', pos[0], pos[1]])
  } else if (facing == -90) {
    fireballs.push(['left', pos[0], pos[1]])
  } else if (facing == 180) {
    fireballs.push(['down', pos[0], pos[1]])
  }
}

// Health

function updateHealth() {
  document.getElementById('innerhealth').style.width = 16 * health + "px"
  document.getElementById('innerhealth').innerHTML = health;
  if (health == 5) {
    document.getElementById('innerhealth').style.background = 'green'
  }
  if (health == 4) {
    document.getElementById('innerhealth').style.background = 'yellowgreen'
  }
  if (health == 3) {
    document.getElementById('innerhealth').style.background = 'yellow'
  }
  if (health == 2) {
    document.getElementById('innerhealth').style.background = 'orange'
  }
  if (health == 1) {
    document.getElementById('innerhealth').style.background = 'red'
  }
  if (health == 0) {
    document.getElementById('innerhealth').style.background = 'green'
    lives--;
  }
}


//Stamina

function updateStamina() {
  document.getElementById('innerstamina').style.width = 8 * stamina + "px";
  document.getElementById('innerstamina').innerHTML = stamina;
}

//Shop

var potion = document.getElementById("potion");
var potionprice = 5;
var sword = document.getElementById("sword");
var swordprice = 6;

function sup1() {
  if (coins >= swordprice) {
    coins -= swordprice;
    damage += 0.25;
    swordprice = Math.round(swordprice * 1.5)
    document.getElementById('sword').innerHTML = "<img src='assets/sword.png' />Sword : +1 damage:" + swordprice + " coins"
  }
}
function sup2() {
  if (coins >= potionprice && health < 5) {
    coins -= potionprice;
    health += 1;
    updateHealth()
    document.getElementById('potion').innerHTML = "<img src='assets/hpotion.png' />Potion : +1 health:" + potionprice + " coins"
  }
}
function ufb() {
  if (!fbunlocked && coins >= 20) {
    fbunlocked = true;
    coins -= 20;
  }
}

function nextWave() {
  wave++;
  mobspos = wavesList[wave];
}

function restartWave() {
  mobspos = wavesList[wave];

}

function updateWavesList() {
  wavesList = _.cloneDeep(wavesListCopy);
}