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
  const userList = data.map((row) => new Population(...row));

  analyseUsers(userList);
  //console.log(userList);
};

fs.createReadStream(csvFile).pipe(parse({ delimiter: "," }, processData));

const analyseUsers = (userList) => {
  const popSum = userList.reduce(
    (acc, val) => (acc += parseInt(val.population)),
    0
  );

  //const averageAge = ageSum / userList.length;
  console.log("AAAAAAAAAAAAAA", popSum);
  return popSum;
};

module.exports = {
  totalPopulation(onFinished) {},
};
