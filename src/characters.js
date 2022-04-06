// playable characters
let player1 = {
  size: 50,
  div: $('#square1'),
  direction: 'ArrowDown',
}

let player2 = {
  size: 50,
  div: $('#square2'),
  direction: 's',
}

// NPC
const basetNPC = {
  id: 0,
  size: 50,
  direction: '',
  color: ''
}

let NPCs = [
  {...basetNPC, id: 1, color: 'red'},
  {...basetNPC, id: 2, color: 'blue'},
  {...basetNPC, id: 3, color: 'yellow'},
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