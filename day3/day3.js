console.log("test");
const fs = require("fs").promises;
// ​
const parseLines = async () => {
  const data = await fs.readFile("./data.txt", { encoding: "utf-8" });
  return data.split("\n");
};

const day3_part1_solution = async () => {
  const data = await parseLines();

  let gammaRate = "";
  let epsilonRate = "";

  for (let i = 0; i < 12; i++) {
    const commonBits = { 1: 0, 0: 0 };

    for (let bits of data) {
      const bit = bits[i];
      commonBits[bit] += 1;
    }
    gammaRate += commonBits["1"] > commonBits["0"] ? "1" : "0";
    epsilonRate += commonBits["1"] > commonBits["0"] ? "0" : "1";
  }
  // console.log(gammaRate, epsilonRate);

  // console.log(parseInt(gammaRate, 2) * parseInt(epsilonRate, 2));
};

const day3_part2_solution = async () => {
  const data = await parseLines();
  let oxygenRating = data;
  let c02Rating = data;
  let i = 0;

  while (oxygenRating.length > 1) {
    let ones = [];
    let zeros = [];

    for (let row = 0; row < oxygenRating.length; row++) {
      const bit = oxygenRating[row];
      const column = oxygenRating[row][i];
      if (column === "1") {
        ones.push(bit);
      } else {
        zeros.push(bit);
      }
    }
    if (ones.length >= zeros.length) {
      oxygenRating = ones;
    } else {
      oxygenRating = zeros;
    }
    i++;
  }
  let j = 0;

  while (c02Rating.length > 1) {
    console.log("c02", c02Rating);
    let ones = [];
    let zeros = [];

    for (let row = 0; row < c02Rating.length; row++) {
      const bit = c02Rating[row];
      const column = c02Rating[row][j];
      if (column === "1") {
        ones.push(bit);
      } else {
        zeros.push(bit);
      }
    }

    if (ones.length >= zeros.length) {
      c02Rating = zeros;
    } else {
      c02Rating = ones;
    }
    j++;
  }

  console.log(parseInt(oxygenRating[0], 2) * parseInt(c02Rating[0], 2));
};
console.log(day3_part1_solution());
console.log(day3_part2_solution());
