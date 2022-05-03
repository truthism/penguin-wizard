let wave = 0;
let waveDone = false;
let timer = 0;
let splits = []
let currentrun = []
let pb = [];
let fbtier = 1; 
let cooldown = 0;



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
    ['skeleton', 50, 50, 'skeletondown', [[0, 1], []], 4, 0,90,25]
  ],
  [
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['skeleton', 50, 50, 'skeletondown', [[0, 1], []], 4, 0,90,25]
  ],
  [['zombie', 0, 0, 'zombiedown', [0, 1], 25, 0,2,50]],
  [['witch', 50, 50, 'witchdown', [[0, 1], []], 7, 0,25,0]],
  [
    ['skeleton', 30, 50, 'skeletonleft', [[-1,0], []], 4, 0,90,25],
    ['skeleton', 400, 400, 'skeletonup', [[0, -1], []], 4, 0,90,25],
    ['skeleton', 10, 50, 'skeletondown', [[0, 1], []], 4, 0,90,25]
  ],
  [
    ['witch', 100, 50, 'witchdown', [[0, 1], []], 7, 0,25,0], ['skeleton', 25, 25, 'skeletonleft', [[-1,0], []], 4, 0,90,25],
    ['skeleton', 50, 50, 'skeletondown', [[0, 1], []], 4, 0,90,25]
  ], [
    ['witch', 50, 50, 'witchdown', [[0, 1], []], 7, 0,25,0],
    ['witch', 32,32, 'witchdown', [[0, 1], []], 7, 0,25,0],
   ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25]],
  [
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,1,25]
  ], 
  [
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,2,25],
    ['zombie', 50, 50, 'zombiedown', [0, 1], 3, 0,2,25]
  ], [
    
      ['skeleton', 50, 50, 'skeletondown', [[0, 1], []], 45, 0, 60,50]
    
  ], [
     ['witch', 50, 50, 'witchdown', [[0, 1], []], 7, 0,25,0],
    ['witch', 32,32, 'witchdown', [[0, 1], []], 7, 0,25,0],
     ['witch', 0, 0, 'witchdown', [[0, 1], []], 7, 0,25,0],
    ['witch', 7,7, 'witchdown', [[0, 1], []], 7, 0,25,0]
  ],
  [
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 0, 0, 'zombiedown', [0, 1], 3, 0,1,25],
    ['zombie', 50, 0, 'zombiedown', [0, 1], 3, 0,1,25]
  ],
  [
    ['skeleton', 30, 50, 'skeletonleft', [[-1,0], []], 4, 0,90,25],
    ['skeleton', 400, 400, 'skeletonup', [[0, -1], []], 4, 0,90,25],
    ['skeleton', 10, 50, 'skeletondown', [[0, 1], []], 4, 0,90,25],
    ['skeleton', 200, 50, 'skeletonleft', [[-1,0], []], 4, 0,90,25],
    ['skeleton', 0, 400, 'skeletonup', [[0, -1], []], 4, 0,90,25],
    ['skeleton', 150, 50, 'skeletondown', [[0, 1], []], 4, 0,90,25]
  ],
  [
   ['witch', 50, 50, 'witchdown', [[0, 1], []], 100, 0,50,0] 
  ]
  
];
let wavesListCopy = _.cloneDeep(wavesList);
 
