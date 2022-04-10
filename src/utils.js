const margin = 8;
const borderMargin = 10;

const upBorder = (player) => 0 + borderMargin;
const leftBorder = (player) => 0 + borderMargin;
const downBorder = (player) => 700 + margin - player.size;
const rightBorder = (player) => 900 + margin - player.size;

const generateNPCDiv = (id) => {
  jQuery("<div>", {
    id: id,
    class: "npc",
  }).appendTo("#game");
  return $(`.npc#${id}`);
};

const pipe = (op1, op2) => (arg) => op2(op1(arg));

const substractPoints = (player) => player.points - 2 < 0 ? 0 : player.points - 2;

const generatePoints = (player) => $(`#points #${player.id}`).text(`Jugador ${player.id}: ${player.points}`);

const generateWinner = (player) => $('#winner p').text(`Ganador: jugador ${player.id}!`);

const checkWinner = (player) => {
  if (player.points === 10){
    keyPressesSubscription.unsubscribe();
    playersMove.unsubscribe();
    npcDirection.unsubscribe();
    playersCollitionSubscription.unsubscribe();
    coinCollitionSubscription.unsubscribe();
    generateWinner(player);
  }
}

const generateCoin = () => {
  let coin = {
    ...baseCoin,
    top: Math.floor(8 + Math.random() * (700 - baseCoin.size)),
    left: Math.floor(8 + Math.random() * (900 - baseCoin.size)),
  };
  Rx.Observable.of(coin)
    .subscribe(() => {
      jQuery("<div>", {
        id: 'coin',
      }).appendTo("#game");
      coin.div = $(`#coin`);
      coin.div.css({
        width: coin.size + "px",
        height: coin.size + "px",
        top: coin.top,
        left: coin.left,
      });
    })
  return coin;
};

const downDirection = (player) => {
  let positions = player.div.position();
  if (positions.top < downBorder(player)) {
    player.div.css({ top: player.div.position().top + 5 });
  }
};

const rightDirection = (player) => {
  let positions = player.div.position();
  if (positions.left < rightBorder(player)) {
    player.div.css({ left: player.div.position().left + 5 });
  }
};

const upDirection = (player) => {
  let positions = player.div.position();
  if (positions.top > upBorder(player)) {
    player.div.css({ top: player.div.position().top - 5 });
  }
};

const leftDirection = (player) => {
  let positions = player.div.position();
  if (positions.left > leftBorder(player)) {
    player.div.css({ left: player.div.position().left - 5 });
  }
};

const movePlayer1 = (player1) => {
  if (player1.direction === "ArrowDown") {
    downDirection(player1);
  }
  if (player1.direction === "ArrowRight") {
    rightDirection(player1);
  }
  if (player1.direction === "ArrowUp") {
    upDirection(player1);
  }
  if (player1.direction === "ArrowLeft") {
    leftDirection(player1);
  }
};

const movePlayer2 = (player2) => {
  if (player2.direction === "s") {
    downDirection(player2);
  }
  if (player2.direction === "d") {
    rightDirection(player2);
  }
  if (player2.direction === "w") {
    upDirection(player2);
  }
  if (player2.direction === "a") {
    leftDirection(player2);
  }
};

const moveNPC = (npc) => {
  if (npc.direction === "down") {
    downDirection(npc);
  }
  if (npc.direction === "right") {
    rightDirection(npc);
  }
  if (npc.direction === "up") {
    upDirection(npc);
  }
  if (npc.direction === "left") {
    leftDirection(npc);
  }
};

const checkCollision = (player, gameObject) => {
  let playerPosY = player.div.position().top;
  let playerPosX = player.div.position().left;
  const condition = (element) => {
    let gameObjectPosX = element.div.position().left;
    let gameObjectPosY = element.div.position().top;
    let directions = {
      right: ["d", "ArrowRight"],
      left: ["a", "ArrowLeft"],
      up: ["w", "ArrowUp"],
      down: ["s", "ArrowDown"],
    };
    if (
      //right collision
      playerPosX <= gameObjectPosX &&
      playerPosX + player.size >= gameObjectPosX &&
      distance(playerPosX, playerPosY, gameObjectPosX, gameObjectPosY) <
        player.size * Math.sqrt(2) &&
      directions.right.includes(player.direction)
    ) {
      return true;
    }
    if (
      //left collision
      playerPosX >= gameObjectPosX &&
      playerPosX <= gameObjectPosX + gameObject.size &&
      distance(playerPosX, playerPosY, gameObjectPosX, gameObjectPosY) <
        player.size * Math.sqrt(2) &&
      directions.left.includes(player.direction)
    ) {
      return true;
    }
    if (
      //up collision
      playerPosY >= gameObjectPosY &&
      playerPosY <= gameObjectPosY + gameObject.size &&
      distance(playerPosX, playerPosY, gameObjectPosX, gameObjectPosY) <
        player.size * Math.sqrt(2) &&
      directions.up.includes(player.direction)
    ) {
      return true;
    }
    if (
      //down collision
      playerPosY <= gameObjectPosY &&
      playerPosY + player.size >= gameObjectPosY &&
      distance(playerPosX, playerPosY, gameObjectPosX, gameObjectPosY) <
        player.size * Math.sqrt(2) &&
      directions.down.includes(player.direction)
    ) {
      return true;
    }
    return false;
  };
  return condition(gameObject);
};

const handleCollision = (player, hasACollision) => {
  if (hasACollision){
    player.div.css(player.initPosition);
    player.points = substractPoints(player);
    generatePoints(player);
  };
};

const distance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

const checkNPCCollision = (player1, player2, NPCs) => {
  let player1Died = false;
  let player2Died = false;
  for (let i = 0; i < NPCs.length; i++) {
    player1Died = checkCollision(player1, NPCs[i]);
    player2Died = checkCollision(player2, NPCs[i]);
    handleCollision(player1, player1Died);
    handleCollision(player2, player2Died);
  }
};

const checkCoinCollision = (player1, player2, coin) => {
  if (checkCollision(player1, coin)) {
    coin.div.remove();
    coin = generateCoin();
    player1.points += 1;
    pipe(generatePoints(player1),checkWinner(player1) );
   
  }
  if (checkCollision(player2, coin)) {
    coin.div.remove();
    coin = generateCoin();
    player2.points += 1;
    pipe(generatePoints(player2),checkWinner(player2) );
  }
  return coin;
};
