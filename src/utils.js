const margin = 8;
const borderMargin = 10;

const upBorder = (player) => 0 + borderMargin;
const leftBorder = (player) => 0 + borderMargin;
const downBorder = (player) => 700 + margin - player.size;
const rightBorder = (player) => 900 + margin - player.size;

const downDirection = (player) => {
  let positions = player.div.position();
  if (positions.top < downBorder(player)){
    player.div.css({top: player.div.position().top + 5});
  };
};

const rightDirection = (player) => {
  let positions = player.div.position();
  if (positions.left < rightBorder(player)){
    player.div.css({left: player.div.position().left + 5});
  };
};

const upDirection = (player) => {
  let positions = player.div.position();
  if (positions.top > upBorder(player)){
    player.div.css({top: player.div.position().top - 5});
  };
};

const leftDirection = (player) => {
  let positions = player.div.position();
  if (positions.left > leftBorder(player)){
    player.div.css({left: player.div.position().left - 5});
  };
};

const movePlayer1 = (player1) => {
  if (player1.direction === 'ArrowDown'){
    downDirection(player1);
  };
  if (player1.direction === 'ArrowRight'){
    rightDirection(player1);
  };
  if (player1.direction === 'ArrowUp'){
    upDirection(player1);
  };
  if (player1.direction === 'ArrowLeft'){
    leftDirection(player1);
  };
};

const movePlayer2 = (player2) => {
  if (player2.direction === 's'){
    downDirection(player2);
  };
  if (player2.direction === 'd'){
    rightDirection(player2);
  };
  if (player2.direction === 'w'){
    upDirection(player2);
  };
  if (player2.direction === 'a'){
    leftDirection(player2);
  };
};

const moveNPC = (npc) => {
  if (npc.direction === 'down'){
    downDirection(npc);
  };
  if (npc.direction === 'right'){
    rightDirection(npc);
  };
  if (npc.direction === 'up'){
    upDirection(npc);
  };
  if (npc.direction === 'left'){
    leftDirection(npc);
  };
}