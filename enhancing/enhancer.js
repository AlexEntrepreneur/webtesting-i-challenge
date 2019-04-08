module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement += 1;
  }
  return { ...item };
}

function fail(item) {
  const { enhancement, durability } = item;

  if (enhancement < 15) {
    durability -= 5;
  }
  else if (enhancement >= 15) {
    durability -= 10;
  }
  else if (enhancement > 16) {
    --enhancement;
  }

  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}
