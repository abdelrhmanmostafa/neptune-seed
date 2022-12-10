const fs = require("fs");
const axios = require("axios").default;

const makeRequest = async (query, func) => {
    try {
        const res = await axios.post(
            "https://qnaurhlzw4bqhf6fsptlxmcm6u0xrslz.lambda-url.us-east-1.on.aws/",
            {
                query,
            }
        );
        console.log("🚀 ~ file: index.js:9 ~ makeRequest ~ func", func);
        console.log("🚀 ~ file: index.js:22 ~ makeRequest ~ res", res.data);
    } catch (error) {
        console.log(
            "🚀 ~ file: index.js:25 ~ makeRequest ~ error.status",
            error.response.status
        );
        console.log(
            "🚀 ~ file: index.js:25 ~ makeRequest ~ error.status",
            error.response.statusText
        );
        console.log(
            "🚀 ~ file: index.js:25 ~ makeRequest ~ error.status",
            error.response.data
        );
        console.log("🚀 ~ file: index.js:9 ~ makeRequest ~ func", func);
        fs.appendFile(`failed-queries.txt`, `${query}\n\n`, function (err) {
            if (err) throw err;
            console.log("Saved!");
        });
    }
    console.log(
        "//////////////////////////////////////////////////////////////"
    );
};

module.exports = { makeRequest };
