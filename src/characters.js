// playable characters
let player1 = {
  size: 50,
  div: $("#square1"),
  direction: "ArrowDown",
  player: true,
};
player1.initPosition = {
  top: 8,
  left: 8,
}

let player2 = {
  size: 50,
  div: $("#square2"),
  direction: "w",
  player: true,
};
player2.initPosition = {
  top: 700 + 8 - player2.size,
  left: 900 + 8 - player2.size,
}

// NPC
const basetNPC = {
  id: 0,
  size: 50,
  direction: "",
  color: "",
  player: false,
};

let NPCs = [
  { ...basetNPC, id: 1, color: "red" },
  { ...basetNPC, id: 2, color: "blue" },
  { ...basetNPC, id: 3, color: "green" },
];

// coins
const baseCoin = {
  id: 'coin',
  size: 25,
  color: "yellow",
};

// Give player attributes
player1.div.css({
  top: player1.initPosition.top,
  left: player1.initPosition.left,
  width: player1.size + "px",
  height: player1.size + "px",
});

player2.div.css({
  top: player2.initPosition.top,
  left: player2.initPosition.left,
  width: player2.size + "px",
  height: player2.size + "px",
});

// set NPCs
for (let i = 0; i < NPCs.length; i++) {
  jQuery("<div>", {
    id: NPCs[i].id,
    class: "npc",
  }).appendTo("#game");
  NPCs[i].div = $(`.npc#${NPCs[i].id}`);
  NPCs[i].div.css({
    width: NPCs[i].size + "px",
    height: NPCs[i].size + "px",
    position: "absolute",
    margin: 0,
    backgroundColor: NPCs[i].color,
  });
}

// set initial Coin
let coin = generateCoin();
