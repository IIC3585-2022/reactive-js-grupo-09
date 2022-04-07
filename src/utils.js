const margin = 8;
const borderMargin = 10;

const upBorder = (player) => 0 + borderMargin;
const leftBorder = (player) => 0 + borderMargin;
const downBorder = (player) => 700 + margin - player.size;
const rightBorder = (player) => 900 + margin - player.size;

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

const checkCollision = (player, NPCs) => {
  let pos_y = player.div.position().top;
  let pos_x = player.div.position().left;
  if (NPCs) {
    const condition = (element) => {
      if (
        //right collision
        pos_x < element[0] &&
        pos_x + player.size >= element[0] &&
        distance(pos_x, pos_y, element[0], element[1]) <
          player.size * Math.sqrt(2) &&
        player.direction === ("ArrowRight" || "d")
      ) {
        console.log("right collision");
        return true;
      } else if (
        //left collision
        pos_x > element[0] &&
        pos_x <= element[0] + 50 &&
        distance(pos_x, pos_y, element[0], element[1]) <
          player.size * Math.sqrt(2) &&
        player.direction === ("ArrowLeft" || "a")
      ) {
        console.log("left collision");
        return true;
      } else if (
        //up collision
        pos_y > element[1] &&
        pos_y <= element[1] + 50 &&
        distance(pos_x, pos_y, element[0], element[1]) <
          player.size * Math.sqrt(2) &&
        player.direction === ("ArrowUp" || "w")
      ) {
        console.log("up collision");
        return true;
      } else if (
        //down collision
        pos_y < element[1] &&
        pos_y + player.size >= element[1] &&
        distance(pos_x, pos_y, element[0], element[1]) <
          player.size * Math.sqrt(2) &&
        player.direction === ("ArrowDown" || "s")
      ) {
        console.log("down collision");
        return true;
      }
    };
    let result = NPCs.map((element) =>
      condition([element.div.position().left, element.div.position().top])
    ).includes(true);
    console.log(result);
    /* if (result) {
      console.log("hay colisión");

      //handleCollision(player);
    } */
  }
};

const handleCollision = (player) => {
  //desaparecer player
};

const getPositions = (character) => {
  pos_x = character.div.position().left;
  pos_y = character.div.position().top;
  return [pos_x, pos_y];
};

const distance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};