//Preload images
var hatEnabled = false;
var hatSize = 25;
var fbunlocked = false;
var skinup;
var skinleft;
var skinright;
var skindown;
var hatup;
var hatleft;
var hatright;
var hatdown;
function preload() {
  blackup = loadImage("penguinskins/blackup.png")
  blackleft = loadImage("penguinskins/blackleft.png")
  blackdown = loadImage("penguinskins/blackdown.png")
  blackright = loadImage("penguinskins/blackright.png")
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
  boss1up = loadImage('assets/bossup.png')
  boss1down = loadImage('assets/bossdown.png')
  boss1left = loadImage('assets/bossleft.png')
  boss1right = loadImage('assets/bossright.png')
  skeletondamup = loadImage('assets/skeletondamageup.png')
  skeletondamleft = loadImage('assets/skeletondamageleft.png')
  skeletondamdown = loadImage('assets/skeletondamagedown.png')
  skeletondamright = loadImage('assets/skeletondamageright.png')
  witchup = loadImage('assets/witchup.png')
  witchleft = loadImage('assets/witchleft.png')
  witchright = loadImage('assets/witchright.png')
  witchdown = loadImage('assets/witchdown.png')
  witchdamup = loadImage('assets/witchdamageup.png')
  witchdamleft = loadImage('assets/witchdamageleft.png')
  witchdamright = loadImage('assets/witchdamageright.png')
  witchdamdown = loadImage('assets/witchdamagedown.png')
  blackhole = loadImage('assets/blackhole.png')
  blackholebr = loadImage('assets/blackholewarning.png')
  biup = loadImage('penguinskins/biup.png')
  bileft = loadImage('penguinskins/bileft.png')
  biright = loadImage('penguinskins/biright.png')
  bidown = loadImage('penguinskins/bidown.png')
  redup = loadImage('penguinskins/redup.png')
  redleft = loadImage('penguinskins/redleft.png')
  redright = loadImage('penguinskins/redright.png')
  reddown = loadImage('penguinskins/reddown.png')
  yellowup = loadImage('penguinskins/yellowup.png')
  yellowleft = loadImage('penguinskins/yellowleft.png')
  yellowright = loadImage('penguinskins/yellowright.png')
  yellowdown = loadImage('penguinskins/yellowdown.png')
  dblueup = loadImage('penguinskins/dblueup.png')
  dblueleft = loadImage('penguinskins/dblueleft.png')
  dblueright = loadImage('penguinskins/dblueright.png')
  dbluedown = loadImage('penguinskins/dbluedown.png')
  greenup = loadImage('penguinskins/greenup.png')
  greenleft = loadImage('penguinskins/greenleft.png')
  greenright = loadImage('penguinskins/greenright.png')
  greendown = loadImage('penguinskins/greendown.png')
  lblueup = loadImage('penguinskins/lblueup.png')
  lblueleft = loadImage('penguinskins/lblueleft.png')
  lblueright = loadImage('penguinskins/lblueright.png')
  lbluedown = loadImage('penguinskins/lbluedown.png')
  lesbianup = loadImage('penguinskins/lesbianup.png')
  lesbianleft = loadImage('penguinskins/lesbianleft.png')
  lesbianright = loadImage('penguinskins/lesbianright.png')
  lesbiandown = loadImage('penguinskins/lesbiandown.png')
  pinkup = loadImage('penguinskins/pinkup.png')
  pinkleft = loadImage('penguinskins/pinkleft.png')
  pinkright = loadImage('penguinskins/pinkright.png')
  pinkdown = loadImage('penguinskins/pinkdown.png')
  orangeup = loadImage('penguinskins/orangeup.png')
  orangeleft = loadImage('penguinskins/orangeleft.png')
  orangeright = loadImage('penguinskins/orangeright.png')
  orangedown = loadImage('penguinskins/orangedown.png')
  purpleup = loadImage('penguinskins/purpleup.png')
  purpleleft = loadImage('penguinskins/purpleleft.png')
  purpleright = loadImage('penguinskins/purpleright.png')
  purpledown = loadImage('penguinskins/purpledown.png')
  panup = loadImage('penguinskins/panup.png')
  panleft = loadImage('penguinskins/panleft.png')
  panright = loadImage('penguinskins/panright.png')
  pandown = loadImage('penguinskins/pandown.png')
  omniup = loadImage('penguinskins/omniup.png')
  omnileft = loadImage('penguinskins/omnileft.png')
  omniright = loadImage('penguinskins/omniright.png')
  omnidown = loadImage('penguinskins/omnidown.png')
  prideup = loadImage('penguinskins/prideup.png')
  prideleft = loadImage('penguinskins/prideleft.png')
  prideright = loadImage('penguinskins/prideright.png')
  pridedown = loadImage('penguinskins/pridedown.png')
  nbup = loadImage('penguinskins/nbup.png')
  nbleft = loadImage('penguinskins/nbleft.png')
  nbright = loadImage('penguinskins/nbright.png')
  nbdown = loadImage('penguinskins/nbdown.png')
  transup = loadImage('penguinskins/transup.png')
  transleft = loadImage('penguinskins/transleft.png')
  transright = loadImage('penguinskins/transright.png')
  transdown = loadImage('penguinskins/transdown.png')
  sbossdown = loadImage('assets/sbossdown.png')
  sbossright = loadImage('assets/sbossright.png')
  sbossup = loadImage('assets/sbossup.png')
  sbossleft = loadImage('assets/sbossleft.png')
  wbossdown = loadImage('assets/wbossdown.png')
  wbossright = loadImage('assets/wbossright.png')
  wbossup = loadImage('assets/wbossup.png')
  wbossleft = loadImage('assets/wbossleft.png')
  skinup = blackup;
  skinleft = blackleft;
  skinright = blackright;
  skindown = blackdown;
  hatup = blackup;
  hatleft = blackleft;
  hatright = blackright;
  hatdown = blackdown;
}


