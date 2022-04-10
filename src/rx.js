// observables
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

// Movements with intervals
let playersMove = Rx.Observable.interval(35).subscribe(() => {
  movePlayer1(player1);
  movePlayer2(player2);
  for (let i = 0; i < NPCs.length; i++) {
    moveNPC(NPCs[i]);
  }
});

let npcDirection = Rx.Observable.interval(8 * 100).subscribe(() => {
  const moves = ["up", "right", "left", "down"];
  for (let i = 0; i < NPCs.length; i++) {
    let move = moves[Math.floor(Math.random() * moves.length)];
    NPCs[i].direction = move;
  }
});

// players collisions with intervals
let playersCollitionSubscription = Rx.Observable.interval(2 * 100).subscribe(
  () => {
    checkNPCCollision(player1, player2, NPCs);
  }
);

let coinCollitionSubscription = Rx.Observable.interval(100).subscribe(() => {
  coin = checkCoinCollision(player1, player2, coin);
});
