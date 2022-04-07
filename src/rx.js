// observables
let playersMove = Rx.Observable.interval(35).subscribe(() => {
  movePlayer1(player1);
  movePlayer2(player2);
  for (let i = 0; i < NPCs.length; i++) {
    moveNPC(NPCs[i]);
  }
});

// Dejamos quietos a los NPCs por el momento
/* let npcDirection = Rx.Observable.interval(8*100)
  .subscribe(() => {
    const moves = ['up', 'right', 'left', 'down']
    for (let i = 0; i < NPCs.length; i++){
      let move = moves[Math.floor(Math.random()*moves.length)];
      NPCs[i].direction = move;
    }
  }) */

let observable = Rx.Observable.fromEvent($(document), "mousemove");
let keyDownObservable = Rx.Observable.fromEvent($(document), "keydown");
let keyUpsObservable = Rx.Observable.fromEvent(document, "keyup");

let keyPresses = keyDownObservable
  .merge(keyUpsObservable)
  .groupBy((e) => e.keyCode)
  .distinctUntilChanged(null, (e) => e.type + (e.key || e.which))
  .mergeAll();

// subscriptions
let keyDownSubscription = keyPresses.subscribe((e) => {
  const player1Key = "Arrow";
  const player2Key = ["w", "a", "s", "d"];
  if (player1Key === e.key.slice(0, 5)) {
    player1.direction = e.key;
  }
  if (player2Key.includes(e.key)) {
    player2.direction = e.key;
  }
});

//characters positions
let charactersPositions = Rx.Observable.interval(500).subscribe(() => {
  collisionObserver([player1, player2, NPCs]);
});

//colission observer
const collisionObserver = (characters) => {
  let players = characters.slice(0, 2);
  let NPCs = characters[2];
  players.map((player) => checkCollision(player, NPCs));
  //filter the collitions
  //print the collitions
  //handle conllitions
};
