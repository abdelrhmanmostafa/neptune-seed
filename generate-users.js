const { faker } = require("@faker-js/faker");
const fs = require("fs");

let namesS = ``,
    names = [];

for (let index = 0; index < 100000; index++) {
    let n = faker.name.fullName().replace(/[^\w\s]/gi, "");
    names.push(n);
    namesS += `${n}\n`;
}

fs.writeFile(`users.txt`, `${namesS}`, function (err) {
    if (err) throw err;
    console.log("Saved!");
});

module.exports = { names };
