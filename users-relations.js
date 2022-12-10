const names = require("./generate-users").names;
const makeRequest = require("./request").makeRequest;

let queries = "g",
    completeUsersRelationsQuery = 0,
    randoms = [],
    random = -1;

const userRelations = async () => {
    for (const name of names) {
        console.log("completeUsersRelationsQuery", completeUsersRelationsQuery);
        for (let m = 0; m < 25; m++) {
            queries = `g.V().has('name', '${name}')`;
            for (let nameI = 0; nameI < 20; nameI++) {
                while (randoms.includes(random) || random === -1) {
                    random = Math.floor(Math.random() * (100000 - 0 + 1));
                }
                random = random > 99999 ? 99999 : random;
                random = random < 0 ? 0 : random;
                queries += `.addE('friend').to(V().has('name', '${names[random]}'))`;
                randoms.push(random);
            }
            await makeRequest(queries, "userRelations");
            random = -1;
        }
        // completeUsersRelationsQuery += `${queries}\n\n\n\n\n`;
        randoms = [];
        completeUsersRelationsQuery += 1;
    }
};

module.exports = { userRelations };

////   55
