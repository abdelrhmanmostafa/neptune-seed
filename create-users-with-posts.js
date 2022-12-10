const names = require("./generate-users").names;
const makeRequest = require("./request").makeRequest;
const fs = require("fs");

let start,
    queries = "g",
    completeUsersQuery = "";

const generateUsers = async () => {
    for (let files = 0; files < 4000; files++) {
        console.log("🚀 ~ file: index.js:62 ~ generateUsers ~ files", files);
        start = files * 25;
        for (let index = 0; index < 25; index++) {
            queries += `.addV('person').property('name', '${
                names[start + index]
            }').as('user${start + index}')`;
            for (let postI = 0; postI < 10; postI++) {
                queries += `.addV('post').property('postId', '${
                    names[start + index]
                } post${postI}').addE('created').from('user${start + index}')`;
            }
        }
        await makeRequest(queries, "generateUsers");
        completeUsersQuery += `${queries}\n`;
        queries = "g";
    }

    fs.appendFile(
        `users-with-posts.txt`,
        `${completeUsersQuery}`,
        function (err) {
            if (err) throw err;
            console.log("Saved!");
        }
    );
};

module.exports = { generateUsers };
