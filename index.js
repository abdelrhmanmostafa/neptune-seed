const generateUsers = require("./create-users-with-posts").generateUsers;
const userRelations = require("./users-relations").userRelations;

const run = async () => {
    await generateUsers();
    await userRelations();
};

run();
