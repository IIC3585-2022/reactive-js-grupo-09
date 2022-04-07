// playable characters
let player1 = {
  size: 50,
  div: $('#square1'),
  direction: 'ArrowDown',
  player: true,
}

let player2 = {
  size: 50,
  div: $('#square2'),
  direction: 's',
  player: true,
}

// NPC
const basetNPC = {
  id: 0,
  size: 50,
  direction: '',
  color: '',
  player: false,
}

let NPCs = [
  {...basetNPC, id: 1, color: 'red'},
  {...basetNPC, id: 2, color: 'blue'},
  {...basetNPC, id: 3, color: 'green'},
]

// Give player attributes
player1.div.css({
  width: player1.size+'px',
  height: player1.size+'px',
});

player2.div.css({
  width: player2.size+'px',
  height: player2.size+'px',
});

// set NPCs
for (let i = 0; i < NPCs.length; i++){
  jQuery('<div>', {
    id: NPCs[i].id,
    class: 'npc',
  }).appendTo('#game')
  NPCs[i].div = $(`.npc#${NPCs[i].id}`);
  NPCs[i].div
    .css({
      width: NPCs[i].size+'px',
      height: NPCs[i].size+'px',
      position: 'absolute',
      margin: 0,
      backgroundColor: NPCs[i].color,
    });
  
}

//coins
const baseCoin = {
  id : 0,
  size : 50, 
  color : 'gold'
};


//no se muestran 
let coins = [
  {...baseCoin, id : 1},
  {...baseCoin, id : 2},
  
]


for(let i = 0; i < coins.length; i++){
  jQuery('<div>', {
    id: coins[i].id,
    class : 'coin',
  }).appendTo('#game')
  coins[i].div = $(`.coin#${coins[i].id}`);
  coins[i].div.css({
    with: coins[i].size+'px',
    height: coins[i].size+'px',
    position: 'absolute',
    margin: 0,
    backgroundColor: coins[i].color,
  })
}


