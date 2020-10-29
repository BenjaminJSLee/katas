const blocksAway = function(directions) {
  let dist = {
    east: 0,
    north: 0
  };
  let curDir = "";
  if (directions.length > 0) {
    curDir = directions[0] === "right" ? "north" : "east";
  }
  for (let i = 0; i + 1 < directions.length; i += 2) {
    if (directions[i] === "right") {
      switch (curDir) {
      case "north":
        dist.east += directions[i + 1];
        curDir = "east";
        break;
      case "south":
        dist.east -= directions[i + 1];
        curDir = "west";
        break;
      case "east":
        dist.north -= directions[i + 1];
        curDir = "south";
        break;
      case "west":
        dist.north += directions[i + 1];
        curDir = "north";
        break;
      }
    } else if (directions[i] === "left") {
      switch (curDir) {
      case "north":
        dist.east -= directions[i + 1];
        curDir = "west";
        break;
      case "south":
        dist.east += directions[i + 1];
        curDir = "east";
        break;
      case "east":
        dist.north += directions[i + 1];
        curDir = "north";
        break;
      case "west":
        dist.north -= directions[i + 1];
        curDir = "south";
        break;
      }
    }
  }
  return dist;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));