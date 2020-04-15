const fs = require("fs");
const parse = require("csv-parse");

let csvFile = "cities.csv";

class Population {
  constructor(
    rank,
    name,
    population,
    pop_density,
    country,
    latitude,
    longitude
  ) {
    this.rank = rank;
    this.name = name;
    this.population = population;
    this.pop_density = pop_density;
    this.country = country;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

const processData = (err, data) => {
  if (err) {
    console.log(`'An Error was encountered: ' ${err}`);
    return;
  }

  data.shift();
  const popList = data.map((row) => new Population(...row));

  calculatePopulation(popList);
};

fs.createReadStream(csvFile).pipe(parse({ delimiter: "," }, processData));

const calculatePopulation = (popList) => {
  const popSum = popList.reduce(
    (acc, val) => (acc += parseInt(val.population)),
    0
  );
  console.log("AAAAAAAAAAAAAA", popSum);
  return popSum;
};

module.exports = {
  totalPopulation(onFinished) {},
};
