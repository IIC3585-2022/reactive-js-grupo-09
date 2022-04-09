// playable characters
let player1 = {
  id: 1,
  size: 50,
  div: $("#square1"),
  direction: "ArrowDown",
  player: true,
  points: 0,
};
player1.initPosition = {
  top: 8,
  left: 8,
}

let player2 = {
  id: 2,
  size: 50,
  div: $("#square2"),
  direction: "w",
  player: true,
  points: 0,
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
Rx.Observable.of(player1)
  .subscribe(() => {
    player1.div.css({
      top: player1.initPosition.top,
      left: player1.initPosition.left,
      width: player1.size + "px",
      height: player1.size + "px",
    });
    generatePoints(player1);
  });

Rx.Observable.of(player2)
  .subscribe(() => {
    player2.div.css({
      top: player2.initPosition.top,
      left: player2.initPosition.left,
      width: player2.size + "px",
      height: player2.size + "px",
    });
    generatePoints(player2);
  });

// set NPCs
Rx.Observable.from(NPCs)
  .map(npc => {
    npc.div = generateNPCDiv(npc.id);
    return npc
  })
  .subscribe((npc) => {
    console.log(npc)
    npc.div.css({
      width: npc.size + "px",
      height: npc.size + "px",
      position: "absolute",
      margin: 0,
      backgroundColor: npc.color,
    });
  });

// set initial Coin
let coin = generateCoin();