var lives = 5;
var invis = false;
var invistimer = 0;

var coins = 0
var damage = 1;

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
let timerStarted = false
let bgdata;
let stopwatch;
function draw() {
  if (!timerStarted) {
    
    timerStarted = true;
    
    stopwatch = window.setInterval( ()=> {
      timer+=0.01
      
      document.getElementById('timer').innerHTML=timer.toFixed(2)
    },10)
  }
  updateWavesList();
  background('lightblue')
  image(backgroundimage,0,0,500,500)
  x = 0
  y = 0
  
//death system

  if (lives <= 0) {
    deathscreen()
  }

  function deathscreen() {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("ui").style.display="none"    
    document.getElementById("stopwatch").style.display="none"
    document.getElementById("skins").style.display="none"
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
    if (lives >= 0) {
      if (facing == 0) {
        image(skinup, pos[0], pos[1])
      }
      if (facing == 90) {
        image(skinright, pos[0], pos[1])
      }

      if (facing == 180) {
        image(skindown, pos[0], pos[1])
      }
      if (facing == -90) {
        image(skinleft, pos[0], pos[1])
      }
    }
  }
  
  
  if (pos[1] < 0) { pos[1] = 0 }
  if (pos[1] > 475) { pos[1] = 475 }
  if (pos[0] < 0) { pos[0] = 0 }
  if (pos[0] > 475) { pos[0] = 475 }

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
            if (i[8] == 25) {
              coins += 3
            } else {
              coins += 20
            }
          }

        }


        if (slash[1] === 'up') {
          i[2] -= 3

        } else if (slash[1] === 'right') {
          i[1] += 3
        } else if (slash[1] === 'left') {
          i[1] -= 3
        } else if (slash[1] === 'down') {
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

        if (i[8]==25) {
          image(zombieup, i[1], i[2],i[8],i[8])
        } else if (i[8]==50) {
          image(boss1up,i[1],i[2],i[8],i[8])
        }       

        // translate(-i[1],-i[2])
        if (i[6] > 0) {
          image(zombiedamup, i[1], i[2],i[8],i[8])
        }
      }
      else if (i[3] == 'zombieleft') {
        // translate(width/2,height/2)
        // rotate(i[8])
        if (i[8]==25) {
          image(zombieleft, i[1], i[2],i[8],i[8])
        } else if (i[8]==50) {
          image(boss1left,i[1],i[2],i[8],i[8])
        }       
        // rotate(-i[8])
        // translate(-width/2,-height/2)
        if (i[6] > 0) {
          image(zombiedamleft, i[1], i[2],i[8],i[8])
        }
      }
      else if (i[3] == 'zombieright') {
        // translate(width/2,height/2)
        // rotate(i[8])
        if (i[8]==25) {
          image(zombieright, i[1], i[2],i[8],i[8])
        } else if (i[8]==50) {
          image(boss1right,i[1],i[2],i[8],i[8])
        }       
        // rotate(-i[8])
        // translate(-width/2,-height/2)
        if (i[6] > 0) {
          image(zombiedamright, i[1], i[2],i[8],i[8])
        }
      }
      else if (i[3] == 'zombiedown') {
        // translate(width/2,height/2)
        // rotate(i[8])
        if (i[8]==25) {
          image(zombiedown, i[1], i[2],i[8],i[8])
        } else if (i[8]==50) {
          image(boss1down,i[1],i[2],i[8],i[8])
        }

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
      if (i[6] > 0) {
        i[6]--;
      }
      if (coldetect(i[1], i[2], i[8], i[8], slash[2] - 10, slash[3] - 10, 45, 45) && (slash[0] !== 0) && (slash[4] !== 0)) {
        if (slash[4] == enemyframes) {
          i[5] -= damage;
          i[6] = 2
          if (i[5] <= 0) {
            mobspos.splice(index, 1)
            if (i[8] === 25) {
              coins += 4
            } else {
              coins += 35
            }
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

      if (frameCount % i[7] === 0) {
        if (i[3] === "skeletondown" || i[3] === "skeletonup") {
          if (i[1] <= pos[0]) {
            mobspos.push(['arrow', i[1], i[2], 'arrowright', [1, 0]])
            if (i[8] === 50) {
              mobspos.push(['arrow', i[1], i[2]+25, 'arrowright', [1, 0]])
            }
          } else {
            mobspos.push(['arrow', i[1], i[2], 'arrowleft', [-1, 0]])
            if (i[8] === 50) {
              mobspos.push(['arrow', i[1], i[2]+25, 'arrowleft', [-1, 0]])
            }
          }
          i[4][0] = chance.pickone([[1, 0], [-1, 0]])
        } else {
          if (i[2] >= pos[1]) {
            mobspos.push(['arrow', i[1], i[2], 'arrowup', [0, -1]])
            if (i[8] === 50) {
              mobspos.push(['arrow', i[1]+25, i[2], 'arrowup', [0, -1]])
            }
          } else {
            mobspos.push(['arrow', i[1], i[2], 'arrowdown', [0, 1]])
            if (i[8] === 50) {
              mobspos.push(['arrow', i[1]+25, i[2], 'arrowdown', [0, 1]])
            }

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
        if (i[8] == 25) {
          image(skeletonup, i[1], i[2],i[8],i[8])
        } else {
          image(sbossup, i[1], i[2],i[8],i[8])

        }
        
        if (i[6]>0) {
          image(skeletondamup,i[1],i[2],i[8],i[8])
        }
        // translate(-i[1],-i[2])
      }
      else if (i[3] == 'skeletonleft') {
        // translate(width/2,height/2)
        // rotate(i[8])
        if (i[8] == 25) {        
          image(skeletonleft, i[1], i[2],i[8],i[8])
        } else {
          image(sbossleft, i[1], i[2],i[8],i[8])          
        }
        
        if (i[6]>0) {
          image(skeletondamleft,i[1],i[2],i[8],i[8])
        }
        // rotate(-i[8])
        // translate(-width/2,-height/2)
      }
      else if (i[3] == 'skeletonright') {
        // translate(width/2,height/2)
        // rotate(i[8])
        if (i[8] == 25) {                
          image(skeletonright, i[1], i[2],i[8],i[8])
        } else {
          image(sbossright, i[1], i[2],i[8],i[8])
        }
        
        if (i[6]>0) {
          image(skeletondamright,i[1],i[2],i[8],i[8])
        }
        // rotate(-i[8])
        // translate(-width/2,-height/2)
      }
      else if (i[3] == 'skeletondown') {
        // translate(width/2,height/2)
        // rotate(i[8])
        if (i[8] == 25) { 
          image(skeletondown, i[1], i[2],i[8],i[8])
        } else {
          image(sbossdown, i[1], i[2],i[8],i[8])

        }
        
        if (i[6]>0) {
          image(skeletondamdown,i[1],i[2],i[8],i[8])
        }
        // rotate(-i[8])
        // translate(-width/2,-height/2)
      }
    }
    else if (i[0] == "witch") {
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

        i[3] = 'witchdown'
      }
      if (i[4][0][0] == 0 && i[4][0][1] == -1) {
        i[3] = 'witchup'
      }
      if (i[4][0][0] == 1 && i[4][0][1] == 0) {
        i[3] = 'witchright'
      }
      if (i[4][0][0] == -1 && i[4][0][1] == 0) {
        i[3] = 'witchleft'
      }

      i[1] += i[4][0][0]
      i[2] += i[4][0][1]

      if (coldetect(i[1], i[2], i[7],i[7], pos[0], pos[1], 25, 25) && invis == false) {
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
      if (coldetect(i[1], i[2], i[7],i[7], slash[2] - 10, slash[3] - 10, 45, 45) && (slash[0] !== 0) && (slash[4] !== 0)) {
        if (slash[4] == enemyframes) {
          i[5] -= damage;
          i[6] = 2
          if (i[5] <= 0) {
            mobspos.splice(index, 1)
            coins += 6
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
        if (i[7] === 25) {
          var bhs1 = [["blackhole",i[1]+25,i[2],120],["blackhole",i[1]-25,i[2],120],["blackhole",i[1],i[2]+25,120],["blackhole",i[1],i[2]-25,120]]
          var bhs2;
          if (i[3] === 'witchup') {
            bhs2 = [["blackhole",i[1],i[2]-30,120],["blackhole",i[1],i[2]-60,120],["blackhole",i[1],i[2]-90,120],["blackhole",i[1],i[2]-120,120]]
          } else if (i[3] === "witchdown") {
            bhs2 = [["blackhole",i[1],i[2]+30,120],["blackhole",i[1],i[2]+60,120],["blackhole",i[1],i[2]+90,120],["blackhole",i[1],i[2]+120,120]]
          } else if (i[3] === "witchleft") {
            bhs2 = [["blackhole",i[1]-30,i[2],120],["blackhole",i[1]-60,i[2],120],["blackhole",i[1]-90,i[2],120],["blackhole",i[1]-120,i[2],120]]
          } else if (i[3] === "witchright") {
            bhs2 = [["blackhole",i[1]+30,i[2],120],["blackhole",i[1]+60,i[2],120],["blackhole",i[1]+90,i[2],120],["blackhole",i[1]+120,i[2],120]]
          }
          bhadd = chance.pickone([bhs1,bhs2])
          bhadd.forEach((bhadde) => {
            mobspos.push(bhadde)
          })
          i[4][0] = chance.pickone([[0,1],[0,-1],[1,0],[-1,0]])
        } else {
          var bhs1 = [["blackhole",i[1]+25,i[2],120],["blackhole",i[1]-25,i[2],120],["blackhole",i[1],i[2]+25,120],["blackhole",i[1],i[2]-25,120],["blackhole",i[1]+50,i[2],120],["blackhole",i[1]-50,i[2],120],["blackhole",i[1],i[2]+50,120],["blackhole",i[1],i[2]-50,120],
["blackhole",i[1]+75,i[2],120],["blackhole",i[1]-75,i[2],120],["blackhole",i[1],i[2]+75,120],["blackhole",i[1],i[2]-75,120]]
          var bhs2;
          if (i[3] === 'witchup') {
            bhs2 = [["blackhole",i[1],i[2]-30,120],["blackhole",i[1],i[2]-60,120],["blackhole",i[1],i[2]-90,120],["blackhole",i[1],i[2]-120,120],["blackhole",i[1],i[2]-150,120],["blackhole",i[1],i[2]-180,120],["blackhole",i[1],i[2]-210,120],["blackhole",i[1],i[2]-240,120]]
            
          } else if (i[3] === "witchdown") {
            bhs2 = [["blackhole",i[1],i[2]+30,120],["blackhole",i[1],i[2]+60,120],["blackhole",i[1],i[2]+90,120],["blackhole",i[1],i[2]+120,120],["blackhole",i[1],i[2]+150,120],["blackhole",i[1],i[2]+180,120],["blackhole",i[1],i[2]+210,120],["blackhole",i[1],i[2]+240,120]]
          } else if (i[3] === "witchleft") {
            bhs2 = [["blackhole",i[1]-30,i[2],120],["blackhole",i[1]-60,i[2],120],["blackhole",i[1]-90,i[2],120],["blackhole",i[1]-120,i[2],120],["blackhole",i[1]-150,i[2],120],["blackhole",i[1]-180,i[2],120],["blackhole",i[1]-210,i[2],120],["blackhole",i[1]-240,i[2],120]]
          } else if (i[3] === "witchright") {
            bhs2 = [["blackhole",i[1]+30,i[2],120],["blackhole",i[1]+60,i[2],120],["blackhole",i[1]+90,i[2],120],["blackhole",i[1]+120,i[2],120],["blackhole",i[1]+150,i[2],120],["blackhole",i[1]+180,i[2],120],["blackhole",i[1]+210,i[2],120],["blackhole",i[1]+240,i[2],120]]
          }
          
          var bhs3 = [
            ['witch', i[1]-50,i[2], 'witchdown', [[0, 1], []], 7, 0,25],
            ['witch', i[1],i[2], 'witchdown', [[0, 1], []], 7, 0,25],
            ['witch', i[1]+50,i[2], 'witchdown', [[0, 1], []], 7, 0,25],
            
          ]
          if (mobspos.length <= 15) {
            bhadd = chance.pickone([bhs1,bhs2,bhs3])
          } else {
            bhadd = chance.pickone([bhs1,bhs2])
          }
          bhadd.forEach((bhadde) => {
            mobspos.push(bhadde)
          })
          i[4][0] = chance.pickone([[0,1],[0,-1],[1,0],[-1,0]])
        }
      }
      
      //Skeleton

      if (i[4][0][0] == 0 && i[4][0][1] == 1) {

        i[3] = 'witchdown'
        if (i[2] > pos[1] + 5) {
          i[4][0] = [0, -1]
        } else if (i[2] < pos[1] - 5) {
          i[4][0] = [0, 1]
        } else {

        }
      }
      if (i[4][0][0] == 0 && i[4][0][1] == -1) {
        i[3] = 'witchup'
        if (i[2] > pos[1] + 5) {
          i[4][0] = [0, -1]
        } else if (i[2] < pos[1] - 5) {
          i[4][0] = [0, 1]
        } else {

        }
      }
      if (i[4][0][0] == 1 && i[4][0][1] == 0) {
        i[3] = 'witchright'
        if (i[1] > pos[0] + 5) {
          i[4][0] = [-1, 0]
        } else if (i[1] < pos[0] - 5) {
          i[4][0] = [1, 0]
        } else {

        }
      }
      if (i[4][0][0] == -1 && i[4][0][1] == 0) {
        i[3] = 'witchleft'

        if (i[1] > pos[0] + 5) {
          i[4][0] = [-1, 0]
        } else if (i[1] < pos[0] - 5) {
          i[4][0] = [1, 0]
        } else {

        }
      }

      if (i[3] == 'witchup') {

        image(witchup, i[1], i[2],i[7],i[7])
        if (i[6] > 0) {
          image(witchdamup, i[1], i[2],i[7],i[7])
        }
        
        // translate(-i[1],-i[2])
      }
      else if (i[3] == 'witchleft') {
        // translate(width/2,height/2)
        // rotate(i[7])
        image(witchleft, i[1], i[2],i[7],i[7])
        if (i[6] > 0) {
          image(witchdamleft, i[1], i[2],i[7],i[7])
        }
        // rotate(-i[7])
        // translate(-width/2,-height/2)
      }
      else if (i[3] == 'witchright') {
        // translate(width/2,height/2)
        // rotate(i[7])
        image(witchright, i[1], i[2],i[7],i[7])
        if (i[6] > 0) {
          image(witchdamright, i[1], i[2],i[7],i[7])
        }
        // rotate(-i[7])
        // translate(-width/2,-height/2)
      }
      else if (i[3] == 'witchdown') {
        // translate(width/2,height/2)
        // rotate(i[7])
        image(witchdown, i[1], i[2],i[7],i[7])
        if (i[6] > 0) {
          image(witchdamdown, i[1], i[2],i[7],i[7])
        }
        // rotate(-i[7])
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
    else if (i[0] == "blackhole") {
      // moving
      // [arrows] [name, posx, posy, timer]
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
      if (i[3] > 0) {
        i[3]--
      } else {
        mobspos.splice(index,1)
      }
      if (coldetect(i[1], i[2], 25, 25, pos[0], pos[1], 25, 25) && invis == false && i[3] < 60) {
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
      if (i[3] > 60) {
        image(blackholebr,i[1],i[2])
      } else {
        image(blackhole,i[1],i[2])
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
    if (!waveDone && wave <= 16) {
      waveDone = true;
      
      var nextWaveButton = document.createElement('button');
      nextWaveButton.setAttribute('onclick', 'nextWave()');
      nextWaveButton.innerText = "Next Wave";
      
      nextWaveButton.setAttribute('class', 'item')
      
      var linebreak = document.createElement('br')
      document.getElementById('wavearea').appendChild(nextWaveButton);
      document.getElementById('wavearea').appendChild(linebreak)
      
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
    if (cooldown > 0) {
      cooldown-=1;
      console.log("cooldown:"+cooldown)
    }
    fireballs.forEach((fb) => {
      

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
      
      var sus = 0;
      mobspos.forEach((t) => {
        var size;
        if (t[8] === 50) {
          size = 50;
        } else {
          size = 25
        }
        if ((coldetect(t[1], t[2], size, size, fb[1], fb[2], 25, 25)) && cooldown === 0) {
          t[5] -= 3
          
          if (t[0] !== "arrow") {
            cooldown=40
            fb[3]--;
            if (fb[3] === -1) {
              fireballs.splice(fbindex, 1)
            }
          }
          if (t[5] <= 0) {
            mobspos.splice(sus, 1)
            if (t[0] === "zombie") {
              if(t[8] === 25) {
                coins+=3;
              } else {
                coins+=20
              }
            } else if (t[0] === "skeleton") {
              if (t[8] === 25) {
                coins+=4
              } else {
                coins+=35
              }
            } else if (t[0] === "witch") {
              if (t[7] === 25) {
                coins+=6
              } else {
                coins+=100
              }
            }
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
    fireballs.push(['up', pos[0], pos[1], fbtier-1])
  } else if (facing == 90) {
    fireballs.push(['right', pos[0], pos[1],fbtier-1])
  } else if (facing == -90) {
    fireballs.push(['left', pos[0], pos[1],fbtier-1])
  } else if (facing == 180) {
    fireballs.push(['down', pos[0], pos[1], fbtier-1])
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
    document.getElementById('lives').innerHTML = "Lives: "+lives
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
    health += 3;
    if (health > 5) { health = 5 }
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
  if (wave <= 15) {
    var split = document.createElement('p')
    
    
    
    split.innerHTML = "Wave "+(wave+1)+": "+timer.toFixed(2) + " ";
    currentrun.push(parseInt(timer.toFixed(2)*100)/100)
    
    document.getElementById('stopwatch').appendChild(split);
    wave++;
    mobspos = wavesList[wave];
  }
}



function updateWavesList() {
  wavesList = _.cloneDeep(wavesListCopy);
}



function changeskin(up,left,right,down) {
  skinup = up
  skinleft = left
  skinright = right
  skindown = down
}

function changehat(up,left,right,down,size) {
  hatup = up
  hatleft = left
  hatright = right
  hatdown = down
  hatSize = size
}